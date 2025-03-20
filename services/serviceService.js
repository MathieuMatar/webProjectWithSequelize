const ServiceRepository = require('../repositories/serviceRepository');

class serviceService{
    static async createService(user){
        return ServiceRepository.createService(user);
    }
    

    static async readServices(){
        return ServiceRepository.readServices();
    }

    static async readService(id){
        return ServiceRepository.readService(id);
    }

    static async deleteService(id){
        return ServiceRepository.deleteService(id);
    }

    static async updateService(id, name, description, rate){
        return ServiceRepository.updateService(id, name, description, rate);
    }
}

module.exports = serviceService;