import * as yup from "yup";

const schema = yup.object().shape({
	product_name: yup.string().required("Product name is required"),
	description: yup.string().required("Description is required"),

	price: yup.string().required("Price is required"),
	amount_available: yup.string().required("Amount"),
	image_upload: yup
		.array()
		.of(
			yup
				.mixed()
				.required("An image is required")
				.test(
					"fileSize",
					"The file is too large",
					(value) => value && value.size <= 10000000
				) // 10MB limit
				.test(
					"fileType",
					"Unsupported file format",
					(value) =>
						value &&
						["image/jpeg", "image/png", "image/gif"].includes(value.type)
				)
		)
		.required("At least one image is required")
		.min(1, "At least one image is required")
		.max(4, "You can upload a maximum of 4 images"), // Max 4 images,
	address: yup.string().required("Address is required"),
});

export { schema };
