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
  const [sidebarTab, setSidebarTab] = useState('sculpt');

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.obj,.stl,.fbx';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) alert(`Импортирован файл: ${file.name}`);
    };
    input.click();
  };

  const handleExport = () => {
    alert('Экспорт модели в формате OBJ');
  };

  const handleSave = () => {
    alert('Проект сохранён!');
  };

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
          <Button variant="ghost" size="sm" className="gap-2" onClick={handleImport}>
            <Icon name="Upload" size={16} />
            Импорт
          </Button>
          <Button variant="ghost" size="sm" className="gap-2" onClick={handleExport}>
            <Icon name="Download" size={16} />
            Экспорт
          </Button>
          <Button variant="ghost" size="sm" className="gap-2" onClick={handleSave}>
            <Icon name="Save" size={16} />
            Сохранить
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-16 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4 gap-2">
          <button 
            className={`w-12 h-12 rounded flex items-center justify-center transition-colors ${
              sidebarTab === 'sculpt' ? 'bg-sidebar-accent' : 'hover:bg-sidebar-accent/50'
            }`}
            onClick={() => setSidebarTab('sculpt')}
            title="Скульптинг"
          >
            <Icon name="Paintbrush" size={20} />
          </button>
          <button 
            className={`w-12 h-12 rounded flex items-center justify-center transition-colors ${
              sidebarTab === 'library' ? 'bg-sidebar-accent' : 'hover:bg-sidebar-accent/50'
            }`}
            onClick={() => setSidebarTab('library')}
            title="Библиотека"
          >
            <Icon name="FolderOpen" size={20} />
          </button>
          <button 
            className={`w-12 h-12 rounded flex items-center justify-center transition-colors ${
              sidebarTab === 'material' ? 'bg-sidebar-accent' : 'hover:bg-sidebar-accent/50'
            }`}
            onClick={() => setSidebarTab('material')}
            title="Материалы"
          >
            <Icon name="Palette" size={20} />
          </button>
          <button 
            className={`w-12 h-12 rounded flex items-center justify-center transition-colors ${
              sidebarTab === 'settings' ? 'bg-sidebar-accent' : 'hover:bg-sidebar-accent/50'
            }`}
            onClick={() => setSidebarTab('settings')}
            title="Настройки"
          >
            <Icon name="Settings" size={20} />
          </button>
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