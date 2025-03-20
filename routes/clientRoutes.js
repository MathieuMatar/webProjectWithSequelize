const express = require('express');
const clientController = require('../controllers/clientController');
const { validateClient} = require('../validators/clientDTO');

const router = express.Router();

router.get('/', clientController.getClients);
router.post('/', validateClient, clientController.createClient);
router.get('/:id', clientController.getClient);
router.delete('/:id', clientController.deleteClient);
router.put('/:id', clientController.updateClient);

module.exports = router;