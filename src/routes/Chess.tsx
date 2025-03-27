import { useState, useRef } from "react";
import { Chess } from "chess.js";
import Chessboard from "chessboardjsx";

import styles from "../styles/Chess.module.css";

export default function ChessPage() {
  const gameRef = useRef(new Chess()); // Store game instance persistently
  const [fen, setFen] = useState(gameRef.current.fen()); // Board position state

  const handleMove = ({ from, to }) => {
    const game = gameRef.current;
    const move = game.move({ from, to, promotion: "q" });

    if (move) {
      setFen(game.fen()); // Only update FEN, avoiding unnecessary re-renders
    }
  };

  return (
    <Chessboard
      position={fen}
      onDrop={({ sourceSquare, targetSquare }) =>
        handleMove({ from: sourceSquare, to: targetSquare })
      }
    />
  );
}
