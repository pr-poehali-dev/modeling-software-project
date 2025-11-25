import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface MaterialPanelProps {
  activeMaterial: string;
  setActiveMaterial: (material: any) => void;
}

const MaterialPanel = ({ activeMaterial, setActiveMaterial }: MaterialPanelProps) => {
  const handlePresetClick = (preset: string) => {
    toast.success(`Применён материал: ${preset}`);
  };
  const materials = [
    {
      id: 'metal',
      label: 'METAL',
      icon: 'Sparkles',
      gradient: 'from-gray-400 to-gray-600',
    },
    {
      id: 'natural',
      label: 'NATURAL',
      icon: 'Mountain',
      gradient: 'from-amber-700 to-amber-900',
    },
    {
      id: 'paint',
      label: 'PAINT',
      icon: 'Palette',
      gradient: 'from-blue-500 to-purple-600',
    },
  ];

  return (
    <Card className="bg-muted/20 border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <Icon name="Palette" size={16} />
          MATERIAL
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {materials.map((material) => (
          <Button
            key={material.id}
            variant={activeMaterial === material.id ? 'default' : 'outline'}
            size="sm"
            className={`w-full justify-start gap-2 ${
              activeMaterial === material.id ? 'bg-primary' : ''
            }`}
            onClick={() => setActiveMaterial(material.id)}
          >
            <div className={`w-6 h-6 rounded bg-gradient-to-br ${material.gradient}`} />
            <span className="text-xs font-medium">{material.label}</span>
          </Button>
        ))}

        <div className="pt-3 border-t border-border/50 mt-3">
          <div className="text-xs text-muted-foreground mb-2">Быстрые пресеты</div>
          <div className="grid grid-cols-4 gap-2">
            <button onClick={() => handlePresetClick('Красный металл')} className="w-full aspect-square rounded bg-gradient-to-br from-red-500 to-red-700 hover:scale-110 transition-transform" title="Красный металл" />
            <button onClick={() => handlePresetClick('Синий пластик')} className="w-full aspect-square rounded bg-gradient-to-br from-blue-400 to-blue-600 hover:scale-110 transition-transform" title="Синий пластик" />
            <button onClick={() => handlePresetClick('Зелёная глина')} className="w-full aspect-square rounded bg-gradient-to-br from-green-600 to-green-800 hover:scale-110 transition-transform" title="Зелёная глина" />
            <button onClick={() => handlePresetClick('Золото')} className="w-full aspect-square rounded bg-gradient-to-br from-yellow-400 to-orange-500 hover:scale-110 transition-transform" title="Золото" />
            <button onClick={() => handlePresetClick('Фиолетовое стекло')} className="w-full aspect-square rounded bg-gradient-to-br from-purple-500 to-pink-600 hover:scale-110 transition-transform" title="Фиолетовое стекло" />
            <button onClick={() => handlePresetClick('Тёмный камень')} className="w-full aspect-square rounded bg-gradient-to-br from-gray-700 to-gray-900 hover:scale-110 transition-transform" title="Тёмный камень" />
            <button onClick={() => handlePresetClick('Вода')} className="w-full aspect-square rounded bg-gradient-to-br from-cyan-400 to-blue-500 hover:scale-110 transition-transform" title="Вода" />
            <button onClick={() => handlePresetClick('Дерево')} className="w-full aspect-square rounded bg-gradient-to-br from-amber-300 to-amber-600 hover:scale-110 transition-transform" title="Дерево" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaterialPanel;