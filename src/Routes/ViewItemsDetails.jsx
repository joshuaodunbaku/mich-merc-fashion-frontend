import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMessage from "../Components/ErrorMessage";
import { PrevImg } from "../Components/Styles/CreateItemStyle";
import IMAGES from "../images/images";
import { BiTrashAlt } from "react-icons/bi";

const schema = yup.object().shape({
	product_name: yup.string().required("First name is required!"),
	price: yup.string().required("Last name is required!"),
	available: yup
		.string()
		.required("A correct email format johndoe@gmail.com is required"),
	description: yup
		.string()
		.required("A correct email format johndoe@gmail.com is required"),
	category: yup.string().max(1).required("Category is required!"),
});

const EditProfilePage = () => {
	const [previewImageUrl, setPreviewImageUrl] = useState([
		IMAGES.glasses3,
		IMAGES.glasses10,
		IMAGES.belt1,
		IMAGES.shoe2,
	]);

	const deleteItem = (indexToDelete) => {
		if (previewImageUrl.length > 0) {
			const removedImage = previewImageUrl[indexToDelete];
			URL.revokeObjectURL(removedImage); // Clean up memory

			setPreviewImageUrl((prevItems) =>
				prevItems.filter((_, index) => index !== indexToDelete)
			);
		} else {
			setPreviewImageUrl((prevItems) => [...prevItems]);
		}
	};

	// create a preview
	const handleImageChange = (event) => {
		const uploaded_images = event.target.files;
		const totalImages = uploaded_images.length + previewImageUrl.length;

		if (totalImages <= 4) {
			for (let i = 0; i < uploaded_images.length; i++) {
				console.log(uploaded_images[i]);
				let prev_image_file_path = URL.createObjectURL(uploaded_images[i]);
				// newPreviewImages.push(prev_image_file_path); // Collect the new images

				setPreviewImageUrl((prevItems) => [...prevItems, prev_image_file_path]);
			}
		} else {
			setPreviewImageUrl((prevItems) => [...prevItems]);
			alert("You can only upload a maximum of 4 images.");
		}

		event.target.value = "";
	};

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			product_name: "John",
			price: "Doe",
			available: "johndoe@email.com",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et, praesentium quod voluptatem, exercitationem soluta qui eligendi vel doloribus distinctio incidunt necessitatibus. Temporibus, delectus ipsum accusantium hic possimus suscipit nostrum.",
			category: "1",
			image_upload: "1",
		},
	});

	const onSubmit = (data) => {
		console.log("the data", data);
	};

	return (
		<>
			<div className="container my-4">
				<h2 className="display-6">
					<span>Edit Product Details</span>
				</h2>
				<Form className="bg-light p-4 rounded-4 border border-2">
					{/* <h4>Edit Info</h4> */}
					<Row className="mb-3">
						<Form.Group
							className="my-2 my-sm-3"
							as={Col}
							sm="6"
							controlId="product_name"
						>
							<Form.Label>Product Name</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Product Name..."
								{...register("product_name")}
							/>
							<ErrorMessage source={errors.product_name} />
						</Form.Group>

						<Form.Group
							className="my-2 my-sm-3"
							as={Col}
							sm="6"
							controlId="price"
						>
							<Form.Label>Price</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Price..."
								{...register("price")}
							/>
							<ErrorMessage source={errors.price} />
						</Form.Group>

						<Form.Group
							className="my-2 my-sm-3"
							as={Col}
							sm="6"
							controlId="category"
						>
							<Form.Label>Category</Form.Label>
							<Form.Select
								required
								aria-label="Default select example"
								placeholder="Select..."
								{...register("category")}
							>
								<option>Select...</option>
								<option value="1">Male</option>
								<option value="2">Female</option>
							</Form.Select>
							<ErrorMessage source={errors.category} />
						</Form.Group>

						<Form.Group
							className="my-2 my-sm-3"
							as={Col}
							sm="6"
							controlId="available"
						>
							<Form.Label>Available</Form.Label>
							<Form.Select
								required
								aria-label="Default select example"
								placeholder="Select..."
								{...register("available")}
							>
								<option>Select...</option>
								<option value="1">Male</option>
								<option value="2">Female</option>
							</Form.Select>
							<ErrorMessage source={errors.available} />
						</Form.Group>

						<Form.Group
							className="my-2 my-sm-3"
							as={Col}
							sm="6"
							controlId="description"
						>
							<Form.Label>Description</Form.Label>
							<Form.Control
								as={"textarea"}
								required
								type="text"
								placeholder="Description..."
								{...register("description")}
							/>
							<ErrorMessage source={errors.description} />
						</Form.Group>
					</Row>
					<div className="text-center">
						<Button
							variant="primary"
							type="submit"
							onClick={handleSubmit(onSubmit)}
						>
							Update
						</Button>
					</div>
				</Form>

				<hr className="my-4" />

				<Form className="bg-light p-4 rounded-4 border border-2">
					<h2>
						<span>Update Images</span>
					</h2>
					<div className="row m-2 gap-3">
						{previewImageUrl.map((img, index) => {
							return (
								<PrevImg className="col-sm-6 border rounded" key={index}>
									<img
										className="prev_img"
										height={"100%"}
										src={img}
										width={"100%"}
										alt=""
									/>
									<BiTrashAlt
										onClick={() => deleteItem(index)}
										size={25}
										className="delete_icon"
									/>
									<div className="overlay"></div>
								</PrevImg>
							);
						})}
					</div>
					<Col className="my-2" xs={"12"} md="6">
						<Form.Group controlId="image_upload">
							<Form.Label>Select Image Upload</Form.Label>
							<Controller
								name="image_upload"
								control={control}
								render={({ field }) => (
									<Form.Control
										type="file"
										accept="image/*"
										size="lg"
										multiple
										onChange={(e) => {
											console.log(e);
											handleImageChange(e); // Show image preview
											field.onChange(e.target.files); // Update form state
										}}
										isInvalid={!!errors.image_upload} // Show invalid state if there are errors
									/>
								)}
							/>
							<ErrorMessage source={errors.image_upload} />
						</Form.Group>
					</Col>
					<Button variant="primary" size="lg" type="submit" onClick={""}>
						Update
					</Button>
				</Form>
			</div>
		</>
	);
};

export default EditProfilePage;
