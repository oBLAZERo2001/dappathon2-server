import {
	Box,
	CircularProgress,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { toast } from "react-toastify";
import { uploadFileApi } from "../api/file";
import { getTokens } from "../api/token";

export const Upload = () => {
	const [uploadLoading, setUploadLoading] = useState(false);
	const [file, setFile] = useState();
	const [description, setDescription] = useState("");
	const [name, setName] = useState("");
	const [accessAdd, setAccessAdd] = useState([]);

	const [tokens, setTokens] = useState([]);

	async function uploadFile() {
		if (!file) return toast("Please select a file!", { type: "info" });
		if (!name || name === "")
			return toast("Please enter a name for this dataset.", { type: "info" });
		if (!description || description === "")
			return toast("Please enter a description for this dataset.", {
				type: "info",
			});
		setUploadLoading(true);
		await uploadFileApi(file, name, description);
		toast("Successfully uploaded your dataset", { type: "success" });
		setUploadLoading(false);
	}

	const getTokensFun = async () => {
		const res = await getTokens();
		if (!res.error) {
			setTokens(res.data?.tokens);
		}
		return;
	};

	useEffect(() => {
		getTokensFun();
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: 2,
			}}
		>
			<Box
				sx={{
					textAlign: "center",
					border: "2px solid lightgrey",
					borderStyle: "dotted",
					p: 4,
				}}
			>
				<AiOutlineCloudUpload style={{ color: "grey" }} size={80} />
				<Box
					style={{
						marginBottom: "16px",
					}}
				>
					<input
						type="file"
						name="file"
						id="file"
						// multiple
						onChange={(e) => setFile(e.target.files)}
					/>
				</Box>
				<Box sx={{ mt: 1, mb: 2 }}>
					<TextField
						// placeholder="Enter custom file name"
						label="Enter custom file name"
						size="small"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						sx={{
							width: "100%",
						}}
						InputProps={{
							style: {
								border: "1px solid white",
							},
						}}
						variant="outlined"
					/>

					<FormControl
						fullWidth
						sx={{
							mt: 2,
						}}
						size="small"
					>
						<InputLabel id="demo-simple-select-label">
							Choose who can access this
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							// value={age}
							label="Choose who can access this"
							// onChange={handleChange}
						>
							{tokens?.length > 0 &&
								tokens.map((t) => (
									<MenuItem key={t._id} value={t.address}>
										{t.name}{" "}
										<i
											style={{
												fontSize: "12px",
												marginLeft: "10px",
											}}
										>
											({t.address})
										</i>
									</MenuItem>
								))}
						</Select>
					</FormControl>

					<TextField
						multiline
						rows={4}
						// placeholder="Enter description"
						label="Enter description"
						size="small"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						sx={{
							width: "100%",
							mt: 2,
						}}
						InputProps={{
							style: {
								border: "1px solid white",
							},
						}}
					/>
				</Box>
				<Box
					style={{
						backgroundColor: "#256afe",
						padding: "12px 16px",
						fontWeight: 600,
						borderRadius: "4px",
						cursor: "pointer",
						color: "white",
					}}
					onClick={uploadFile}
				>
					{uploadLoading ? (
						<CircularProgress size={14} sx={{ color: "white" }} />
					) : (
						"Upload File"
					)}
				</Box>
			</Box>
		</Box>
	);
};
