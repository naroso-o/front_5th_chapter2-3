import { Comment } from "../../../pages/PostsManagerPage"
import useParam from "../../../shared/model/useParam"
import { HightLightText } from "../../../shared/ui/HighLightText"
import { CommentDeleteButton } from "../../../entities/comment/ui/CommentDeleteButton"
import { CommentEditButton } from "../../../entities/comment/ui/CommentEditButton"
import { CommentLikeButton } from "../../../entities/comment/ui/CommentLikeButton"

interface CommentItemProps {
  postId: number
  comment: Comment
}

export const CommentItem = ({ postId, comment }: CommentItemProps) => {
  const { searchQuery } = useParam()

  return (
    <div className="flex items-center justify-between text-sm border-b pb-1">
      <div className="flex items-center space-x-2 overflow-hidden">
        <span className="font-medium truncate">{comment.user.username}:</span>
        <span className="truncate">
          <HightLightText text={comment.body} highlight={searchQuery} />
        </span>
      </div>
      <div className="flex items-center space-x-1">
        <CommentLikeButton commentId={comment.id} postId={postId} likes={comment.likes} />
        <CommentEditButton comment={comment} />
        <CommentDeleteButton commentId={comment.id} postId={postId} />
      </div>
    </div>
  )
}
