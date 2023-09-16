import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

import ERC721Interface from "../contracts/ERC721.json";
import Web3 from "web3";
import { getWalletAddress } from "../utils/wallet";

export const AddMembersDialog = ({ open, setOpen, addMemberState, token }) => {
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (addMemberState) console.log(addMemberState);
	}, [addMemberState]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleAddMembers = async () => {
		try {
			setLoading(true);
			const address = name;
			const web3 = new Web3(window.ethereum);
			const contract = new web3.eth.Contract(ERC721Interface.abi, token);

			const currentAddress = await getWalletAddress();

			// Gas Calculation
			const gasPrice = await web3.eth.getGasPrice();
			const gas = await contract.methods.safeMint(address).estimateGas({
				from: currentAddress,
			});
			await contract.methods
				.safeMint(address)
				.send({ from: currentAddress, gasPrice, gas })
				.on("receipt", async function (receipt) {
					setLoading(false);
					handleClose();
					setName();
					alert("Succesfully added new member🥳🍾");
				});
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>
					{"Add Members"} {addMemberState?.name && `to ${addMemberState.name}`}
				</DialogTitle>
				<DialogContent>
					<TextField
						label="Wallet Address"
						name="Wallet Address"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						sx={{ m: 2, ml: 0, minWidth: "300px" }}
						size="small"
					/>
					<DialogContentText sx={{ ml: 0.5 }}>
						Enter wallet address to add member to{" "}
						{addMemberState?.name ? `${addMemberState.name}` : "current"} space.
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
							onClick={handleAddMembers}
							autoFocus
							variant="contained"
							disabled={!name}
						>
							Add Members
						</Button>
					)}
				</DialogActions>
			</Dialog>
		</div>
	);
};
