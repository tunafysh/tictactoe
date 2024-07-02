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
  IconBrandInstagram,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { toast } from "sonner"

async function onSubmit(user: string, pass: string) {
  if(typeof window !== 'undefined'){
  // Get input value
      const username = user
      const password = pass
      if(username !== null && password !== null) {
        if (username.length <= 8 || password.length <= 8) {
          toast.error("Username and password must be at least 8 characters long")
          return
        }

        window.location.reload()

        try {
            
            const response = await fetch(window.location.href+"api/player", {
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
      }
      const GoogleBottomGradient = () => {
        return (
          <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-[57%] -bottom-px inset-x-0 bg-gradient-to-r from-blue-500 via-red-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute left-[40%] h-px w-[57%] mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-yellow-500 to-green-500" />
            
          </>
        );
      };
      const GithubBottomGradient = () => {
        return (
          <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-slate-950 dark:via-slate-50 to-transparent" />
            </>
        );
      };
      const IgBottomGradient = () => {
        return (
          <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-[97%] -bottom-px inset-x-0 bg-gradient-to-r from-ig1 via-ig2 to-ig3" />
          </>
        );
      };
      const OfBottomGradient = () => {
        return (
          <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </>
        );
      };
export function SignUp({ matchpass }: { matchpass: Dispatch<SetStateAction<boolean>> }) {
const [username, setUsername] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [confirm, setConfirm] = useState<string>("");
let date = new Date()

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
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Google
            </span>
            <GoogleBottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <GithubBottomGradient />
          </button>

          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Instagram
            </span>
            <IgBottomGradient />
          </button>

          {date.getMonth() == 3 && date.getDate() == 1? <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <OfBottomGradient />
            </button>
            : <></>}
          
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
          <Input onChange={(e) => setUsername(e.target.value)} className="col-span-3" type="text"/>
        </div>
        <div className="grid items-center gap-4">
        <Label htmlFor="name" className="text-left">
            Password
          </Label>
          <Input onChange={(e) => setPassword(e.target.value)} className="col-span-3" type="password" min={8} max={16}/>
        </div>
        <div className="grid items-center gap-2">
        <Label htmlFor="name" className="text-left">
           Confirm
          </Label>
          <Input onChange={(e) => setConfirm(e.target.value)} className="col-span-3" type="password" min={8} max={16}/>
        </div>
      </div>
      <Button onClick={() => {
        if( password === confirm) {
        
          matchpass(true)
          onSubmit(username, password)
        }
        else {
          alert("Passwords don't match!")
          matchpass(false)
        }
      }}>Sign up</Button>
    </DialogContent>
  </Dialog>
  )
}