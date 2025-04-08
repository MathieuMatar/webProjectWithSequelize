const { Project, Employee, Contact, Service, Milestone, Task, syncDB, sequelize } = require('../models/associations');

/**
 * The ProjectRepository class handles database operations for the Project model.
 *
 * @method readProjects
 * @description Retrieves all projects including related Milestones, Employees, Contacts, Services, and Tasks.
 *
 * @method readProject
 * @param {number} id - The ID of the project to retrieve.
 * @description Retrieves a single project by ID including related Milestones, Employees, Contacts, Services, and Tasks.
 *
 * @method createProject
 * @param {string} name - The name of the project.
 * @param {string} description - The description of the project.
 * @param {number} client_id - The ID of the client the project belongs to.
 * @param {Date} start_date - The start date of the project.
 * @param {Date} deadline - The deadline of the project.
 * @param {string} status - The status of the project.
 * @param {string} overview - An overview of the project.
 * @param {string} files - Files associated with the project.
 * @description Creates a new project.
 *
 * @method updateProject
 * @param {number} id - The ID of the project to update.
 * @param {string} name - The name of the project.
 * @param {string} description - The description of the project.
 * @param {number} client_id - The ID of the client the project belongs to.
 * @param {Date} start_date - The start date of the project.
 * @param {Date} deadline - The deadline of the project.
 * @param {string} status - The status of the project.
 * @param {string} overview - An overview of the project.
 * @param {string} files - Files associated with the project.
 * @description Updates an existing project.
 *
 * @method deleteProject
 * @param {number} id - The ID of the project to delete.
 * @description Removes a project.
 *
 * @method assignEmployeeToProject
 * @param {number} project_id - The ID of the project.
 * @param {number} employee_id - The ID of the employee to assign.
 * @description Assigns an employee to a project.
 *
 * @method removeEmployeeFromProject
 * @param {number} project_id - The ID of the project.
 * @param {number} employee_id - The ID of the employee to remove.
 * @description Removes an employee from a project.
 *
 * @method associateContactWithProject
 * @param {number} project_id - The ID of the project.
 * @param {number} contact_id - The ID of the contact to associate.
 * @description Associates a contact with a project.
 *
 * @method removeContactFromProject
 * @param {number} project_id - The ID of the project.
 * @param {number} contact_id - The ID of the contact to remove.
 * @description Removes a contact from a project.
 *
 * @method linkServiceToProject
 * @param {number} project_id - The ID of the project.
 * @param {number} service_id - The ID of the service to link.
 * @description Links a service to a project.
 *
 * @method unlinkServiceFromProject
 * @param {number} project_id - The ID of the project.
 * @param {number} service_id - The ID of the service to unlink.
 * @description Unlinks a service from a project.
 */

class ProjectRepository {
    static async readProjects() {
        try {
            const projects = await Project.findAll({
                include: [
                    { model: Milestone },
                    { model: Employee },
                    { model: Contact },
                    { model: Service },
                    { model: Task }
                ]

            });
            return projects;
        } catch (error) {
            console.error("Error reading projects:", error);
            return { success: false, message: "Failed to read projects." };
        }
    }

    static async readProject(id) {
        try {
            const project = await Project.findByPk(id, {
                include: [
                    { model: Milestone },
                    { model: Employee },
                    { model: Contact },
                    { model: Service },
                    { model: Task }
                ]
            });
            return project;
        } catch (error) {
            console.error("Error reading project:", error);
            return { success: false, message: "Failed to read project." };
        }
    }


    static async createProject(name, description, client_id, start_date, deadline, status, overview, files) {
        try {
            const createdProject = await Project.create(
                { name, description, client_id, start_date, deadline, status, overview, files }
            );
            return createdProject;
        } catch (error) {
            console.error("Error creating project:", error);
            return { success: false, message: "Failed to create project." };
        }
    }

    static async updateProject(id, name, description, client_id, start_date, deadline, status, overview, files) {
        try {
            await Project.update(
                { name, description, client_id, start_date, deadline, status, overview, files },
                { where: { id } }
            );
            return { success: true, message: "Project updated successfully." };
        } catch (error) {
            console.error("Error updating project:", error);
            return { success: false, message: "Failed to update project." };
        }
    }

    static async deleteProject(id) {
        try {
            const deleted = await Project.destroy({ where: { id } });
            if (deleted === 0) {
                return { success: false, message: "No project found to delete." };
            }
            return { success: true, message: "Project deleted successfully." };
        } catch (error) {
            console.error("Error deleting project:", error);
            return { success: false, message: "Failed to delete project." };
        }
    }

    static async assignEmployeeToProject(project_id, employee_id) {
        try {
            const project = await Project.findByPk(project_id);
            const employee = await Employee.findByPk(employee_id);

            if (!project || !employee) {
                return { success: false, message: "Invalid project or employee ID." };
            }

            // Sequelize automatically creates this method from the belongsToMany association
            await project.addEmployee(employee);

            return { success: true, message: "Employee successfully assigned to project." };
        } catch (error) {
            console.error("Error assigning employee to project:", error);
            return { success: false, message: "Failed to assign employee to project." };
        }
    }

    static async removeEmployeeFromProject(project_id, employee_id) {
        try {
            const project = await Project.findByPk(project_id);
            const employee = await Employee.findByPk(employee_id);

            if (!project || !employee) {
                return { success: false, message: "Invalid project or employee ID." };
            }

            await project.removeEmployee(employee);

            return { success: true, message: "Employee removed from project." };
        } catch (error) {
            console.error("Error removing employee from project:", error);
            return { success: false, message: "Failed to remove employee from project." };
        }
    }

