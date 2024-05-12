"use client";

import Board from "@/components/board";
import { ModeToggle } from "@/components/modetoggle";
import { useState } from "react";

const PLAYER_X = "X";
const PLAYER_O = "O";

export default function Home() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

  const handleTileClick = (i: number) => {
    if (tiles[i] !== null) return;
    const newTiles = [...tiles];
    newTiles[i] = playerTurn;
    setTiles(newTiles);
    setPlayerTurn((prev) => {
      if (prev === PLAYER_X) {
        return PLAYER_O;
      } else {
        return PLAYER_X;
      }
    });
  }
  return (
    <main className="flex justify-center h-screen">
      <div id="modetoggle" className="absolute animate-fade top-4 right-4">
        <ModeToggle />
      </div>
      <p className="absolute animate-fade bottom-4 left-4 text-zinc-500">
        Made with ♥️ by tunafysh
      </p>
      <div className="self-center justify-center">
        <h1 className="text-4xl font-bold text-center">Tic Tac Toe</h1>
        <br />
        <Board tiles={tiles} onTileClick={handleTileClick}/>
      </div>
    </main>
  );
}
