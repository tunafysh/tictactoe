"use client";
import { useState, useEffect, useContext } from "react";
import LoginForm from "@/components/auth/authui";
import { Toaster, toast } from "sonner";
import { Stats } from "@/components/menus/stats";
import MainMenu from "@/components/menus/mainmenu";
import { ModeToggle } from "@/components/modetoggle";
import { useGamepads } from "react-ts-gamepads";
import { useTheme } from "next-themes";

const isPhone =
  typeof window !== "undefined"
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    : false;

export default function Home() {
  const month = new Date().toLocaleString("en-US", { month: "long" });
  const day = new Date().toLocaleString("en-US", { day: "numeric" });
  const [isMobile] = useState(isPhone);
  const [username, setUsername] = useState("");
  const [matchpass, setMatchPass] = useState(Boolean);
  const { theme, setTheme } = useTheme();
  const [del, setDel] = useState(Boolean);
  //TODO add the damn gamepad support
  // const [gamepads, setGamepads] = useState<GamepadRef>({});
  // useGamepads(gamepads => setGamepads(gamepads));

  useEffect(() => {
    if ( day == "26" && month == "November") setTheme("albania")
  }, [day, month, setTheme])

  useEffect(() => {
    if (del) {
      fetch(window.location.href + "api/player", { method: "DELETE" })
        .then((res) => res.text())
        .then((text) => {
          window.location.reload();
        });
    }
  }, [del]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch(window.location.href + "api/player", { method: "GET" })
        .then((res) => res.text())
        .then((text) => {
          if (text != "") {
            console.log(text);
            setUsername(text);
          } else {
            console.log("not signed in.");
            console.log(text);
          }
        });
    }
  }, []);

  return (
    <>
      <main className={`flex justify-center h-screen w-screen`}>
        <MainMenu isMobile={isMobile} />
        <Toaster richColors position="top-center" />
      </main>
      <div id="modetoggle" className="absolute animate-fade top-4 right-4">
      {day != "28" && month != "November"? <ModeToggle />: <></>}
    </div>
    <p className="absolute animate-fade bottom-4 left-4 text-zinc-500">
      Made with ♥️ by Hanan
    </p>
    <p className="absolute animate-fade bottom-4 right-4 text-zinc-500">Ver: 0.5.2</p>
    </>          
  );
}
