import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getFiles } from "../api/file";
import { TablePagination } from "@mui/material";
import { useEffect, useState } from "react";

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
		id: "description",
		label: "Description",
		// minWidth: 170,
		align: "center",
	},
	{
		id: "filename",
		label: "Filename",
		// minWidth: 170,
		align: "center",
	},
	{
		id: "contentType",
		label: "Content Type",
		// minWidth: 170,
		align: "center",
	},
	{
		id: "uploadId",
		label: "uploadId",
		// minWidth: 170,
		align: "center",
	},
	{
		id: "bucketId",
		label: "bucketId",
		// minWidth: 170,
		align: "center",
	},
	{
		id: "protocolLink",
		label: "protocolLink",
		// minWidth: 170,
		align: "center",
	},
	{
		id: "dynamicLinks",
		label: "dynamicLinks",
		// minWidth: 170,
		align: "center",
	},
	{
		id: "cid",
		label: "cid",
		// minWidth: 170,
		align: "center",
	},
];

export default function FileTable() {
	const [files, setFiles] = useState();
	useEffect(() => {
		const fun = async () => {
			const res = await getFiles();
			console.log(res);
			if (res.data) {
				setFiles(res.data);
			}
		};
		fun();
	}, []);

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

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
						{files?.length > 0 &&
							files.map((row) => (
								<TableRow
									hover
									key={row._id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									{columns.map((column) => {
										const value = row[column.id];
										return (
											<TableCell key={column.id} align={column.align}>
												{column.format && typeof value === "number"
													? column.format(value)
													: value}
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
				count={files?.length && files.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
