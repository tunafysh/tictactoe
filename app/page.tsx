import { ModeToggle } from "@/components/modetoggle";

export default function Home() {
  return (
    <main className="flex justify-center h-screen">
      <div id="modetoggle" className="absolute top-4 right-4">
        <ModeToggle />
      </div>
        <p className="absolute bottom-4 left-4 text-zinc-500">
          Made with ♥️ by tunafysh
        </p>
      <div className="self-center">
        <h1 className="text-4xl font-bold">Tic Tac Toe</h1>

      </div>
    </main>
  );
}
