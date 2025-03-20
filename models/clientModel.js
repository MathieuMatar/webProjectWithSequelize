const moment = require('moment');

class Client {

    constructor(client_id, name, email, phone, address, client_type) {
        this.client_id = client_id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.client_type = client_type;
    }

    static fromRow(row) {
        return new Client(
            row.client_id,
            row.name,
            row.email,
            row.phone,
            row.address,
            row.client_type
        )
    }
}

module.exports = Client;