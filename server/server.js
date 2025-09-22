import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDB from "./confis/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";


connectDB()

const app= express()
app.use(cors()) // enable cross origin sharing

// middleware
app.use(express.json())
app.use(clerkMiddleware())

//Api to listen clerk webhooks
app.use('/api/clerk',clerkWebhooks)

app.get('/' , (req,res)=>res.send("Api is working"))

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=>console.log(`server running on Port ${PORT}`));