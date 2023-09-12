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
import { Upload } from "./Upload";

export const UploadFileDialog = ({ open, setOpen }) => {
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {}, []);

	const handleClose = () => {
		setOpen(false);
	};

	const handleAddMembers = async () => {};
	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{"Upload File"}</DialogTitle>
				<DialogContent>
					<Upload />
					{/* <DialogContentText sx={{ ml: 0.5 }}>
						Enter wallet address to add member to{" "}
						{addMemberState?.name ? `${addMemberState.name}` : "current"} space.
					</DialogContentText> */}
				</DialogContent>
				{/* <DialogActions>
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
				</DialogActions> */}
			</Dialog>
		</div>
	);
};
