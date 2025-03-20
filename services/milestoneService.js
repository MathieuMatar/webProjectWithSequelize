const MilestoneRepository = require('../repositories/milestoneRepository');

class MilestoneService {
    static async createMilestone(project_id, name, description, date, due_date, status) {
        return MilestoneRepository.createMilestone(project_id, name, description, date, due_date, status);
    }

    static async readMilestonesForProject(project_id) {
        return MilestoneRepository.readMilestonesForProject(project_id);
    }

    static async deleteMilestone(id) {
        return MilestoneRepository.deleteMilestone(id);
    }

    static async updateMilestone(id, project_id, name, description, date, due_date, status) {
        return MilestoneRepository.updateMilestone(id, project_id, name, description, date, due_date, status);
    }
}

module.exports = MilestoneService;