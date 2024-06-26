export default function Tile({ className, value, onClick, playerTurn, gamestate }: { className?: string, value: string, onClick: () => void, playerTurn: string, gamestate: {}}) {
    let hoverClass= null;
        if (value == null) {
            if (playerTurn == "X") {
                hoverClass = "hover:after:content-['X'] hover:after:opacity-20 hover:after:text-red-600 hover:ease-in-out hover:duration-1000";
            } else if (playerTurn == "O") {
                hoverClass = "hover:after:content-['O'] hover:after:opacity-20 hover:after:text-green-500 ease-in-out duration-300";
            }
            else{
                return;
            }
        }
    return (
        <div className={`flex w-[100px] h-[100px] font-bold text-4xl items-center justify-center text select-none ${value==="X"? "text-red-600" : "text-green-500"} ${className} ${hoverClass}`} onClick={onClick}>{value}</div>
    )    
}