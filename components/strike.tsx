export default function Strike({ strikeClass }: { strikeClass: string }) {
    return <div className={`absolute bg-zinc-200 w-full h-[10px] rounded strike-row-1 ${strikeClass}`}></div>;
}