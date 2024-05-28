"use client"

import { useState, useEffect } from "react";
import { SignUp } from "@/components/authui";
import Game from "@/components/game";
import { Stats } from "@/components/stats";
import { Label } from "@/components/ui/label";

const isPhone = typeof window !== 'undefined' ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) : false;

export default function Home() {
  const [isMobile] = useState(isPhone);
  const [ username, setUsername ] = useState("")
  const [matchpass, setMatchPass] = useState(Boolean);
  const [ del, setDel ] = useState(Boolean);

  useEffect(() => {
    if(del) {
      fetch("https://o-vs-x.vercel.app/api/player", {method: "DELETE"})
      .then((res) => window.location.href = "/")
     }
    }, [del])

  useEffect(() => {
    fetch("https://o-vs-x.vercel.app/api/player", {method: "GET"})
    .then((res) => res.text())
    .then((text) => {      
      if(text != "") {
        console.log(text)
        setUsername(text)
     }
     else {
       console.log("not signed in.")
       console.log(text)
     }
   })
   }, [])

  return (
        
    <main className="flex justify-center h-screen w-screen">
      {username==undefined || username=="" ? <SignUp matchpass={setMatchPass} /> : <Stats playername={username} setDel={setDel} />}
      <Game isMobile={isMobile} />
      </main>
    );
}
