const db = require('../config/db');
const Client = require('../models/clientModel');

class ClientRepository {
    static async createClient(client) {
        const sql = `INSERT INTO client (client_id, name, email, phone, address, client_type) VALUES (?, ?, ?, ?, ?, ?)`;
        const params = [client.client_id, client.name, client.email, client.phone, client.address, client.client_type];
        try {
            await db.query(sql, params);
            return { success: true, message: "Client created successfully." };
        } catch (error) {
            console.error("Error creating client:", error);
            return { success: false, message: "Failed to create client." };
        }
    }

    static async updateClient(client_id, name, email, phone, address, client_type) {
        const sql = `UPDATE client SET name = ?, email = ?, phone = ?, address = ?, client_type = ? WHERE client_id = ?`;
        const params = [name, email, phone, address, client_type, client_id];
        try {
            await db.query(sql, params);
            return { success: true, message: "Client updated successfully." };
        } catch (error) {
            console.error("Error updating client:", error);
            return { success: false, message: "Failed to update client." };

        }
    }

    // get client tyes, return them as array
    static async readClientTypes() {
        const sql = 'SHOW COLUMNS FROM client LIKE "client_type"';
        try {
            const rows = await db.query(sql);
            return rows[0].Type.match(/'([^']+)'/g).map(type => type.replace(/'/g, ''));
        } catch (error) {
            console.error("Error reading client types:", error);
            return { success: false, message: "Failed to read client types." };
        }
    }

    static async readClients() {
        const sql = 'SELECT * FROM client';
        try {
            const rows = await db.query(sql);
            return rows.map(row => Client.fromRow(row));
        } catch (error) {
            console.error("Error reading clients:", error);
            return { success: false, message: "Failed to read clients." };
        }
    }

    static async readClient(client_id) {
        const sql = `SELECT * FROM client WHERE client_id = ?`;
        try {
            const rows = await db.query(sql, [client_id]);
            if (rows.length === 0) return null;
            return Client.fromRow(rows[0]);
        } catch (error) {
            console.error("Error reading client:", error);
            return { success: false, message: "Failed to read client." };
        }
    }

    static async deleteClient(client_id) {
        const sql = 'DELETE FROM client WHERE client_id = ?';
        try {
            const result = await db.query(sql, client_id);
            return result;
        }
        catch (error) {
            console.error("Error deleting client:", error);
            return { success: false, message: "Failed to delete client." };
        }
    }
}

module.exports = ClientRepository;