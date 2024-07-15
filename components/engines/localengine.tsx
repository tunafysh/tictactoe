import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Konami from "react-konami-code";
import Board from "@/components/elements/board";
import GameOver from "@/components/menus/gameover";
import gamestate from "@/components/definitions/gamestate";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  //rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(
  tiles: string[],
  setStrikeClass: Dispatch<SetStateAction<string>>,
  setGameState: Dispatch<SetStateAction<any>>,
) {
  let winnerFound = false;

  for (const { combo, strikeClass } of winningCombinations) {
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
    setGameState(gamestate.playerOWins);
  } else {
    setGameState(gamestate.playerXWins);
  }
}

export default function Local({ isMobile }: { isMobile: boolean }) {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState("");
  const [gameState, setGameState] = useState(gamestate);

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  // useEffect(() => {
  //   if (!matchpass){
  //     console.log(matchpass)
  //     return () => {
  //       <Alert variant="destructive">
  //           <ExclamationTriangleIcon className="h-4 w-4" />
  //           <AlertTitle>Error</AlertTitle>
  //           <AlertDescription>
  //             Passwords do not match. Please try again.
  //           </AlertDescription>
  //         </Alert>
  //     }
  //   }
  // }, [matchpass])

  const handleTileClick = (i: number) => {
    if (gamestate.inProgress != gameState.inProgress) return;
    if (tiles[i] !== null) return;
    const newTiles = [...tiles];
    newTiles[i] = playerTurn;
    setTiles(newTiles);
    setPlayerTurn((prev: string) => {
      if (prev === PLAYER_X) {
        return PLAYER_O;
      } else if (prev === PLAYER_O) {
        return PLAYER_X;
      } else {
        return prev;
      }
    });
  };

  return (
    <div className="self-center justify-center">
      <h1 className="text-4xl font-bold text-center">Tic Tac Toe</h1>
      <h2 className="font-bold text-center">Local</h2>
      <br />
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
        gameState={gameState}
        isMobile={isMobile}
      />
      <Konami
        action={() => {
          if (gameState.inProgress)
            secret(setGameState, playerTurn != PLAYER_X);
        }}
      />
      <br />
      <GameOver gameState={gameState} />
    </div>
  );
}
