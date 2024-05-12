import Tile from "./tile";

export default function Board({ tiles, onTileClick}: {tiles?: string[], onTileClick: (i: number) => void}) {
    if (!tiles) {
        return null; // or any other fallback UI you want to show when tiles is undefined
      }
    return (
        <div className="grid grid-rows-3 grid-cols-3 relative cursor-pointer">
            <Tile onClick={() => onTileClick(0)} value={tiles[0]} className="border-b-2 border-r-2 border-zinc-200"/>
            <Tile onClick={() => onTileClick(1)} value={tiles[1]} className="border-b-2 border-r-2 border-zinc-200"/>
            <Tile onClick={() => onTileClick(2)} value={tiles[2]} className="border-b-2 border-zinc-200"/>
            <Tile onClick={() => onTileClick(3)} value={tiles[3]} className="border-b-2 border-r-2 border-zinc-200"/>
            <Tile onClick={() => onTileClick(4)} value={tiles[4]} className="border-b-2 border-r-2 border-zinc-200"/>
            <Tile onClick={() => onTileClick(5)} value={tiles[5]} className="border-b-2 border-zinc-200"/>
            <Tile onClick={() => onTileClick(6)} value={tiles[6]} className="border-r-2 border-zinc-200"/>
            <Tile onClick={() => onTileClick(7)} value={tiles[7]} className="border-r-2 border-zinc-200"/>
            <Tile onClick={() => onTileClick(8)} value={tiles[8]}/>
        </div>
    );
}