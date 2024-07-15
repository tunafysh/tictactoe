export default function Strike({ strikeClass }: { strikeClass: string }) {
    return <div className={`absolute bg-green-500 rounded ${strikeClass}`}></div>;
}