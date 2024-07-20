import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
function RecordFields({ index, name, email, onChildClick, dataArrLength }) {
	const handleClick = () => {
		onChildClick(index);
	};
	return (
		<>
			{dataArrLength > 0 ? (
				<div className="record">
					<p>{name}</p>
					<p>{email}</p>
					<Stack>
						<Button
							onClick={handleClick}
							variant="contained"
							color="error">
							<DeleteForeverIcon />
						</Button>
					</Stack>
				</div>
			) : null}
		</>
	);
}

export default RecordFields;
