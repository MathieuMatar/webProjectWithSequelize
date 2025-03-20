const moment = require('moment');

class Milestone {

    constructor(milestone_id, project_id, name, description, date, due_date, status) {
        this.milestone_id = milestone_id;
        this.project_id = project_id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.due_date = due_date;
        this.status = status;
    }

    static fromRow(row) {
        return new Milestone(
            row.milestone_id,
            row.project_id,
            row.name,
            row.description,
            row.date,
            row.due_date,
            row.status
        )
    }

}

module.exports = Milestone;