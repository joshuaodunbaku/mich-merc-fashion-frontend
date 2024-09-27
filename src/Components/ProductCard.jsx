import React from 'react'
import styled from 'styled-components'
import IMAGES from '../images/images';
import { GrAdd } from 'react-icons/gr';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  border: 1;
`

const ProductCard = ({productInfo}) => {
	console.log(productInfo);

	const {id, name, imageUrl, price } = productInfo;
  return (
		<Wrapper>
			<div
				className="d-flex flex-column justify-content-between border rounded-3 bg-light p-3"
				style={{ height: "20rem", minWidth: "10rem" }}
			>
				<small className="poppins"></small>
				<h5 className="text-nowrap fw-normal" style={{ color: "#050580" }}>
					{name}
				</h5>
				<img
					src={IMAGES.shoe4}
					style={{ maxWidth: "100%", width: "200px", height: 130 }}
					alt=""
				/>
					<p
						className="m-0 fw-bold"
						style={{ color: "#050580" }}
					>
						${price}
					</p>
				<div className="d-flex align-items-center justify-content-between">
					<div className="d-flex gap-2">
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
				</div>
			</div>
		</Wrapper>
	);
}

export default ProductCard