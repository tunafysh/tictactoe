"use client";

import { Button } from "@/components/ui/button";
import Board from "@/components/board";
import GameOver from "@/components/gameover";
import gamestate from "@/components/gamestate";
import { ModeToggle } from "@/components/modetoggle";
import { useState, useEffect, SetStateAction, Dispatch } from "react";
import Konami from "react-konami-code";

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

function checkWinner(tiles: string[], setStrikeClass: Dispatch<SetStateAction<string>>, setBoardOpacity: Dispatch<SetStateAction<number>>, setGameState: Dispatch<SetStateAction<any>>) {
  for (const {combo, strikeClass} of winningCombinations){
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];
    const allTilesFilled = tiles.every((tile) => tile !== null);
    
    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    )
    {
      
      if(tileValue1 === PLAYER_X)
        {
          setGameState(gamestate.playerXWins)
          setStrikeClass(strikeClass+" bg-red-500")
          setBoardOpacity(0) //
        }
      else {
        setGameState(gamestate.playerOWins)
        setStrikeClass(strikeClass+" bg-green-500")
if(allTilesFilled) setGameState(gamestate.draw)
      }

    }
  }
}

function secret(setGameState: Dispatch<SetStateAction<any>>, playerO: boolean) {
  if (playerO) {
    setGameState(gamestate.playerOWins)
  }
  else {
    setGameState(gamestate.playerXWins)
  }
}

export default function Home() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState("");
  const [gameState, setGameState] = useState(gamestate);
  const [boardOpacity, setBoardOpacity] = useState(1);
  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setBoardOpacity, setGameState);
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
        Made with ♥️ by Hanan
      </p>
      <div className="self-center justify-center">
        <h1 className="text-4xl font-bold text-center">Tic Tac Toe</h1>
        <br />
        <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass} className={boardOpacity.toString()} gameState={gameState}/>
        <Konami action={() => secret(setGameState, playerTurn != PLAYER_X)} />
        <br />
        <GameOver gameState={gameState}/>
      </div>
    </main>
    );
}
