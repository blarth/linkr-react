import { Avatar,
		CommenterName,
		CommenterTextContainer,
		CommentContainer,
		AvatarContainer,
		NameTextContainer,
		NameContainer,
		CommenterRelation,
		WhiteLine
	} from "./style"

export default function SingleComment({authorId, commenterId, doIfollow, image, name, text}){
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
						{doIfollow &&
						<span>• following</span>}
					</CommenterRelation>
				</NameContainer>
				<CommenterTextContainer>
					{text}
				</CommenterTextContainer>
			</NameTextContainer>
		</CommentContainer>
		<WhiteLine></WhiteLine>
		</>
	)
}