import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Examples = () => {
  const tutorials = [
    {
      title: 'Создание домика',
      difficulty: 'Легко',
      time: '5 минут',
      icon: 'Home',
      steps: [
        'Добавьте куб оранжевого цвета размером 70px для стен',
        'Добавьте конус красного цвета размером 60px для крыши',
        'Разместите крышу над стенами',
        'Готово! У вас получился простой домик',
      ],
    },
    {
      title: 'Снеговик',
      difficulty: 'Легко',
      time: '5 минут',
      icon: 'Snowflake',
      steps: [
        'Добавьте большую сферу (100px) внизу',
        'Добавьте среднюю сферу (70px) посередине',
        'Добавьте маленькую сферу (50px) сверху',
        'Используйте белый цвет для всех сфер',
      ],
    },
    {
      title: 'Башня',
      difficulty: 'Средне',
      time: '7 минут',
      icon: 'Building',
      steps: [
        'Добавьте большой цилиндр (90px) в основание',
        'Добавьте средний цилиндр (70px) над ним',
        'Добавьте маленький цилиндр (50px) сверху',
        'Используйте разные оттенки одного цвета для каждого уровня',
      ],
    },
    {
      title: 'Робот',
      difficulty: 'Средне',
      time: '10 минут',
      icon: 'Bot',
      steps: [
        'Создайте квадратную голову из куба (50px)',
        'Добавьте прямоугольное тело из куба (70px)',
        'Создайте руки из двух маленьких цилиндров по бокам',
        'Добавьте ноги из двух кубов внизу',
      ],
    },
    {
      title: 'Ёлочка',
      difficulty: 'Легко',
      time: '5 минут',
      icon: 'Trees',
      steps: [
        'Добавьте конус зелёного цвета (60px) для верхней части',
        'Добавьте ещё один конус зелёного цвета (80px) пониже',
        'Создайте ствол из маленького цилиндра коричневого цвета (40px)',
        'Ёлочка готова!',
      ],
    },
    {
      title: 'Светофор',
      difficulty: 'Средне',
      time: '8 минут',
      icon: 'CircleDot',
      steps: [
        'Создайте вертикальный цилиндр серого цвета (100px)',
        'Добавьте красную сферу (40px) сверху',
        'Добавьте жёлтую сферу (40px) посередине',
        'Добавьте зелёную сферу (40px) снизу',
      ],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легко':
        return 'bg-green-500';
      case 'Средне':
        return 'bg-yellow-500';
      case 'Сложно':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="animate-fade-in max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Примеры моделирования</h2>
        <p className="text-muted-foreground">
          Пошаговые руководства для создания различных моделей
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tutorials.map((tutorial, index) => (
          <Card
            key={index}
            className="border-border/50 bg-card/50 backdrop-blur hover:scale-105 transition-transform animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={tutorial.icon as any} size={28} className="text-primary" />
                </div>
                <div className="flex gap-2">
                  <Badge className={getDifficultyColor(tutorial.difficulty)}>
                    {tutorial.difficulty}
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Icon name="Clock" size={14} />
                    {tutorial.time}
                  </Badge>
                </div>
              </div>
              <CardTitle className="text-xl">{tutorial.title}</CardTitle>
              <CardDescription>Пошаговая инструкция</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {tutorial.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary-foreground">
                        {stepIndex + 1}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border-border/50 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Sparkles" size={24} />
            Создавайте свои модели
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Эти примеры — отличная отправная точка для вашего творчества. 
            Попробуйте создать эти модели, а затем экспериментируйте с цветами, 
            размерами и комбинациями фигур!
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="gap-1">
              <Icon name="Lightbulb" size={14} />
              Совет 1: Начинайте с простых моделей
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Icon name="Palette" size={14} />
              Совет 2: Экспериментируйте с цветами
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Icon name="Zap" size={14} />
              Совет 3: Комбинируйте разные фигуры
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Examples;
