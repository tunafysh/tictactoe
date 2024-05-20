import { Elysia } from 'elysia'

const app = new Elysia({prefix: "/api/player"})
app.get('/',({ cookie: { player } }: { cookie: { player: { value: string } } }) => {
    return player.value
})

app.post("/", ({ cookie: { player } }: { cookie: { player: { value: string } } }) => {
  player.value = ''  
})

export const GET = app.handle 
export const POST = app.handle 