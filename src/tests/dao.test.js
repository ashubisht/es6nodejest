jest.mock("../utility/dbConnection");
import dao from "../dao/registration";
import dbConnection from "../utility/dbConnection";

describe("test cases for registration DAO layer (Data Access Object) for success case", ()=>{
//
	afterAll(()=>{
		jest.unmock("../utility/dbConnection");
	});

	//beforeAll, beforeEach, afterEach

	it("test registration test data for success use case", async()=>{
//
		const body = {
			"email": "utkarsh.bisht7@gmail.com",
			"name": "Utkarsh"
		}

		const resp = {};

		dbConnection.conn.client.query = jest.fn();
		dbConnection.conn.client.query.mockResolvedValue(new Promise((resolve) => {
			resolve(resp);
		}));

		const response = await dao.registerData(body);
		expect(response).toBe("SUCCESS");
	});

	it("test registration method for exception", async()=>{

		const resp = {

		};

		dbConnection.conn.client.query = jest.fn();
		dbConnection.conn.client.query.mockImplementation(() => {
			throw new Error("Some error occurred");
		});


		const req = {
			
				"email": "utkarsh.bisht7@gmail.com",
				"name": "Utkarsh"
			
		}
		const result = await dao.registerData(req);
		expect(result).toBe("FAIL");
		

	});

});