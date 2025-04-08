const projectService = require('../services/projectService');

/**
 * Controller for handling project-related operations.
 *
 * @class ProjectController
 */

/**
 * Retrieves a list of projects.
 *
 * @async
 * @function getProjects
 * @memberof ProjectController
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the list of projects or an error message.
 * @throws {Error} An error occurred while retrieving the projects.
 */

/**
 * Retrieves a specific project by its unique identifier.
 *
 * @async
 * @function getProject
 * @memberof ProjectController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the project.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the project details or an error message.
 * @throws {Error} An error occurred while retrieving the project.
 */

/**
 * Creates a new project.
 *
 * @async
 * @function createProject
 * @memberof ProjectController
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The request payload containing project details.
 * @param {string} req.body.name - The name of the project.
 * @param {string} req.body.description - The description of the project.
 * @param {string|number} req.body.client_id - The identifier of the client.
 * @param {string} req.body.start_date - The start date of the project.
 * @param {string} req.body.deadline - The deadline for the project.
 * @param {string} req.body.status - The current status of the project.
 * @param {string} req.body.overview - An overview of the project.
 * @param {string} req.body.files - The files associated with the project.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the project is created or with an error message.
 * @throws {Error} An error occurred while creating the project.
 */

/**
 * Updates an existing project.
 *
 * @async
 * @function updateProject
 * @memberof ProjectController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the project to be updated.
 * @param {Object} req.body - The request payload containing updated project details.
 * @param {string} req.body.name - The updated name of the project.
 * @param {string} req.body.description - The updated description of the project.
 * @param {string|number} req.body.client_id - The identifier of the client.
 * @param {string} req.body.start_date - The updated start date of the project.
 * @param {string} req.body.deadline - The updated deadline for the project.
 * @param {string} req.body.status - The updated status of the project.
 * @param {string} req.body.overview - The updated overview of the project.
 * @param {string} req.body.files - The updated list of files associated with the project.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the project is updated or with a 404 error if not found.
 * @throws {Error} An error occurred while updating the project.
 */

/**
 * Deletes a project.
 *
 * @async
 * @function deleteProject
 * @memberof ProjectController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the project to be deleted.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the project is deleted or with a 404 error if not found.
 * @throws {Error} An error occurred while deleting the project.
 */

/**
 * Assigns an employee to a project.
 *
 * @async
 * @function assignEmployeeToProject
 * @memberof ProjectController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.project_id - The unique identifier of the project.
 * @param {string|number} req.params.employee_id - The unique identifier of the employee to assign.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the result of the assignment operation.
 * @throws {Error} An error occurred while assigning the employee to the project.
 */

/**
 * Removes an employee from a project.
 *
 * @async
 * @function removeEmployeeFromProject
 * @memberof ProjectController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.project_id - The unique identifier of the project.
 * @param {string|number} req.params.employee_id - The unique identifier of the employee to remove.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the result of the removal operation.
 * @throws {Error} An error occurred while removing the employee from the project.
 */

/**
 * Associates a contact with a project.
 *
 * @async
 * @function associateContactWithProject
 * @memberof ProjectController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.project_id - The unique identifier of the project.
 * @param {string|number} req.params.contact_id - The unique identifier of the contact to associate.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the result of the association operation.
 * @throws {Error} An error occurred while associating the contact with the project.
 */

/**
 * Removes a contact from a project.
 *
 * @async
 * @function removeContactFromProject
 * @memberof ProjectController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.project_id - The unique identifier of the project.
 * @param {string|number} req.params.contact_id - The unique identifier of the contact to remove.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the result of the removal operation.
 * @throws {Error} An error occurred while removing the contact from the project.
 */

/**
 * Links a service to a project.
 *
 * @async
 * @function linkServiceToProject
 * @memberof ProjectController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.project_id - The unique identifier of the project.
 * @param {string|number} req.params.service_id - The unique identifier of the service to link.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the result of the linking operation.
 * @throws {Error} An error occurred while linking the service to the project.
 */

/**
 * Unlinks a service from a project.
 *
 * @async
 * @function unlinkServiceFromProject
 * @memberof ProjectController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.project_id - The unique identifier of the project.
 * @param {string|number} req.params.service_id - The unique identifier of the service to unlink.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the result of the unlinking operation.
 * @throws {Error} An error occurred while unlinking the service from the project.
 */


class ProjectController {
    static async getProjects(req, res) {
        try {
            const result = await projectService.readProjects();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the projects' });
        }
    }

    static async getProject(req, res) {
        try {
            const { id } = req.params;
            const result = await projectService.readProject(id);
            if (!result) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the project' });
        }
    }

    static async createProject(req, res) {
        try {
            const { name, description, client_id, start_date, deadline, status, overview, files } = req.body;
            const result = await projectService.createProject(name, description, client_id, start_date, deadline, status, overview, files);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the project' });
        }
    }

    static async updateProject(req, res) {
        try {
            const { id } = req.params;
            const { name, description, client_id, start_date, deadline, status, overview, files } = req.body;
            const result = await projectService.updateProject(id, name, description, client_id, start_date, deadline, status, overview, files);
            if (!result) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.status(200).json({ message: 'Project updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the project' });
        }
    }

    static async deleteProject(req, res) {
        try {
            const { id } = req.params;
            const result = await projectService.deleteProject(id);
            if (!result) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.status(200).json({ message: 'Project deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the project' });
        }
    }

    static async assignEmployeeToProject(req, res) {
        try {
            const { project_id, employee_id } = req.params;
            const result = await projectService.assignEmployeeToProject(project_id, employee_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while assigning the employee to the project' });
        }
    }

    static async removeEmployeeFromProject(req, res) {
        try {
            const { project_id, employee_id } = req.params;
            const result = await projectService.removeEmployeeFromProject(project_id, employee_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while removing the employee from the project' });
        }
    }

    static async associateContactWithProject(req, res) {
        try {
            const { project_id, contact_id } = req.params;
            const result = await projectService.associateContactWithProject(project_id, contact_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while associating the contact with the project' });
        }
    }

    static async removeContactFromProject(req, res) {
        try {
            const { project_id, contact_id } = req.params;
            const result = await projectService.removeContactFromProject(project_id, contact_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while removing the contact from the project' });
        }
    }

    static async linkServiceToProject(req, res) {
        try {
            const { project_id, service_id } = req.params;
            const result = await projectService.linkServiceToProject(project_id, service_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while linking the service to the project' });
        }
    }

    static async unlinkServiceFromProject(req, res) {
        try {
            const { project_id, service_id } = req.params;
            const result = await projectService.unlinkServiceFromProject(project_id, service_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while unlinking the service from the project' });
        }
    }
}

module.exports = ProjectController;