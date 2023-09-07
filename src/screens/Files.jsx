import React from "react";
import { Navbar } from "../components/Navbar";
import { Box } from "@mui/material";
import { LeftDrawer } from "../components/LeftDrawer";

export default function Files() {
	return (
		<Box sx={{ display: "flex" }}>
			<LeftDrawer />
			<Box style={{ width: `calc(100vw - 280px)` }}>
				<Navbar />
				<Box sx={{ p: 2 }}>
					<h2>Files 🏡</h2>
					<br />
				</Box>
			</Box>
		</Box>
	);
}
