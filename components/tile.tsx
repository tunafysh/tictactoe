export default function Tile({ className, value, onClick }: { className?: string, value: string, onClick: () => void }) {
    return (
        <div className={`flex text-zinc-50 w-[100px] h-[100px] items-center justify-center text select-none ${value==="X"? "text-red-600" : "text-green-500"} ${className}`} onClick={onClick}>{value}</div>
    )    
}