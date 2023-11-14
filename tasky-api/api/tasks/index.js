import express from 'express';
import { tasksData } from './tasksData';



/* `const router = express.Router();` is creating a new instance of the Express Router. The Router is a
middleware that allows you to define routes for your application. It provides methods to handle HTTP
requests for different routes. */
const router = express.Router(); 
// Get task details
/* This code is defining a GET route for retrieving task details based on the task ID. */
router.get('/:id', (req, res) => {
    const { id } = req.params
    const task = tasksData.tasks.find(task => task.id === id);
    if (!task) {
        return res.status(404).json({ status: 404, message: 'Task not found' });
    }
    return res.status(200).json(task);
});

/* `export default router;` is exporting the `router` object as the default export of this module. This
means that when this module is imported in another module, the imported value will be the `router`
object. */
export default router;