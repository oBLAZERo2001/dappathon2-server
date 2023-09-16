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
import { AiOutlinePlus } from "react-icons/ai";
import { switchChain } from "../utils/wallet";

export default function Token() {
	const [loading, setLoading] = useState(false);
	const [tokens, setTokens] = useState([]);
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
							// justifyContent: "space-between",
						}}
					>
						<h2>Accout keys 🏡</h2>

						{loading ? (
							<Button color="secondary" variant="contained" sx={{ ml: 3 }}>
								Loading...
							</Button>
						) : (
							<Button
								onClick={handleClickOpen}
								variant="contained"
								color="secondary"
								sx={{ ml: 3 }}
								startIcon={<AiOutlinePlus />}
							>
								Add New Token
							</Button>
						)}

						<Box
							sx={{
								fontSize: "12px",
								ml: 2,
							}}
						>
							<i>Powered by BUNZZ Tokens</i>
						</Box>
					</Box>
					<Box sx={{ p: 2, mt: 2 }}>
						<TokenTable data={tokens} />
					</Box>
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
		try {
			setLoading(true);

			await switchChain();
			const res = await cloneContract();
			console.log(res);
			setLoading(false);

			if (res.blockHash) {
				const responce = await addToken(res.contractAddress, name);
				if (responce) {
					console.log(responce);
				}
			}
			setName("");
			handleClose();
			getTokensFun();
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
