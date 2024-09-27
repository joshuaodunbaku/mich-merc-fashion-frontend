import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import IMAGES from "../images/images";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

const Product = () => {
	const [mainImg, setMainImg] = useState(IMAGES.shoe1);
	const otherImg = [IMAGES.shoe1, IMAGES.shoe2, IMAGES.shoe3, IMAGES.shoe4];

	const ScrollBar = styled.div`
		::-webkit-scrollbar {
			width: 50%;
			height: 10px;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background: #a0a0a0;
			border-radius: 10px;
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
			background: #a85353;
		}
	`;
	return (
		<ScrollBar>
			<div className="bg-danger" style={{ height: "50px" }}></div>
			<div className="container">
				<Row>
					<Col className="d-none d-md-block" xs="12" md="3">
						<div id="categories">
							<p className="link border border-bottom-1 border-top-0 border-start-0 border-end-0 my-3 p-2 fw-bold">
								Categories
							</p>
							<ul className="list-group">
								<li className="list-group-item list-group-item-action">An item</li>
								<li className="list-group-item list-group-item-action">
									A second item
								</li>
								<li className="list-group-item list-group-item-action">
									A third item
								</li>
								<li className="list-group-item list-group-item-action">
									A fourth item
								</li>
							</ul>
						</div>
					</Col>
					<Col className="row" xs="12" md="9">
						<div className="col-12 col-md-5">
							<img src={mainImg} style={{maxWidth: "300px", width: "100%", height: "300px"}} alt="" />
							<div className="d-flex gap-2 justify-content-center flex-nowrap" style={{ overflowX: "auto" }}>
								{otherImg.map((e, index) => (
									<img className="border btn rounded-3" onClick={() => setMainImg(e)} key={index} src={e} style={{maxWidth: 70}} alt={`image ${e}`} />
								))}
							</div>
						</div>
						<div className="col-12 col-md-7">
							<div className="py-4 mt-3">
								<h2>BLACK LEATHER SHOE FOR MEN</h2>
								<p>
									Availability:
									<span className="text-danger fw-bold">Out of Stock</span>
								</p>
								{/* <p>Price</p> */}
							</div>
							<hr />

							<div>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
									laborum itaque odit iusto error corporis. Nulla velit ex rerum
									et facilis tenetur fugiat officiis, perspiciatis illum quaerat
									voluptatum voluptatem molestiae eligendi alias quibusdam
									delectus blanditiis fugit aliquid ipsa ratione, molestias
									dolor voluptatibus.
								</p>
								<h2 className="p-3 poppins">$450</h2>
								<div className="my-2 d-flex gap-3">
									<input
										type="number"
										placeholder="0"
										className="form-control rounded-pill shadow-sm"
										style={{ width: "100px" }}
									/>
									<button className="btn btn-danger rounded-pill">
										Add to Cart
									</button>
								</div>
								<small>
									Categories: <b>Footware</b>
								</small>
								<div className="d-flex flex-column mt-5">
									<span className="fw-bold">Kindly visit us at:</span>
									<span className="text-danger">
										No 15, Kodesoh Street, Ikeja, Lagos.
									</span>
									<span className="fw-bold">You can also call</span>

									<br />
									<p className="d-flex flex-column">
										<span>SANDRA 07064901525</span>
										<span>GANIAT 08121981784</span>
										<span>MAUREEN 08023859617</span>
										<span>GRACE 08112200873</span>
										<span>PASCAL 0809400356</span>
									</p>
								</div>
							</div>

							{/* <hr /> */}
						</div>
						<div className="border py-4 px-3 rounded-3 mt-3">
							<h2>
								<span>Related Products</span>
							</h2>
							<div className="d-flex flex-column flex-md-row gap-2">
								<div className="">
									<div
										className="d-flex flex-column justify-content-between border p-3"
										style={{ height: "20rem", minWidth: "10rem" }}
									>
										<small className="poppins">Sneakers</small>
										<h5 className="text-nowrap fw-normal">Running shoes</h5>
										<img
											src={IMAGES.shoe3}
											style={{ maxWidth: "100%", width: "300px", height: 130 }}
											alt=""
										/>
										<div className="d-flex justify-content-between">
											<p className="m-0">$450.00</p>
											<button className="d-flex align-item-center justify-content-center btn btn-outline-dark py-1 px-2 rounded-circle">
												<BsArrowRight />
											</button>
										</div>
									</div>
								</div>
								<div className="">
									<div
										className="d-flex flex-column justify-content-between border p-3"
										style={{ height: "20rem", minWidth: "10rem" }}
									>
										<small className="poppins">Sneakers</small>
										<h5 className="text-nowrap fw-normal">Men shoes</h5>
										<img
											src={IMAGES.shoe4}
											style={{ maxWidth: "100%", width: "300px", height: 130 }}
											alt=""
										/>
										<div className="d-flex justify-content-between">
											<p className="m-0">$450.00</p>
											<button className="d-flex align-item-center justify-content-center btn btn-outline-dark py-1 px-2 rounded-circle">
												<BsArrowRight />
											</button>
										</div>
									</div>
								</div>
								<div className="">
									<div
										className="d-flex flex-column justify-content-between border p-3"
										style={{ height: "20rem", minWidth: "10rem" }}
									>
										<small className="poppins">Sneakers</small>
										<h5 className="text-nowrap fw-normal">Party Shoes</h5>
										<img
											src={IMAGES.shoe5}
											style={{ maxWidth: "100%", width: "300px", height: 130 }}
											alt=""
										/>
										<div className="d-flex justify-content-between">
											<p className="m-0">$450.00</p>
											<button className="d-flex align-item-center justify-content-center btn btn-outline-dark py-1 px-2 rounded-circle">
												<BsArrowRight />
											</button>
										</div>
									</div>
								</div>
								<div className="">
									<div
										className="d-flex flex-column justify-content-between border p-3"
										style={{ height: "20rem", minWidth: "10rem" }}
									>
										<small className="poppins">Sneakers</small>
										<h5 className="text-nowrap fw-normal">Cool Shoes</h5>
										<img
											src={IMAGES.shoe6}
											style={{ maxWidth: "100%", width: "300px", height: 130 }}
											alt=""
										/>
										<div className="d-flex justify-content-between">
											<p className="m-0">$450.00</p>
											<button className="d-flex align-item-center justify-content-center btn btn-outline-dark py-1 px-2 rounded-circle">
												<BsArrowRight />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</ScrollBar>
	);
};

export default Product;
