const ClientService = require('../services/clientService');

/**
 * Controller for handling client-related operations.
 *
 * @class ClientController
 */
 
/**
 * Retrieves a list of clients.
 *
 * @async
 * @function getClients
 * @memberof ClientController
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the clients have been retrieved or an error has occurred.
 * @throws {Error} An error occurred while retrieving the clients.
 */
 
/**
 * Retrieves a specific client by ID.
 *
 * @async
 * @function getClient
 * @memberof ClientController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the client.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the client data or an error message.
 * @throws {Error} An error occurred while retrieving the client.
 */
 
/**
 * Creates a new client.
 *
 * @async
 * @function createClient
 * @memberof ClientController
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The request payload.
 * @param {string} req.body.name - The name of the client.
 * @param {string} req.body.email - The email address of the client.
 * @param {string} req.body.phone - The phone number of the client.
 * @param {string} req.body.address - The address of the client.
 * @param {string} req.body.client_type - The type/category of the client.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the client has been created or an error occurred.
 * @throws {Error} An error occurred while creating the client.
 */
 
/**
 * Updates an existing client's information.
 *
 * @async
 * @function updateClient
 * @memberof ClientController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the client.
 * @param {Object} req.body - The request payload.
 * @param {string} req.body.name - The updated name of the client.
 * @param {string} req.body.email - The updated email address of the client.
 * @param {string} req.body.phone - The updated phone number of the client.
 * @param {string} req.body.address - The updated address of the client.
 * @param {string} req.body.client_type - The updated type/category of the client.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the client has been updated, or a 404 error if the client is not found.
 * @throws {Error} An error occurred while updating the client.
 */
 
/**
 * Deletes a client by their ID.
 *
 * @async
 * @function deleteClient
 * @memberof ClientController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the client to be deleted.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the client has been deleted, or a 404 error if the client is not found.
 * @throws {Error} An error occurred while deleting the client.
 */

class ClientController {
    static async getClients(req, res) {
        try {
            const result = await ClientService.readClients();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the clients' });
        }
    }

    static async getClient(req, res) {
        try {
            const { id } = req.params;
            const result = await ClientService.readClient(id);
            if (!result) {
                return res.status(404).json({ error: 'Client not found' });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the client' });
        }
    }

    static async createClient(req, res) {
        try {
            const { name, email, phone, address, client_type } = req.body;
            const result = await ClientService.createClient(name, email, phone, address, client_type);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the client' });
        }
    }

    static async updateClient(req, res) {
        try {
            const { id } = req.params;
            const { name, email, phone, address, client_type } = req.body;
            const result = await ClientService.updateClient(id, name, email, phone, address, client_type);
            if (!result) {
                return res.status(404).json({ error: 'Client not found' });
            }
            res.status(200).json({ message: 'Client updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the client' });
        }
    }

    static async deleteClient(req, res) {
        try {
            const { id } = req.params;
            const result = await ClientService.deleteClient(id);
            if (!result) {
                return res.status(404).json({ error: 'Client not found' });
            }
            res.status(200).json({ message: 'Client deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the client' });
        }
    }
}

module.exports = ClientController;