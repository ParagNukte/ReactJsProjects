/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
/* eslint-disable no-unused-vars */
function PassGenHooks() {
	const [startTime, setStartTime] = useState(0);
	const [isNumberChecked, setIsNumberChecked] = useState(false);
	const [isCharChecked, setIsCharChecked] = useState(false);
	const [length, setLength] = useState(30);
	const [passStr, setPassStr] = useState("");

	const passwordRef = useRef(null);
    
	const password_generator = useCallback(
		(length) => {
			let characters =
				"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			if (isNumberChecked) {
				characters = "0123456789" + characters;
			}
			if (isCharChecked) {
				characters = "~!@#$%^&*()_+|}{“:?><[];',./-=" + characters;
			}
			let result = "";
			for (let i = 0; i < length; i++) {
				result += characters.charAt(
					Math.floor(Math.random() * characters.length),
				);
			}
			setPassStr(result);
		},
		[length, isCharChecked, isNumberChecked, setPassStr],
	);

	const copyToClip = useCallback(() => {
		passwordRef.current.select();
		navigator.clipboard.writeText(passStr);
	}, [passStr]);
	useEffect(() => {
		password_generator(length);
	}, [length, isCharChecked, isNumberChecked, password_generator]);

	return (
		<div className="parent_container">
			<h3>Password Generator using useCallback and useRef Hook</h3>
			<div className="input_copy_container">
				<input
					className="input_text_box"
					type="text"
					id="password_string"
					value={passStr}
					readOnly
					ref={passwordRef}
				/>
				<button className="copybtn" type="button" onClick={copyToClip}>
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
					<label className="checkbox_label" htmlFor="numbers">
						Numbers
					</label>
				</div>
				<div>
					<input
						type="checkbox"
						name="chars"
						onClick={() => setIsCharChecked(!isCharChecked)}
					/>
					<label className="checkbox_label" htmlFor="chars">
						Characters
					</label>
				</div>
			</div>
		</div>
	);
}

export default PassGenHooks;
