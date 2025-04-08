const TaskRepository = require("../repositories/taskRepository");

/**
 * Provides task-related operations.
 *
 * @method readTasks
 * @returns {Promise<Object[]>} A promise resolving to a list of tasks.
 *
 * @method readTask
 * @param {number} id - Task identifier.
 * @returns {Promise<Object>} A promise resolving to the task details.
 *
 * @method createTask
 * @param {string} type - The type of the task.
 * @param {number} projectId - The associated project identifier.
 * @param {number} contactAssigned - The identifier for the contact assigned to the task.
 * @param {number} employeeAssigned - The identifier for the employee assigned to the task.
 * @param {number} contactCompleted - The identifier for the contact who completed the task.
 * @param {number} employeeCompleted - The identifier for the employee who completed the task.
 * @param {boolean} completed - Indicates whether the task is completed.
 * @param {Date|string} date - The creation date of the task.
 * @param {Date|string} dueDate - The due date of the task.
 * @param {string} taskDescription - The description of the task.
 * @param {number} importanceLevel - The importance level of the task.
 * @returns {Promise<Object>} A promise resolving to the newly created task.
 *
 * @method updateTask
 * @param {number} id - The task identifier.
 * @param {string} type - The type of the task.
 * @param {number} projectId - The associated project identifier.
 * @param {number} contactAssigned - The identifier for the contact assigned to the task.
 * @param {number} employeeAssigned - The identifier for the employee assigned to the task.
 * @param {number} contactCompleted - The identifier for the contact who completed the task.
 * @param {number} employeeCompleted - The identifier for the employee who completed the task.
 * @param {boolean} completed - Indicates whether the task is completed.
 * @param {Date|string} date - The creation date of the task.
 * @param {Date|string} dueDate - The due date of the task.
 * @param {string} taskDescription - The description of the task.
 * @param {number} importanceLevel - The importance level of the task.
 * @returns {Promise<Object>} A promise resolving to the updated task.
 *
 * @method deleteTask
 * @param {number} id - The task identifier.
 * @returns {Promise<void>} A promise resolving when the task deletion is complete.
 */


class TaskService {
    static async readTasks() {
        return TaskRepository.readTasks();
    }

    static async readTask(id) {
        return TaskRepository.readTask(id);
    }

    static async createTask(type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel) {
        return TaskRepository.createTask(type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel);
    }

    static async updateTask(id, type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel) {
        return TaskRepository.updateTask(id, type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel);
    }

    static async deleteTask(id) {
        return TaskRepository.deleteTask(id);
    }
}

module.exports = TaskService;