import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Instructions = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Инструкция по использованию</h2>
        <p className="text-muted-foreground">
          Пошаговое руководство для создания 3D моделей
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Play" size={24} />
              Быстрый старт
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary-foreground">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Перейдите в раздел "Моделирование"</h3>
                  <p className="text-sm text-muted-foreground">
                    Нажмите на кнопку "Моделирование" в верхнем меню или на главной странице
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary-foreground">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Выберите фигуру</h3>
                  <p className="text-sm text-muted-foreground">
                    В правой панели выберите одну из четырёх базовых фигур: куб, сферу, цилиндр или конус
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary-foreground">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Настройте внешний вид</h3>
                  <p className="text-sm text-muted-foreground">
                    Выберите цвет из палитры и отрегулируйте размер с помощью ползунка
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary-foreground">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Добавьте на холст</h3>
                  <p className="text-sm text-muted-foreground">
                    Нажмите кнопку "Добавить на холст" — фигура появится в центральной области
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary-foreground">5</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Создайте композицию</h3>
                  <p className="text-sm text-muted-foreground">
                    Повторите шаги 2-4 для создания сложных моделей из нескольких фигур
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="HelpCircle" size={24} />
              Часто задаваемые вопросы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Как удалить фигуру с холста?</AccordionTrigger>
                <AccordionContent>
                  Наведите курсор на фигуру — появится кнопка с крестиком в правом верхнем углу. 
                  Нажмите на неё, чтобы удалить фигуру.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Можно ли сохранить свою модель?</AccordionTrigger>
                <AccordionContent>
                  В текущей версии модели сохраняются только в рамках одной сессии работы. 
                  Функция сохранения будет добавлена в следующих обновлениях.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Какие цвета доступны?</AccordionTrigger>
                <AccordionContent>
                  В палитре представлены 6 основных цветов: голубой, фиолетовый, розовый, 
                  оранжевый, зелёный и красный. Эти цвета подобраны для гармоничного сочетания.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Как изменить размер уже добавленной фигуры?</AccordionTrigger>
                <AccordionContent>
                  Сейчас размер можно задать только перед добавлением фигуры на холст. 
                  Если нужно изменить размер, удалите фигуру и добавьте новую с нужными параметрами.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Где найти готовые примеры моделей?</AccordionTrigger>
                <AccordionContent>
                  Перейдите в раздел "Готовые модели" в верхнем меню. 
                  Там вы найдёте галерею с примерами различных композиций для вдохновения.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Lightbulb" size={24} />
              Полезные советы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Icon name="CheckCircle" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Начинайте с простых форм и постепенно усложняйте композицию</span>
              </li>
              <li className="flex gap-2">
                <Icon name="CheckCircle" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Используйте контрастные цвета, чтобы фигуры лучше выделялись</span>
              </li>
              <li className="flex gap-2">
                <Icon name="CheckCircle" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Смотрите на готовые примеры для поиска идей</span>
              </li>
              <li className="flex gap-2">
                <Icon name="CheckCircle" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Экспериментируйте с размерами — так модель станет интереснее</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Instructions;
