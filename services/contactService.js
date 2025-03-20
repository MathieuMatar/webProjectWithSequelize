const ContactRepository = require('../repositories/contactRepository');

class ContactService {
    static async createContact(contact) {
        return ContactRepository.createContact(contact);
    }

    static async readContacts() {
        return ContactRepository.readContacts();
    }

    static async readContact(contact_id) {
        return ContactRepository.readContact(contact_id);
    }

    static async updateContact(contact_id, client_id, name, email, phone, role) {
        return ContactRepository.updateContact(contact_id, client_id, name, email, phone, role);
    }

    static async deleteContact(contact_id) {
        return ContactRepository.deleteContact(contact_id);
    }
}

module.exports = ContactService;