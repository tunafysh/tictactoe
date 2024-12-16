"use client";
import LoginForm from "@/components/auth/login";
import { ModeToggle } from "@/components/modetoggle";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
    return (<>
    <button onClick={ () => router.push("/")} className="absolute animate-face top-4 left-4 w-5 h-5"><ArrowLeftIcon width={"25px"} height={"25px"} /></button>
    <LoginForm signup={false} />
    <div id="modetoggle" className="absolute animate-fade top-4 right-4 z-50">
      <ModeToggle />
    </div>
    </>
    );
}