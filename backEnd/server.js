
const express = require('express')
const dotenv = require('dotenv')
const userRouter = require('./routers/userRouter')
const adminRouter = require('./routers/adminRouter')
const produitRouter = require('./routers/produitRouter')
const connectDB = require('./helpers/connectDB')
const cors = require('cors')
dotenv.config()
const port = process.env.PORT
connectDB()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/produit',produitRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))   