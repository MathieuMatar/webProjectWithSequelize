const express = require('express');
const serviceController = require('../controllers/serviceController');
const { validateService, validateServiceId } = require('../validators/serviceDTO');

const router = express.Router();

/**

GET /api/services
Retrieves all services from the database.

GET /api/services/:id
Retrieves a specific service by ID.
@param {string} id - Service ID

POST /api/services
Creates a new service.
Request body:
{
  name: string,
  description: string,
  rate: number,
  duration: number,
  status: ENUM('Active', 'Inactive', 'Pending')
}

PUT /api/services/:id
Updates an existing service by ID.
@param {string} id - Service ID
{
  name: string,
  description: string,
  rate: number,
  duration: number,
  status: ENUM('Active', 'Inactive', 'Pending')
}

DELETE /api/services/:id
Deletes a service by ID.
@param {string} id - Service ID

 */

router.get('/', serviceController.getServices);
router.post('/', validateService, serviceController.createService);
router.get('/:id', validateServiceId, serviceController.getService);
router.delete('/:id', validateServiceId, serviceController.deleteService);
router.put('/:id', validateService, serviceController.updateService);

module.exports = router;