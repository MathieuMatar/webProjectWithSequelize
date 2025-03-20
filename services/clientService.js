const ClientRepository = require('../repositories/clientRepository');

class ClientService {
    static async createClient(client) {
        return ClientRepository.createClient(client);
    }

    static async readClients() {
        return ClientRepository.readClients();
    }

    static async readClient(client_id) {
        return ClientRepository.readClient(client_id);
    }

    static async readClientTypes() {
        return ClientRepository.readClientTypes();
    }

    static async updateClient(client_id, name, email, phone, address, client_type) {
        return ClientRepository.updateClient(client_id, name, email, phone, address, client_type);
    }

    static async deleteClient(client_id) {
        return ClientRepository.deleteClient(client_id);
    }
}

module.exports = ClientService;