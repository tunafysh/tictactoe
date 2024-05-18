import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"  
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent } from "react"

function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    // Send form data to the API route
    fetch('/api/player', {
      method: 'POST',
      body: formData,
    })
}

export default function SignIn() {
    return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute animate-fade top-4 left-4">Sign up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={onSubmit}> 
        <DialogHeader>
          <DialogTitle>Add user</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input id="name" className="col-span-3"/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Sign up</Button>
        </DialogFooter>
      </form>
      </DialogContent>
    </Dialog>

    )
}