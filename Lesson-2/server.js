const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")
const app = express();
const conectDB = require('./config/db')
const {colors}=require('./helpers')

dotenv.config({path: './config/.env'})

app.use(cors())
app.use(express.json())

conectDB()
//set routes

const books = require('./routes/booksRouts')

app.use('/api/v1/books', books)

const {PORT} = process.env || 3000
const server = app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`.cyan)
})

process.on("unhandledRejection", (error, _) => {
  if (error) {
    console.log(`ERROR: ${error.message}`.red);
    server.close(() => process.exit(1)); //єтот код ошибки надо описать в readme.md
  }
});