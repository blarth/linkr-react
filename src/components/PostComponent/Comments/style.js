import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IconTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	div{
		display: flex;
		gap: 5px;
		span{
			text-align: center;
		}
		@media(max-width: 600px){
			gap: 0px;
			flex-direction: column;
		}
	}
`

const Img = styled.img`
	width: 23px;
	cursor: pointer;
`

const Span = styled.span`
	font-family: Lato;
	font-weight: 400;
	font-size: 11px;
	color: #fff;
`

const CommentContainer = styled.div`
	display: flex;
	flex-direction: row;
`

const AvatarContainer = styled.div`

`

const Avatar = styled.img`
	object-fit: cover;
	width: 39px;
	height: 39px;
	border-radius: 304px;
	margin: 28px 18px 16px 25px;
`
const NameTextContainer = styled.div`
	margin-top: 28px;
	display: flex;
	flex-direction: column;
	gap: 5px;
`

const NameContainer = styled.div`
	display: flex;
	flex-direction: row;
`

const CommenterRelation = styled.span`
	color: #565656;
	font-family: Lato;
	font-weight: 400;
	font-size: 14px;
	display: flex;
	flex-direction: row;
	margin-left: 5px;
	gap: 3px;
`

const CommenterName = styled(Link)`
	color: #F3F3F3;
	font-family: Lato;
	font-weight: 700;
	font-size: 14px;
`

const CommenterTextContainer = styled.div`
	color: #ACACAC;
	font-family: Lato;
	font-size: 14px;
	font-weight: 400;
`

const WhiteLine = styled.div`
	background-color: #353535;
	height: 1px;
	width: 100%;
`

export { IconTextContainer,
		Img,
		Span,
		CommentContainer,
		AvatarContainer,
		Avatar,
		NameTextContainer,
		NameContainer,
		CommenterName,
		CommenterTextContainer,
		CommenterRelation,
		WhiteLine
	}