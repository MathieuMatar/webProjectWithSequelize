const express = require('express');
const TaskController = require('../controllers/taskController');
const { validateTask, validateTaskId } = require('../validators/taskDTO');

const router = express.Router();

/**

GET /api/tasks
Retrieves all tasks from the database.

GET /api/tasks/
Retrieves a specific task by ID.
@param {string} id - Task ID

POST /api/tasks
Creates a new task.
Request body:
{
type: string,
projectId: number,
contactAssigned: number,
employeeAssigned: number,
contactCompleted: number,
employeeCompleted: number,
completed: ENUM('Y', 'N', 'C'),
date: Date,
dueDate: Date,
taskDescription: string,
importanceLevel: ENUM('Critical', 'High', 'Medium', 'Low', 'Optional')
}

PUT /api/tasks/:id
Updates an existing task by ID.
@param {string} id - Task ID
Request body:
{
type: string,
projectId: number,
contactAssigned: number,
employeeAssigned: number,
contactCompleted: number,
employeeCompleted: number,
completed: ENUM('Y', 'N', 'C'),
date: Date,
dueDate: Date,
taskDescription: string,
importanceLevel: ENUM('Critical', 'High', 'Medium', 'Low', 'Optional')
}

DELETE /api/tasks/:id
Deletes a task by ID.
@param {string} id - Task ID

*/

router.get('/', TaskController.readTasks);
router.get('/:id', validateTaskId, TaskController.readTask);
router.post('/', validateTask, TaskController.createTask);
router.put('/:id', validateTaskId, TaskController.updateTask);
router.delete('/:id', validateTaskId, TaskController.deleteTask);


module.exports = router;