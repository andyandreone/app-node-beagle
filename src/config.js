import {config as dotenv} from 'dotenv'
dotenv()


export const config ={
     host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '2020',
    database: process.env.DB_DATABASE || 'devices'
//     host: "127.0.0.1",
//     user: "root",
//     // password: "temppwd",
//     database: "devices",
 }
