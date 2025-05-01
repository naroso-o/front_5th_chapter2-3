import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "@/shared/ui"
import usePosts from "../model/usePosts"

/* 게시물 수정 대화상자 */
export const PostEditDialog = () => {
  const {
    showEditDialog,
    setShowEditDialog,
    selectedPostTitle,
    selectedPostBody,
    updateSelectedPost,
    updatePostFetch,
  } = usePosts()
  return (
    <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={selectedPostTitle}
            onChange={(e) => updateSelectedPost(e.target.value, "title")}
          />
          <Textarea
            rows={15}
            placeholder="내용"
            value={selectedPostBody}
            onChange={(e) => updateSelectedPost(e.target.value, "body")}
          />
          <Button onClick={updatePostFetch}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
