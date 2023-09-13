import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Upload } from "./Upload";

export const UploadFileDialog = ({ open, setOpen, fun }) => {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{"Upload File"}</DialogTitle>
				<DialogContent>
					<Upload fun={fun} handleClose={handleClose} />
				</DialogContent>
			</Dialog>
		</div>
	);
};
