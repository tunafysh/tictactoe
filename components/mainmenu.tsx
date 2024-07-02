"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
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
import Local from "./localengine"
import Multi from "./multiengine"
import Single from "./singleengine"
export default function MainMenu({isMobile}: {isMobile: boolean}) {
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
        return <Single isMobile={isMobile} />
    }
    if(Mode == "multi"){
        return <Multi isMobile={isMobile} />
    }
    if(Mode == "local"){
        return <Local isMobile={isMobile} />
    }
}
}