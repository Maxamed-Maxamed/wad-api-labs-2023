import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks';

dotenv.config();/* The `
` is a line break or newline character. It is used to start a new line in the code
or in the output. In this case, it is used to separate the different parts of the
code for better readability. */


/* `const app = express();` is creating an instance of the Express application. The `express()`
function is a top-level function exported by the Express module, and it returns a new Express
application. This `app` object is used to configure and run the server. */
const app = express();

/* `const port = process.env.PORT;` is assigning the value of the `PORT` environment variable to the
`port` constant. The `PORT` environment variable is typically used to specify the port number on
which the server should listen for incoming requests. By assigning it to the `port` constant, the
server will listen on the specified port when it is started. */
const port = process.env.PORT;

app.use(express.json());

/* `app.use('/api/tasks', tasksRouter);` is setting up a middleware function for the specified route
'/api/tasks'. */
app.use('/api/tasks', tasksRouter);





/* `app.listen(port, () => { console.info(`Server running at `); });` is starting the server and
listening for incoming requests on the specified port. */
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});