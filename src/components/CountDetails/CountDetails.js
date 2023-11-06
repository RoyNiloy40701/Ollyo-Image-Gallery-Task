import React from "react";

const CountDetails = (props) => {
	const { totalSelectedImage, onClickFunction } = props;
	return (
		<div className="border-b-2 border-gray-400">
			{totalSelectedImage > 0 ? (
				<div className="flex justify-between mb-2">
					<div className="flex items-center ">
						<input
							className="w-5 h-5 mr-2 rounded-md"
							checked={true}
							type="checkbox"
						/>
						<p className="text-xl "> {totalSelectedImage} Files Selected</p>
					</div>
					<button className="text-red-600" onClick={onClickFunction}>
						Delete File
					</button>
				</div>
			) : (
				<div className="mb-2 ">
					<p className="text-xl">Gallery</p>
				</div>
			)}
		</div>
	);
};

export default CountDetails;