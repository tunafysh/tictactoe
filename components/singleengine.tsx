import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Konami from "react-konami-code";
import Board from "./board";
import GameOver from "./gameover";
import gamestate from "./gamestate";

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

function BOT(tiles: string[], setTiles: Dispatch<SetStateAction<string[]>>) {
  let availableSpots = [];
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] === null) {
      availableSpots.push(i);
    }
  }

  if (availableSpots.length > 0) {
    let randomIndex = Math.floor(Math.random() * availableSpots.length);
    let botMove = availableSpots[randomIndex];
    let newTiles = [...tiles];
    newTiles[botMove] = PLAYER_O; // Assuming the bot is PLAYER_O
    setTiles(newTiles);
  }
}

function checkWinner(tiles: string[], setStrikeClass: Dispatch<SetStateAction<string>>, setGameState: Dispatch<SetStateAction<any>>) {
  let winnerFound = false;
  
  for (const {combo, strikeClass} of winningCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      if (tileValue1 === PLAYER_X) {
        setGameState(gamestate.playerXWins);
        setStrikeClass(strikeClass + " bg-red-500");
      } else if (tileValue1 === PLAYER_O) {
        setGameState(gamestate.playerOWins);
        setStrikeClass(strikeClass + " bg-green-500");
      }
      winnerFound = true;
      break; // Exit the loop as we found a winner
    }
  }

  if (!winnerFound) {
    const allTilesFilled = tiles.every((tile) => tile !== null);
    if (allTilesFilled) {
      setGameState(gamestate.draw);
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

export default function Single({ isMobile }: { isMobile:boolean }) {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState("");
  const [gameState, setGameState] = useState(gamestate);

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles])

  const handleTileClick = (i: number) => {
    if (gameState.inProgress != gamestate.inProgress) return;
    if (tiles[i] !== null) return;
    const newTiles = [...tiles];
    newTiles[i] = playerTurn;
    setTiles(newTiles);
    if(gameState.inProgress == gamestate.inProgress) BOT(newTiles, setTiles);
  }
  
  return (
    <div className="self-center justify-center">
      <h1 className="text-4xl font-bold text-center">Tic Tac Toe</h1>
      <h2 className="font-bold text-center">Singleplayer</h2>
      <br />
      <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass} gameState={gameState} isMobile={isMobile}/>
      <Konami action={() => {if (gameState.inProgress) secret(setGameState, playerTurn != PLAYER_X)}} />
      <br />
      <GameOver gameState={gameState}/>
    </div>
  );
}