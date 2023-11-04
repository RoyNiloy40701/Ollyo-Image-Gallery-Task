import React, { useRef, useState } from "react";
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
import "./ImageGallery.style.css";
import CustomImage from "../CustomImage/CustomImage";
import CountDetails from "../CountDetails/CountDetails";

const ImageGallery = () => {
	const [allImage, setAllImage] = useState([
		{ id: 1, src: img1 },
		{ id: 2, src: img2 },
		{ id: 3, src: img3 },
		{ id: 4, src: img4 },
		{ id: 5, src: img5 },
		{ id: 6, src: img6 },
		{ id: 7, src: img7 },
		{ id: 8, src: img8 },
		{ id: 9, src: img9 },
		{ id: 10, src: img10 },
		{ id: 11, src: img11 },
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

	const dragImage = useRef(0);
	const draggedOverImage = useRef(0);

	const handleSort = () => {
		const imageClone = [...allImage];
		const temp = imageClone[dragImage.current];
		console.log(dragImage.current);
		imageClone[dragImage.current] = imageClone[draggedOverImage.current];
		imageClone[draggedOverImage.current] = temp;
		setAllImage(imageClone);
	};

	return (
		<div className="flex items-center min-h-screen ">
			<div div className="max-w-5xl p-10 mx-auto bg-gray-100 rounded-md">
				<CountDetails
					totalSelectedImage={selectedImages.length}
					onClickFunction={deleteImage}
				/>

				<div className="grid grid-flow-row gap-6 pt-5 image-container md:grid-cols-5 sm:grid-cols-3">
					{allImage.map((item, index) => (
						<div
							className="bg-white rounded-md shadow-xl "
							key={item.id}
							draggable
							onDragStart={() => (dragImage.current = index)}
							onDragEnter={() => (draggedOverImage.current = index)}
							onDragEnd={handleSort}
							onDragOver={(e) => e.preventDefault()}
						>
							<CustomImage
								imageSrc={item.src}
								imageId={item.id}
								passChangeFunction={selectedAllImage}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ImageGallery;
