import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup', (c) => {
  return c.json({
    message : "signed up"
  })
})

app.get('/api/v1/signin', (c) => {
  return c.json({
    message : "signed in"
  })
})

app.get('/api/v1/todo', (c) => {
  return c.json({
    message : "get todo"
  })
})

app.post('/api/v1/todo', (c) => {
  return c.json({
    message : "todo posted"
  })
})



export default app
