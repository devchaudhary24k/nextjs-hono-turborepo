import { Hono } from "hono";

export const userRoute = new Hono()
  .get("/", (c)=> {
    return c.json({user:[]})
  })

