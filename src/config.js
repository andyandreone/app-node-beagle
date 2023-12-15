import {config as dotenv} from 'dotenv'
dotenv()


export const config ={
   //   host: process.env.DB_HOST || '127.0.0.1',
   //  user: process.env.DB_USER || 'root',
   //  password: process.env.DB_PASSWORD || '2020',
   //  database: process.env.DB_DATABASE || 'devices'

        host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '1505',
    database: process.env.DB_DATABASE || 'domotica'

    // host: 'janus-cluster.ci9p5pgbpkpv.us-west-2.redshift.amazonaws.com',
    // user:'janusdb_produccion',
    // password: 'Prod1234',
    // database: 'lfdb_prod',
    // port: '5439',


   //  conn = psycopg2.connect(host="janus-cluster.ci9p5pgbpkpv.us-west-2.redshift.amazonaws.com",
   //  port=5439,
   //  user="janusdb_produccion",
   //  password="Prod1234",
   //  database="lfdb_prod")

 }
