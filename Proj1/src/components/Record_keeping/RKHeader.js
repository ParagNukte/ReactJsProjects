import Stack from "@mui/material/Stack";
import "./styles.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import RecordFields from "./RecordFields";

function RKHeader() {
	const [data, setData] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const addData = () => {
		if (data.length >= 0) {
			setData([
				...data,
				{
					name: name,
					email: email,
				},
			]);
		}
	};
	const removeRecord = (index) => {
		setData(data.filter((item, i) => i !== index));
	};
	return (
		<>
			<div className="header-container">Record Keeping </div>

			<div className="form">
				<Stack spacing={2} direction="row">
					<TextField
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Button
						variant="contained"
						color="success"
						onClick={addData}>
						<AddIcon />
					</Button>
				</Stack>
			</div>

			<div className="record-data">
				<div className="records">
					<p>Name</p>
					<p>Email</p>
					<p>Remove</p>
				</div>
				{data.map((e, index) => {
					return (
						<RecordFields
							key={index}
							index={index}
							name={e.name}
							email={e.email}
							onChildClick={removeRecord}
							dataArrLength={data.length}
						/>
					);
				})}
			</div>
		</>
	);
}

export default RKHeader;
