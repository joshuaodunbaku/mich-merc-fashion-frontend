import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../Utils/yup-schemas-validator/create-item-schema";
import ErrorMessage from "../Components/ErrorMessage";
import Select from "react-select";
import { PrevImg } from "../Components/Styles/CreateItemStyle";
import { RiDeleteBin3Line, RiDeleteBinFill } from "react-icons/ri";
import { BiTrash, BiTrashAlt } from "react-icons/bi";

const CreateItems = () => {
	const [previewImageUrl, setPreviewImageUrl] = useState([]); // State for image preview
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log("Form data:", data);
		console.log("uploaded");

		// Reset the form and preview after submission
		setPreviewImageUrl(null);
		reset();
	};

	const deleteItem = (indexToDelete) => {
		console.log(indexToDelete);
		if (previewImageUrl.length > 0) {
			setPreviewImageUrl((prevItems) =>
				prevItems.filter((_, index) => index !== indexToDelete)
			);
		} else {
			setPreviewImageUrl([]);
		}
	};

	// create a preview
	const handleImageChange = (event) => {
		const uploaded_images = event.target.files;
		if (uploaded_images.length <= 4) {
			for (let i = 0; i < event.target.files.length; i++) {
				console.log(uploaded_images[i]);
				let prev_image_file_path = URL.createObjectURL(uploaded_images[i]);
				setPreviewImageUrl((prevItems) => [...prevItems, prev_image_file_path]);
			}
		} else {
			setPreviewImageUrl([]);
			alert("You can only upload a maximum of 4 images.");
		}
	};

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			// backgroundColor: "transparent",
			color: state.isSelected ? "white" : "white",
			borderColor: "#cecec8ca",
			borderRadius: "5px",
			boxShadow: state.isFocused
				? "0 0 0 0.25rem rgba(0, 123, 255, 0.25)"
				: "none",
			"&:focus": {
				boxShadow: "0 0 0 0.25rem rgba(0, 123, 255, 0.25)",
			},
			width: "100%",
			// height: "48px", // Match Bootstrap's default form control height
			minHeight: "48px", // Ensures the minimum height is 38px
		}),
		dropdownIndicator: (provided) => ({
			...provided,
			color: "rgba(0, 123, 255, 0.75)", // customize color of the dropdown arrow
		}),
	};
	return (
		<div className="container">
			<Form className="my-2 border rounded p-4 bg-light">
				<Row>
					<Col className="my-2" md={"6"} xs={"12"}>
						<Form.Group className="mb-3" controlId="product_name">
							<Form.Label>Product name</Form.Label>
							<Controller
								name="product_name"
								control={control}
								render={({ field }) => (
									<Form.Control
										className="shadow-sm"
										type="text"
										isInvalid={!!errors.product_name}
										placeholder="First Name..."
										// isInvalid={!!errors.product_name}
										{...field}
									/>
								)}
							/>{" "}
							<ErrorMessage source={errors.product_name} />
						</Form.Group>
					</Col>
					<Col className="my-2" md={"6"} xs={"12"}>
						<Form.Group className="mb-3" controlId="amount_available">
							<Form.Label>Amount Available</Form.Label>
							<Controller
								name="amount_available"
								control={control}
								render={({ field }) => (
									<Form.Control
										className="shadow-sm"
										isInvalid={!!errors.amount_available}
										type="text"
										placeholder="0"
										// isInvalid={!!errors.firstName}
										{...field}
									/>
								)}
							/>
							<ErrorMessage source={errors.amount_available} />
						</Form.Group>
					</Col>
					<Col className="my-2" md={"6"} xs={"12"}>
						<Form.Group className="mb-3" controlId="description">
							<Form.Label>Description</Form.Label>
							<Controller
								name="description"
								control={control}
								render={({ field }) => (
									<Form.Control
										className="shadow-sm"
										isInvalid={!!errors.description}
										as={"textarea"}
										type="text"
										style={{ height: "70px" }}
										placeholder="Last Name..."
										{...field}
									/>
								)}
							/>{" "}
							<ErrorMessage source={errors.description} />
						</Form.Group>
					</Col>
					<Col className="my-2" xs={"12"} md={"6"}>
						<Form.Group controlId="address">
							<Form.Label>Address</Form.Label>
							<Controller
								name="address"
								control={control}
								render={({ field }) => (
									<Form.Control
										className="shadow-sm"
										isInvalid={!!errors.address}
										as={"textarea"}
										type="text"
										style={{ height: "70px" }}
										placeholder="Address here"
										{...field}
									/>
								)}
							/>
							<ErrorMessage source={errors.address} />
						</Form.Group>
					</Col>
					<Col className="my-2" md={"6"} xs={"12"}>
						<Form.Group controlId="phone_number">
							<Form.Label>Phone Number</Form.Label>
							<Controller
								name="phone_number"
								control={control}
								render={({ field }) => (
									<Form.Control
										type="tel"
										className="shadow-sm"
										isInvalid={!!errors.phone_number}
										{...field}
										placeholder="Phone number..."
									/>
								)}
							/>
							<ErrorMessage source={errors.phone_number} />
						</Form.Group>
					</Col>

					<Col className="my-2" xs={"12"} md="6">
						<Form.Group controlId="image_upload">
							<Form.Label>Image Upload</Form.Label>
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
						<div className="d-flex m-2 gap-2">
							{previewImageUrl.map((img, index) => (
								<PrevImg key={index}>
									<img className="prev_img" src={img} width={"100%"} alt="" />
									<BiTrashAlt
										onClick={() => deleteItem(index)}
										size={20}
										className="delete_icon"
									/>
									<div className="overlay"></div>
								</PrevImg>
							))}
						</div>
						<div className="bg-dark text-white"></div>
					</Col>
				</Row>

				<div className="w-100 d-flex flex-column align-items-center">
					<Button
						className="mt-3 btn-lg"
						variant="outline-primary"
						// type="submit"
						style={{ width: "270px" }}
						onClick={handleSubmit(onSubmit)}
					>
						Submit
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default CreateItems;
