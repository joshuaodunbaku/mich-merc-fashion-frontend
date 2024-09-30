import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ViewItems = () => {
	return (
		<>
			<div className="container my-5">
				<h2 className="paytone-one text-success">Products</h2>

				<Table striped className="border" responsive="sm">
					<thead>
						<tr>
							<th>#</th>
							<th>Product</th>
							<th>Email</th>
							<th>Phone Number</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>John Doe</td>
							<td>johndoe@gmail.com</td>
							<td>07012345678</td>
							<th>
								<Link to={"details"}>View</Link>
							</th>
						</tr>
						<tr>
							<td>2</td>
							<td>John Doe</td>
							<td>johndoe@gmail.com</td>
							<td>07012345678</td>
							<th>
								<Link to={"details"}>View</Link>
							</th>
						</tr>
						<tr>
							<td>3</td>
							<td>John Doe</td>
							<td>johndoe@gmail.com</td>
							<td>07012345678</td>
							<th>
								<Link to={"details"}>View</Link>
							</th>
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	);
};

export default ViewItems;
