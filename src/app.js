import express from 'express';

import cors from 'cors'
import morgan from 'morgan'

import tasksRoutes from './routes/tasks.js'

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(tasksRoutes);


export default app



// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello! From OpenLiteSpeed NodeJS\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
