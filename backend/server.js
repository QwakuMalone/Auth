import express from 'express'
import dotenv from "dotenv"
import  {connectDB}  from './db/connectDB.js'
import router from './routes/authRoutes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())


app.use('/api/auth', router)

app.listen(PORT,()=>{
    connectDB()
    console.log('server is running on port:', PORT)
})

// e8f1beff49adbfb5e74f4d8263a7599c