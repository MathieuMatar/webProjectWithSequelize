const serviceService = require('../services/serviceService');

/**
 * Controller for handling service-related operations.
 *
 * @class ServiceController
 */

/**
 * Retrieves a list of services.
 *
 * @async
 * @function getServices
 * @memberof ServiceController
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the list of services or an error message.
 * @throws {Error} An error occurred while retrieving the services.
 */

/**
 * Retrieves a specific service by its unique identifier.
 *
 * @async
 * @function getService
 * @memberof ServiceController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the service.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the service details or an error message.
 * @throws {Error} An error occurred while retrieving the service.
 */

/**
 * Creates a new service.
 *
 * @async
 * @function createService
 * @memberof ServiceController
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The request payload containing service details.
 * @param {string} req.body.name - The name of the service.
 * @param {string} req.body.description - The description of the service.
 * @param {number|string} req.body.rate - The rate of the service.
 * @param {number|string} req.body.duration - The duration of the service.
 * @param {string} req.body.status - The current status of the service.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the service is created or with an error message.
 * @throws {Error} An error occurred while creating the service.
 */

/**
 * Updates an existing service.
 *
 * @async
 * @function updateService
 * @memberof ServiceController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the service to be updated.
 * @param {Object} req.body - The request payload containing updated service details.
 * @param {string} req.body.name - The updated name of the service.
 * @param {string} req.body.description - The updated description of the service.
 * @param {number|string} req.body.rate - The updated rate of the service.
 * @param {number|string} req.body.duration - The updated duration of the service.
 * @param {string} req.body.status - The updated status of the service.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the service is updated or with a 404 error if not found.
 * @throws {Error} An error occurred while updating the service.
 */

/**
 * Deletes a service.
 *
 * @async
 * @function deleteService
 * @memberof ServiceController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the service to be deleted.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the service is deleted or with a 404 error if not found.
 * @throws {Error} An error occurred while deleting the service.
 */


class ServiceController {
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

    static async createService(req, res) {
        try {
            const { name, description, rate, duration, status } = req.body;
            const result = await serviceService.createService(name, description, rate, duration, status);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the service' });
        }
    }

    static async updateService(req, res) {
        try {
            const { id } = req.params;
            const { name, description, rate, duration, status } = req.body;
            const result = await serviceService.updateService(id, name, description, rate, duration, status);
            if (!result) {
                return res.status(404).json({ error: 'Service not found' });
            }
            res.status(200).json({ message: 'Service updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the service' });
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
}

module.exports = ServiceController;