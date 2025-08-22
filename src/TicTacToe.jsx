import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // Function to check for a winner
  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], // horizontal
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // vertical
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonal
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  // Function to handle square clicks
  const handleClick = (index) => {
    // Don't allow moves if there's a winner or square is already filled
    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }

    setIsXNext(!isXNext);
  };

  // Function to reset the board
  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  // Check if board is full for tie game
  const isBoardFull = board.every((square) => square !== null);
  const isTie = isBoardFull && !winner;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Tic Tac Toe
        </h1>

        {/* Game status message */}
        <div className="text-center mb-6 h-8">
          {winner && (
            <p className="text-2xl font-bold text-green-600">
              🎉 Player {winner} Wins! 🎉
            </p>
          )}
          {isTie && (
            <p className="text-2xl font-bold text-yellow-600">It's a Tie! 🤝</p>
          )}
          {!winner && !isTie && (
            <p className="text-xl text-gray-700">
              Current Player:{" "}
              <span className="font-bold text-blue-600">
                {isXNext ? "X" : "O"}
              </span>
            </p>
          )}
        </div>

        {/* Game board */}
        <div className="grid grid-cols-3 gap-2 mb-6 max-w-xs mx-auto">
          {board.map((square, index) => (
            <button
              key={index}
              className={`
                w-20 h-20 border-2 border-gray-300 text-4xl font-bold
                hover:bg-gray-50 transition-colors duration-200
                ${
                  square === "X"
                    ? "text-blue-600"
                    : square === "O"
                    ? "text-red-600"
                    : "text-gray-400"
                }
                ${!winner && !square ? "hover:shadow-md cursor-pointer" : ""}
                ${winner || square ? "cursor-not-allowed" : ""}
              `}
              onClick={() => handleClick(index)}
              disabled={winner || square}
            >
              {square}
            </button>
          ))}
        </div>

        {/* Reset button */}
        <div className="text-center">
          <button
            onClick={resetBoard}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
