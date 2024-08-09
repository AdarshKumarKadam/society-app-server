require('dotenv').config();
const createApp = require('./createApp')
const connectDb = require('./config/db')

const app = createApp();

connectDb();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Server is ready !`")
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})


