import gamestate from "./gamestate"
import { Button } from "./ui/button"

export default function GameOver({ gameState }: { gameState: {} }) {
    switch (gameState) {
        case gamestate.playerXWins:
            return (
            <>
            <h1 className="text-5xl text-center font-bold text-red-500">X wins</h1>
            <br />
            <br />
            <div className="flex justify-center ">
            <Button onClick={() => window.location.reload()}>Play Again</Button>
            </div>
            </>)
        case gamestate.playerOWins:
            return (
            <>
                <h1 className="text-5xl text-center font-bold text-green-500">O wins</h1>
                <br />
                <br />
                <div className="flex justify-center ">
                <Button onClick={() => window.location.reload()}>Play Again</Button>
                </div>
            </>)
        case gamestate.draw:
            return (
            <>
                <h1 className="text-5xl text-center font-bold text-orange-500">Draw</h1>
                <br />
                <br />
                <div className="flex justify-center ">
                <Button onClick={() => window.location.reload()}>Play Again</Button>
                </div>
            </>)
        default:
            return <></>
    }
}