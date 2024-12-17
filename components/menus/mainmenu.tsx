"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import Local from "@/components/engines/localengine"
import Multi from "@/components/engines/multiengine"
import Single from "../engines/singleengine"
import { useRouter } from "next/navigation"
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
    <Select onValueChange={setMode}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select mode" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="single">Singleplayer</SelectItem>
          <SelectItem value="multi">Multiplayer</SelectItem>
          <SelectItem value="local">Local</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </main>
    
  )
}
  else{
    if(Mode == "single"){
      handleRedirect("singleplayer")
      //db.inc(games)
    }
    if(Mode == "multi"){
      handleRedirect("multiplayer")

    }
    if(Mode == "local"){
      handleRedirect("local")

    }
}
}