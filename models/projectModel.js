const moment = require('moment');

class Project {
    constructor(project_id, name, description, client_id, start_date, deadline, status, overview, files) {
        this.project_id = project_id;
        this.name = name;
        this.description = description;
        this.client_id = client_id;
        this.start_date = start_date;
        this.deadline = deadline;
        this.status = status;
        this.overview = overview;//link
        this.files = files;
    }

    static fromRow(row) {
        return new Project(
            row.project_id,
            row.name,
            row.description,
            row.client_id,
            row.start_date,
            row.deadline,
            row.status,
            row.overview,
            row.files
        )
    }
}

module.exports = Project;