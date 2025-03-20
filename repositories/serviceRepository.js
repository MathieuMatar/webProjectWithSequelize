const db = require('../config/db');
const Service = require('../models/serviceModel');

class ServiceRepository {
    static async createService(service) {
        const sql = `INSERT INTO service (service_id, name, description, rate) VALUES (?, ?, ?, ?)`;
        const params = [service.service_id, service.name, service.description, service.rate];
        try {
            await db.query(sql, params);
            return { success: true, message: "Service created successfully." };
        } catch (error) {
            console.error("Error creating service:", error);
            return { success: false, message: "Failed to create service." };
        }
    }

    static async updateService(service_id, name, description, rate) {
        const sql = `UPDATE service set 
        name = ?, 
        description = ?, 
        rate = ? WHERE service_id = ?`;
        const params = [name, description, rate, service_id];
        try {
            const [result] = await db.query(sql, params);
            return result;
        } catch (error) {
            console.error("Error updating service:", error);
            return { success: false, message: "Failed to update service." };
        }
    }

    static async readServices() {
        const sql = 'SELECT * FROM service';
        try {
            const rows = await db.query(sql);
            return rows.map(row => Service.fromRow(row));
        } catch (error) {
            console.error("Error reading services:", error);
            return { success: false, message: "Failed to read services." };
        }
    }

    static async readService(service_id) {
        const sql = `SELECT * FROM service WHERE service_id = ?`;
        try {
            const rows = await db.query(sql, [service_id]);
            if (rows.length === 0) return null;
            return Service.fromRow(rows[0]);
        } catch (error) {
            console.error("Error reading service:", error);
            return { success: false, message: "Failed to read service." };
        }
    }

    static async deleteService(service_id) {
        const sql = 'DELETE FROM service WHERE service_id = ?';
        try {
            const result = await db.query(sql, service_id);
            return result;
        } catch (error) {
            console.error("Error deleting service:", error);
            return { success: false, message: "Failed to delete service." };
        }
    }
}

module.exports = ServiceRepository;