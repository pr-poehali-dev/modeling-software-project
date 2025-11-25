import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const ModelLibrary = () => {
  const models = [
    {
      id: 1,
      name: 'Женская голова',
      category: 'Анатомия',
      polygons: '15.8K',
      image: 'https://cdn.poehali.dev/files/7e9902ef-104a-4caf-86ae-17cfc73c7765.jpeg',
    },
    {
      id: 2,
      name: 'Мужская голова',
      category: 'Анатомия',
      polygons: '18.2K',
      preview: '👨',
    },
    {
      id: 3,
      name: 'Торс человека',
      category: 'Анатомия',
      polygons: '24.5K',
      preview: '🧍',
    },
    {
      id: 4,
      name: 'Рука',
      category: 'Анатомия',
      polygons: '12.1K',
      preview: '✋',
    },
    {
      id: 5,
      name: 'Череп',
      category: 'Анатомия',
      polygons: '8.4K',
      preview: '💀',
    },
    {
      id: 6,
      name: 'Дракон',
      category: 'Существа',
      polygons: '32.7K',
      preview: '🐉',
    },
    {
      id: 7,
      name: 'Кружка',
      category: 'Объекты',
      polygons: '2.1K',
      preview: '☕',
    },
    {
      id: 8,
      name: 'Ваза',
      category: 'Объекты',
      polygons: '5.6K',
      preview: '🏺',
    },
  ];

  const loadModel = (name: string) => {
    toast.success(`Модель "${name}" загружена на холст`, {
      description: 'Вы можете начать редактирование',
      duration: 2000,
    });
  };

  const handleUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.obj,.stl,.fbx,.blend';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        toast.success(`Файл "${file.name}" загружен`, {
          description: 'Модель импортирована',
        });
      }
    };
    input.click();
  };

  const handlePhotoUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        toast.loading('AI генерирует 3D модель...', { duration: 2000 });
        setTimeout(() => {
          toast.success('3D модель создана из фото!', {
            description: 'Модель готова к редактированию',
          });
        }, 2000);
      }
    };
    input.click();
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-2">Библиотека моделей</h3>
        <p className="text-xs text-muted-foreground">
          Готовые 3D модели для старта
        </p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 text-xs" onClick={handleUpload}>
          <Icon name="Upload" size={14} className="mr-1" />
          Загрузить
        </Button>
        <Button variant="outline" size="sm" className="flex-1 text-xs" onClick={handlePhotoUpload}>
          <Icon name="Camera" size={14} className="mr-1" />
          Из фото
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-400px)]">
        <div className="space-y-2">
          {models.map((model) => (
            <Card
              key={model.id}
              className="bg-muted/20 border-border/50 hover:bg-muted/40 transition-colors cursor-pointer"
              onClick={() => loadModel(model.name)}
            >
              <CardContent className="p-3">
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-secondary rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {model.image ? (
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl">{model.preview}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium truncate">{model.name}</h4>
                    <p className="text-xs text-muted-foreground">{model.category}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Icon name="Grid3x3" size={10} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {model.polygons}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <Card className="bg-primary/10 border-primary/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs flex items-center gap-2">
            <Icon name="Sparkles" size={14} />
            AI Генерация
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-xs text-muted-foreground">
            Загрузите фото, и AI создаст 3D модель автоматически
          </p>
          <Button size="sm" className="w-full text-xs gap-2" onClick={handlePhotoUpload}>
            <Icon name="Image" size={14} />
            Загрузить фото
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModelLibrary;