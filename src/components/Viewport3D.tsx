import { useRef, useState, useEffect } from 'react';

interface Viewport3DProps {
  activeTool: string;
  brushSize: number;
  brushStrength: number;
  loadedModel?: string | null;
}

interface Point {
  x: number;
  y: number;
  z: number;
}

const Viewport3D = ({ activeTool, brushSize, brushStrength, loadedModel }: Viewport3DProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [vertices, setVertices] = useState<Point[]>([]);

  useEffect(() => {
    const sphereVertices: Point[] = [];
    const radius = 150;
    const segments = 32;
    
    for (let lat = 0; lat <= segments; lat++) {
      const theta = (lat * Math.PI) / segments;
      for (let lon = 0; lon <= segments; lon++) {
        const phi = (lon * 2 * Math.PI) / segments;
        sphereVertices.push({
          x: radius * Math.sin(theta) * Math.cos(phi),
          y: radius * Math.cos(theta),
          z: radius * Math.sin(theta) * Math.sin(phi),
        });
      }
    }
    
    setVertices(sphereVertices);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#3d3d3d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const projectedPoints = vertices.map((v) => {
      const cosX = Math.cos(rotation.x);
      const sinX = Math.sin(rotation.x);
      const cosY = Math.cos(rotation.y);
      const sinY = Math.sin(rotation.y);

      const y1 = v.y * cosX - v.z * sinX;
      const z1 = v.y * sinX + v.z * cosX;

      const x2 = v.x * cosY + z1 * sinY;
      const z2 = -v.x * sinY + z1 * cosY;

      const scale = 300 / (300 + z2);
      const x2d = x2 * scale + centerX;
      const y2d = y1 * scale + centerY;

      return { x: x2d, y: y2d, z: z2 };
    });

    projectedPoints.sort((a, b) => a.z - b.z);

    ctx.strokeStyle = '#666';
    ctx.lineWidth = 0.5;
    
    for (let i = 0; i < projectedPoints.length - 1; i += 2) {
      ctx.beginPath();
      ctx.moveTo(projectedPoints[i].x, projectedPoints[i].y);
      ctx.lineTo(projectedPoints[i + 1].x, projectedPoints[i + 1].y);
      ctx.stroke();
    }

    projectedPoints.forEach((p) => {
      const depth = (p.z + 200) / 400;
      const brightness = Math.floor(100 + depth * 100);
      ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = '#fff';
    ctx.font = '12px monospace';
    ctx.fillText(`Вершин: ${vertices.length}`, 10, 20);
    ctx.fillText(`Инструмент: ${activeTool.toUpperCase()}`, 10, 40);
    ctx.fillText(`Размер: ${brushSize}`, 10, 60);
    
    if (loadedModel) {
      ctx.fillStyle = '#4CAF50';
      ctx.font = 'bold 14px monospace';
      ctx.fillText(`✅ Загружено: ${loadedModel}`, centerX - 150, 30);
      
      ctx.strokeStyle = '#4CAF50';
      ctx.lineWidth = 3;
      ctx.strokeRect(centerX - 180, centerY - 180, 360, 360);
      
      ctx.fillStyle = 'rgba(76, 175, 80, 0.1)';
      ctx.fillRect(centerX - 180, centerY - 180, 360, 360);
    }

  }, [vertices, rotation, activeTool, brushSize]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouse.x;
    const deltaY = e.clientY - lastMouse.y;

    setRotation((prev) => ({
      x: prev.x + deltaY * 0.01,
      y: prev.y + deltaX * 0.01,
    }));

    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (activeTool === 'draw' || activeTool === 'clay') {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newVertices = [...vertices];
      const strength = brushStrength / 100;
      
      newVertices.forEach((v, i) => {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        const cosX = Math.cos(rotation.x);
        const sinX = Math.sin(rotation.x);
        const cosY = Math.cos(rotation.y);
        const sinY = Math.sin(rotation.y);

        const y1 = v.y * cosX - v.z * sinX;
        const z1 = v.y * sinX + v.z * cosX;
        const x2 = v.x * cosY + z1 * sinY;
        const z2 = -v.x * sinY + z1 * cosY;

        const scale = 300 / (300 + z2);
        const x2d = x2 * scale + centerX;
        const y2d = y1 * scale + centerY;

        const dist = Math.sqrt((x2d - x) ** 2 + (y2d - y) ** 2);
        
        if (dist < brushSize) {
          const factor = 1 + (1 - dist / brushSize) * strength * 0.3;
          newVertices[i] = {
            x: v.x * factor,
            y: v.y * factor,
            z: v.z * factor,
          };
        }
      });

      setVertices(newVertices);
    }
  };

  return (
    <div className="w-full h-full bg-[#3d3d3d] relative">
      <canvas
        ref={canvasRef}
        width={1200}
        height={800}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleCanvasClick}
      />

      <div className="absolute top-4 right-4 flex gap-2">
        <button 
          className="w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded flex items-center justify-center text-white"
          onClick={() => setRotation(prev => ({ ...prev, y: prev.y - 0.5 }))}
        >
          ◄
        </button>
        <button 
          className="w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded flex items-center justify-center text-white"
          onClick={() => setRotation(prev => ({ ...prev, y: prev.y + 0.5 }))}
        >
          ►
        </button>
        <button 
          className="w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded flex items-center justify-center text-white"
          onClick={() => setRotation({ x: 0, y: 0 })}
        >
          ⟳
        </button>
      </div>

      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded px-3 py-2 text-xs text-white">
        <div>ЛКМ + перетащить → вращение камеры</div>
        <div>Клик → применить {activeTool}</div>
      </div>
    </div>
  );
};

export default Viewport3D;