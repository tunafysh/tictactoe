import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"  
import { Dispatch, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {  useState } from "react"
import { ExclamationTriangleIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

async function onSubmit(user: string, pass: string) {
        // Get input value
        const username = user
        const password = pass
        if(username !== null && password !== null) {

          window.location.reload()

          // Create a JSON object
          
          // Send data to the API
          try {
            const response = await fetch("/api/player", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              "body": `${username}`
              });
              
              if (response.ok) {
                
              } else {
                console.error("Error sending data:", response.status);
              }
            } catch (error) {
              console.error("Error:", error);
            };
          }
        }
export function SignUp({ matchpass }: { matchpass: Dispatch<SetStateAction<boolean>> }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute animate-fade top-4 left-4">Sign up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Sign up</DialogTitle>
        </DialogHeader>
        <Button><GitHubLogoIcon className="mr-2 h-4 w-4" />Sign up with github</Button>
        <div className="flex flex-row items-center justify-between">
        <hr className=" w-24"/>
          <p className="text-center break-keep text-nowrap"> or the traditional way</p>
        <hr className="w-24"/>
        </div>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input onChange={(e) => setUsername(e.target.value)} className="col-span-3"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
              Password
            </Label>
            <Input onChange={(e) => setPassword(e.target.value)} className="col-span-3"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
             Confirm
            </Label>
            <Input onChange={(e) => setConfirm(e.target.value)} className="col-span-3"/>
          </div>
        </div>
        <Button onClick={() => {
          if( password === confirm) {
          
            onSubmit(username, password)
            matchpass(false)
          }
          else {
            matchpass(false)
          }
        }}>Sign up</Button>
      </DialogContent>
    </Dialog>
    )
}

export function SignIn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute animate-fade top-4 left-4">Sign in</Button>
      </DialogTrigger>
    </Dialog>
  )
}