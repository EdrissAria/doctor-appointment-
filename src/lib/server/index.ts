import mongodb from "./db/mongodb";
import file from "./db/file";
import {DATABASE, MONGODB_URI, MONGODB_DB, FILE_DB_PATH} from '$env/static/private'

const mongodbOptions = {
    uri: MONGODB_URI, 
    db: MONGODB_DB
}

const fileOptions = {
    path: FILE_DB_PATH ?? './data.json'
}

export const db = DATABASE === "mongodb" ? await mongodb(mongodbOptions) : await file(fileOptions)