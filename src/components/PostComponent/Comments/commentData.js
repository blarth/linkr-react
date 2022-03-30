import { Avatar,
		CommenterName,
		CommenterTextContainer,
		CommentContainer,
		AvatarContainer,
		NameTextContainer,
		NameContainer,
		CommenterRelation,
	} from "./style"

export default function SingleComment({authorId, commenterId, image, name, text}){
	return(
		<>
		<CommentContainer>
			<AvatarContainer>
				<Avatar src={image} alt="user avatar" />
			</AvatarContainer>
			<NameTextContainer>
				<NameContainer>
					<CommenterName to={`/user/${commenterId}`}>
						{name}
					</CommenterName>
					<CommenterRelation>
						{authorId === commenterId &&
						<span>• post's author</span>}
					</CommenterRelation>
				</NameContainer>
				<CommenterTextContainer>
					{text}
				</CommenterTextContainer>
			</NameTextContainer>
		</CommentContainer>
		</>
	)
}