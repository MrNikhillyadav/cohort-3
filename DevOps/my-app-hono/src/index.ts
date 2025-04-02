import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono()

app.post('/api/signup', async(c) => {
  const body = await c.req.json()
  const {username, age } = body;

  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())


  const user = await prisma.user.create({
    data :{
      username : username,
      age : age,
    }
  })

  return c.json({
    id  : user.id,
    message : "user created successfully!"
  })
})

app.post('/api/signin', async(c) => {
  const body = await c.req.json();
  const {username }  = body;
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())


  const user = await prisma.user.findFirst({
    where :{
      username,
    }  
  })

  return c.json({
    message : "logged in  successfully!"
  })
})


app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    console.log("user is authorized")
    await next()
  } else {
    return c.text("You dont have acces");
  }
})

app.get("/todo", (c) =>{
  return Response.json({
    message : "todos"
  })
})



export default app
