const ContactRepository = require('../repositories/contactRepository');

/**
 * Provides contact-related operations.
 * @method readContacts
 * @returns {Promise<Object[]>} A promise resolving to a list of all contacts
 *
 * @method readContact
 * @param {number} id - Contact identifier
 * @returns {Promise<Object|null>} A promise resolving to the fetched contact or null
 *
 * @method createContact
 * @param {number} client_id
 * @param {string} name
 * @param {string} email
 * @param {string} phone
 * @param {string} role
 * @returns {Promise<Object>} A promise resolving to the newly created contact
 *
 * @method updateContact
 * @param {number} id
 * @param {number} client_id
 * @param {string} name
 * @param {string} email
 * @param {string} phone
 * @param {string} role
 * @returns {Promise<Object>} A promise resolving to the updated contact
 *
 * @method deleteContact
 * @param {number} id
 * @returns {Promise<void>} A promise resolving when deletion is complete
 */

class ContactService {
    static async readContacts() {
        return await ContactRepository.readContacts();
    }

    static async readContact(id) {
        return await ContactRepository.readContact(id);
    }

    static async createContact(client_id, name, email, phone, role) {
        return await ContactRepository.createContact(client_id, name, email, phone, role);
    }

    static async updateContact(id, client_id, name, email, phone, role) {
        return await ContactRepository.updateContact(id, client_id, name, email, phone, role);
    }

    static async deleteContact(id) {
        return await ContactRepository.deleteContact(id);
    }
}

module.exports = ContactService;