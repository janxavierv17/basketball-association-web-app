import { MongoClient } from "mongodb"
import mongoose from "mongoose"
import "dotenv/config"
import { log } from "./logger.js"

const uri = process.env.DB_CONFIG
const client = new MongoClient(uri)
async function listDatabases() {
    log.info("Connected to DB.")
    const databasesList = await client.db().admin().listDatabases();
    databasesList.databases.forEach(db => console.log(` - ${db.name}`))

}
export async function dbConnection() { 
    try {
        await client.connect()
        mongoose.connect(uri)
        listDatabases();
    }
    catch(error) {
        console.log(error)
        process.exit(1)
    }
}
