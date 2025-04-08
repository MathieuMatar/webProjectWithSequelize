const express = require('express');
const clientController = require('../controllers/clientController');
const taskController = require('../controllers/taskController');
const { validateClient, validateClientId } = require('../validators/clientDTO');

const router = express.Router();

/**
GET /api/clients
Retrieves all clients from the database.

GET /api/clients/:id
Retrieves a specific client by ID.
@param {string} id - Client ID

POST /api/clients
Creates a new client.
Request body:
{
  name: string,
  email: string,
  phone: string,
  address: string,
  client_type: ENUM('Corporate', 'Hospitality', 'Religious', 'Retail','NonProfit','Startup', 'ECommerce','Healthcare','PersonalBrand')
}

PUT /api/clients/:id
Updates an existing client by ID.
@param {string} id - Client ID
{
  name: string,
  email: string,
  phone: string,
  address: string,
  client_type: ENUM('Corporate', 'Hospitality', 'Religious', 'Retail','NonProfit','Startup', 'ECommerce','Healthcare','PersonalBrand')
}

DELETE /api/clients/:id
Deletes a client by ID.
@param {string} id - Client ID

*/



router.get('/', clientController.getClients);
router.post('/', validateClient, clientController.createClient);
router.get('/:id', validateClientId, clientController.getClient);
router.delete('/:id', validateClientId, clientController.deleteClient);
router.put('/:id', validateClientId, clientController.updateClient);



module.exports = router;