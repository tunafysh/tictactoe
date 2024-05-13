import gamestate from "./gamestate"

export default function GameOver({ gameState }: { gameState: number }) {
    switch (gameState) {
        case gamestate.playerXWins:
            return <h1 className="text-5xl">X wins</h1>
        case gamestate.playerOWins:
            return <h1 className="text-5xl">O wins</h1>
        case gamestate.draw:
            return <h1 className="text-5xl">Draw</h1>
        default:
            return <></>
    }
}