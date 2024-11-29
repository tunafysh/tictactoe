"use client"
import { useState } from "react"
import Local from "@/components/engines/localengine"
import Multi from "@/components/engines/multiengine"
import Single from "../engines/singleengine"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
export default function MainMenu({isMobile}: {isMobile: boolean}) {
  const router = useRouter()

  const handleRedirect = (dest:string) => {
    router.push('/'+dest)
  }

    const [Mode, setMode] = useState("");
if (Mode === "") {
  return (
    <main className="flex flex-col items-center justify-center">
    <h1 className="text-6xl font-bold text-center mb-10">Tic Tac Toe</h1>
    <div className="grid grid-cols-3 grid-rows-2 gap-4">
    <br />
    <br />
    <h3>Choose a game mode</h3>
    <br />
    <br />
    <Button onClick={() => setMode("single")} variant={"outline"}>Singleplayer</Button>
    <Button onClick={() => setMode("multi")} variant={"outline"}>Multiplayer</Button>
    <Button onClick={() => setMode("local")} variant={"outline"}>Local</Button>
    </div>
    </main>
    
  )
}
  else{
    if(Mode == "single"){
      handleRedirect("singleplayer")
    }
    if(Mode == "multi"){
      handleRedirect("multiplayer")
    }
    if(Mode == "local"){
      handleRedirect("local")
    }
}
}