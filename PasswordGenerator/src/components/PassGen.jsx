import { useEffect, useState } from "react";
import "./styles.css";
/* eslint-disable no-unused-vars */
function PassGen() {
	const [startTime, setStartTime] = useState(0);
	const [isNumberChecked, setIsNumberChecked] = useState(false);
	const [isCharChecked, setIsCharChecked] = useState(false);
	const [length, setLength] = useState(30);
	const [strCopy, setStrCopy] = useState("");
	const [passStr, setPassStr] = useState("");

	//   const [endTime, setEndTime] = useState(0);
	const [executionTime, setExecutionTime] = useState(0);

	const password_generator = (length) => {
		let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (isNumberChecked) {
			characters = "0123456789" + characters;
		}
		if (isCharChecked) {
			characters = "~!@#$%^&*()_+|}{“:?><[];',./-=" + characters;
		}

		let result = "";

		for (let i = 0; i < length; i++) {
			/* empty */
			result += characters.charAt(
				Math.floor(Math.random() * characters.length),
			);
			// setPassStr(result);
		}

		return result;
	};

	useEffect(() => {
		// setStartTime(performance.now());

		const newPassStr = password_generator(length);
		if (passStr !== newPassStr) {
			setPassStr(newPassStr);
		}
		// setExecutionTime(performance.now() - startTime);
	}, [length, isNumberChecked, isCharChecked]);

	return (
		<div className="parent_container">
		<h3>Password Generator Without using useCallback and useRef Hook</h3>
			<div className="input_copy_container">
				<input
					className="input_text_box"
					type="text"
					id="password_string"
					value={passStr}
					readOnly
				/>
				<button className="copybtn" type="button" onClick={navigator.clipboard.writeText(passStr)}>
					Copy
				</button>
			</div>
			{/* <div className="input_containers"> */}
				<div className="input_range_container">
					<input
						type="range"
						name="Length"
						min="5"
						max="30"
						step="1"
						onChange={(e) => setLength(e.target.value)}
					/>
					
						<label htmlFor="Length">
							Length :<span>{length}</span>
						</label>
					
				</div>
				<div className="checkbox_container">
					<div>
						<input
							type="checkbox"
							name="numbers"
							onClick={() => setIsNumberChecked(!isNumberChecked)}
						/>
						<label className="checkbox_label" htmlFor="numbers">Numbers</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="chars"
							onClick={() => setIsCharChecked(!isCharChecked)}
						/>
						<label className="checkbox_label" htmlFor="chars">Characters</label>
					</div>
				</div>
			
		</div>
	);
}

export default PassGen;
