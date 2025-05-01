import useCommentStore from "../../../shared/model/useCommentStore"
import { Comment } from "../../../pages/PostsManagerPage"

const useCommentButton = () => {
  const {comments, setComments, setSelectedComment, setShowEditCommentDialog} = useCommentStore()

  /** 댓글 좋아요 */
  const likeCommentFetch = async (id: number, postId: number) => {
    try {
      const comment = comments[postId].find((c) => c.id === id)
      if (!comment) {
        throw new Error()
      }
      const response = await fetch(`/api/comments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes: comment.likes + 1 }),
      })
      const data = await response.json()
      setComments({
        ...comments,
        [postId]: comments[postId].map((comment) =>
          comment.id === data.id ? { ...data, likes: comment.likes + 1 } : comment,
        ),
      })
    } catch (error) {
      console.error("댓글 좋아요 오류:", error)
    }
  }

  /** 댓글 편집 */
  const editComment = (comment: Comment) => {
    setSelectedComment(comment)
    setShowEditCommentDialog(true)
  }

  /** 댓글 삭제 */
  const deleteCommentFetch = async (id: number, postId: number) => {
    try {
      const { comments } = useCommentStore.getState()

      await fetch(`/api/comments/${id}`, {
        method: "DELETE",
      })

      setComments({
        ...comments,
        [postId]: comments[postId].filter((comment) => comment.id !== id),
      })
    } catch (error) {
      console.error("댓글 삭제 오류:", error)
    }
  }

  return { likeCommentFetch, editComment, deleteCommentFetch }
}

export default useCommentButton
