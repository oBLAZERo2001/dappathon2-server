import { default as axios } from "axios";
import { SERVER_URL } from "../constants";
import { resolve } from "../utils/resolver";

export const uploadFileApi = async function (files, name, description) {
	try {
		let token = localStorage.getItem("token");
		const form = new FormData();
		form.append("file", files[0], files[0].name);
		// for (let i = 0; i < files.length; i++) {
		// 	form.append("file", files[i], files[i].name);
		// }
		form.append("name", name);
		form.append("description", description);

		console.log(files, form, name, description);

		const response = await axios.post(SERVER_URL + "/cryptr/upload", form, {
			headers: {
				"Content-Type": `multipart/form-data`,
				Authorization: `Bearer ${token}`,
			},
		});
		if (response?.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error?.message);
	}
};

export const getFiles = async function () {
	try {
		let token = localStorage.getItem("token");

		const response = await resolve(
			axios.get(SERVER_URL + "/cryptr", {
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

export const downloadFile = async (id, name) => {
	try {
		let token = localStorage.getItem("token");

		const response = await fetch(`${SERVER_URL}/cryptr/download/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}); // Replace with your server URL
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = name;
		document.body.appendChild(a);
		a.click();
		window.URL.revokeObjectURL(url);
	} catch (error) {
		console.error("Error downloading file:", error);
	}
};
