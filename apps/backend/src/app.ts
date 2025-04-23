import { Hono } from 'hono'
import {logger} from "hono/logger"
import { prettyJSON } from 'hono/pretty-json'
import { userRoute } from './routes/v1/user'

// Initialize Hono
const app = new Hono()

// Middlwares
app.use(logger())
app.use(prettyJSON())

// Error Handling
app.onError((err,c)=> {
  console.log(err);
  return c.json({error:"Internal Server Error"}, 500)
  
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const apiRoutes = app.basePath('/api/v1/').route("/user", userRoute);

export default app;
export type ApiRoutes = typeof apiRoutes;