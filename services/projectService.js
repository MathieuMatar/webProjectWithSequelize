const ProjectRepository = require('../repositories/projectRepository');

class projectService{
    static async createProject(project){
        return ProjectRepository.createProject(project);
    }
    

    static async readProjects(){
        return ProjectRepository.readProjects();
    }

    static async readProject(id){
        return ProjectRepository.readProject(id);
    }

    static async deleteProject(id){
        return ProjectRepository.deleteProject(id);
    }

    static async updateProject(id, name, description, client_id, start_date, deadline, status, overview, files){
        return ProjectRepository.updateProject(id, name, description, client_id, start_date, deadline, status, overview, files);
    }

        /*
GET /api/projects/:id/employees → Get all employees for a project  function readProjectEmployees(project_id)  
POST /api/projects/:id/employees/:employee_id → Assign an employee to a project function assignEmployeeToProject(project_id, employee_id)
DELETE /api/projects/:id/employees/:employee_id → Remove an employee from a project function removeEmployeeFromProject(project_id, employee_id)
GET /api/projects/:id/services → Get all services for a project function readProjectServices(project_id)
POST /api/projects/:id/services/:service_id → Link a service to a project function linkServiceToProject(project_id, service_id)
DELETE /api/projects/:id/services/:service_id → Remove a service from a project function unlinkServiceFromProject(project_id, service_id)
GET /api/projects/:id/contacts → Get all contacts for a project function readProjectContacts(project_id)
POST /api/projects/:id/contacts/:contact_id → Associate a contact with a project function associateContactWithProject(project_id, contact_id)
DELETE /api/projects/:id/contacts/:contact_id → Remove a contact from a project function removeContactFromProject(project_id, contact_id)
    */

    static async readProjectEmployees(project_id){
        return ProjectRepository.readProjectEmployees(project_id);
    }

    static async assignEmployeeToProject(project_id, employee_id){
        return ProjectRepository.assignEmployeeToProject(project_id, employee_id);
    }

    static async removeEmployeeFromProject(project_id, employee_id){
        return ProjectRepository.removeEmployeeFromProject(project_id, employee_id);
    }

    static async readProjectServices(project_id){
        return ProjectRepository.readProjectServices(project_id);
    }

    static async linkServiceToProject(project_id, service_id){
        return ProjectRepository.linkServiceToProject(project_id, service_id);
    }

    static async unlinkServiceFromProject(project_id, service_id){
        return ProjectRepository.unlinkServiceFromProject(project_id, service_id);
    }

    static async readProjectContacts(project_id){
        return ProjectRepository.readProjectContacts(project_id);
    }

    static async associateContactWithProject(project_id, contact_id){
        return ProjectRepository.associateContactWithProject(project_id, contact_id);
    }

    static async removeContactFromProject(project_id, contact_id){
        return ProjectRepository.removeContactFromProject(project_id, contact_id);
    }



}

module.exports = projectService;

