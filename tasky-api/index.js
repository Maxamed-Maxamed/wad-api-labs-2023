/* The code is setting up a basic server using the Express framework in JavaScript. */
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

/* `const app = express();` is creating an instance of the Express application. This instance will be
used to configure and run the server. */
const app = express();

/* `const port = process.env.PORT;` is assigning the value of the `PORT` environment variable to the
`port` constant. The `PORT` environment variable is typically used to specify the port number on
which the server should listen for incoming requests. By assigning it to the `port` constant, the
server will listen on the specified port number when it is started. */
const port = process.env.PORT;

/* `app.use(express.static('public'));` is setting up a middleware in the Express application. */
app.use(express.static('public'));

/* `app.listen(port, () => { console.info(`Server running at `); });` is starting the server and
listening for incoming requests on the specified port number. */
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});