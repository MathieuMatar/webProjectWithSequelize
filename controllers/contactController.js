const ContactService = require('../services/contactService');

class ContactController {
    static async createContact(req, res) {
        try {
            const result = await ContactService.createContact(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the contact' });
        }
    }

    static async getContacts(req, res) {
        try {
            const result = await ContactService.readContacts();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the contacts' });
        }
    }

    static async getContact(req, res) {
        try {
            const { id } = req.params;
            const result = await ContactService.readContact(id);
            if (!result) {
                return res.status(404).json({ error: 'Contact not found' });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the contact' });
        }
    }

    static async deleteContact(req, res) {
        try {
            const { id } = req.params;
            const result = await ContactService.deleteContact(id);
            if (!result) {
                return res.status(404).json({ error: 'Contact not found' });
            }
            res.status(200).json({ message: 'Contact deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the contact' });
        }
    }

    static async updateContact(req, res) {
        try {
            const { id } = req.params;
            const { client_id, name, email, phone, role } = req.body;
            const result = await ContactService.updateContact(id, client_id, name, email, phone, role);
            if (!result) {
                return res.status(404).json({ error: 'Contact not found' });
            }
            res.status(200).json({ message: 'Contact updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the contact' });
        }
    }
}

module.exports = ContactController;