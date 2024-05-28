"use client"

import { useState, useEffect } from "react";
import { SignUp } from "@/components/authui";
import Game from "@/components/game";
import { Stats } from "@/components/stats";

const isPhone = typeof window !== 'undefined' ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) : false;

export default function Home() {
  const [isMobile] = useState(isPhone);
  const [ username, setUsername ] = useState("")
  const [matchpass, setMatchPass] = useState(Boolean);
  const [ del, setDel ] = useState(Boolean);

  useEffect(() => {
    if(del) {
      if(typeof window !== 'undefined'){

        fetch(window.location.href + "api/player", {method: "DELETE"})
        .then((res) => res.text()).then((text) => {
          setUsername(text)
        })
      }
    }
    }, [del])
    
    useEffect(() => {
      if(typeof window !== 'undefined'){

        fetch(window.location.href + "api/player", {method: "GET"})
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
        }
      }, [])

  return (
        
    <main className="flex justify-center h-screen w-screen">
      {username==undefined || username=="" ? <SignUp matchpass={setMatchPass} /> : <Stats playername={username} setDel={setDel} />}
      <Game isMobile={isMobile} />
      </main>
    );
}
