"use client";
import Signup from "@/components/auth/signup";
import { ModeToggle } from "@/components/modetoggle";

export default function Login() {
    return (<>
    <Signup />
    <div id="modetoggle" className="absolute animate-fade top-4 right-4 z-50">
      <ModeToggle />
    </div>
    </>
    );
}