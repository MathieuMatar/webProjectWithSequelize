const Contact = require('../models/Contact');

/**
 * The ContactRepository class handles database operations for the Contact model.
 *
 * @method readContacts
 * @description Retrieves all contacts.
 *
 * @method readContact
 * @param {number} id - The ID of the contact to retrieve.
 * @description Retrieves a single contact by ID.
 *
 * @method createContact
 * @param {number} client_id - The client's ID.
 * @param {string} name - The contact's name.
 * @param {string} email - The contact's email.
 * @param {string} phone - The contact's phone.
 * @param {string} role - The contact's role.
 * @description Creates a new contact.
 *
 * @method updateContact
 * @param {number} id - The contact's ID.
 * @param {number} client_id - The client's ID.
 * @param {string} name - The contact's name.
 * @param {string} email - The contact's email.
 * @param {string} phone - The contact's phone.
 * @param {string} role - The contact's role.
 * @description Updates a contact.
 *
 * @method deleteContact
 * @param {number} id - The contact's ID.
 * @description Removes a contact.
 */

class ContactRepository {
    static async readContacts() {
        try {
            const contacts = await Contact.findAll();
            return contacts;
        } catch (error) {
            console.error("Error reading contacts:", error);
            return { success: false, message: "Failed to read contacts." };
        }
    }

    static async readContact(id) {
        try {
            const contact = await Contact.findByPk(id);
            return contact;
        } catch (error) {
            console.error("Error reading contact:", error);
            return { success: false, message: "Failed to read contact." };
        }
    }

    static async createContact(client_id, name, email, phone, role) {
        const createdContact = await Contact.create(
            { client_id, name, email, phone, role }
        );
        return createdContact;
    }

    static async updateContact(id, client_id, name, email, phone, role) {
        try {
            await Contact.update(
                { client_id, name, email, phone, role },
                { where: { id } }
            );
            return { success: true, message: "Contact updated successfully." };
        } catch (error) {
            console.error("Error updating contact:", error);
            return { success: false, message: "Failed to update contact." };
        }
    }

    static async deleteContact(id) {
        try {
            const deleted = await Contact.destroy({ where: { id } });
            if (deleted === 0) {
                return { success: false, message: "No contact found to delete." };
            }
            return { success: true, message: "Contact deleted successfully." };
        } catch (error) {
            console.error("Error deleting contact:", error);
            return { success: false, message: "Failed to delete contact." };
        }
    }
}

module.exports = ContactRepository;