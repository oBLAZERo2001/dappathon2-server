import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Box, Button } from "@mui/material";
import { LeftDrawer } from "../components/LeftDrawer";
import { Upload } from "../components/Upload";
import FileTable from "../components/FileTable";
import { UploadFileDialog } from "../components/UploadFileDialog";
import { AiOutlineCloudUpload, AiOutlineUpload } from "react-icons/ai";

export default function Files() {
	const [open, setOpen] = useState(false);
	return (
		<Box sx={{ display: "flex" }}>
			<LeftDrawer />
			<Box style={{ width: `calc(100vw - 280px)` }}>
				<Navbar />
				<Box sx={{ p: 2 }}>
					<h2>Files 🏡</h2>
					<br />
					{/* <Upload /> */}
					<Button
						onClick={() => {
							setOpen(true);
						}}
						variant="contained"
						startIcon={<AiOutlineCloudUpload />}
					>
						Upload
					</Button>
				</Box>
				<Box sx={{ p: 2 }}>
					<FileTable />
				</Box>
				<UploadFileDialog open={open} setOpen={setOpen} />
			</Box>
		</Box>
	);
}
