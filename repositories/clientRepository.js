const Client = require('../models/Client');

/**
 * The ClientRepository class handles database operations for the Client model.
 *
 * @method readClients
 * @description Retrieves all clients.
 *
 * @method readClient
 * @param {number} id - The ID of the client to retrieve.
 * @description Retrieves a single client by ID.
 *
 * @method createClient
 * @param {string} name - The name of the client.
 * @param {string} email - The email address of the client.
 * @param {string} phone - The phone number of the client.
 * @param {string} address - The address of the client.
 * @param {string} type - The type of the client (e.g., 'Individual', 'Corporate').
 * @description Creates a new client in the database.
 *
 * @method updateClient
 * @param {number} id - The ID of the client to update.
 * @param {string} name - The name of the client.
 * @param {string} email - The email address of the client.
 * @param {string} phone - The phone number of the client.
 * @param {string} address - The address of the client.
 * @param {string} type - The type of the client (e.g., 'Individual', 'Corporate').
 * @description Updates an existing client in the database.
 *
 * @method readClientTypes
 * @description Retrieves the client types from the database.
 *
 * @method deleteClient
 * @param {number} id - The ID of the client to delete.
 * @description Removes a client by ID.
 */

class ClientRepository {
    static async readClients() {
        try {
            const clients = await Client.findAll();
            return clients;
        } catch (error) {
            console.error("Error reading clients:", error);
            return { success: false, message: "Failed to read clients." };
        }
    }

    static async readClient(id) {
        try {
            const client = await Client.findByPk(id);
            return client;
        } catch (error) {
            console.error("Error reading client:", error);
            return { success: false, message: "Failed to read client." };
        }
    }

    static async createClient(name, email, phone, address, type) {
        try {
            const createdClient = await Client.create(
                { name, email, phone, address, type }
            );
            return createdClient;
        } catch (error) {
            console.error("Error creating client:", error);
            return { success: false, message: "Failed to create client." };
        }
    }

    static async updateClient(id, name, email, phone, address, type) {
        try {
            await Client.update(
                { name, email, phone, address, type },
                { where: { id } }
            );
            return { success: true, message: "Client updated successfully." };
        } catch (error) {
            console.error("Error updating client:", error);
            return { success: false, message: "Failed to update client." };
        }
    }

    static async readClientTypes() {
        try {
            const clientTypes = await Client.getAttributes().type.values;
            return clientTypes;
        } catch (error) {
            console.error("Error reading client types:", error);
            return { success: false, message: "Failed to read client types." };
        }
    }

    static async deleteClient(id) {
        try {
            const deleted = await Client.destroy({ where: { id } });
            if (deleted === 0) {
                return { success: false, message: "No client found to delete." };
            }
            return { success: true, message: "Client deleted successfully." };
        } catch (error) {
            console.error("Error deleting client:", error);
            return { success: false, message: "Failed to delete client." };
        }
    }
}

module.exports = ClientRepository;