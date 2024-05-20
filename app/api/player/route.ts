import { Elysia } from 'elysia'

const app = new Elysia({prefix: "/api"})
app.get('/',({ cookie: { player } }: { cookie: { player: { value: string } } }) => {
    return player.value
})

app.post("/", (req: Request,{ cookie: { player } }: { cookie: { player: { value: string } } }) => {
  player.value = String(req.body)
})

export const GET = app.handle 
export const POST = app.handle 