import registrationDao from "../dao/registration";

const registerData = async (body)=>{
	return await registrationDao.registerData(body)
}

export default {registerData};