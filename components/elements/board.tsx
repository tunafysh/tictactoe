import Strike from "./strike";
import Tile from "./tile";
import gamestate from "@/components/definitions/gamestate";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Board({
  tiles,
  onTileClick,
  playerTurn,
  strikeClass,
  gameState,
  isMobile,
}: {
  tiles?: string[];
  onTileClick: (i: number) => void;
  playerTurn: string;
  strikeClass: string;
  gameState: {};
  isMobile: boolean;
}) {
  const [boardVisible, setBoardVisible] = useState(true);

  useEffect(() => {
    if (
      !(
        gamestate.draw != gameState &&
        gamestate.playerXWins != gameState &&
        gamestate.playerOWins != gameState
      )
    ) {
      setTimeout(
        (milliseconds) => {
          setBoardVisible(false);
        },
        !isMobile ? 1500 : 1,
      ); // 5000 milliseconds = 5 seconds
    }
  }, [gameState, isMobile]);
  if (!tiles) {
    return null; // oif(gamestate === "inProgress") {r any other fallback UI you want to show when tiles is undefined
  }

  return (
    <div
      className={`relative cursor-pointer ${boardVisible ? "grid" : "hidden"} grid-rows-3 grid-cols-3`}
    >
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className="border-b-2 border-r-2 border-zinc-400"
        gamestate={gameState}
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className="border-b-2 border-r-2 border-zinc-400"
        gamestate={gameState}
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        className="border-b-2 border-zinc-400"
        gamestate={gameState}
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className="border-b-2 border-r-2 border-zinc-400"
        gamestate={gameState}
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className="border-b-2 border-r-2 border-zinc-400"
        gamestate={gameState}
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className="border-b-2 border-zinc-400"
        gamestate={gameState}
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className="border-r-2 border-zinc-400"
        gamestate={gameState}
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className="border-r-2 border-zinc-400"
        gamestate={gameState}
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
        value={tiles[8]}
        gamestate={gameState}
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
}
