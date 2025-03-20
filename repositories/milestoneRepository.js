const db = require('../config/db');
const Milestone = require('../models/milestoneModel');

class MilestoneRepository {
    static async createMilestone(project_id, name, description, date, due_date, status) {
        const sql = `INSERT INTO milestone (project_id, name, description, date, due_date, status) VALUES (?, ?, ?, ?, ? ,?)`;
        const params = [project_id, name, description, date, due_date, status];
        try {
            await db.query(sql, params);
            return {sucess: true, message: 'Milestone created successfully'};
        }
        catch (error) {
            console.error("Error creating milestone: ", error);
            return {sucess: false, message: 'Error creating milestone'};
        }
    }

    static async readMilestonesForProject(project_id) {
        const query = `SELECT * FROM milestone WHERE project_id = ?`;
        const values = [project_id];
        try {
            const rows = await db.query(query, values);
            return rows.map(row => Milestone.fromRow(row));
        }
        catch (error) {
            console.error("Error reading milestones: ", error);
            return {sucess: false, message: 'Error reading milestones'};
        }
    }


    static async deleteMilestone(id) {
        const query = `DELETE FROM milestone WHERE milestone_id = ?`;
        const values = [id];
        try {
            await db.query(query, values);
            return {sucess: true, message: 'Milestone deleted successfully'};
        }
        catch (error) {
            console.error("Error deleting milestone: ", error);
            return {sucess: false, message: 'Error deleting milestone'};
        }
    }

    static async updateMilestone(id, project_id, name, description, date, due_date, status) {
        const query = `UPDATE milestone SET project_id = ?, name = ?, description = ?, date = ?, due_date = ?, status = ? WHERE milestone_id = ?`;
        const values = [project_id, name, description, date, due_date, status, id];
        try {
            await db.query(query, values);
            return {sucess: true, message: 'Milestone updated successfully'};
        }
        catch (error) {
            console.error("Error updating milestone: ", error);
            return {sucess: false, message: 'Error updating milestone'};
        }
    }
}

module.exports = MilestoneRepository;