import { useState } from "react";
import { Button } from "./ui/button";
import Local from "./localengine";
import Multi from "./multiengine";
import Single from "./singleengine";

export default function MainMenu({ isMobile }: { isMobile:boolean }) {
    const [Mode, setMode] = useState("");
    if(Mode == ""){

        return (
            <main className="flex-row self-center justify-center items-center">
                <Button onClick={() => setMode("single")} className="mb-4">Singleplayer</Button>
                <br></br>
                <Button onClick={() => setMode("multi")} className="mb-4">Multiplayer</Button>
                <br></br>
                <Button onClick={() => setMode("local")} className="mb-4">Local</Button>
            </main>
        );
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