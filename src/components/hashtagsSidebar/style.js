import styled from "styled-components";

const THContainer = styled.div`
	width: 301px;
	height: 406px;
	display: flex;
	flex-direction: column;
	gap: 1px;
`
const TrendingContainer = styled.div`
	width: 301px;
	background-color: #171717;
	color: #fff;
	font-weight: 700;
	font-size: 27px;
	font-family: Oswald;
	border-radius: 16px 16px 0 0;
	padding: 20px 0 12px 20px;
`

const HashtagsContainer = styled.div`
	width: 301px;
	background-color: #171717;
	color: #fff;
	display: flex;
	flex-direction: column;
	font-weight: 700;
	font-size: 19px;
	font-family: Lato;
	border-radius: 0 0 16px 16px;
	padding: 20px 0 12px 20px;
	gap: 10px;
`

export { THContainer, TrendingContainer, HashtagsContainer }