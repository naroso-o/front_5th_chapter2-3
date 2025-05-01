import { Edit2 } from "lucide-react"
import { Button } from "../../../shared/ui"
import { Comment } from "../../../pages/PostsManagerPage"
import useCommentButton from "../model/useCommentButton"

interface CommentEditButtonProps {
  comment: Comment
}

export const CommentEditButton = ({ comment }: CommentEditButtonProps) => {
  const { editComment } = useCommentButton()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        editComment(comment)
      }}
    >
      <Edit2 className="w-3 h-3" />
    </Button>
  )
}
