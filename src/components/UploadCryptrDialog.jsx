import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { CryptrUpload } from "./CryptrUpload";

export const UploadCryptrDialog = ({ open, setOpen, fun }) => {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{"Upload File"}</DialogTitle>
				<DialogContent>
					<CryptrUpload fun={fun} handleClose={handleClose} />
				</DialogContent>
			</Dialog>
		</div>
	);
};
