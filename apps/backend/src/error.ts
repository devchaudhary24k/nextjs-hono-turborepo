import app from "./app";

app.onError((err,c)=> {
  console.log(err);
  return c.json({error:"Internal Server Error"}, 500)
  
})