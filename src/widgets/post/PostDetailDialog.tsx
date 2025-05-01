import { CommentSection } from "@/features/post/ui/CommentSection"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"
import { HightLightText } from "@/shared/ui/HighLightText"
import usePosts from "@/features/post/model/usePosts"


/* 게시물 상세 보기 대화상자 */
export const PostDetailDialog = () => {
  const {
    showPostDetailDialog,
    setShowPostDetailDialog,
    selectedPostTitle,
    selectedPostBody,
    selectedPostId,
    searchQuery,
  } = usePosts()

  return (
    <Dialog open={showPostDetailDialog} onOpenChange={setShowPostDetailDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            <HightLightText text={selectedPostTitle} highlight={searchQuery} />
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            <HightLightText text={selectedPostBody} highlight={searchQuery} />
          </p>
          <CommentSection postId={selectedPostId} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
