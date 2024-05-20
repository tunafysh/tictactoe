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

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault(); // Prevent default form submission

        // Get input value
        const inputValue = document.getElementById("z1")?.innerText;
        if(inputValue === null) return

        // Create a JSON object
        const data = { inputField: inputValue };

        // Send data to the API
        try {
            const response = await fetch("your_api_url", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log("Data sent successfully!");
            } else {
                console.error("Error sending data:", response.status);
            }
        } catch (error) {
            console.error("Error:", error);
        };
}
export default function SignIn() {
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