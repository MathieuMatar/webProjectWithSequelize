const ServiceRepository = require('../repositories/serviceRepository');

/**
 * Provides service-related operations.
 *
 * @method readServices
 * @returns {Promise<Object[]>} A promise resolving to a list of services.
 *
 * @method readService
 * @param {number} id - Service identifier.
 * @returns {Promise<Object>} A promise resolving to the service details.
 *
 * @method createService
 * @param {string} name - The service name.
 * @param {string} description - The service description.
 * @param {number} rate - The service rate.
 * @param {number} duration - The service duration.
 * @param {string} status - The service status.
 * @returns {Promise<Object>} A promise resolving to the newly created service.
 *
 * @method updateService
 * @param {number} id - The service identifier.
 * @param {string} name - The service name.
 * @param {string} description - The service description.
 * @param {number} rate - The service rate.
 * @param {number} duration - The service duration.
 * @param {string} status - The service status.
 * @returns {Promise<Object>} A promise resolving to the updated service.
 *
 * @method deleteService
 * @param {number} id - The service identifier.
 * @returns {Promise<void>} A promise resolving when deletion is complete.
 */

class serviceService {
    static async readServices() {
        return ServiceRepository.readServices();
    }

    static async readService(id) {
        return ServiceRepository.readService(id);
    }

    static async createService(name, description, rate, duration, status) {
        return ServiceRepository.createService(name, description, rate, duration, status);
    }

    static async updateService(id, name, description, rate, duration, status) {
        return ServiceRepository.updateService(id, name, description, rate, duration, status);
    }

    static async deleteService(id) {
        return ServiceRepository.deleteService(id);
    }
}

module.exports = serviceService;