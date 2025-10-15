import express from 'express'
import cors from 'cors'
import connectToMongoDB from './db/db.js'
import middleware from './middleware/middleware.js'

import authRouter from  './routes/auth.js'
import noteRouter from  './routes/note.js'



const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/note',noteRouter)

app.get('/',(req,res)=>{
    return res.send("Hello World")
})


app.listen(5000,()=>{
    connectToMongoDB()
    console.log("Server is running on port 5000");
}) 