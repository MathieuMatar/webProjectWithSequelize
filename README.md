# API Documentation

Below is the comprehensive documentation for all API routes in the application. Each section outlines the available endpoints with their HTTP methods, parameters, request bodies, and descriptions.

## Services API

### Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/api/services` | Retrieve all services |
| `GET` | `/api/services/:id` | Retrieve a specific service by ID |
| `POST` | `/api/services` | Create a new service |
| `PUT` | `/api/services/:id` | Update a service by ID |
| `DELETE` | `/api/services/:id` | Delete a service by ID |

### Parameters

- `:id` - Service ID (for GET, PUT, DELETE methods)

### Request Body (POST/PUT)

```json
{
  "name": "string",
  "description": "string",
  "rate": "number",
  "duration": "number",
  "status": "ENUM('Active', 'Inactive', 'Pending')"
}
```

## Employees API

### Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/api/employees` | Retrieve all employees |
| `GET` | `/api/employees/:id` | Retrieve a specific employee by ID |
| `POST` | `/api/employees` | Create a new employee |
| `PUT` | `/api/employees/:id` | Update an employee by ID |
| `DELETE` | `/api/employees/:id` | Delete an employee by ID |

### Parameters

- `:id` - Employee ID (for GET, PUT, DELETE methods)

### Request Body (POST/PUT)

```json
{
  "name": "string",
  "password": "string",
  "first_name": "string",
  "father_name": "string",
  "last_name": "string",
  "position": "string",
  "email": "string",
  "phone": "string",
  "hire_date": "date",
  "info": "string"
}
```

## Clients API

### Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/api/clients` | Retrieve all clients |
| `GET` | `/api/clients/:id` | Retrieve a specific client by ID |
| `POST` | `/api/clients` | Create a new client |
| `PUT` | `/api/clients/:id` | Update a client by ID |
| `DELETE` | `/api/clients/:id` | Delete a client by ID |

### Parameters

- `:id` - Client ID (for GET, PUT, DELETE methods)

### Request Body (POST/PUT)

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "address": "string",
  "client_type": "ENUM('Corporate', 'Hospitality', 'Religious', 'Retail', 'NonProfit', 'Startup', 'ECommerce', 'Healthcare', 'PersonalBrand')"
}
```

## Contacts API

### Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/api/contacts` | Retrieve all contacts |
| `GET` | `/api/contacts/:id` | Retrieve a specific contact by ID |
| `POST` | `/api/contacts` | Create a new contact |
| `PUT` | `/api/contacts/:id` | Update a contact by ID |
| `DELETE` | `/api/contacts/:id` | Delete a contact by ID |

### Parameters

- `:id` - Contact ID (for GET, PUT, DELETE methods)

### Request Body (POST/PUT)

```json
{
  "client_id": "string",
  "name": "string",
  "email": "string",
  "phone": "string",
  "role": "string"
}
```

## Projects API

### Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/api/projects` | Retrieve all projects |
| `GET` | `/api/projects/:id` | Retrieve a specific project by ID |
| `POST` | `/api/projects` | Create a new project |
| `PUT` | `/api/projects/:id` | Update a project by ID |
| `DELETE` | `/api/projects/:id` | Delete a project by ID |
| `POST` | `/api/projects/:project_id/employees/:employee_id` | Assign an employee to a project |
| `DELETE` | `/api/projects/:project_id/employees/:employee_id` | Remove an employee from a project |
| `POST` | `/api/projects/:project_id/contacts/:contact_id` | Associate a contact with a project |
| `DELETE` | `/api/projects/:project_id/contacts/:contact_id` | Remove a contact from a project |
| `POST` | `/api/projects/:project_id/services/:service_id` | Link a service to a project |
| `DELETE` | `/api/projects/:project_id/services/:service_id` | Unlink a service from a project |
| `POST` | `/api/projects/:id/milestones` | Create a milestone for a project |
| `PUT` | `/api/projects/milestones/:id` | Update a milestone |
| `DELETE` | `/api/projects/milestones/:id` | Delete a milestone |

### Parameters

- `:id` - Project ID (for GET, PUT, DELETE methods)
- `:project_id` - Project ID (for association methods)
- `:employee_id` - Employee ID (for employee association methods)
- `:contact_id` - Contact ID (for contact association methods)
- `:service_id` - Service ID (for service association methods)

### Request Body (POST/PUT for projects)

```json
{
  "name": "string",
  "description": "string",
  "client_id": "integer",
  "start_date": "date",
  "deadline": "date",
  "overview": "string",
  "files": "string"
}
```

### Request Body (POST/PUT for milestones)

```json
{
  // Milestone details (structure not provided in source)
}
{
    "name": "string",
    "description": "string",
    "date": "date",
    "due_date": "date",
    "status": "String"
}
```

## Tasks API

### Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/api/tasks` | Retrieve all tasks |
| `GET` | `/api/tasks/:id` | Retrieve a specific task by ID |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update a task by ID |
| `DELETE` | `/api/tasks/:id` | Delete a task by ID |

### Parameters

- `:id` - Task ID (for GET, PUT, DELETE methods)

### Request Body (POST/PUT)

```json
{
  "type": "string",
  "projectId": "number",
  "contactAssigned": "number",
  "employeeAssigned": "number",
  "contactCompleted": "number",
  "employeeCompleted": "number",
  "completed": "ENUM('Y', 'N', 'C')",
  "date": "Date",
  "dueDate": "Date",
  "taskDescription": "string",
  "importanceLevel": "ENUM('Critical', 'High', 'Medium', 'Low', 'Optional')"
}
```

## Server Information

The server runs on the port specified in the environment variables. All endpoints follow RESTful conventions and return appropriate HTTP status codes.
