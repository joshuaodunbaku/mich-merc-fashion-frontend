import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";

import ErrorMessage from "../Components/ErrorMessage";
import { useForm } from "react-hook-form";

const Checkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className="container-lg">
			<h2 className="text-center my-5 display-5">Checkout</h2>
			<div className="row">
				<div className="col-12 col-md-7 py-3">
					<h4>Billing Details</h4>
					<Form className="p-4 border rounded-3">
						{/* <h4>Edit Info</h4> */}
						<Row className="mb-3">
							<Form.Group
								className="my-2 my-sm-3"
								as={Col}
								xs="12"
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
								xs="12"
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
								xs="12"
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
								xs="12"
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
									<option value="in-stock">In-Stock</option>
									<option value="out-of-stock">Out-of-Stock</option>
								</Form.Select>
								<ErrorMessage source={errors.available} />
							</Form.Group>

							<Form.Group
								className="my-2 my-sm-3"
								as={Col}
								xs="12"
								controlId="description"
							>
								<Form.Label>Description</Form.Label>
								<Form.Control
									as={"textarea"}
									required
									style={{
										height: "100px",
									}}
									type="text"
									placeholder="Description..."
									{...register("description")}
								/>
								<ErrorMessage source={errors.description} />
							</Form.Group>
						</Row>
						<div className="text-center">
							<Button
								variant="outline-primary"
								type="submit"
								size="lg"
								onClick={handleSubmit(onSubmit)}
							>
								Update
							</Button>
						</div>
					</Form>
				</div>
				<div className="col-12 col-md-5 bg-light py-2 rounded-3">
					<h3>Your Order</h3>
					<hr />
					<div className="d-flex border border-light my-2 shadow-sm">
						<span className="me-auto my-2 p-2 fw-bold h5">Product</span>
						<span className="ms-auto my-2 p-2 fw-bold">Subtotal</span>
					</div>
					<div className="d-flex border border-light my-2 shadow-sm">
						<span className="me-auto my-2 p-2 ">Brown Leather Shoe x 2</span>
						<span className="ms-auto my-2 p-2">₦80,000.00</span>
					</div>
					<div className="d-flex border border-light my-2 shadow-sm">
						<span className="me-auto my-2 p-2 ">
							SANDISK 8GB FLASH DRIVE × 1
						</span>
						<span className="ms-auto my-2 p-2">₦85,000.00</span>
					</div>
					<div className="d-flex flex-column border border-light my-2 shadow-sm">
						<span className="my-2 p-2 h6">Shipping</span>
						<label className="d-flex gap-2 p-3" htmlFor="shippingOption">
							<input id="shippingOption" type="radio" />
							Free shipping within Lagos
						</label>
						<label className="d-flex gap-2 p-3" htmlFor="shippingOption">
							<input id="shippingOption" type="radio" />
							Store pickup
						</label>
					</div>
					<hr />
					<div className="d-flex border border-light my-2 shadow-sm">
						<span className="me-auto my-2 p-2 h6">Total</span>
						<span className="ms-auto my-2 p-2">₦85,000.00</span>
					</div>
					<hr />
					<div className="d-flex flex-column border border-light my-2 shadow-sm">
						<label className="d-flex gap-2 p-3 shadow-sm" htmlFor="direct">
							<input type="radio" name="paymentMethod" id="direct" />
							Direct bank transfer
						</label>
						<p className="bg-secondary-subtle p-3">
							Make your payment directly into our bank account. Please use your
							Order ID as the payment reference. Your order will not be shipped
							until the funds have cleared in our account.
						</p>
						<label className="d-flex gap-2 p-3" htmlFor="cash">
							<input type="radio" name="paymentMethod" id="cash" />
							Cash on delivery
						</label>{" "}
						<p className="bg-secondary-subtle p-3">
							Pay with cash upon delivery.
						</p>
						<label className="d-flex gap-2 p-3" htmlFor="checkout">
							<input type="radio" name="paymentMethod" id="checkout" />
							CDL Checkout
						</label>{" "}
						<p className="bg-secondary-subtle p-3">Pay via CDL Checkout</p>
					</div>

					<div>
						<label className="d-flex gap-2 p-3" htmlFor="terms">
							<input type="checkbox" name="paymentOption" id="terms" />I have
							read and agree to the website terms and conditions *
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
