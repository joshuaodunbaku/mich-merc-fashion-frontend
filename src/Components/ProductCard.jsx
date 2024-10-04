import React from 'react'
import styled from 'styled-components'
import IMAGES from '../images/images';
import { GrAdd } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";

const Wrapper = styled.div`
	width: 100%;
	/* height: 350px; */
	border: 1;
`;

const ProductCard = ({ productInfo }) => {
	console.log(productInfo);

	const { id, name, imageUrl, price } = productInfo;
	return (
		<Wrapper>
			<div>
				<Card
					style={{ height: "450px" }}
					className="gap-2 m-2 border-0 rounded-1 bg-light"
				>
					<Card.Img
						className="rounded-0"
						variant="top"
						src={imageUrl}
						height={"200px"}
					/>
					<Card.Header>
						<h4 className="fw-bold" style={{ color: "#050580" }}>
							{name}
						</h4>
					</Card.Header>
					<Card.Body className="d-flex flex-column justify-content-between">
						<Card.Title className="">
							<h4>
								<span>${price}</span>
							</h4>
						</Card.Title>
						<Card.Text>Sneaker</Card.Text>
						<div className="d-flex align-items-center justify-content-between">
							<Link
								to={"/product"}
								className="btn btn-outline-danger rounded-pill"
							>
								View
							</Link>
							<button className="btn btn-outline-danger rounded-circle d-flex align-items-center">
								<GrAdd size={"20"} />
							</button>
						</div>
					</Card.Body>
				</Card>
			</div>
		</Wrapper>
	);
};

export default ProductCard