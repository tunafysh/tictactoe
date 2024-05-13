import Strike from "./strike";
import Tile from "./tile";
import gamestate from "./gamestate";



export default function Board({ tiles, onTileClick, playerTurn, strikeClass, className, gameState }: {tiles?: string[], onTileClick: (i: number) => void, playerTurn: string, strikeClass: string, className: string, gameState: {}}) {
    if (!tiles) {
        return null; // or any other fallback UI you want to show when tiles is undefined
      }
    if(gamestate.draw != gameState && gamestate.playerXWins != gameState && gamestate.playerOWins != gameState)
    {

        return (
                <div className={`grid grid-rows-3 grid-cols-3 relative cursor-pointer opacity-${className}`}>
                    <Tile playerTurn={playerTurn} onClick={() => onTileClick(0)} value={tiles[0]} className="border-b-2 border-r-2 border-zinc-400"/>
                    <Tile playerTurn={playerTurn} onClick={() => onTileClick(1)} value={tiles[1]} className="border-b-2 border-r-2 border-zinc-400"/>
                    <Tile playerTurn={playerTurn} onClick={() => onTileClick(2)} value={tiles[2]} className="border-b-2 border-zinc-400"/>
                    <Tile playerTurn={playerTurn} onClick={() => onTileClick(3)} value={tiles[3]} className="border-b-2 border-r-2 border-zinc-400"/>
                    <Tile playerTurn={playerTurn} onClick={() => onTileClick(4)} value={tiles[4]} className="border-b-2 border-r-2 border-zinc-400"/>
                    <Tile playerTurn={playerTurn} onClick={() => onTileClick(5)} value={tiles[5]} className="border-b-2 border-zinc-400"/>
                    <Tile playerTurn={playerTurn} onClick={() => onTileClick(6)} value={tiles[6]} className="border-r-2 border-zinc-400"/>
                    <Tile playerTurn={playerTurn} onClick={() => onTileClick(7)} value={tiles[7]} className="border-r-2 border-zinc-400"/>
                    <Tile playerTurn={playerTurn} onClick={() => onTileClick(8)} value={tiles[8]}/>
                    <Strike strikeClass={strikeClass}/>
                </div>
            );
        }
        else{
            return <></>
        }
}