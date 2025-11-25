import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ModelEditor from '@/components/ModelEditor';
import ModelGallery from '@/components/ModelGallery';
import Instructions from '@/components/Instructions';
import Examples from '@/components/Examples';
import Help from '@/components/Help';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Box" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">3D Моделирование</h1>
            </div>
            
            <div className="hidden md:flex gap-2">
              <Button 
                variant={activeTab === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('home')}
                className="gap-2"
              >
                <Icon name="Home" size={18} />
                Главная
              </Button>
              <Button 
                variant={activeTab === 'editor' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('editor')}
                className="gap-2"
              >
                <Icon name="Paintbrush" size={18} />
                Моделирование
              </Button>
              <Button 
                variant={activeTab === 'gallery' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('gallery')}
                className="gap-2"
              >
                <Icon name="Images" size={18} />
                Готовые модели
              </Button>
              <Button 
                variant={activeTab === 'instructions' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('instructions')}
                className="gap-2"
              >
                <Icon name="BookOpen" size={18} />
                Инструкция
              </Button>
              <Button 
                variant={activeTab === 'examples' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('examples')}
                className="gap-2"
              >
                <Icon name="Lightbulb" size={18} />
                Примеры
              </Button>
              <Button 
                variant={activeTab === 'help' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('help')}
                className="gap-2"
              >
                <Icon name="HelpCircle" size={18} />
                Справка
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Создавайте 3D модели легко
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Простой и понятный инструмент для моделирования трёхмерных объектов. 
                Никаких сложных терминов — только творчество!
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <Button 
                  size="lg" 
                  onClick={() => setActiveTab('editor')}
                  className="gap-2 text-lg px-8"
                >
                  <Icon name="Play" size={20} />
                  Начать моделирование
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setActiveTab('examples')}
                  className="gap-2 text-lg px-8"
                >
                  <Icon name="Lightbulb" size={20} />
                  Посмотреть примеры
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-border/50 bg-card/50 backdrop-blur animate-scale-in hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Zap" size={28} className="text-primary" />
                  </div>
                  <CardTitle>Быстрый старт</CardTitle>
                  <CardDescription>
                    Выбирайте готовые фигуры и создавайте модели за минуты
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur animate-scale-in hover:scale-105 transition-transform" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Palette" size={28} className="text-primary" />
                  </div>
                  <CardTitle>Простой интерфейс</CardTitle>
                  <CardDescription>
                    Понятные инструменты без сложных настроек и терминов
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur animate-scale-in hover:scale-105 transition-transform" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Sparkles" size={28} className="text-primary" />
                  </div>
                  <CardTitle>Готовые примеры</CardTitle>
                  <CardDescription>
                    Вдохновляйтесь готовыми моделями и изменяйте их под себя
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">Как начать работу?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Выберите фигуру</h3>
                    <p className="text-sm text-muted-foreground">Куб, сфера, цилиндр или конус</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Измените размер</h3>
                    <p className="text-sm text-muted-foreground">Настройте параметры фигуры</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Выберите цвет</h3>
                    <p className="text-sm text-muted-foreground">Раскрасьте модель как хотите</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">4</span>
                    </div>
                    <h3 className="font-semibold mb-2">Сохраните</h3>
                    <p className="text-sm text-muted-foreground">Ваша модель готова!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'editor' && <ModelEditor />}
        {activeTab === 'gallery' && <ModelGallery />}
        {activeTab === 'instructions' && <Instructions />}
        {activeTab === 'examples' && <Examples />}
        {activeTab === 'help' && <Help />}
      </main>

      <footer className="border-t border-border/40 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              3D Моделирование © 2024
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" onClick={() => setActiveTab('instructions')}>
                Инструкция
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setActiveTab('help')}>
                Справка
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
