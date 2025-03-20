const express = require('express');
const contactController = require('../controllers/contactController');
const { validateContact} = require('../validators/contactDTO');

const router = express.Router();

router.get('/', contactController.getContacts);
router.post('/', validateContact, contactController.createContact);
router.get('/:id', contactController.getContact);
router.delete('/:id', contactController.deleteContact);
router.put('/:id', contactController.updateContact);

module.exports = router;