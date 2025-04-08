const ClientRepository = require('../repositories/clientRepository');
/**
 * Provides client-related operations.
 * @method readClients
 * @returns {Promise<Object[]>} A promise resolving to a list of all clients
 *
 * @method readClient
 * @param {number} id - Client identifier
 * @returns {Promise<Object|null>} A promise resolving to the fetched client or null
 *
 * @method createClient
 * @param {string} name
 * @param {string} email
 * @param {string} phone
 * @param {string} address
 * @param {string} type
 * @returns {Promise<Object>} A promise resolving to the newly created client
 *
 * @method readClientTypes
 * @returns {Promise<string[]>} A promise resolving to a list of client types
 *
 * @method updateClient
 * @param {number} id
 * @param {string} name
 * @param {string} email
 * @param {string} phone
 * @param {string} address
 * @param {string} type
 * @returns {Promise<Object>} A promise resolving to the updated client
 *
 * @method deleteClient
 * @param {number} id
 * @returns {Promise<void>} A promise resolving when deletion is complete
 */

class ClientService {
    static async readClients() {
        return await ClientRepository.readClients();
    }

    static async readClient(id) {
        return await ClientRepository.readClient(id);
    }

    static async createClient(name, email, phone, address, type) {
        return await ClientRepository.createClient(name, email, phone, address, type);
    }

    static async readClientTypes() {
        return await ClientRepository.readClientTypes();
    }

    static async updateClient(id, name, email, phone, address, type) {
        return await ClientRepository.updateClient(id, name, email, phone, address, type);
    }

    static async deleteClient(id) {
        return await ClientRepository.deleteClient(id);
    }
}

module.exports = ClientService;