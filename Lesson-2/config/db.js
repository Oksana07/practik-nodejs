const { connect } = require('mongoose');

const conectDB = async ()=>{
   const DB = await connect(process.env.MONGO_DB_URI) 
    console.log(`MongoDB are conected on port: ${DB.connection.port}, DB-name ${DB.connection.name}, DB-host ${DB.connection.host}`.cyan) 
    // console.log(DB.connection)
}
module.exports = conectDB;

