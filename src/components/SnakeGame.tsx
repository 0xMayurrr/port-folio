import { useState, useEffect, useCallback, useRef } from "react";

const GRID_WIDTH = 14;
const GRID_HEIGHT = 22;
const CELL_SIZE = 16;
const INITIAL_SNAKE = [{ x: 7, y: 11 }];
const INITIAL_FOOD = [
  { x: 3, y: 5 }, { x: 11, y: 3 }, { x: 5, y: 17 },
  { x: 2, y: 12 }, { x: 12, y: 8 }, { x: 8, y: 19 },
  { x: 4, y: 9 }, { x: 7, y: 16 }, { x: 6, y: 2 },
  { x: 10, y: 18 },
];

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const dirRef = useRef(direction);
  dirRef.current = direction;

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection("RIGHT");
    setGameOver(false);
    setRunning(false);
  };

  const startGame = () => {
    resetGame();
    setRunning(true);
  };

  const handleKey = useCallback((e: KeyboardEvent) => {
    const map: Record<string, Direction> = {
      ArrowUp: "UP", ArrowDown: "DOWN", ArrowLeft: "LEFT", ArrowRight: "RIGHT",
    };
    const d = map[e.key];
    if (!d) return;
    e.preventDefault();
    const opp: Record<Direction, Direction> = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
    if (d !== opp[dirRef.current]) setDirection(d);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (!running || gameOver) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = { ...prev[0] };
        if (dirRef.current === "UP") head.y--;
        if (dirRef.current === "DOWN") head.y++;
        if (dirRef.current === "LEFT") head.x--;
        if (dirRef.current === "RIGHT") head.x++;

        if (head.x < 0 || head.x >= GRID_WIDTH || head.y < 0 || head.y >= GRID_HEIGHT) {
          setGameOver(true);
          setRunning(false);
          return prev;
        }
        if (prev.some((s) => s.x === head.x && s.y === head.y)) {
          setGameOver(true);
          setRunning(false);
          return prev;
        }

        const newSnake = [head, ...prev];
        const ate = food.findIndex((f) => f.x === head.x && f.y === head.y);
        if (ate >= 0) {
          setFood((f) => f.filter((_, i) => i !== ate));
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 200); // Slowed down from 150 to 200
    return () => clearInterval(interval);
  }, [running, gameOver, food]);

  const handleDirClick = (d: Direction) => {
    const opp: Record<Direction, Direction> = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
    if (d !== opp[dirRef.current]) setDirection(d);
  };

  return (
    <div className="snake-game-border p-5 flex items-start gap-6 bg-card/80 backdrop-blur-sm shadow-2xl shadow-black/40">

      {/* Game board (Left side) */}
      <div
        className="relative border-2 border-border/80 rounded bg-black/60 overflow-hidden shadow-inner"
        style={{ width: GRID_WIDTH * CELL_SIZE, height: GRID_HEIGHT * CELL_SIZE }}
      >
        {/* Retro Scanlines */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />

        {/* Food dots */}
        {food.map((f, i) => (
          <div
            key={`f-${i}`}
            className="snake-dot absolute z-10"
            style={{
              width: CELL_SIZE - 4,
              height: CELL_SIZE - 4,
              left: f.x * CELL_SIZE + 2,
              top: f.y * CELL_SIZE + 2,
            }}
          />
        ))}

        {/* Snake */}
        {snake.map((s, i) => (
          <div
            key={`s-${i}`}
            className="absolute rounded-sm z-10"
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: s.x * CELL_SIZE + 1,
              top: s.y * CELL_SIZE + 1,
              background: i === 0 ? "hsl(140, 70%, 55%)" : "hsl(140, 70%, 45%)",
              boxShadow: i === 0 ? "0 0 10px hsl(140, 70%, 50%, 0.6)" : "none",
              zIndex: i === 0 ? 20 : 10,
            }}
          />
        ))}

        {/* Overlay for start/game-over */}
        {!running && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded">
            <button
              onClick={startGame}
              className="px-4 py-2 text-xs rounded bg-accent/10 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all font-semibold hover:shadow-[0_0_15px_-3px_hsl(var(--accent)/0.5)]"
            >
              {gameOver ? "play-again" : "start-game"}
            </button>
          </div>
        )}
      </div>

      {/* Controls & UI (Right side) */}
      <div className="flex flex-col justify-between h-full py-2">

        {/* Controls */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-comment text-[10px] whitespace-nowrap">// use keyboard</p>
          <p className="text-comment text-[10px] whitespace-nowrap">// arrows to play</p>
          <div className="flex flex-col items-center gap-1 mt-2">
            <button onClick={() => handleDirClick("UP")} className="w-9 h-9 rounded bg-secondary/80 border border-border/50 text-muted-foreground text-xs flex items-center justify-center hover:text-foreground hover:border-accent/50 hover:bg-secondary transition-all shadow-sm active:scale-95">▲</button>
            <div className="flex gap-1">
              <button onClick={() => handleDirClick("LEFT")} className="w-9 h-9 rounded bg-secondary/80 border border-border/50 text-muted-foreground text-xs flex items-center justify-center hover:text-foreground hover:border-accent/50 hover:bg-secondary transition-all shadow-sm active:scale-95">◀</button>
              <button onClick={() => handleDirClick("DOWN")} className="w-9 h-9 rounded bg-secondary/80 border border-border/50 text-muted-foreground text-xs flex items-center justify-center hover:text-foreground hover:border-accent/50 hover:bg-secondary transition-all shadow-sm active:scale-95">▼</button>
              <button onClick={() => handleDirClick("RIGHT")} className="w-9 h-9 rounded bg-secondary/80 border border-border/50 text-muted-foreground text-xs flex items-center justify-center hover:text-foreground hover:border-accent/50 hover:bg-secondary transition-all shadow-sm active:scale-95">▶</button>
            </div>
          </div>
        </div>

        {/* Extra UI (Food & Skip) */}
        <div className="flex flex-col items-center gap-4 mt-8">
          {/* Food left */}
          <div className="text-center">
            <p className="text-comment text-[10px] mb-2">// config.json</p>
            <div className="bg-black/30 p-2 rounded border border-border/30">
              <div className="flex gap-1 justify-center flex-wrap w-[48px]">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i < food.length ? "snake-dot shadow-[0_0_8px_hsl(140,70%,50%,0.6)]" : "bg-muted/20"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={resetGame}
            className="text-[10px] text-muted-foreground hover:text-accent transition-colors font-mono underline decoration-muted-foreground/30 underline-offset-4"
          >
            skip_game()
          </button>
        </div>

      </div>
    </div>
  );
};

export default SnakeGame;
