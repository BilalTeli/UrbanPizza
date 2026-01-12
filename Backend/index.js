import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"

const app=express()
const port=process.env.PORT || 5000

//globar middleware
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)


//listen port for server starting
app.listen(port,()=>{
    //connecting db 
    connectDB()
    console.log(`server statrted at ${port}`)
})