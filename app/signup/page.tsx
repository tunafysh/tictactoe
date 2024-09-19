"use client";
import LoginForm from "@/components/auth/authui";
import { ModeToggle } from "@/components/modetoggle";

export default function Login() {
    return (<>
    <LoginForm signup={true} />
    <div id="modetoggle" className="absolute animate-fade top-4 right-4 z-50">
      <ModeToggle />
    </div>
    </>
    );
}