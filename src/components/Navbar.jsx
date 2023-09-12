import "../styles/navbar.css";
import React, { useEffect, useState } from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import { BsPerson } from "react-icons/bs";
import { connectWalletToSite, getWalletAddress } from "../utils/wallet";
import { createUser } from "../api/user";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ disableSearch = false }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const [connectedToSite, setConnectedToSite] = useState(false);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	async function connectSite() {
		await connectWalletToSite();
		const address = await getWalletAddress();
		if (address && address !== "") {
			let token = localStorage.getItem("token");
			localStorage.setItem("address", address);
			if (!token || token === "" || token === "undefined") {
				await createUser(address);
			}
			token = localStorage.getItem("token");
			if (token && token !== "" && token !== "undefined") {
				setConnectedToSite(true);
			}
		}
	}

	useEffect(() => {
		connectSite();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Box
				sx={{
					p: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#4954FD",
					color: "white",
					width: "100%",
					fontWeight: "500",
					cursor: "pointer",
				}}
			>
				✨ This is a test build, not for production! ✨
			</Box>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
				}}
				className="navbar"
			>
				<Box className="navlist">
					<p onClick={() => navigate("/explore")}>Explore</p>
					<p
						onClick={() =>
							window.open("https://github.com/oBLAZERo2001", "_blank")
						}
					>
						Github
					</p>
				</Box>
				{!disableSearch && <Box mr={2}>{/* <SearchComponent /> */}</Box>}
				{!connectedToSite ? (
					<Box onClick={connectSite} className="upload-button">
						Connect Wallet
					</Box>
				) : (
					<Box>
						<Box className="profile-icon" onClick={handleClick}>
							<BsPerson size={30} />{" "}
						</Box>
						<Menu
							sx={{ top: "4px" }}
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
						>
							<MenuItem
								onClick={() => {
									const address = localStorage.getItem("address");
									navigate("/profile/" + address);
									setAnchorEl(null);
								}}
							>
								<p
									style={{
										marginRight: "4px",
										fontSize: "14px",
									}}
								>
									Profile
								</p>
								<MdOutlinePersonOutline size={20} />
							</MenuItem>
							<MenuItem
								onClick={() => {
									localStorage.clear();
									window.location.replace("/");
									setAnchorEl(null);
								}}
							>
								<p
									style={{
										marginRight: "4px",
										fontSize: "14px",
									}}
								>
									Logout
								</p>
								<HiOutlineLogout size={20} />
							</MenuItem>
						</Menu>
					</Box>
				)}
			</div>
		</Box>
	);
};
