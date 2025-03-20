const db = require('../config/db');
const Project = require('../models/projectModel');

class ProjectRepository {
    static async createProject(project) {
        const sql = `INSERT INTO project (project_id, name, description, client_id, start_date, deadline, status, overview, files) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;  // 9 placeholders

        const params = [project.project_id, project.name, project.description, project.client_id, project.start_date, project.deadline, project.status, project.overview, project.files];
        console.log("project", project, "params\n", params);
        try {
            await db.query(sql, params);
            return { success: true, message: "Project created successfully." };
        } catch (error) {
            console.error("Error creating project:", error);
            return { success: false, message: "Failed to create project." };
        }
    }

    static async updateProject(project_id, name, description, client_id, start_date, deadline, status, overview, files) {
        const sql = `UPDATE project set 
        name = ?, 
        description = ?, 
        client_id = ?, 
        start_date = ?, 
        deadline = ?, 
        status = ?, 
        overview = ?, 
        files = ?
        WHERE project_id = ?`;
        const params = [name, description, client_id, start_date, deadline, status, overview, files, project_id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            console.error("Error updating project:", error);
            return { success: false, message: "Failed to update project." };
        }
    }

    static async readProjects() {
        const sql = 'SELECT * FROM project';
        try {
            const rows = await db.query(sql);
            return rows.map(row => Project.fromRow(row));
        } catch (error) {
            console.error("Error reading projects:", error);
            return { success: false, message: "Failed to read projects." };
        }
    }

    static async readProject(project_id) {
        const sql = `SELECT * FROM project WHERE project_id = ?`;
        try {
            const rows = await db.query(sql, [project_id]);
            if (rows.length === 0) return null;
            return Project.fromRow(rows[0]);
        } catch (error) {
            console.error("Error reading project:", error);
            return { success: false, message: "Failed to read project." };
        }
    }

    static async deleteProject(project_id) {
        const sql = 'DELETE FROM project WHERE project_id = ?';
        try {
            const result = await db.query(sql, project_id);
            return result;
        } catch (error) {
            console.error("Error deleting project:", error);
            return { success: false, message: "Failed to delete project." };
        }
    }

    static async readProjectTasks(project_id) {
        const sql = `SELECT * FROM task WHERE project_id = ?`;
        try {
            const rows = await db.query(sql, [project_id]);
            return rows.map(row => Task.fromRow(row));
        } catch (error) {
            console.error("Error reading project tasks:", error);
            return { success: false, message: "Failed to read project tasks." };
        }
    }

    static async readProjectEmployees(project_id) {
        const sql = `SELECT * FROM employee WHERE project_id = ?`;
        try {
            const rows = await db.query(sql, [project_id]);
            return rows.map(row => Employee.fromRow(row));
        } catch (error) {
            console.error("Error reading project employees:", error);
            return { success: false, message: "Failed to read project employees." };
        }
    }

    static async readProjectEmployees(project_id) {
        const sql = `SELECT employee_id FROM project_employee WHERE project_id = ?`;
        try {
            const rows = await db.query(sql, [project_id]);
            const employeeIds = rows.map(row => row.employee_id);
            return employeeIds;
        } catch (error) {
            console.error("Error reading project employees:", error);
            return { success: false, message: "Failed to read project employees." };
        }
    }

    static async assignEmployeeToProject(project_id, employee_id) {
        const sql = `INSERT INTO project_employee (project_id, employee_id) VALUES (?, ?)`;
        try {
            await db.query(sql, [project_id, employee_id]);
            return { success: true, message: "Employee assigned to project successfully." };
        } catch (error) {
            console.error("Error assigning employee to project:", error);
            return { success: false, message: "Failed to assign employee to project." };
        }
    }

    static async removeEmployeeFromProject(project_id, employee_id) {
        const sql = `DELETE FROM project_employee WHERE project_id = ? AND employee_id = ?`;
        try {
            await db.query(sql, [project_id, employee_id]);
            return { success: true, message: "Employee removed from project successfully." };
        } catch (error) {
            console.error("Error removing employee from project:", error);
            return { success: false, message: "Failed to remove employee from project." };
        }
    }

    static async readProjectServices(project_id) {
        const sql = `SELECT service_id FROM project_service WHERE project_id = ?`;
        try {
            const rows = await db.query(sql, [project_id]);
            //services will be returned as array
            const serviceIds = rows.map(row => row.service_id);
            return serviceIds;
        } catch (error) {
            console.error("Error reading project services:", error);
            return { success: false, message: "Failed to read project services." };
        }
    }

    static async linkServiceToProject(project_id, service_id) {
        const sql = `INSERT INTO project_service (project_id, service_id) VALUES (?, ?)`;
        try {
            await db.query(sql, [project_id, service_id]);
            return { success: true, message: "Service linked to project successfully." };
        } catch (error) {
            console.error("Error linking service to project:", error);
            return { success: false, message: "Failed to link service to project." };
        }
    }

    static async unlinkServiceFromProject(project_id, service_id) {
        const sql = `DELETE FROM project_service WHERE project_id = ? AND service_id = ?`;
        try {
            await db.query(sql, [project_id, service_id]);
            return { success: true, message: "Service unlinked from project successfully." };
        } catch (error) {
            console.error("Error unlinking service from project:", error);
            return { success: false, message: "Failed to unlink service from project." };
        }
    }

    static async readProjectContacts(project_id) {
        const sql = `SELECT contact_id FROM project_contact WHERE project_id = ?`;
        try {
            const rows = await db.query(sql, [project_id]);
            const contactIds = rows.map(row => row.contact_id);
            return contactIds;
        } catch (error) {
            console.error("Error reading project contacts:", error);
            return { success: false, message: "Failed to read project contacts." };
        }
    }

    static async associateContactWithProject(project_id, contact_id) {
        const sql = `INSERT INTO project_contact (project_id, contact_id) VALUES (?, ?)`;
        try {
            await db.query(sql, [project_id, contact_id]);
            return { success: true, message: "Contact associated with project successfully." };
        } catch (error) {
            console.error("Error associating contact with project:", error);
            return { success: false, message: "Failed to associate contact with project." };
        }
    }

    static async removeContactFromProject(project_id, contact_id) {
        const sql = `DELETE FROM project_contact WHERE project_id = ? AND contact_id = ?`;
        try {
            await db.query(sql, [project_id, contact_id]);
            return { success: true, message: "Contact removed from project successfully." };
        } catch (error) {
            console.error("Error removing contact from project:", error);
            return { success: false, message: "Failed to remove contact from project." };
        }
    }
}

module.exports = ProjectRepository;