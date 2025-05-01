import { ThumbsUp } from "lucide-react"
import { Button } from "@/shared/ui"
import useCommentButton from "../model/useCommentButton"

interface CommentLikeButtonProps {
  commentId: number
  postId: number
  likes: number
}
export const CommentLikeButton = ({ commentId, postId, likes }: CommentLikeButtonProps) => {
  const { likeCommentFetch } = useCommentButton()

  return (
    <Button variant="ghost" size="sm" onClick={() => likeCommentFetch(commentId, postId)}>
      <ThumbsUp className="w-3 h-3" />
      <span className="ml-1 text-xs">{likes}</span>
    </Button>
  )
}
