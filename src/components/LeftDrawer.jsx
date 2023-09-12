import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	AiFillHome,
	AiOutlineHome,
	AiOutlineLogout,
	AiOutlineDollarCircle,
	AiFillDollarCircle,
	AiOutlineFileText,
	AiFillFileText,
} from "react-icons/ai";

const drawerWidth = 260;

const mainList = [
	{
		text: "Home",
		i: () => <AiOutlineHome />,
		ai: () => <AiFillHome />,
		path: "/",
	},
	{
		text: "Your Tokens",
		i: () => <AiOutlineDollarCircle />,
		ai: () => <AiFillDollarCircle />,
		path: "/token",
	},
	{
		text: "Files",
		i: () => <AiOutlineFileText />,
		ai: () => <AiFillFileText />,
		path: "/files",
	},
	{
		text: "Logout",
		i: () => <AiOutlineLogout />,
		ai: () => <AiOutlineLogout />,
		path: "/",
	},
];

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

const open = true;

export function LeftDrawer({ smaller }) {
	const location = useLocation();
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);

	function updateIndex(path) {
		switch (path.split("/")[1]) {
			case "home":
				return setIndex(0);
			case "token":
				return setIndex(1);
			case "files":
				return setIndex(2);
			case "models":
				return setIndex(3);
			case "marketplace":
				return setIndex(4);
			case "explorer":
				return setIndex(5);
			default:
				setIndex(0);
		}
	}

	useEffect(() => {
		updateIndex(location.pathname);
	}, [location.pathname]);

	return (
		<Drawer
			variant="permanent"
			open={smaller ? false : open}
			sx={{
				mt: 2,
				borderRight: "0px solid black",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					height: "100%",
					p: 3,
				}}
			>
				<Box>
					{/* Logo */}
					<Box sx={{ mb: 6, display: "flex", alignItems: "center" }}>
						<h2 style={{ paddingTop: "8px" }}>Crypto Scape💱</h2>
					</Box>
					{/* Menu List */}
					<Box>
						{mainList.map(({ text, i, ai, path }, ind) => (
							<Box
								key={text}
								onClick={() => navigate(path)}
								sx={{
									backgroundColor: index === ind ? "#4954FD" : "",
									borderRadius: "8px",
									p: 1,
									py: 1.5,
									mb: 1,
									cursor: "pointer",
									"&:hover": {
										background: index === ind ? "" : "rgb(38 38 38 / 5%)",
									},
								}}
							>
								<Box
									sx={{
										justifyContent: open ? "initial" : "center",
										color: index === ind ? "white" : "#000000",
										alignItems: "center",
										display: "flex",
									}}
								>
									<Box
										sx={{
											mr: 2,
											fontSize: "20px",
											display: "flex",
										}}
									>
										{index === ind ? ai() : i()}
									</Box>
									<Box
										sx={{
											opacity: open ? 1 : 0,
										}}
									>
										{text}
									</Box>
								</Box>
							</Box>
						))}
					</Box>
				</Box>

				{/* Down */}
				<Box
					sx={{
						bottom: "30px",
						backgroundColor: "#dcdcdc",
						p: 2,
						borderRadius: "4px",
					}}
				>
					Built for Dappathon 2
				</Box>
			</Box>
		</Drawer>
	);
}
