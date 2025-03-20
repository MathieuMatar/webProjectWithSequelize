const projectService = require('../services/projectService');

class ProjectController {
    static async createProject(req, res) {
        try {
            const result = await projectService.createProject(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the project' });
        }
    }

    static async getProjects(req, res) {
        try {
            const result = await projectService.readProjects();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the projects' });
        }
    }

    static async getProject(req, res) {
        try {
            const { id } = req.params;
            const result = await projectService.readProject(id);
            if (!result) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the project' });
        }
    }

    static async deleteProject(req, res) {
        try {
            const { id } = req.params;
            const result = await projectService.deleteProject(id);
            if (!result) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.status(200).json({ message: 'Project deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the project' });
        }
    }

    static async updateProject(req, res) {
        try {
            const { id } = req.params;
            const { name, description, client_id, start_date, deadline, status, overview, files } = req.body;
            const result = await projectService.updateProject(id, name, description, client_id, start_date, deadline, status, overview, files);
            if (!result) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.status(200).json({ message: 'Project updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the project' });
        }
    }

    static async getProjectEmployees(req, res) {
        try {
            const { id } = req.params;
            const result = await projectService.readProjectEmployees(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the project employees' });
        }
    }

    static async assignEmployeeToProject(req, res) {
        try {
            const { id, employee_id } = req.params;
            const result = await projectService.assignEmployeeToProject(id, employee_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while assigning the employee to the project' });
        }
    }

    static async removeEmployeeFromProject(req, res) {
        try {
            const { id, employee_id } = req.params;
            const result = await projectService.removeEmployeeFromProject(id, employee_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while removing the employee from the project' });
        }
    }

    static async getProjectServices(req, res) {
        try {
            const { id } = req.params;
            const result = await projectService.readProjectServices(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the project services' });
        }
    }

    static async linkServiceToProject(req, res) {
        try {
            const { id, service_id } = req.params;
            const result = await projectService.linkServiceToProject(id, service_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while linking the service to the project' });
        }
    }

    static async unlinkServiceFromProject(req, res) {
        try {
            const { id, service_id } = req.params;
            const result = await projectService.unlinkServiceFromProject(id, service_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while unlinking the service from the project' });
        }
    }

    static async getProjectContacts(req, res) {
        try {
            const { id } = req.params;
            const result = await projectService.readProjectContacts(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the project contacts' });
        }
    }

    static async associateContactWithProject(req, res) {
        try {
            const { id, contact_id } = req.params;
            const result = await projectService.associateContactWithProject(id, contact_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while associating the contact with the project' });
        }
    }

    static async removeContactFromProject(req, res) {
        try {
            const { id, contact_id } = req.params;
            const result = await projectService.removeContactFromProject(id, contact_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while removing the contact from the project' });
        }
    }


}

module.exports = ProjectController;