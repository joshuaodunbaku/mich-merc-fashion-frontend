import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../Utils/helpers";
import {  BiLinkAlt } from "react-icons/bi";

const CategoryPrev = ({ catInfo, catTitle }) => {
	return (
		<div className="container mt-4">
			<Link className="btn" to={`${catTitle}`}>
				<h2 className="text-black-emphasis display-5 fw-normal">
					{capitalizeFirstLetter(catTitle)}
					<BiLinkAlt
						size={35}
						className="text-secondary bg-light rounded-circle"
					/>
				</h2>
			</Link>

			<div className="row">
				{/* {Array.from({ length: 4 }).map((_, index) => ( */}
				{catInfo.slice(0, 4).map((info, index) => (
					<div className="col-12 col-md-6 col-lg-3">
						<ProductCard productInfo={info} myIndex={index} />
					</div>
				))}
				<div className="text-center">
					<Link
						className="btn btn-outline-danger  rounded-pill poppins"
						to={`${catTitle}`}
					>
						View More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CategoryPrev;
