import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const ModelGallery = () => {
  const exampleModels = [
    {
      id: '1',
      name: 'Домик',
      description: 'Простой домик из куба и треугольника',
      preview: (
        <div className="flex flex-col items-center gap-2">
          <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-l-transparent border-r-transparent border-b-red-500" />
          <div className="w-16 h-16 bg-amber-600 rounded-sm" />
        </div>
      ),
    },
    {
      id: '2',
      name: 'Снеговик',
      description: 'Три сферы разного размера',
      preview: (
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-300" />
          <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300" />
          <div className="w-16 h-16 bg-white rounded-full border-2 border-gray-300" />
        </div>
      ),
    },
    {
      id: '3',
      name: 'Башня',
      description: 'Несколько цилиндров друг на друге',
      preview: (
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-8 bg-blue-500 rounded-t-full" />
          <div className="w-14 h-12 bg-blue-400" />
          <div className="w-16 h-12 bg-blue-300" />
        </div>
      ),
    },
    {
      id: '4',
      name: 'Робот',
      description: 'Комбинация кубов и цилиндров',
      preview: (
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 bg-gray-400 rounded-md" />
          <div className="w-12 h-14 bg-gray-500 rounded-md" />
          <div className="flex gap-1">
            <div className="w-4 h-8 bg-gray-400" />
            <div className="w-4 h-8 bg-gray-400" />
          </div>
        </div>
      ),
    },
    {
      id: '5',
      name: 'Ёлочка',
      description: 'Конусы и цилиндр',
      preview: (
        <div className="flex flex-col items-center gap-1">
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-green-600" />
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-green-500" />
          <div className="w-4 h-8 bg-amber-700" />
        </div>
      ),
    },
    {
      id: '6',
      name: 'Светофор',
      description: 'Цилиндр с тремя сферами',
      preview: (
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-24 bg-gray-700 rounded-lg flex flex-col justify-around items-center py-2">
            <div className="w-6 h-6 bg-red-500 rounded-full" />
            <div className="w-6 h-6 bg-yellow-400 rounded-full" />
            <div className="w-6 h-6 bg-green-500 rounded-full" />
          </div>
        </div>
      ),
    },
  ];

  const loadModel = (modelName: string) => {
    toast.success(`Модель "${modelName}" загружена в редактор!`);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Галерея готовых моделей</h2>
        <p className="text-muted-foreground">
          Выберите модель для вдохновения или загрузите её в редактор
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exampleModels.map((model) => (
          <Card
            key={model.id}
            className="border-border/50 bg-card/50 backdrop-blur hover:scale-105 transition-transform animate-scale-in"
          >
            <CardHeader>
              <CardTitle className="text-xl">{model.name}</CardTitle>
              <CardDescription>{model.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-8 flex items-center justify-center min-h-[200px]">
                {model.preview}
              </div>
              <Button
                className="w-full gap-2"
                onClick={() => loadModel(model.name)}
              >
                <Icon name="Download" size={18} />
                Загрузить в редактор
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border-border/50 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Lightbulb" size={24} />
            Совет
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Используйте эти примеры как основу для своих проектов. 
            Загрузите модель в редактор и измените цвета, размеры или добавьте новые элементы!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModelGallery;
