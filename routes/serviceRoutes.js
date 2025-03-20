const express = require('express');
const serviceController = require('../controllers/serviceController');
const { validateService } = require('../validators/serviceDTO');

const router = express.Router();

router.get('/', serviceController.getServices);
router.post('/', validateService, serviceController.createService);
router.get('/:id', serviceController.getService);
router.delete('/:id', serviceController.deleteService);
router.put('/:id', validateService, serviceController.updateService);

module.exports = router;