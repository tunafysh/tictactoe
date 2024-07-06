import { useState, useEffect, useContext } from "react";
import LoginForm from "@/components/auth/authui";
import { Toaster, toast } from "sonner";
import { Stats } from "@/components/stats";
import MainMenu from "@/components/menus/mainmenu";

const isPhone = typeof window !== 'undefined' ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) : false;

export default function Home() {
  "use client"
  const [isMobile] = useState(isPhone);
  const [ username, setUsername ] = useState("")
  const [matchpass, setMatchPass] = useState(Boolean);
  const [ del, setDel ] = useState(Boolean);
  // const [gamepads, setGamepads] = useState<GamepadRef>({});
  // useGamepads(gamepads => setGamepads(gamepads));

  useEffect(() => {
    if(del) {
        fetch(window.location.href + "api/player", {method: "DELETE"})
        .then((res) => res.text()).then((text) => {
          window.location.reload()
        })
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
      
      <MainMenu isMobile={isMobile} />
      <Toaster richColors position="top-center" />
      </main>
    );
}
