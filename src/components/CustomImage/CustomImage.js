import React, { useState } from "react";
//import img from '../../assets/images/image-1.webp'
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

	return (
		<div
			onMouseEnter={hoverMouse}
			onMouseLeave={outMouse}
			className="relative overflow-hidden border border-gray-500 rounded-md image-container"
		>
			<img
				className={hovered || isChecked ? "darkened" : ""}
				src={imageSrc}
				alt="Sunset in the mountains"
			/>
			{(hovered || isChecked) && (
				<div className="absolute top-0 left-0 m-2 transition-opacity duration-300 opacity-0 checkbox">
					<input
						className="w-5 h-5 rounded-md"
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
