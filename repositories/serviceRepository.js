const Service = require('../models/Service');

/**
 * The ServiceRepository class handles database operations for the Service model.
 *
 * @method readServices
 * @description Retrieves all services.
 *
 * @method readService
 * @param {number} id - The ID of the service to retrieve.
 * @description Retrieves a single service by ID.
 *
 * @method createService
 * @param {string} name - The name of the service.
 * @param {string} description - The description of the service.
 * @param {number} rate - The rate of the service.
 * @param {number} duration - The duration of the service.
 * @param {string} status - The status of the service (e.g., 'Active', 'Inactive').
 * @description Creates a new service in the database.
 *
 * @method updateService
 * @param {number} id - The ID of the service to update.
 * @param {string} name - The name of the service.
 * @param {string} description - The description of the service.
 * @param {number} rate - The rate of the service.
 * @param {number} duration - The duration of the service.
 * @param {string} status - The status of the service (e.g., 'Active', 'Inactive').
 * @description Updates an existing service in the database.
 *
 * @method deleteService
 * @param {number} id - The ID of the service to delete.
 * @description Removes a service by ID.
 */

class ServiceRepository {

    static async readServices() {
        try {
            return await Service.findAll();
        } catch (error) {
            console.error(error);
            return { success: false, message: "Failed to read services." };
        }
    }

    static async readService(id) {
        try {
            return await Service.findByPk(id);
        } catch (error) {
            console.error(error);
            return { success: false, message: "Failed to read service." };
        }
    }

    static async createService(name, description, rate, duration, status) {
        try {
            const newService = await Service.create(
                { name, description, rate, duration, status }
            );
            return newService;
        } catch (error) {
            console.error(error);
            return { success: false, message: "Failed to create service." };
        }
    }

    static async updateService(id, name, description, rate, duration, status) {
        try {
            await Service.update(
                { name, description, rate, duration, status },
                { where: { id } }
            );
            return { success: true, message: "Service updated successfully." };
        } catch (error) {
            console.error(error);
            console.error("Error updating service:", error);
            return { success: false, message: "Failed to update service." };
        }
    }

    static async deleteService(id) {
        try {
            const deleted = await Service.destroy({ where: { id } });
            if (deleted === 0) {
                return { success: false, message: "No service found to delete." };
            }
            return { success: true };
        } catch (error) {
            console.error(error);
            return { success: false, message: "Failed to delete service." };
        }
    }
}

module.exports = ServiceRepository;
