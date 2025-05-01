import { Plus } from "lucide-react"
import useComments from "../../features/comment/model/useComments"
import { CommentAddDialog } from "../../features/comment/ui/CommentAddDialog"
import { CommentEditDialog } from "../../features/comment/ui/CommentEditDialog"
import { CommentItem } from "../../features/comment/ui/CommentItem"
import { Button } from "../../shared/ui"

interface CommentSectionProps {
  postId: number
}

export const CommentSection = ({ postId }: CommentSectionProps) => {
  const { getComments, addComment } = useComments()

  return (
    <>
      <CommentAddDialog />
      <CommentEditDialog />
      <div className="mt-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold">댓글</h3>
          <Button
            size="sm"
            onClick={() => {
              addComment(postId)
            }}
          >
            <Plus className="w-3 h-3 mr-1" />
            댓글 추가
          </Button>
        </div>
        <div className="space-y-1">
          {getComments(postId)?.map((comment) => <CommentItem key={comment.id} postId={postId} comment={comment} />)}
        </div>
      </div>
    </>
  )
}
