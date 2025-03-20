const express = require('express');
const projectController = require('../controllers/projectController');
const milestoneController = require('../controllers/milestoneController');
const { validateProject } = require('../validators/projectDTO');
const { validateMilestone } = require('../validators/milestoneDTO');

const router = express.Router();

router.get('/', projectController.getProjects);
router.post('/', validateProject, projectController.createProject);
router.get('/:id', projectController.getProject);
router.delete('/:id', projectController.deleteProject);
router.put('/:id', projectController.updateProject);


router.get('/:id/employees', projectController.getProjectEmployees);
router.post('/:id/employees/:employee_id', projectController.assignEmployeeToProject);
router.delete('/:id/employees/:employee_id', projectController.removeEmployeeFromProject);
router.get('/:id/services', projectController.getProjectServices);
router.post('/:id/services/:service_id', projectController.linkServiceToProject);
router.delete('/:id/services/:service_id', projectController.unlinkServiceFromProject);
router.get('/:id/contacts', projectController.getProjectContacts);
router.post('/:id/contacts/:contact_id', projectController.associateContactWithProject);
router.delete('/:id/contacts/:contact_id', projectController.removeContactFromProject);
router.get('/:id/milestones', milestoneController.getMilestonesForProject);
router.post('/:id/milestones', validateMilestone, milestoneController.createMilestone);
router.put('/milestones/:id', milestoneController.updateMilestone);
router.delete('/milestones/:id', milestoneController.deleteMilestone);


module.exports = router;

