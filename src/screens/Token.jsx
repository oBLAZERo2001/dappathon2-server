import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { LeftDrawer } from "../components/LeftDrawer";
import { Navbar } from "../components/Navbar";
import TokenTable from "../components/TokenTable";
import { cloneContract } from "../utils/contract";

export default function Token() {
	const [loading, setLoading] = useState(false);

	const handleAddNewToken = async () => {
		setLoading(true);
		const res = await cloneContract();
		console.log(res);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

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
							justifyContent: "space-between",
						}}
					>
						<h2>Accout keys 🏡</h2>
						{loading ? (
							<Button color="primary" variant="contained">
								Loading...
							</Button>
						) : (
							<Button
								onClick={handleAddNewToken}
								variant="contained"
								color="primary"
							>
								Add New Token
							</Button>
						)}
					</Box>
					<br />
					<TokenTable />
				</Box>
			</Box>
		</Box>
	);
}
