import dbConnection from "../utility/dbConnection"; 

const registerData = async (body)=>{
	try{
		const params = [body.email, body.name];
		const res=await dbConnection.conn.client.query("INSERT INTO USERS VALUES ($1, $2)", params);
		console.log(res, " SUCCESS");
		return "SUCCESS";
	}catch(exception){
		console.log(exception);
		return "FAIL";
	}
}

export default {registerData};