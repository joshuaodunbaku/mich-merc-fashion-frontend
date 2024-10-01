import styled from "styled-components";

export const PrevImg = styled.div`
	position: relative;
	width: 120px;
	height: 90px;

	.prev_img {
		position: absolute;
	}
	& .delete_icon {
		position: absolute;
		top: 55px;
		color: red;
		z-index: 999;
		width: 100%;
	}
	.overlay {
		position: absolute;
		width: 100%;
		height: 90px;
		background-color: white;
		z-index: 99;
		opacity: 0.4;
	}
`;
