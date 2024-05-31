import { useState } from "react";
import { Button } from "./ui/button";
import Local from "./localengine";
import Multi from "./multiengine";
import Single from "./singleengine";

export default function MainMenu({ isMobile }: { isMobile:boolean }) {
    const [Mode, setMode] = useState("");
    if(Mode == ""){

        return (
            <main className="self-center justify-center">
                <Button onClick={() => setMode("single")}>Singleplayer</Button>
                <br></br>
                <Button onClick={() => setMode("multi")}>Multiplayer</Button>
                <br></br>
                <Button onClick={() => setMode("local")}>Local</Button>
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