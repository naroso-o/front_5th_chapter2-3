import { Plus } from "lucide-react"
import { Button } from "../../../shared/ui"
import useComments from "../model/useComments"

interface CommentAddButtonProps {
  postId: number
}

export const CommentAddButton = ({ postId }: CommentAddButtonProps) => {
  const { addComment } = useComments()

  return (
    <Button
      size="sm"
      onClick={() => {
        addComment(postId)
      }}
    >
      <Plus className="w-3 h-3 mr-1" />
      댓글 추가
    </Button>
  )
}
