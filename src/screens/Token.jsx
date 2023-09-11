import React, { useState, useEffect } from "react";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";
import { LeftDrawer } from "../components/LeftDrawer";
import { Navbar } from "../components/Navbar";
import TokenTable from "../components/TokenTable";
import { cloneContract } from "../utils/contract";
import { addToken, getTokens } from "../api/token";

export default function Token() {
	const [loading, setLoading] = useState(false);
	const [tokens, setTokens] = useState(false);
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

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
								onClick={handleClickOpen}
								variant="contained"
								color="primary"
							>
								Add New Token
							</Button>
						)}
					</Box>
					<br />
					<TokenTable data={tokens} />
				</Box>
			</Box>
			<SimpleDialog
				open={open}
				setOpen={setOpen}
				setLoading={setLoading}
				loading={loading}
				getTokensFun={getTokensFun}
			/>
		</Box>
	);
}

const SimpleDialog = ({ open, setOpen, setLoading, loading, getTokensFun }) => {
	const [name, setName] = React.useState("");

	const handleClose = () => {
		setOpen(false);
	};

	const handleAddNewToken = async () => {
		setLoading(true);
		try {
			const res = await cloneContract();
			console.log(res);
			setLoading(false);

			if (res.blockHash) {
				const responce = await addToken(res.contractAddress, name);
				if (responce) {
					console.log(responce);
					await getTokensFun();
				}
			}
			handleClose();
		} catch (err) {
			console.log("Error: " + err);
			setLoading(false);
		}
	};
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="responsive-dialog-title"
			>
				<DialogTitle id="responsive-dialog-title">
					{"Add New Token"}
				</DialogTitle>
				<DialogContent>
					<TextField
						label="Name"
						name="name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						sx={{ m: 2, ml: 0 }}
						size="small"
					/>
					<DialogContentText sx={{ ml: 0.5 }}>
						Kindly Provide a Reference Name to add members and share files...
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} variant="contained">
						Close
					</Button>
					{loading ? (
						<Button color="primary" variant="contained">
							Loading...
						</Button>
					) : (
						<Button
							onClick={handleAddNewToken}
							autoFocus
							variant="contained"
							disabled={!name}
						>
							Add New Token
						</Button>
					)}
				</DialogActions>
			</Dialog>
		</div>
	);
};
