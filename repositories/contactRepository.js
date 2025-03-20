const db = require('../config/db');
const Contact = require('../models/contactModel');

class ContactRepository {
    static async createContact(contact) {
        const sql = `INSERT INTO contact (contact_id, client_id, name, email, phone, role) VALUES (?, ?, ?, ?, ?, ?)`;
        const params = [contact.contact_id, contact.client_id, contact.name, contact.email, contact.phone, contact.role];
        try {
            await db.query(sql, params);
            return { success: true, message: "Contact created successfully." };
        } catch (error) {
            console.error("Error creating contact:", error);
            return { success: false, message: "Failed to create contact." };
        }
    }

    static async updateContact(contact_id, client_id, name, email, phone, role) {
        const sql = `UPDATE contact SET client_id = ?, name = ?, email = ?, phone = ?, role = ? WHERE contact_id = ?`;
        const params = [client_id, name, email, phone, role, contact_id];
        try {
            await db.query(sql, params);
            return { success: true, message: "Contact updated successfully." };
        } catch (error) {
            console.error("Error updating contact:", error);
            return { success: false, message: "Failed to update contact." };

        }
    }

    static async readContacts() {
        const sql = 'SELECT * FROM contact';
        try {
            const rows = await db.query(sql);
            return rows.map(row => Contact.fromRow(row));
        } catch (error) {
            console.error("Error reading contacts:", error);
            return { success: false, message: "Failed to read contacts." };
        }
    }

    static async readContact(contact_id) {
        const sql = `SELECT * FROM contact WHERE contact_id = ?`;
        try {
            const rows = await db.query(sql, [contact_id]);
            if (rows.length === 0) return null;
            return Contact.fromRow(rows[0]);
        } catch (error) {
            console.error("Error reading contact:", error);
            return { success: false, message: "Failed to read contact." };
        }
    }

    static async deleteContact(contact_id) {
        const sql = 'DELETE FROM contact WHERE contact_id = ?';
        try {
            const result = await db.query(sql, contact_id);
            return result;
        }
        catch (error) {
            console.error("Error deleting contact:", error);
            return { success: false, message: "Failed to delete contact." };
        }

    }



}

module.exports = ContactRepository;