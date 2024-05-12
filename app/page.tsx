"use client";

import Board from "@/components/board";
import { ModeToggle } from "@/components/modetoggle";
import { useState, useEffect } from "react";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  //rows
  {combo: [0,1,2], strikeClass: "strike-row-1"},
  {combo: [3,4,5], strikeClass: "strike-row-2"},
  {combo: [6,7,8], strikeClass: "strike-row-3"},

  //columns
  {combo: [0,3,6], strikeClass: "strike-column-1"},
  {combo: [1,4,7], strikeClass: "strike-column-2"},
  {combo: [2,5,8], strikeClass: "strike-column-3"},

  //diagonals
  {combo: [0,4,8], strikeClass: "strike-diagonal-1"},
  {combo: [2,4,6], strikeClass: "strike-diagonal-2"},
]

function checkWinner(tiles: string[], setStrikeClass: () => string) {
  for (const {combo, strikeClass} of winningCombinations){
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) setStrikeClass(strikeClass);
  }
}

export default function Home() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState("strike-diagonal-1");
  useEffect(() => {
    checkWinner(tiles, setStrikeClass.toString());
  }, [tiles])

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
        <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass}/>
      </div>
    </main>
  );
}
