const moment = require('moment');

class Service {
    constructor(service_id, name, description, rate){
        this.service_id = service_id;
        this.name = name;
        this.description = description;
        this.rate = rate;
    }

    static fromRow(row){
        return new Service(
            row.service_id,
            row.name,
            row.description,
            row.rate
        )
    }
}

module.exports = Service;