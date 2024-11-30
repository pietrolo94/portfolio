import React, { useState, useEffect, useCallback } from "react";

const SnakeGame = () => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([15, 15]);
  const [direction, setDirection] = useState("RIGHT");
  const [speed, setSpeed] = useState(200);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const gridSize = 20;

  // Movimento del serpente
  const moveSnake = useCallback(() => {
    const newSnake = [...snake];
    const head = [...newSnake[newSnake.length - 1]];
  
    // Determina la direzione
    switch (direction) {
      case "UP":
        head[1] -= 1;
        break;
      case "DOWN":
        head[1] += 1;
        break;
      case "LEFT":
        head[0] -= 1;
        break;
      case "RIGHT":
        head[0] += 1;
        break;
      default:
        break;
    }
  
    // Permetti al serpente di attraversare i bordi
    head[0] = (head[0] + gridSize) % gridSize; // X ciclico
    head[1] = (head[1] + gridSize) % gridSize; // Y ciclico
  
    newSnake.push(head);
  
    // Se il serpente mangia il cibo
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood([
        Math.floor(Math.random() * gridSize),
        Math.floor(Math.random() * gridSize),
      ]);
      setScore(score + 1);
      setSpeed(speed > 50 ? speed - 10 : speed); // Incrementa la velocità
    } else {
      newSnake.shift(); // Rimuove la coda
    }
  
    // Controlla se il serpente si morde da solo
    if (
      newSnake
        .slice(0, -1)
        .some((segment) => segment[0] === head[0] && segment[1] === head[1])
    ) {
      setGameOver(true);
      return;
    }
  
    setSnake(newSnake);
  }, [snake, direction, food, gridSize, score, speed]);

  // Cambia direzione
  const changeDirection = useCallback(
    (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    },
    [direction]
  );

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(moveSnake, speed);
    document.addEventListener("keydown", changeDirection);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", changeDirection);
    };
  }, [moveSnake, changeDirection, gameOver, speed]);

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold mb-4 text-indigo-600">Snake Game</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">Score: {score}</p>
      {gameOver ? (
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-xl text-red-500 mb-4">Game Over!</h2>
          <button
            onClick={() => {
              setSnake([[10, 10]]);
              setFood([15, 15]);
              setDirection("RIGHT");
              setGameOver(false);
              setSpeed(200);
              setScore(0);
            }}
            className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 shadow-lg transition-transform transform hover:scale-105"
          >
            Restart
          </button>
        </div>
      ) : (
        <div
          className="relative"
          style={{
            width: `${gridSize * 20}px`,
            height: `${gridSize * 20}px`,
            border: "2px solid black",
            position: "relative",
            background: "linear-gradient(to bottom right, #f0f0f0, #d4d4d4)",
          }}
        >
          {snake.map((segment, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                width: "20px",
                height: "20px",
                backgroundColor: "green",
                borderRadius: "4px",
                left: `${segment[0] * 20}px`,
                top: `${segment[1] * 20}px`,
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
              }}
            ></div>
          ))}
          <div
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              backgroundColor: "red",
              borderRadius: "50%",
              left: `${food[0] * 20}px`,
              top: `${food[1] * 20}px`,
              boxShadow: "0 0 8px rgba(255, 0, 0, 0.5)",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
