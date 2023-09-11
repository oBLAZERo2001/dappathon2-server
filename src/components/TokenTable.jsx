import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TablePagination } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const columns = [
	{
		id: "name",
		label: "Name",
		// minWidth: 170,
		align: "center",
	},
	{
		id: "address",
		label: "Contract Address",
		// minWidth: 170,
		align: "center",
	},
	{
		id: "addmembers",
		label: "Add Members",
		// minWidth: 170,
		align: "center",
	},
	{
		id: "viewmembers",
		label: "View Members",
		// minWidth: 170,
		align: "center",
	},
];

export default function TokenTable({ data }) {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	return (
		<Paper sx={{ width: "100%", overflow: "hidden" }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data?.length > 0 &&
							data.map((row) => (
								<TableRow
									key={row._id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									{columns.map((column) => {
										const value = row[column.id];
										return (
											<TableCell key={column.id} align={column.align}>
												{column.id === "addmembers" ? (
													<Box sx={{ cursor: "pointer" }}>add members</Box>
												) : column.id === "viewmembers" ? (
													<Box sx={{ cursor: "pointer" }}>view members</Box>
												) : (
													value
												)}
											</TableCell>
										);
									})}
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={data?.length && data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
