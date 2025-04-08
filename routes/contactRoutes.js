const express = require('express');
const contactController = require('../controllers/contactController');
const { validateContact, validateContactId} = require('../validators/contactDTO');

const router = express.Router();

/**
GET /api/contacts
Retrieves all contacts from the database.

GET /api/contacts/:id
Retrieves a specific contact by ID.

POST /api/contacts
Creates a new contact.//client_id, name, email, phone, role
Request body:
{
  client_id: string,
  name: string,
  email: string,
  phone: string,
  role: string
}

PUT /api/contacts/:id
Updates an existing contact by ID.
@param {string} id - Contact ID
Request body:
{
  client_id: string,
  name: string,
  email: string,
  phone: string,
  role: string
}

DELETE /api/contacts/:id
Deletes a contact by ID.
@param {string} id - Contact ID

 */

router.get('/', contactController.getContacts);
router.post('/', validateContact, contactController.createContact);
router.get('/:id', validateContactId, contactController.getContact);
router.delete('/:id', validateContactId, contactController.deleteContact);
router.put('/:id', validateContactId, contactController.updateContact);

module.exports = router;