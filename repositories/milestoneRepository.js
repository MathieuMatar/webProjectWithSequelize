const Milestone = require('../models/Milestone');

/**
 * The MilestoneRepository class handles database operations for the Milestone model.
 *
 * @method createMilestone
 * @param {number} project_id - The ID of the project the milestone belongs to.
 * @param {string} name - The name of the milestone.
 * @param {string} description - The description of the milestone.
 * @param {Date} date - The date the milestone was created.
 * @param {Date} due_date - The due date of the milestone.
 * @param {string} status - The status of the milestone.
 * @description Creates a new milestone.
 *
 * @method updateMilestone
 * @param {number} id - The ID of the milestone to update.
 * @param {number} project_id - The ID of the project the milestone belongs to.
 * @param {string} name - The name of the milestone.
 * @param {string} description - The description of the milestone.
 * @param {Date} date - The date the milestone was created.
 * @param {Date} due_date - The due date of the milestone.
 * @param {string} status - The status of the milestone.
 * @description Updates an existing milestone.
 *
 * @method deleteMilestone
 * @param {number} id - The ID of the milestone to delete.
 * @description Removes a milestone.
 */

class MilestoneRepository {
    static async createMilestone(project_id, name, description, date, due_date, status) {
        try {
            const createdMilestone = await Milestone.create({ 
                project_id, name, description, date, due_date, status 
            });
            return createdMilestone;
        } catch (error) {
            console.error("Error creating milestone:", error);
            return { success: false, message: "Failed to create milestone." };
        }
    }

    static async updateMilestone(id, project_id, name, description, date, due_date, status) {
        try {
            await Milestone.update(
                { project_id, name, description, date, due_date, status },
                { where: { id } }
            );
            return { success: true, message: "Milestone updated successfully." };
        } catch (error) {
            console.error("Error updating milestone:", error);
            return { success: false, message: "Failed to update milestone." };
        }
    }

    static async deleteMilestone(id) {
        try {
            const deleted = await Milestone.destroy({ where: { id } });
            if (deleted === 0) {
                return { success: false, message: "No milestone found to delete." };
            }
            return { success: true, message: "Milestone deleted successfully." };
        } catch (error) {
            console.error("Error deleting milestone:", error);
            return { success: false, message: "Failed to delete milestone." };
        }
    }
}

module.exports = MilestoneRepository;