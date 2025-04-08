const express = require('express');
const projectController = require('../controllers/projectController');
const milestoneController = require('../controllers/milestoneController');
const { validateProject, validateProjectId } = require('../validators/projectDTO');
const { validateMilestone } = require('../validators/milestoneDTO');

const router = express.Router();




/*
    static async assignEmployeeToProject(req, res) {
        try {
            const { project_id, employee_id } = req.params;
            const result = await projectService.assignEmployeeToProject(project_id, employee_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while assigning the employee to the project' });
        }
    }

    static async removeEmployeeFromProject(req, res) {
        try {
            const { project_id, employee_id } = req.params;
            const result = await projectService.removeEmployeeFromProject(project_id, employee_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while removing the employee from the project' });
        }
    }

    static async associateContactWithProject(req, res) {
        try {
            const { project_id, contact_id } = req.params;
            const result = await projectService.associateContactWithProject(project_id, contact_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while associating the contact with the project' });
        }
    }

    static async removeContactFromProject(req, res) {
        try {
            const { project_id, contact_id } = req.params;
            const result = await projectService.removeContactFromProject(project_id, contact_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while removing the contact from the project' });
        }
    }

    static async linkServiceToProject(req, res) {
        try {
            const { project_id, service_id } = req.params;
            const result = await projectService.linkServiceToProject(project_id, service_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while linking the service to the project' });
        }
    }

    static async unlinkServiceFromProject(req, res) {
        try {
            const { project_id, service_id } = req.params;
            const result = await projectService.unlinkServiceFromProject(project_id, service_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while unlinking the service from the project' });
        }
    }
*/






/**
GET /api/projects
Retrieves all projects from the database.

GET /api/projects/:id
Retrieves a specific project by ID.
@param {string} id - Project ID

POST /api/projects
Creates a new project.
Request body:
{
    name: string,
    description: string,
    client_id: int,
    start_date: date,
    deadline: date,
    overview: string,
    files: string
}

PUT /api/projects/:id
Updates an existing project by ID.
@param {string} id - Project ID
{
    name: string,
    description: string,
    client_id: int,
    start_date: date,
    deadline: date,
    overview: string,
    files: string
}

DELETE /api/projects/:id
Deletes a project by ID.
@param {string} id - Project ID



POST /api/projects/:project_id/employees/:employee_id
Assigns an employee to a project.
@param {string} project_id - Project ID
@param {string} employee_id - Employee ID

DELETE /api/projects/:project_id/employees/:employee_id
Unassigns an employee from a project.
@param {string} project_id - Project ID
@param {string} employee_id - Employee ID

POST /api/projects/:project_id/contacts/:contact_id
Associates a contact with a project.
@param {string} project_id - Project ID
@param {string} contact_id - Contact ID

DELETE /api/projects/:project_id/contacts/:contact_id
Removes a contact from a project.
@param {string} project_id - Project ID
@param {string} contact_id - Contact ID

POST /api/projects/:project_id/services/:service_id
Links a service to a project.
@param {string} project_id - Project ID
@param {string} service_id - Service ID

DELETE /api/projects/:project_id/services/:service_id
Unlinks a service from a project.
@param {string} project_id - Project ID
@param {string} service_id - Service ID



*/

router.get('/', projectController.getProjects);
router.post('/', validateProject, projectController.createProject);
router.get('/:id',validateProjectId, projectController.getProject);
router.delete('/:id',validateProjectId,  projectController.deleteProject);
router.put('/:id', validateProjectId, projectController.updateProject);


router.post('/:project_id/employees/:employee_id', projectController.assignEmployeeToProject);
router.delete('/:project_id/employees/:employee_id', projectController.removeEmployeeFromProject);
router.post('/:project_id/contacts/:contact_id', projectController.associateContactWithProject);
router.delete('/:project_id/contacts/:contact_id', projectController.removeContactFromProject);
router.post('/:project_id/services/:service_id', projectController.linkServiceToProject);
router.delete('/:project_id/services/:service_id', projectController.unlinkServiceFromProject);


//project id
router.post('/:id/milestones', validateMilestone, milestoneController.createMilestone);
router.put('/milestones/:id', milestoneController.updateMilestone);
router.delete('/milestones/:id', milestoneController.deleteMilestone);

module.exports = router;

