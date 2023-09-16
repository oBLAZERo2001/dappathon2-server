import { Box, Button, Container, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
	const navigate = useNavigate();
	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-around",
					// alignItems: "center",
					pt: "10vh",
					px: "10vw",

					height: "100vh",

					backgroundImage:
						"linear-gradient(to top, #d16ba5, #cc86c1, #c79fd6, #c5b6e4, #cacbed, #ccd7f2, #d2e1f5, #dcebf7,#e7eaf5, #eeeff7, #f4f4fa, #fafafc, #ffffff",

					backgroundImage:
						"linear-gradient(to top, #6bd1b2, #79dbd7, #9be2f0, #c2e8fc, #e4f0ff, #eff4ff, #f9f9ff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)",

					backgroundImage:
						"linear-gradient(to right top, #ff5d90, #fd82b9, #f6a3d9, #f0c2ef, #f0defb, #f3eafe, #f8f5ff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
						height: "60vh",
					}}
				>
					<Box
						sx={{
							height: "10rem",
							width: "10rem",
							mt: 3,
						}}
					>
						<img src="images/fileScapIcon.png" height={"100%"} width={"100%"} />
					</Box>
					<Box
						sx={{
							fontSize: "3em",
							ml: "20px",
							fontWeight: "bold",

							fontFamily: `'Merriweather', serif`,
							// font-family: 'Poppins', sans-serif;
						}}
					>
						Encrypted easer, simple & <br /> uniquely share files.
					</Box>
					<Box
						sx={{
							mt: 3,
							p: 3,

							borderRadius: "2rem",
							bgcolor: "#FF5D90",

							display: "flex",
							justifyContent: "center",
							color: "white",

							fontSize: "2em",
							fontWeight: "bold",
							"&:hover": {
								bgcolor: "#e03c70",
								cursor: "pointer",
								color: "#ffeded",
							},
						}}
						onClick={() => {
							navigate("/");
						}}
					>
						Get Started
					</Box>
				</Box>
				<Box
					sx={{
						// height: "30vw",
						width: "36vw",
						minWidth: "36vw",
						height: "60vh",
					}}
				>
					<img
						src="images/runningFiles.png"
						alt="Running Files"
						height={"100%"}
						width={"100%"}
					/>
				</Box>
			</Box>
		</Box>
	);
}
