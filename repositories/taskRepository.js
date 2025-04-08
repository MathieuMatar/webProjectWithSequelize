const Task = require('../models/Task');

/**
 * The TaskRepository class handles database operations for the Task model.
 *
 * @method readTasks
 * @description Retrieves all tasks.
 *
 * @method readTask
 * @param {number} id - The ID of the task to retrieve.
 * @description Retrieves a single task by its ID.
 *
 * @method createTask
 * @param {string} type - The type of the task.
 * @param {number} projectId - The project ID associated with the task.
 * @param {number} contactAssigned - The ID of the assigned contact.
 * @param {number} employeeAssigned - The ID of the assigned employee.
 * @param {number} contactCompleted - The ID of the contact who marked the task as completed.
 * @param {number} employeeCompleted - The ID of the employee who marked the task as completed.
 * @param {boolean} completed - Indicates whether the task is completed.
 * @param {(Date|string)} date - The creation date of the task.
 * @param {(Date|string)} dueDate - The due date of the task.
 * @param {string} taskDescription - A description of the task.
 * @param {number} importanceLevel - The importance level of the task.
 * @description Creates a new task in the database.
 *
 * @method updateTask
 * @param {number} id - The ID of the task to update.
 * @param {string} type - The updated type of the task.
 * @param {number} projectId - The updated project ID associated with the task.
 * @param {number} contactAssigned - The updated ID of the assigned contact.
 * @param {number} employeeAssigned - The updated ID of the assigned employee.
 * @param {number} contactCompleted - The updated ID of the contact who marked the task as completed.
 * @param {number} employeeCompleted - The updated ID of the employee who marked the task as completed.
 * @param {boolean} completed - Indicates whether the task is completed.
 * @param {(Date|string)} date - The updated creation date of the task.
 * @param {(Date|string)} dueDate - The updated due date of the task.
 * @param {string} taskDescription - The updated description of the task.
 * @param {number} importanceLevel - The updated importance level of the task.
 * @description Updates an existing task in the database.
 *
 * @method deleteTask
 * @param {number} id - The ID of the task to delete.
 * @description Removes a task from the database by its ID.
 */


class TaskRepository {
    static async readTasks() {
        try {
            return await Task.findAll();
        } catch (error) {
            console.error(error);
            return { success: false, message: "Failed to read tasks." };
        }
    }

    static async readTask(id) {
        try {
            return await Task.findByPk(id);
        } catch (error) {
            console.error(error);
            return { success: false, message: "Failed to read task." };
        }
    }

    static async createTask(type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel) {
        try {
            const newTask = await Task.create(
                { type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel }
            );
            return newTask;
        } catch (error) {
            console.error(error);
            return { success: false, message: "Failed to create task." };
        }
    }

    static async updateTask(id, type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel) {
        try {
            await Task.update(
                { type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel },
                { where: { id } }
            );
            return { success: true, message: "Task updated successfully." };
        } catch (error) {
            console.error(error);
            console.error("Error updating task:", error);
            return { success: false, message: "Failed to update task." };
        }
    }

    static async deleteTask(id) {
        try {
            const deleted = await Task.destroy({ where: { id } });
            if (deleted === 0) {
                return { success: false, message: "No task found to delete." };
            }
            return { success: true };
        } catch (error) {
            console.error(error);
            return { success: false, message: "Failed to delete task." };
        }
    }
}
module.exports = TaskRepository;