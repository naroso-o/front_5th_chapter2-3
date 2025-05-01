import { Trash2 } from "lucide-react"
import { Button } from "../../../shared/ui"
import useCommentButton from "../model/useCommentButton"

interface CommentDeleteButtonProps {
  commentId: number
  postId: number
}

export const CommentDeleteButton = ({ commentId, postId }: CommentDeleteButtonProps) => {
  const {deleteCommentFetch} = useCommentButton()
  
  return (
    <Button variant="ghost" size="sm" onClick={() => deleteCommentFetch(commentId, postId)}>
      <Trash2 className="w-3 h-3" />
    </Button>
  )
}
