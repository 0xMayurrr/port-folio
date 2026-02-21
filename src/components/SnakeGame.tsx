import { useState, useEffect, useCallback, useRef } from "react";

const GRID_SIZE = 20;
const CELL_SIZE = 14;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = [
  { x: 5, y: 5 }, { x: 15, y: 3 }, { x: 8, y: 15 },
  { x: 3, y: 12 }, { x: 17, y: 8 }, { x: 12, y: 17 },
  { x: 6, y: 9 }, { x: 14, y: 14 }, { x: 9, y: 2 },
  { x: 16, y: 16 },
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

        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
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
    }, 150);
    return () => clearInterval(interval);
  }, [running, gameOver, food]);

  const handleDirClick = (d: Direction) => {
    const opp: Record<Direction, Direction> = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
    if (d !== opp[dirRef.current]) setDirection(d);
  };

  return (
    <div className="snake-game-border p-6 flex flex-col items-center gap-4">
      {/* Game board */}
      <div
        className="relative border border-muted/20 rounded"
        style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
      >
        {/* Food dots */}
        {food.map((f, i) => (
          <div
            key={`f-${i}`}
            className="snake-dot absolute"
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
            className="absolute rounded-sm"
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: s.x * CELL_SIZE + 1,
              top: s.y * CELL_SIZE + 1,
              background: i === 0 ? "hsl(140, 70%, 55%)" : "hsl(140, 70%, 45%)",
              boxShadow: i === 0 ? "0 0 8px hsl(140, 70%, 50%, 0.5)" : "none",
            }}
          />
        ))}

        {/* Overlay for start/game-over */}
        {!running && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 rounded">
            <button
              onClick={startGame}
              className="px-4 py-2 text-xs rounded border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {gameOver ? "play-again" : "start-game"}
            </button>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-comment text-[10px]">// use keyboard</p>
        <p className="text-comment text-[10px]">// arrows to play</p>
        <div className="flex flex-col items-center gap-1 mt-1">
          <button onClick={() => handleDirClick("UP")} className="w-8 h-8 rounded bg-secondary text-muted-foreground text-xs flex items-center justify-center hover:text-foreground transition-colors">▲</button>
          <div className="flex gap-1">
            <button onClick={() => handleDirClick("LEFT")} className="w-8 h-8 rounded bg-secondary text-muted-foreground text-xs flex items-center justify-center hover:text-foreground transition-colors">◀</button>
            <button onClick={() => handleDirClick("DOWN")} className="w-8 h-8 rounded bg-secondary text-muted-foreground text-xs flex items-center justify-center hover:text-foreground transition-colors">▼</button>
            <button onClick={() => handleDirClick("RIGHT")} className="w-8 h-8 rounded bg-secondary text-muted-foreground text-xs flex items-center justify-center hover:text-foreground transition-colors">▶</button>
          </div>
        </div>
      </div>

      {/* Food left */}
      <div className="text-center">
        <p className="text-comment text-[10px] mb-2">// food left</p>
        <div className="flex gap-1.5 justify-center flex-wrap max-w-[160px]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-opacity ${
                i < food.length ? "snake-dot" : "bg-muted/30"
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={resetGame}
        className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
      >
        skip
      </button>
    </div>
  );
};

export default SnakeGame;
