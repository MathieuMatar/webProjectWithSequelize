const taskService = require('../repositories/taskRepository');

/**
 * Controller for handling task-related operations.
 *
 * @class TaskController
 */

/**
 * Retrieves a list of all tasks.
 *
 * @async
 * @function readTasks
 * @memberof TaskController
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the list of tasks or an error message.
 * @throws {Error} An error occurred while retrieving the tasks.
 */

/**
 * Retrieves a specific task by its unique identifier.
 *
 * @async
 * @function readTask
 * @memberof TaskController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the task.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the task details or a 404 error if not found.
 * @throws {Error} An error occurred while retrieving the task.
 */

/**
 * Creates a new task.
 *
 * @async
 * @function createTask
 * @memberof TaskController
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The request payload containing task details.
 * @param {string} req.body.type - The type of task.
 * @param {string|number} req.body.projectId - The identifier of the associated project.
 * @param {string|number} req.body.contactAssigned - The identifier of the contact assigned to the task.
 * @param {string|number} req.body.employeeAssigned - The identifier of the employee assigned to the task.
 * @param {string|number} req.body.contactCompleted - The identifier of the contact who completed the task.
 * @param {string|number} req.body.employeeCompleted - The identifier of the employee who completed the task.
 * @param {boolean} req.body.completed - Indicates whether the task is completed.
 * @param {string|Date} req.body.date - The date the task was created or assigned.
 * @param {string|Date} req.body.dueDate - The deadline for the task.
 * @param {string} req.body.taskDescription - The description of the task.
 * @param {string|number} req.body.importanceLevel - The importance or priority level of the task.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the newly created task details or an error message.
 * @throws {Error} An error occurred while creating the task.
 */

/**
 * Updates an existing task.
 *
 * @async
 * @function updateTask
 * @memberof TaskController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the task to be updated.
 * @param {Object} req.body - The request payload containing updated task details.
 * @param {string} req.body.type - The updated type of task.
 * @param {string|number} req.body.projectId - The updated identifier of the associated project.
 * @param {string|number} req.body.contactAssigned - The updated identifier of the contact assigned to the task.
 * @param {string|number} req.body.employeeAssigned - The updated identifier of the employee assigned to the task.
 * @param {string|number} req.body.contactCompleted - The updated identifier of the contact who completed the task.
 * @param {string|number} req.body.employeeCompleted - The updated identifier of the employee who completed the task.
 * @param {boolean} req.body.completed - The updated completion status of the task.
 * @param {string|Date} req.body.date - The updated date the task was created or assigned.
 * @param {string|Date} req.body.dueDate - The updated deadline for the task.
 * @param {string} req.body.taskDescription - The updated description of the task.
 * @param {string|number} req.body.importanceLevel - The updated importance or priority level of the task.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the updated task details or a 404 error if not found.
 * @throws {Error} An error occurred while updating the task.
 */

/**
 * Deletes a specific task.
 *
 * @async
 * @function deleteTask
 * @memberof TaskController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the task to be deleted.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with a success message or a 404 error if not found.
 * @throws {Error} An error occurred while deleting the task.
 */

class TaskController {
    static async readTasks(req, res) {
        try {
            const tasks = await taskService.readTasks();
            res.status(200).json(tasks);
        } catch (error) {
            console.error("Error reading tasks:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    static async readTask(req, res) {
        try {
            const { id } = req.params;
            const task = await taskService.readTask(id);
            if (!task) {
                return res.status(404).json({ error: "Task not found" });
            }
            res.status(200).json(task);
        } catch (error) {
            console.error("Error reading task:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    static async createTask(req, res) {
        try {
            const { type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel } = req.body;
            const newTask = await taskService.createTask(type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel);
            res.status(201).json(newTask);
        } catch (error) {
            console.error("Error creating task:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    static async updateTask(req, res) {
        try {
            const { id } = req.params;
            const { type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel } = req.body;
            const updatedTask = await taskService.updateTask(id, type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel);
            if (!updatedTask) {
                return res.status(404).json({ error: "Task not found" });
            }
            res.status(200).json(updatedTask);
        } catch (error) {
            console.error("Error updating task:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
    static async deleteTask(req, res) {
        try {
            const { id } = req.params;
            const deletedTask = await taskService.deleteTask(id);
            if (!deletedTask) {
                return res.status(404).json({ error: "Task not found" });
            }
            res.status(200).json({ message: "Task deleted successfully" });
        } catch (error) {
            console.error("Error deleting task:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}
module.exports = TaskController;