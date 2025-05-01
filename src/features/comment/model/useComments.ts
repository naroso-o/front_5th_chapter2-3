import useCommentStore from "@/shared/model/useCommentStore"

const useComments = () => {
  const {
    newComment,
    setNewComment,
    comments,
    setComments,
    selectedComment,
    setSelectedComment,
    showEditCommentDialog,
    setShowEditCommentDialog,
    showAddCommentDialog,
    setShowAddCommentDialog,
  } = useCommentStore()

  /** 특정 게시글의 댓글 목록을 가져옵니다. */
  const getComments = (postId: number) => comments[postId]

  /** 댓글 추가 */
  const addCommentFetch = async () => {
    try {
      const response = await fetch("/api/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      })
      const data = await response.json()

      setComments({
        ...useCommentStore.getState().comments,
        [data.postId]: [...(comments[data.postId] || []), data],
      })

      setShowAddCommentDialog(false)
      setNewComment({ body: "", postId: null, userId: 1 })
    } catch (error) {
      console.error("댓글 추가 오류:", error)
    }
  }

  /** 댓글 업데이트 */
  const updateCommentFetch = async () => {
    try {
      if (!selectedComment) {
        throw new Error()
      }

      const response = await fetch(`/api/comments/${selectedComment.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: selectedComment.body }),
      })
      const data = await response.json()

      setComments({
        ...comments,
        [data.postId]: comments[data.postId].map((comment) => (comment.id === data.id ? data : comment)),
      })

      setShowEditCommentDialog(false)
    } catch (error) {
      console.error("댓글 업데이트 오류:", error)
    }
  }

  /** 댓글 추가 */
  const addComment = (postId: number) => {
    setNewComment({ ...newComment, postId })
    setShowAddCommentDialog(true)
  }

  /** 새 댓글 업데이트 */
  const updateNewComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment({ ...newComment, body: e.target.value })
  }

  /** 선택된 댓글 업데이트 */
  const updateSelectedComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newSelectedComment = selectedComment as Comment // TODO: 이렇게 해도 괜찮나?
    setSelectedComment({ ...newSelectedComment, body: e.target.value })
  }

  return {
    getComments,
    addCommentFetch,
    updateCommentFetch,
    addComment,
    newComment,
    updateNewComment,
    selectedComment,
    updateSelectedComment,
    showAddCommentDialog,
    setShowAddCommentDialog,
    showEditCommentDialog,
    setShowEditCommentDialog,
  }
}

export default useComments
