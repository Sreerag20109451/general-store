import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv"


dotenv.config({path: "config.env"})

const app: Express = express()


const port = process.env.PORT || 8000

app.get("/",(req: Request, res : Response) =>{

    res.send("Hello from server")
})


app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
    
})


