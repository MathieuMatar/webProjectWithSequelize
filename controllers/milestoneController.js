const milestoneRepository = require('../repositories/milestoneRepository');

/**
 * Controller for handling milestone-related operations.
 *
 * @class MilestoneController
 */


/**
 * Creates a new milestone for a specific project.
 *
 * @async
 * @function createMilestone
 * @memberof MilestoneController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the project.
 * @param {Object} req.body - The request payload containing milestone details.
 * @param {string} req.body.name - The name of the milestone.
 * @param {string} req.body.description - The description of the milestone.
 * @param {string} req.body.date - The creation date of the milestone.
 * @param {string} req.body.due_date - The due date of the milestone.
 * @param {string} req.body.status - The current status of the milestone.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the milestone is created or an error occurred.
 * @throws {Error} An error occurred while creating the milestone.
 */

/**
 * Updates an existing milestone.
 *
 * @async
 * @function updateMilestone
 * @memberof MilestoneController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the milestone to be updated.
 * @param {Object} req.body - The request payload containing updated milestone details.
 * @param {string|number} req.body.project_id - The identifier of the project the milestone belongs to.
 * @param {string} req.body.name - The updated name of the milestone.
 * @param {string} req.body.description - The updated description of the milestone.
 * @param {string} req.body.date - The updated creation date of the milestone.
 * @param {string} req.body.due_date - The updated due date of the milestone.
 * @param {string} req.body.status - The updated status of the milestone.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the milestone is updated or a 404 error message if not found.
 * @throws {Error} An error occurred while updating the milestone.
 */

/**
 * Deletes a milestone.
 *
 * @async
 * @function deleteMilestone
 * @memberof MilestoneController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the milestone to be deleted.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the milestone is deleted or a 404 error message if not found.
 * @throws {Error} An error occurred while deleting the milestone.
 */


class MilestoneController {
    static async createMilestone(req, res) {
        try {
            //project id
            const { id } = req.params;
            const { name, description, date, due_date, status } = req.body;
            const result = await milestoneRepository.createMilestone(id, name, description, date, due_date, status);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the milestone' });
        }
    }

    static async updateMilestone(req, res) {
        try {
            const { id } = req.params;
            const { project_id, name, description, date, due_date, status } = req.body;
            const result = await milestoneRepository.updateMilestone(id, project_id, name, description, date, due_date, status);
            if (!result) {
                return res.status(404).json({ error: 'Milestone not found' });
            }
            res.status(200).json({ message: 'Milestone updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the milestone' });
        }
    }

    static async deleteMilestone(req, res) {
        try {
            const { id } = req.params;
            const result = await milestoneRepository.deleteMilestone(id);
            if (!result) {
                return res.status(404).json({ error: 'Milestone not found' });
            }
            res.status(200).json({ message: 'Milestone deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the milestone' });
        }
    }
}

module.exports = MilestoneController;