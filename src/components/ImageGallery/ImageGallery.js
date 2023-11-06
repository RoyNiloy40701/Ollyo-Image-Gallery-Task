import React, { useState } from "react";
import img1 from "../../assets/images/image-1.webp";
import img2 from "../../assets/images/image-2.webp";
import img3 from "../../assets/images/image-3.webp";
import img4 from "../../assets/images/image-4.webp";
import img5 from "../../assets/images/image-5.webp";
import img6 from "../../assets/images/image-6.webp";
import img7 from "../../assets/images/image-7.webp";
import img8 from "../../assets/images/image-8.webp";
import img9 from "../../assets/images/image-9.webp";
import img10 from "../../assets/images/image-10.jpeg";
import img11 from "../../assets/images/image-11.jpeg";
import "./Image.css";
import CustomImage from "../CustomImage/CustomImage";
import CountDetails from "../CountDetails/CountDetails";

import {
	GridContextProvider,
	GridDropZone,
	GridItem,
	swap,
} from "react-grid-dnd";
import { Card, useMediaQuery } from "@mui/material";

const ImageGallery = () => {
	const [allImage, setAllImage] = useState([
		{ id: "1", src: img1 },
		{ id: "2", src: img2 },
		{ id: "3", src: img3 },
		{ id: "4", src: img4 },
		{ id: "5", src: img5 },
		{ id: "6", src: img6 },
		{ id: "7", src: img7 },
		{ id: "8", src: img8 },
		{ id: "9", src: img9 },
		{ id: "10", src: img10 },
		{ id: "11", src: img11 },
	]);

	const [selectedImages, setSelectedImages] = useState([]);

	const selectedAllImage = (imageId) => {
		const newSelectedImage = [...selectedImages];
		if (newSelectedImage.includes(imageId)) {
			newSelectedImage.splice(newSelectedImage.indexOf(imageId), 1);
		} else {
			newSelectedImage.push(imageId);
		}

		setSelectedImages(newSelectedImage);
	};

	const deleteImage = () => {
		const updatedImages = allImage.filter(
			(image) => !selectedImages.includes(image.id)
		);
		setAllImage(updatedImages);
		setSelectedImages([]);
	};

	const isMobile = useMediaQuery("(max-width: 768px)");
	const columns = isMobile ? 3 : 5;
	const row = isMobile ? 200 : 250;

	const onChange = (sourceId, sourceIndex, targetIndex) => {
		const nextState = swap(allImage, sourceIndex, targetIndex);
		setAllImage(nextState);
	};

	return (
		<div className="items-center min-h-screens ">
			<div className="max-w-6xl p-10 mx-auto my-auto bg-gray-100 rounded-md ">
				<CountDetails
					totalSelectedImage={selectedImages.length}
					onClickFunction={deleteImage}
				/>
				<div className="mt-4">
					<GridContextProvider onChange={onChange}>
						<GridDropZone
							id="allImage"
							boxesPerRow={columns}
							rowHeight={row}
							style={{ height: row * Math.ceil(allImage.length / columns) }}
						>
							{allImage.map((item, index) => (
								<GridItem
									key={item.id}
									id={item.id}
									index={index}
									className={index === 0 ? "first-item" : ""}
								>
									<Card
										sx={{
											marginRight: 2,
											marginBottom: 2,
											cursor: "-webkit-grab",
										}}
										className="border border-gray-500 rounded-md"
									>
										<div>
											<CustomImage
												imageSrc={item.src}
												imageId={item.id}
												passChangeFunction={selectedAllImage}
											/>
										</div>
									</Card>
								</GridItem>
							))}
						</GridDropZone>
					</GridContextProvider>
				</div>
			</div>
		</div>
	);
};

export default ImageGallery;
