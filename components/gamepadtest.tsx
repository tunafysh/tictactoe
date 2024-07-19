import { useContext } from "react";
import { GamepadsContext } from "react-ts-gamepads";

export default function Test(){
    const { gamepads } = useContext(GamepadsContext);

    return <p> {gamepads !== undefined? gamepads[0].connected ? "connected" : "not connected" : "null"} </p>
}