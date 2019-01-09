import express from "express";

import registration from "./routes/registration";
import { dbConfig } from "./config/config";
import dbConnection from "./utility/dbConnection";

//Database Connection
dbConnection.setConnection(dbConfig.connectionUrl).then(async () => {
	console.log("Connecton made to db");
}, (err) => {
	throw new Error("Error in initialising Database: ", err);
}).catch((err) => {
	throw new Error("Error in initialising Database: ", err);
});

const app = express();
app.use(express.json())

const port = (process.env.port)?(process.env.port):4000;

app.use('/register', registration);

app.listen(port, ()=>{
    console.log('Listening on port ', port);
});