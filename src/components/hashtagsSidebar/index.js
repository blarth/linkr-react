import {
	THContainer,
	TrendingContainer,
	HashtagsContainer
} from '../hashtagsSidebar/style.js'

export default function Sidebar(){
	return(
		<THContainer>
			<TrendingContainer>trending</TrendingContainer>
			<HashtagsContainer>
				<div>#eu</div>
				<div>#voce</div>
				<div>#e</div>
				<div>#zooboomafoo</div>
			</HashtagsContainer>
		</THContainer>
	)
}