    static async associateContactWithProject(project_id, contact_id) {
        try {
            const project = await Project.findByPk(project_id);
            const contact = await Contact.findByPk(contact_id);

            if (!project || !contact) {
                return { success: false, message: "Invalid project or contact ID." };
            }

            await project.addContact(contact);
            return { success: true, message: "Contact associated with project." };
        } catch (error) {
            console.error("Error associating contact:", error);
            return { success: false, message: "Failed to associate contact." };
        }
    }


    static async removeContactFromProject(project_id, contact_id) {
        try {
            const project = await Project.findByPk(project_id);
            const contact = await Contact.findByPk(contact_id);

            if (!project || !contact) {
                return { success: false, message: "Invalid project or contact ID." };
            }

            await project.removeContact(contact);
            return { success: true, message: "Contact removed from project." };
        } catch (error) {
            console.error("Error removing contact:", error);
            return { success: false, message: "Failed to remove contact." };
        }
    }

    static async linkServiceToProject(project_id, service_id) {
        try {
            const project = await Project.findByPk(project_id);
            const service = await Service.findByPk(service_id);

            if (!project || !service) {
                return { success: false, message: "Invalid project or service ID." };
            }

            await project.addService(service);
            return { success: true, message: "Service linked to project." };
        } catch (error) {
            console.error("Error linking service:", error);
            return { success: false, message: "Failed to link service." };
        }
    }

    static async unlinkServiceFromProject(project_id, service_id) {
        try {
            const project = await Project.findByPk(project_id);
            const service = await Service.findByPk(service_id);

            if (!project || !service) {
                return { success: false, message: "Invalid project or service ID." };
            }

            await project.removeService(service);
            return { success: true, message: "Service unlinked from project." };
        } catch (error) {
            console.error("Error unlinking service:", error);
            return { success: false, message: "Failed to unlink service." };
        }
    }

}

module.exports = ProjectRepository;












/*
    static async readProjectTasks(project_id) {
        try {
            return await Task.findAll({ where: { project_id } });
        } catch (error) {
            console.error("Error reading project tasks:", error);
            return { success: false, message: "Failed to read project tasks." };
        }
    }

    static async readProjectEmployees(project_id) {
        try {
            const project = await Project.findByPk(project_id, {
                include: [Employee],
            });
            return project ? project.Employees : [];
        } catch (error) {
            console.error("Error reading project employees:", error);
            return { success: false, message: "Failed to read project employees." };
        }
    }

    static async assignEmployeeToProject(project_id, employee_id) {
        try {
            const project = await Project.findByPk(project_id);
            const employee = await Employee.findByPk(employee_id);
            if (!project || !employee) {
                return { success: false, message: "Invalid IDs." };
            }
            await project.addEmployee(employee);
            return { success: true, message: "Employee assigned to project." };
        } catch (error) {
            console.error("Error assigning employee:", error);
            return { success: false, message: "Failed to assign employee." };
        }
    }

    static async removeEmployeeFromProject(project_id, employee_id) {
        try {
            const project = await Project.findByPk(project_id);
            const employee = await Employee.findByPk(employee_id);
            if (!project || !employee) {
                return { success: false, message: "Invalid IDs." };
            }
            await project.removeEmployee(employee);
            return { success: true, message: "Employee removed from project." };
        } catch (error) {
            console.error("Error removing employee:", error);
            return { success: false, message: "Failed to remove employee." };
        }
    }

    static async readProjectServices(project_id) {
        try {
            const project = await Project.findByPk(project_id, {
                include: [Service],
            });
            return project ? project.Services : [];
        } catch (error) {
            console.error("Error reading project services:", error);
            return { success: false, message: "Failed to read project services." };
        }
    }

    static async linkServiceToProject(project_id, service_id) {
        try {
            const project = await Project.findByPk(project_id);
            const service = await Service.findByPk(service_id);
            if (!project || !service) {
                return { success: false, message: "Invalid IDs." };
            }
            await project.addService(service);
            return { success: true, message: "Service linked to project." };
        } catch (error) {
            console.error("Error linking service:", error);
            return { success: false, message: "Failed to link service." };
        }
    }

    static async unlinkServiceFromProject(project_id, service_id) {
        try {
            const project = await Project.findByPk(project_id);
            const service = await Service.findByPk(service_id);
            if (!project || !service) {
                return { success: false, message: "Invalid IDs." };
            }
            await project.removeService(service);
            return { success: true, message: "Service unlinked from project." };
        } catch (error) {
            console.error("Error unlinking service:", error);
            return { success: false, message: "Failed to unlink service." };
        }
    }

    static async readProjectContacts(project_id) {
        try {
            const project = await Project.findByPk(project_id, {
                include: [Contact],
            });
            return project ? project.Contacts : [];
        } catch (error) {
            console.error("Error reading project contacts:", error);
            return { success: false, message: "Failed to read project contacts." };
        }
    }

    static async associateContactWithProject(project_id, contact_id) {
        try {
            const project = await Project.findByPk(project_id);
            const contact = await Contact.findByPk(contact_id);
            if (!project || !contact) {
                return { success: false, message: "Invalid IDs." };
            }
            await project.addContact(contact);
            return { success: true, message: "Contact associated with project." };
        } catch (error) {
            console.error("Error associating contact:", error);
            return { success: false, message: "Failed to associate contact." };
        }
    }

    static async removeContactFromProject(project_id, contact_id) {
        try {
            const project = await Project.findByPk(project_id);
            const contact = await Contact.findByPk(contact_id);
            if (!project || !contact) {
                return { success: false, message: "Invalid IDs." };
            }
            await project.removeContact(contact);
            return { success: true, message: "Contact removed from project." };
        } catch (error) {
            console.error("Error removing contact:", error);
            return { success: false, message: "Failed to remove contact." };
        }
    }


*/
