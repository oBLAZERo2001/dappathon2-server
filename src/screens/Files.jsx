import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Box, Button } from "@mui/material";
import { LeftDrawer } from "../components/LeftDrawer";
import FileTable from "../components/FileTable";
import { UploadFileDialog } from "../components/UploadFileDialog";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { getFiles } from "../api/file";

export default function Files() {
	const [open, setOpen] = useState(false);
	const [files, setFiles] = useState([]);

	const fun = async () => {
		const res = await getFiles();
		console.log(res);
		if (res.data) {
			setFiles(res.data);
		}
	};

	useEffect(() => {
		fun();
	}, []);

	return (
		<Box sx={{ display: "flex" }}>
			<LeftDrawer />
			<Box style={{ width: `calc(100vw - 280px)` }}>
				<Navbar />
				<Box sx={{ p: 2 }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<h2>Files 🏡</h2>
						<Button
							onClick={() => {
								setOpen(true);
							}}
							variant="contained"
							startIcon={<AiOutlineCloudUpload />}
							sx={{ ml: 3, px: 2 }}
							color="secondary"
						>
							Upload
						</Button>
					</Box>
				</Box>
				<Box sx={{ p: 2, px: 4 }}>
					<FileTable files={files} />
				</Box>
				<UploadFileDialog open={open} setOpen={setOpen} fun={fun} />
			</Box>
		</Box>
	);
}
