import express from "express";
import registrationService from "../service/registration"

export const router = express.Router();

router.get("/", (req, res)=>{
	return res.status(200).send("Alive");
})

router.post('/user', async (req, res)=>{
	console.log("Reached here");
	console.log("Body: ", req.body);
	const response = await registrationService.registerData(req.body);
	return res.status(200).send(response);
});

export default router;