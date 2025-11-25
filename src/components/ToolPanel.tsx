import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface ToolPanelProps {
  activeTool: string;
  setActiveTool: (tool: any) => void;
  brushSize: number;
  setBrushSize: (size: number) => void;
  brushStrength: number;
  setBrushStrength: (strength: number) => void;
}

const ToolPanel = ({
  activeTool,
  setActiveTool,
  brushSize,
  setBrushSize,
  brushStrength,
  setBrushStrength,
}: ToolPanelProps) => {
  const tools = [
    { id: 'draw', label: 'Draw', icon: 'Pencil', desc: 'Рисовать' },
    { id: 'clay', label: 'Clay', icon: 'Circle', desc: 'Лепка глиной' },
    { id: 'soft', label: 'Soft', icon: 'Wind', desc: 'Мягкая кисть' },
    { id: 'move', label: 'Move', icon: 'Move', desc: 'Переместить' },
    { id: 'smooth', label: 'Smooth', icon: 'Waves', desc: 'Сгладить' },
    { id: 'grab', label: 'Grab', icon: 'Hand', desc: 'Захватить' },
    { id: 'pinch', label: 'Pinch', icon: 'Maximize2', desc: 'Сжать' },
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-muted/20 border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Icon name="Paintbrush" size={16} />
            DRAW
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                variant={activeTool === tool.id ? 'default' : 'outline'}
                size="sm"
                className={`flex flex-col h-16 text-xs ${
                  activeTool === tool.id ? 'bg-primary' : ''
                }`}
                onClick={() => setActiveTool(tool.id)}
                title={tool.desc}
              >
                <Icon name={tool.icon as any} size={18} />
                <span className="mt-1">{tool.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/20 border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Настройки кисти</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Размер</Label>
              <span className="text-xs text-muted-foreground">{brushSize}</span>
            </div>
            <Slider
              value={[brushSize]}
              onValueChange={(val) => setBrushSize(val[0])}
              min={10}
              max={100}
              step={5}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Сила</Label>
              <span className="text-xs text-muted-foreground">{brushStrength}</span>
            </div>
            <Slider
              value={[brushStrength]}
              onValueChange={(val) => setBrushStrength(val[0])}
              min={1}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div className="pt-2 border-t border-border/50">
            <Label className="text-xs mb-2 block">Дополнительно</Label>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 text-xs">
                <Icon name="RotateCcw" size={14} className="mr-1" />
                Отменить
              </Button>
              <Button variant="outline" size="sm" className="flex-1 text-xs">
                <Icon name="RotateCw" size={14} className="mr-1" />
                Повтор
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ToolPanel;
