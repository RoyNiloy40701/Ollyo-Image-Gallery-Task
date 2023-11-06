import React, { useState } from "react";
import "./CustomImg.style.css";

const CustomImage = (props) => {
	const { imageSrc, imageId, passChangeFunction } = props;

	const [hovered, setHovered] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const hoverMouse = () => {
		setHovered(true);
	};

	const outMouse = () => {
		setHovered(false);
	};

	const checkboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleCheckBox = () => {
		checkboxChange();
		passChangeFunction(imageId);
	};

	const backgroundImageStyle = {
		backgroundImage: `url(${imageSrc})`, // Fix the background image style
	};
	const parentDivStyle = {
		height: "200px", // Set your desired height here
		width: "200px", // Set your desired width here
		filter: hovered || isChecked ? "brightness(0.7)" : "brightness(1)",
		transition: "filter 0.3s",
	};

	return (
		<div
			onMouseEnter={hoverMouse}
			onMouseLeave={outMouse}
			className={`relative overflow-hidden bg-center bg-no-repeat bg-cover `}
			style={{ ...backgroundImageStyle, ...parentDivStyle }}
		>
			{(hovered || isChecked) && (
				<div className="absolute top-0 left-0 m-2 transition-opacity duration-300 opacity-0 checkbox">
					<input
						className="w-5 h-5 bg-white rounded-md"
						checked={isChecked}
						onChange={handleCheckBox}
						type="checkbox"
					/>
				</div>
			)}
		</div>
	);
};

export default CustomImage;
