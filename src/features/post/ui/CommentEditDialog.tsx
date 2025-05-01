import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "../../../shared/ui"
import useComments from "../model/useComments"

/* 댓글 수정 대화상자 */
export const CommentEditDialog = () => {
  const {
    showEditCommentDialog,
    setShowEditCommentDialog,
    selectedComment,
    updateSelectedComment,
    updateCommentFetch,
  } = useComments()

  return (
    <Dialog open={showEditCommentDialog} onOpenChange={setShowEditCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 수정</DialogTitle>
        </DialogHeader>
        {/* TODO */}
        {selectedComment && (
          <div className="space-y-4">
            <Textarea placeholder="댓글 내용" value={selectedComment?.body || ""} onChange={updateSelectedComment} />
            <Button onClick={updateCommentFetch}>댓글 업데이트</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
