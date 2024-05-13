import gamestate from "./gamestate"

export default function GameOver({ gameState }: { gameState: {} }) {
    switch (gameState) {
        case gamestate.playerXWins:
            return <h1 className="text-5xl text-center text-">X wins</h1>
        case gamestate.playerOWins:
            return <h1 className="text-5xl text-center">O wins</h1>
        case gamestate.draw:
            return <h1 className="text-5xl text-center">Draw</h1>
        default:
            return <></>
    }
}