import styled from "styled-components";

export const PrevImg = styled.div`
	position: relative;
	width: 120px;
	height: 70px;

	.prev_img {
		position: absolute;
	}
	& .delete_icon {
		/* background-color: white; */
		position: absolute;
		/* left: 45px; */
		top: 20px;
		/* right: 50%; */
		z-index: 999;
		width: 100%;
	}
	.overlay {
		position: absolute;
		width: 100%;
		height: 70px;
		background-color: white;
		z-index: 99;
		opacity: 0.4;
	}
`;
