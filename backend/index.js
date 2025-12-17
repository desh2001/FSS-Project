import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/userRouter.js"
import jwt from "jsonwebtoken"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const mongoURI = process.env.MONGO_URL

mongoose.connect(mongoURI).then(
    () => {
        console.log("Connected to MongoDB Cluster")
    }
)


const app = express()

app.use(cors())


app.use(express.json())






app.use("/api/users", userRouter)





app.listen(4900,
    () => {
        console.log("server is running")
    }
)