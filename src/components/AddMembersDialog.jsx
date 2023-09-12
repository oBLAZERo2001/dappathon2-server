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

export const AddMembersDialog = ({ open, setOpen, addMemberState }) => {
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (addMemberState) console.log(addMemberState);
	}, [addMemberState]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleAddMembers = async () => {};
	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>
					{"Add Members"} {addMemberState?.name && `to ${addMemberState.name}`}
				</DialogTitle>
				<DialogContent>
					<TextField
						label="Wallet Address"
						name="name"
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
