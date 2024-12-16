import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/no-close-dialog"  
import { Dispatch, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/auth-input"
import { PassInput } from "@/components/ui/pass-input"
import { Label } from "@/components/ui/label"
import {  useState } from "react"
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { signIn } from "@/auth"
import { login } from "@/app/actions"

      const GoogleBottomGradient = () => {
        return (
          <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute left-[-1%] h-px w-[25%] -bottom-px inset-x-0 bg-blue-500" />
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute left-[24%] h-px w-[25%] mx-auto -bottom-px inset-x-10 bg-red-500" />
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px left-[49%] w-[25%] -bottom-px inset-x-0 bg-yellow-500" />
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute left-[72%] h-px w-[25%] mx-auto -bottom-px inset-x-10 bg-green-500" />
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute left-[-1%] h-px w-[24%] -bottom-px inset-x-0 bg-blue-500 blur-lg" />
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute left-[24%] h-px w-[25%] mx-auto -bottom-px inset-x-10 bg-red-500 blur-lg" />
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px left-[49%] w-[25%] -bottom-px inset-x-0 bg-yellow-500 blur-lg" />
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute left-[72%] h-px w-[25%] mx-auto -bottom-px inset-x-10 bg-green-500 blur-lg" />
            
          </>
        );
      };
      const GithubBottomGradient = () => {
        return (
          <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-slate-950 dark:via-slate-50 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-slate-950 dark:via-slate-50 to-transparent left-2" />
            </>
        );
      };
      const OfBottomGradient = () => {
        return (
          <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          </>
        );
      };



export default function LoginForm({ signup }: {signup: boolean} ) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const router = useRouter();
  let date = new Date()

return (
      <main className="w-[400px]">


        <h1 className="text-center font-bold text-4xl">Log in</h1>
        <br />
        <br />

      <Tabs defaultValue="traditional">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="traditional">Traditional</TabsTrigger>
        <TabsTrigger value="SSO">SSO</TabsTrigger>
        <TabsTrigger value="other">Other options</TabsTrigger>
      </TabsList>
      <TabsContent value="traditional">
      <form className="h-screen w-screen flex justify-center items-center p-6" action={(formdata: FormData) =>{
        login("credentials", formdata)
        router.push("/");
      }}>
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
      </div>
      <Button>Login</Button> 
        </form>
      </TabsContent>
      <TabsContent value="SSO">
        <br />
      <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            disabled
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            {`Google (Not available until this web app gets its own domain)`}
            </span>
            <GoogleBottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            onClick={() => {
              login("github")
              router.push("/");
            }}
            >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <GithubBottomGradient />
          </button>

          {date.getMonth() == 3 && date.getDate() == 1? <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            onClick={
              () => {
                router.replace("https://youtu.be/KouZTXZHcLg?si=Mtyx7k21mVdCCIDg")
              }
            }
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
      </TabsContent>
      </Tabs>
      </main>
  )
}
