import { Client } from "pg";

class dbConnection {
	constructor() {
		this.conn= { client: {}, pool: {} };
		if (!dbConnection.instance) {
			dbConnection.instance = this;
		}
		return dbConnection.instance;
	}

	setConnection(connectionString){
		/* ------------- PostgreSQL Integration ------------ */

		this.conn.client = new Client({
			connectionString: connectionString,
		});
		return new Promise((resolve, reject) => this.conn.client.connect((err, res) => {
			if (err) {
				reject(err);
			}
			else {
				resolve("resolved");
			}
		}));
	}
}

const connection = new dbConnection();

Object.freeze(connection);

export default connection;