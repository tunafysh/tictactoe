import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"  
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {  useEffect, useState } from "react"
import { useRouter } from "next/navigation"

async function onSubmit(text: string) {
        // Get input value
        const inputValue = text
        if(inputValue !== null) {

          window.location.reload()

          // Create a JSON object
          
          // Send data to the API
          try {
            const response = await fetch("/api/player", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              "body": `${inputValue}`
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
export default function SignIn() {
  const [input, setInput] = useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute animate-fade top-4 left-4">Sign up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add user</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input onChange={(e) => setInput(e.target.value)} className="col-span-3"/>
          </div>
        </div>
        
        <DialogFooter>
        <Button onClick={() => {
          onSubmit(input)
          }}>Sign up</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )
}