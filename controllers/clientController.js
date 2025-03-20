const ClientService = require('../services/clientService');

class ClientController {
    static async createClient(req, res) {
        try {
            const result = await ClientService.createClient(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the client' });
        }
    }

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
}

module.exports = ClientController;