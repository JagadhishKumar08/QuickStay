import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";

connectDB()

//Middleware
app.use(express.json())
app.use(clerkMiddleware())

const app=express()
app.use(cors())   // enable cross-origin sharing

//Api to listen to Clerk Webhooks
app.use("/api/clerk", clerkWebhooks)

app.get('/',(req,res)=>res.send("Api is working"))

const PORT = process.env.PORT || 3000

app.listen(PORT , ()=> console.log(`server running on the port ${PORT}`));