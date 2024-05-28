import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"  
import { Dispatch, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/auth-input"
import { Label } from "@/components/ui/label"
import {  useState } from "react"
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

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
      const BottomGradient = () => {
        return (
          <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          </>
        );
      };
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
      <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
            </button>
            </div>
      <div className="flex flex-row items-center justify-between">
      <hr className=" w-24"/>
        <p className="text-center break-keep text-nowrap"> or the traditional way</p>
      <hr className="w-24"/>
      </div>
      <div className="grid gap-4 py-4">
      <div className="grid items-center gap-4">
        <Label htmlFor="name" className="text-left">
            Username
          </Label>
          <Input onChange={(e) => setUsername(e.target.value)} className="col-span-3"/>
        </div>
        <div className="grid items-center gap-4">
        <Label htmlFor="name" className="text-left">
            Password
          </Label>
          <Input onChange={(e) => setPassword(e.target.value)} className="col-span-3" type="password"/>
        </div>
        <div className="grid items-center gap-2">
        <Label htmlFor="name" className="text-left">
           Confirm
          </Label>
          <Input onChange={(e) => setConfirm(e.target.value)} className="col-span-3" type="password"/>
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