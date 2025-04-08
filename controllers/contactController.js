const ContactService = require('../services/contactService');

/**
 * Controller for handling contact-related operations.
 *
 * @class ContactController
 */

/**
 * Retrieves a list of contacts.
 *
 * @async
 * @function getContacts
 * @memberof ContactController
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the contacts have been retrieved or an error has occurred.
 * @throws {Error} An error occurred while retrieving the contacts.
 */

/**
 * Retrieves a specific contact by ID.
 *
 * @async
 * @function getContact
 * @memberof ContactController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the contact.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the contact data or an error message.
 * @throws {Error} An error occurred while retrieving the contact.
 */

/**
 * Creates a new contact.
 *
 * @async
 * @function createContact
 * @memberof ContactController
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The request payload.
 * @param {string|number} req.body.client_id - The ID of the client associated with the contact.
 * @param {string} req.body.name - The name of the contact.
 * @param {string} req.body.email - The email address of the contact.
 * @param {string} req.body.phone - The phone number of the contact.
 * @param {string} req.body.role - The role of the contact.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the contact has been created or an error occurred.
 * @throws {Error} An error occurred while creating the contact.
 */

/**
 * Updates an existing contact's information.
 *
 * @async
 * @function updateContact
 * @memberof ContactController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the contact.
 * @param {Object} req.body - The request payload.
 * @param {string|number} req.body.client_id - The updated ID of the client associated with the contact.
 * @param {string} req.body.name - The updated name of the contact.
 * @param {string} req.body.email - The updated email address of the contact.
 * @param {string} req.body.phone - The updated phone number of the contact.
 * @param {string} req.body.role - The updated role of the contact.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the contact has been updated, or a 404 error if the contact is not found.
 * @throws {Error} An error occurred while updating the contact.
 */

/**
 * Deletes a contact by their ID.
 *
 * @async
 * @function deleteContact
 * @memberof ContactController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the contact to be deleted.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the contact has been deleted, or a 404 error if the contact is not found.
 * @throws {Error} An error occurred while deleting the contact.
 */

class ContactController {
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

    static async createContact(req, res) {
        try {
            const { client_id, name, email, phone, role } = req.body;
            const result = await ContactService.createContact(client_id, name, email, phone, role);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the contact' });
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
}

module.exports = ContactController;