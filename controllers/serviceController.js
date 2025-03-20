const serviceService = require('../services/serviceService');

class ServiceController {
    static async createService(req, res) {
        try {
            const result = await serviceService.createService(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the service' });
        }
    }

    static async getServices(req, res) {
        try {
            const result = await serviceService.readServices();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the services' });
        }
    }

    static async getService(req, res) {
        try {
            const { id } = req.params;
            const result = await serviceService.readService(id);
            if (!result) {
                return res.status(404).json({ error: 'Service not found' });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the service' });
        }
    }

    static async deleteService(req, res) {
        try {
            const { id } = req.params;
            const result = await serviceService.deleteService(id);
            if (!result) {
                return res.status(404).json({ error: 'Service not found' });
            }
            res.status(200).json({ message: 'Service deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the service' });
        }
    }

    static async updateService(req, res) {
        try {
            const { id } = req.params;
            const { name, description, rate } = req.body;
            const result = await serviceService.updateService(id, name, description, rate);
            if (!result) {
                return res.status(404).json({ error: 'Service not found' });
            }
            res.status(200).json({ message: 'Service updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the service' });
        }
    }
}

module.exports = ServiceController;