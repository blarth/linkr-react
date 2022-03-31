import CommentsIcon from '../../../assets/svg/CommentsIcon.svg'
import { IconTextContainer, Img, Span } from './style'

export default function CommentButton({comments, setComments}){

	return(
		<IconTextContainer>
			<Img src={CommentsIcon} onClick={() =>{
				comments.commentBoxOpen ?
				setComments({...comments, commentBoxOpen: false}) :
				setComments({...comments, commentBoxOpen: true})}}
				alt="Show comments button"
			/>
			<div>
				<Span>{comments.commentsList.length > 0 && comments.commentsList.length}</Span>
				<Span>{comments.commentsList.length === 0 ?
					'No comments yet' :
					comments.commentsList.length === 1 ?
					'Comment' :
					'Comments'}
				</Span>
			</div>
		</IconTextContainer>
	)
}