const milestoneRepository = require('../repositories/milestoneRepository');

class MilestoneController {
    static async createMilestone(req, res) {
        try {
            const { id } = req.params;
            const { name, description, date, due_date, status } = req.body;
            const result = await milestoneRepository.createMilestone(id, name, description, date, due_date, status);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the milestone' });
        }
    }

    static async getMilestonesForProject(req, res) {
        try {
            const { id } = req.params;
            const result = await milestoneRepository.readMilestonesForProject(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the milestones' });
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
}

module.exports = MilestoneController;