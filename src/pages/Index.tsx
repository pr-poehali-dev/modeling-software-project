import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Viewport3D from '@/components/Viewport3D';
import ToolPanel from '@/components/ToolPanel';
import ModelLibrary from '@/components/ModelLibrary';
import MaterialPanel from '@/components/MaterialPanel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Tool = 'draw' | 'clay' | 'soft' | 'move' | 'smooth' | 'grab' | 'pinch';
type Material = 'metal' | 'natural' | 'paint';

const Index = () => {
  const [activeTool, setActiveTool] = useState<Tool>('draw');
  const [activeMaterial, setActiveMaterial] = useState<Material>('natural');
  const [brushSize, setBrushSize] = useState(50);
  const [brushStrength, setBrushStrength] = useState(50);

  return (
    <div className="h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <header className="bg-card border-b border-border px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Icon name="Box" size={18} className="text-primary-foreground" />
            </div>
            <h1 className="text-lg font-semibold">Sculptris Alpha 6 - Professional</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-2">
            <Icon name="Upload" size={16} />
            Импорт
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Icon name="Download" size={16} />
            Экспорт
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Icon name="Save" size={16} />
            Сохранить
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-16 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4 gap-2">
          <Tabs defaultValue="sculpt" orientation="vertical" className="w-full">
            <TabsList className="flex flex-col bg-transparent w-full gap-1">
              <TabsTrigger 
                value="sculpt" 
                className="w-12 h-12 data-[state=active]:bg-sidebar-accent"
                title="Скульптинг"
              >
                <Icon name="Paintbrush" size={20} />
              </TabsTrigger>
              <TabsTrigger 
                value="library" 
                className="w-12 h-12 data-[state=active]:bg-sidebar-accent"
                title="Библиотека"
              >
                <Icon name="FolderOpen" size={20} />
              </TabsTrigger>
              <TabsTrigger 
                value="material" 
                className="w-12 h-12 data-[state=active]:bg-sidebar-accent"
                title="Материалы"
              >
                <Icon name="Palette" size={20} />
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="w-12 h-12 data-[state=active]:bg-sidebar-accent"
                title="Настройки"
              >
                <Icon name="Settings" size={20} />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </aside>

        <div className="flex-1 flex">
          <Viewport3D 
            activeTool={activeTool}
            brushSize={brushSize}
            brushStrength={brushStrength}
          />
        </div>

        <aside className="w-72 bg-card border-l border-border overflow-y-auto">
          <Tabs defaultValue="tools" className="w-full">
            <TabsList className="w-full grid grid-cols-2 bg-muted/50">
              <TabsTrigger value="tools">Инструменты</TabsTrigger>
              <TabsTrigger value="properties">Свойства</TabsTrigger>
            </TabsList>

            <TabsContent value="tools" className="p-4 space-y-4">
              <ToolPanel
                activeTool={activeTool}
                setActiveTool={setActiveTool}
                brushSize={brushSize}
                setBrushSize={setBrushSize}
                brushStrength={brushStrength}
                setBrushStrength={setBrushStrength}
              />
              
              <MaterialPanel
                activeMaterial={activeMaterial}
                setActiveMaterial={setActiveMaterial}
              />
            </TabsContent>

            <TabsContent value="properties" className="p-4">
              <ModelLibrary />
            </TabsContent>
          </Tabs>
        </aside>
      </div>

      <footer className="bg-card border-t border-border px-4 py-2 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>Полигонов: 15,842</span>
          <span>Вершин: 7,921</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Инструмент: {activeTool.toUpperCase()}</span>
          <span>Материал: {activeMaterial.toUpperCase()}</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
