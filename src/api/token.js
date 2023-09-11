import { default as axios } from "axios";
import { SERVER_URL } from "../constants";
import { resolve } from "../utils/resolver";

export const addToken = async function (address, name) {
	try {
		let token = localStorage.getItem("token");

		const response = await axios.post(
			SERVER_URL + "/token/",
			{
				address,
				name,
			},
			{
				headers: {
					"Content-Type": `application/json`,
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error.message);
	}
};

export const getTokens = async function () {
	try {
		let token = localStorage.getItem("token");

		const response = await resolve(
			axios.get(SERVER_URL + "/token/", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
		);
		return response;
	} catch (error) {
		console.log(error.message);
	}
};
