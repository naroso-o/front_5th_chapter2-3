import { CommentAddDialog } from "./CommentAddDialog"
import { CommentEditDialog } from "./CommentEditDialog"
import { CommentAddButton } from "./CommentAddButton"
import { CommentItem } from "./CommentItem"
import useComments from "../model/useComments"

interface CommentSectionProps {
  postId: number
}

export const CommentSection = ({ postId }: CommentSectionProps) => {
  const { getComments } = useComments()

  return (
    <>
      <CommentAddDialog />
      <CommentEditDialog />
      <div className="mt-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold">댓글</h3>
          <CommentAddButton postId={postId} />
        </div>
        <div className="space-y-1">
          {getComments(postId)?.map((comment) => <CommentItem key={comment.id} postId={postId} comment={comment} />)}
        </div>
      </div>
    </>
  )
}
