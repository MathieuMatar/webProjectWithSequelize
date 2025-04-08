const MilestoneRepository = require('../repositories/milestoneRepository');

/**
 * Provides milestone-related operations.
 *
 * @method createMilestone
 * @param {number} project_id - Project identifier.
 * @param {string} name - Milestone name.
 * @param {string} description - Milestone description.
 * @param {string} date - Milestone creation date.
 * @param {string} due_date - Milestone due date.
 * @param {string} status - Milestone status.
 * @returns {Promise<Object>} A promise resolving to the newly created milestone.
 *
 * @method updateMilestone
 * @param {number} id - Milestone identifier.
 * @param {number} project_id - Project identifier.
 * @param {string} name - Milestone name.
 * @param {string} description - Milestone description.
 * @param {string} date - Milestone creation date.
 * @param {string} due_date - Milestone due date.
 * @param {string} status - Milestone status.
 * @returns {Promise<Object>} A promise resolving to the updated milestone.
 *
 * @method deleteMilestone
 * @param {number} id - Milestone identifier.
 * @returns {Promise<void>} A promise resolving when deletion is complete.
 */

class MilestoneService {
    static async createMilestone(project_id, name, description, date, due_date, status) {
        return await MilestoneRepository.createMilestone(project_id, name, description, date, due_date, status);
    }

    static async updateMilestone(id, project_id, name, description, date, due_date, status) {
        return await MilestoneRepository.updateMilestone(id, project_id, name, description, date, due_date, status);
    }

    static async deleteMilestone(id) {
        return await MilestoneRepository.deleteMilestone(id);
    }    
}

module.exports = MilestoneService;