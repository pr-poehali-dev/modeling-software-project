import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

type ShapeType = 'cube' | 'sphere' | 'cylinder' | 'cone';

interface Model {
  id: string;
  shape: ShapeType;
  color: string;
  size: number;
}

const ModelEditor = () => {
  const [selectedShape, setSelectedShape] = useState<ShapeType>('cube');
  const [color, setColor] = useState('#0EA5E9');
  const [size, setSize] = useState([50]);
  const [models, setModels] = useState<Model[]>([]);

  const shapes: { type: ShapeType; icon: string; label: string }[] = [
    { type: 'cube', icon: 'Box', label: 'Куб' },
    { type: 'sphere', icon: 'Circle', label: 'Сфера' },
    { type: 'cylinder', icon: 'Cylinder', label: 'Цилиндр' },
    { type: 'cone', icon: 'Triangle', label: 'Конус' },
  ];

  const colors = [
    { value: '#0EA5E9', label: 'Голубой' },
    { value: '#8B5CF6', label: 'Фиолетовый' },
    { value: '#EC4899', label: 'Розовый' },
    { value: '#F59E0B', label: 'Оранжевый' },
    { value: '#10B981', label: 'Зелёный' },
    { value: '#EF4444', label: 'Красный' },
  ];

  const addModel = () => {
    const newModel: Model = {
      id: Date.now().toString(),
      shape: selectedShape,
      color: color,
      size: size[0],
    };
    setModels([...models, newModel]);
    toast.success('Модель добавлена!');
  };

  const deleteModel = (id: string) => {
    setModels(models.filter(m => m.id !== id));
    toast.success('Модель удалена');
  };

  const renderShape = (shape: ShapeType, color: string, size: number) => {
    const style = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
    };

    switch (shape) {
      case 'cube':
        return <div style={style} className="rounded-lg shadow-lg" />;
      case 'sphere':
        return <div style={style} className="rounded-full shadow-lg" />;
      case 'cylinder':
        return <div style={{ ...style, borderRadius: '50% / 20%' }} className="shadow-lg" />;
      case 'cone':
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
            }}
            className="shadow-lg"
          />
        );
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6 animate-fade-in">
      <div className="lg:col-span-2">
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Palette" size={24} />
              Холст для моделирования
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/30 rounded-lg p-8 min-h-[500px] flex flex-wrap gap-6 items-center justify-center">
              {models.length === 0 ? (
                <div className="text-center text-muted-foreground">
                  <Icon name="Box" size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Выберите фигуру и добавьте её на холст</p>
                </div>
              ) : (
                models.map((model) => (
                  <div
                    key={model.id}
                    className="relative group animate-scale-in"
                  >
                    <div className="flex items-center justify-center p-4">
                      {renderShape(model.shape, model.color, model.size)}
                    </div>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-full w-8 h-8 p-0"
                      onClick={() => deleteModel(model.id)}
                    >
                      <Icon name="X" size={16} />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Shapes" size={24} />
              Выбор фигуры
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {shapes.map((shape) => (
                <Button
                  key={shape.type}
                  variant={selectedShape === shape.type ? 'default' : 'outline'}
                  className="h-24 flex-col gap-2"
                  onClick={() => setSelectedShape(shape.type)}
                >
                  <Icon name={shape.icon as any} size={32} />
                  <span>{shape.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Paintbrush" size={24} />
              Цвет
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {colors.map((c) => (
                <button
                  key={c.value}
                  className={`h-16 rounded-lg transition-all ${
                    color === c.value ? 'ring-4 ring-primary scale-110' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.value }}
                  onClick={() => setColor(c.value)}
                  title={c.label}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Maximize" size={24} />
              Размер
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Размер: {size[0]}px</Label>
              <Slider
                value={size}
                onValueChange={setSize}
                min={30}
                max={120}
                step={5}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Button
          size="lg"
          className="w-full gap-2 text-lg"
          onClick={addModel}
        >
          <Icon name="Plus" size={20} />
          Добавить на холст
        </Button>
      </div>
    </div>
  );
};

export default ModelEditor;
