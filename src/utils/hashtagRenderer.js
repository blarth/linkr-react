import styled from "styled-components";
import ReactHashtag from "@mdnm/react-hashtag";
import { Link } from "react-router-dom";

export default function HashtagRender(text){ //passar diretamente o texto
	return(
			<ReactHashtag renderHashtag={(hashtagText) => (
				<StyledHashtag to={`/hashtag/${hashtagText.slice(1)}`}>{hashtagText}</StyledHashtag>
				)}>
				{text}
			</ReactHashtag>
	);
}

const StyledHashtag = styled(Link)`
	font-weight: 700;
	color: #fff;
`