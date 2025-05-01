import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "@/shared/ui"
import useComments from "../model/useComments"

/* 댓글 추가 대화상자 */
export const CommentAddDialog = () => {
  const { showAddCommentDialog, setShowAddCommentDialog, newComment, updateNewComment, addCommentFetch } = useComments()

  return (
    <Dialog open={showAddCommentDialog} onOpenChange={setShowAddCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={newComment.body}
            onChange={updateNewComment}
          />
          <Button onClick={addCommentFetch}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
