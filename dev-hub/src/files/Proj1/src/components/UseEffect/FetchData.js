import React, { useEffect, useState } from "react";
import "./styles.css"
function FetchData() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function getData() {
			const get = await fetch(
				"https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001",
			);
			const res = await get.json();
			setData(res);
		}
		getData();
	}, []);

	return (
		<>
			<div>
				{data.map((e, i) => {
					return (
						<div key={i} className="list">
							<>
								{i + 1} {"\t"}
								<>{e.firstName}</>
							</>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default FetchData;
