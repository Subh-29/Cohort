import { useState } from 'react';
import './App.css';
import confetti1 from './assets/confetti1.png';
import confetti2 from './assets/confetti2.png';
import confetti3 from './assets/confetti3.png';
import confetti4 from './assets/confetti4.png';
import joker from './assets/joker.png';

const Square = ({ index, onPlay, valueFromBoard }) => {
  function handleClick() {
    if (valueFromBoard) return;
    onPlay(index);
  }

  return (
    <button className={`square ${valueFromBoard ? `square-${valueFromBoard}` : ''}`} onClick={handleClick}>
      {valueFromBoard}
    </button>
  );
};

const ColSqr = (row, col, board, handleClick) => {
  let colSqrArr = [];
  for (let i = 0; i < col; ++i) {
    const index = row * col + i;
    colSqrArr.push(
      <Square
        key={`Col_${index}`}
        index={index}
        valueFromBoard={board[index]}
        onPlay={handleClick}
      />
    );
  }
  return colSqrArr;
};

const MultiSquare = ({ row, col, board, handleClick }) => {
  let squares = [];
  for (let i = 0; i < row; ++i) {
    squares.push(
      <div key={`Row_${i}`} className="row">
        {ColSqr(i, col, board, handleClick)}
      </div>
    );
  }
  return squares;
};

const checkWin = (board) => {
  const winSeq = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let seq of winSeq) {
    if (board[seq[0]] && board[seq[0]] === board[seq[1]] && board[seq[1]] === board[seq[2]]) {
      return board[seq[0]];
    }
  }
  return null;
};

const isDraw = (board) => {
  for(let i = 0; i < board.length; ++i) {
    if (!board[i])
      return null;
  }
  return true;
}

const Board = ({ row, col, board, setBoard, isXnext, setIsXnext }) => {
  const winner = checkWin(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    const symbol = isXnext ? 'X' : 'O';
    newBoard[index] = symbol;
    setBoard(newBoard);
    setIsXnext((prev) => !prev);
  };

  return (
    <>
      <div className="text">
        {winner ? `Winner: ${winner}` : isDraw(board) ? "Match Draw" : `Next Turn: ${isXnext ? 'X' : 'O'}`}
      </div>

      {winner && (
        <div className="confettis">
          {[confetti1, confetti2, confetti3, confetti4, confetti2, confetti4, confetti1].map((src, i) => (
            <div className="confetti" key={i}>
              <img src={src} alt="confetti" />
            </div>
          ))}
        </div>
      )}
      {isDraw(board) && (
        <div className="confettis">
          {[joker, joker, joker, joker, joker, joker, joker].map((src, i) => (
            <div className="confetti" key={i}>
              <img src={src} alt="joker" />
            </div>
          ))}
        </div>
      )}
      <MultiSquare row={row} col={col} board={board} handleClick={handleClick} />
    </>
  );
};

const Game = () => {
  const row = 3;
  const col = 3;
  const [isXnext, setIsXnext] = useState(true);
  const [board, setBoard] = useState(Array(row * col).fill(null));

  const resetGame = () => {
    setBoard(Array(row * col).fill(null));
    setIsXnext(true);
  };

  return (
    <div className="middle">
      <div className="marquee">
        <div className="texts">
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
        </div>
        <div className="texts">
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
        </div>
        <div className="texts">
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
          <div className="marq-text"><h1>Tic-Tac-Toe</h1></div>
        </div>
      </div>
      <Board
        row={row}
        col={col}
        board={board}
        setBoard={setBoard}
        isXnext={isXnext}
        setIsXnext={setIsXnext}
      />
      <div className="reset">
        <button className='reset-btn' onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
};

export default Game;
