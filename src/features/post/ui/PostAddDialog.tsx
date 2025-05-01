import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "@/shared/ui"
import usePosts from "../model/usePosts"

/* 게시물 추가 대화상자 */
export const PostAddDialog = () => {
  const { showAddDialog, setShowAddDialog, newPost, updateNewPost, addPostFetch } = usePosts()

  return (
    <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="제목" value={newPost.title} onChange={(e) => updateNewPost(e.target.value, "title")} />
          <Textarea
            rows={30}
            placeholder="내용"
            value={newPost.body}
            onChange={(e) => updateNewPost(e.target.value, "body")}
          />
          <Input
            type="number"
            placeholder="사용자 ID"
            value={newPost.userId}
            // TODO: number 타입 확인?
            onChange={(e) => updateNewPost(Number(e.target.value), "userId")}
          />
          <Button onClick={addPostFetch}>게시물 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
