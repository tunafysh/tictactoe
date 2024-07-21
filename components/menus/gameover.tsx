import gamestate from "../../lib/definitions/gamestate"
import { Button } from "../ui/button"

export default function GameOver({ gameState }: { gameState: {} }) {
    switch (gameState) {
        case gamestate.playerXWins:
            return (
            <>
            <h1 className="text-5xl text-center font-bold text-red-500 drop-shadow-red">X wins</h1>
            <br />
            <br />
            <div className="flex justify-center ">
            <Button onClick={() => window.location.reload()}>Play Again</Button>
            </div>
            </>)
        case gamestate.playerOWins:
            return (
            <>
                <h1 className="text-5xl text-center font-bold text-green-500 drop-shadow-green">O wins</h1>
                <br />
                <br />
                <div className="flex justify-center ">
                <Button onClick={() => window.location.reload()}>Play Again</Button>
                </div>
            </>)
        case gamestate.draw:
            return (
            <>
                <h1 className="text-5xl text-center font-bold text-orange-500 drop-shadow-orange">Draw</h1>
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