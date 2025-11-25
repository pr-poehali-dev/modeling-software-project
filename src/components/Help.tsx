import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Help = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Справочник</h2>
        <p className="text-muted-foreground">
          Описание всех инструментов и возможностей программы
        </p>
      </div>

      <Tabs defaultValue="shapes" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="shapes">Фигуры</TabsTrigger>
          <TabsTrigger value="tools">Инструменты</TabsTrigger>
          <TabsTrigger value="colors">Цвета</TabsTrigger>
          <TabsTrigger value="tips">Советы</TabsTrigger>
        </TabsList>

        <TabsContent value="shapes" className="space-y-4 mt-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Icon name="Box" size={28} className="text-primary" />
              </div>
              <CardTitle>Куб</CardTitle>
              <CardDescription>Базовая трёхмерная фигура с равными сторонами</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Куб — это самая простая фигура для начала. Используйте кубы для создания 
                стен, коробок, зданий и других прямоугольных объектов.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Icon name="Circle" size={28} className="text-primary" />
              </div>
              <CardTitle>Сфера</CardTitle>
              <CardDescription>Идеально круглая фигура</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Сферы отлично подходят для создания круглых объектов: мячи, планеты, 
                головы персонажей, колёса и многое другое.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Icon name="Cylinder" size={28} className="text-primary" />
              </div>
              <CardTitle>Цилиндр</CardTitle>
              <CardDescription>Вытянутая фигура с круглым сечением</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Цилиндры идеальны для создания колонн, труб, стволов деревьев, 
                рук и ног роботов, и других вытянутых объектов.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Icon name="Triangle" size={28} className="text-primary" />
              </div>
              <CardTitle>Конус</CardTitle>
              <CardDescription>Фигура, сужающаяся к вершине</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Конусы используются для создания крыш, ёлок, шапок, воронок и других 
                объектов, которые сужаются к верху.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools" className="space-y-4 mt-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Palette" size={24} />
                Выбор цвета
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Палитра позволяет выбрать цвет для вашей фигуры. Нажмите на любой цвет, 
                чтобы применить его к следующей добавляемой фигуре.
              </p>
              <div className="bg-secondary/30 rounded p-4">
                <p className="text-xs text-muted-foreground">
                  <strong>Совет:</strong> Контрастные цвета делают модель более выразительной
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Maximize" size={24} />
                Настройка размера
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Ползунок размера позволяет изменить размер фигуры от 30 до 120 пикселей. 
                Перемещайте ползунок влево для уменьшения и вправо для увеличения.
              </p>
              <div className="bg-secondary/30 rounded p-4">
                <p className="text-xs text-muted-foreground">
                  <strong>Совет:</strong> Комбинируйте фигуры разного размера для создания интересных композиций
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Trash2" size={24} />
                Удаление фигур
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Чтобы удалить фигуру с холста, наведите на неё курсор мыши. 
                В правом верхнем углу фигуры появится кнопка с крестиком — нажмите на неё.
              </p>
              <div className="bg-secondary/30 rounded p-4">
                <p className="text-xs text-muted-foreground">
                  <strong>Совет:</strong> Не бойтесь экспериментировать — всегда можно удалить неудачную фигуру
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="colors" className="space-y-4 mt-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Палитра цветов</CardTitle>
              <CardDescription>Доступные цвета в программе</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="w-full h-16 bg-[#0EA5E9] rounded-lg" />
                  <p className="text-sm font-medium">Голубой</p>
                  <p className="text-xs text-muted-foreground">Свежий, холодный тон</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-[#8B5CF6] rounded-lg" />
                  <p className="text-sm font-medium">Фиолетовый</p>
                  <p className="text-xs text-muted-foreground">Загадочный, глубокий</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-[#EC4899] rounded-lg" />
                  <p className="text-sm font-medium">Розовый</p>
                  <p className="text-xs text-muted-foreground">Яркий, весёлый</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-[#F59E0B] rounded-lg" />
                  <p className="text-sm font-medium">Оранжевый</p>
                  <p className="text-xs text-muted-foreground">Тёплый, энергичный</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-[#10B981] rounded-lg" />
                  <p className="text-sm font-medium">Зелёный</p>
                  <p className="text-xs text-muted-foreground">Природный, спокойный</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-[#EF4444] rounded-lg" />
                  <p className="text-sm font-medium">Красный</p>
                  <p className="text-xs text-muted-foreground">Активный, яркий</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-4 mt-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Lightbulb" size={24} />
                Полезные советы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3 p-3 bg-secondary/30 rounded-lg">
                <Icon name="Star" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Планируйте композицию</p>
                  <p className="text-sm text-muted-foreground">
                    Перед началом работы представьте, что вы хотите создать. 
                    Это поможет выбрать нужные фигуры и цвета.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-secondary/30 rounded-lg">
                <Icon name="Star" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Используйте контрасты</p>
                  <p className="text-sm text-muted-foreground">
                    Яркие контрастные цвета помогут выделить разные части модели 
                    и сделать её более интересной.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-secondary/30 rounded-lg">
                <Icon name="Star" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Смотрите на примеры</p>
                  <p className="text-sm text-muted-foreground">
                    Раздел "Примеры" содержит пошаговые инструкции для создания 
                    различных моделей — отличная точка старта!
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-secondary/30 rounded-lg">
                <Icon name="Star" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Экспериментируйте</p>
                  <p className="text-sm text-muted-foreground">
                    Не бойтесь пробовать новые комбинации. Творчество — это процесс 
                    проб и ошибок, и это нормально!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Help;
