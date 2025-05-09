import useCommentStore from "@/shared/model/useCommentStore"
import useParam from "@/shared/model/useParam"
import usePostStore from "@/shared/model/usePostStore"
import useTagStore from "@/shared/model/useTagStore"
import useUserStore from "@/shared/model/useUserStore"
import { Post, Tag, User } from "@/shared/types"

export type EditType = "title" | "body"
export type AddType = "title" | "body" | "userId"

const usePosts = () => {
  const {  searchQuery, updateParam } = useParam()
  const {
    loading,
    posts,
    setPosts,
    newPost,
    setNewPost,
    selectedPost,
    setSelectedPost,
    setTotal,
    showAddDialog,
    setShowAddDialog,
    showEditDialog,
    setShowEditDialog,
    showPostDetailDialog,
    setShowPostDetailDialog,
  } = usePostStore()

  const { comments, setComments } = useCommentStore()
  const { setTags } = useTagStore()
  const { setSelectedUser, setShowUserModal } = useUserStore()

  const selectedPostTitle = selectedPost?.title || ""
  const selectedPostBody = selectedPost?.body || ""
  const selectedPostId = selectedPost?.id || 0 // TODO: null일 때 0?

  const initialize = (tags: Tag[] = [], posts: Post[] = [], total: number = 0) => {
    setTags(tags)
    setPosts(posts)
    setTotal(total)
  }

  /** 게시물 검색 */
  const searchPostsFetch = async () => {
    try {
      const response = await fetch(`/api/posts/search?q=${searchQuery}`)
      const data = await response.json()
      setPosts(data.posts)
      setTotal(data.total)
    } catch (error) {
      console.error("게시물 검색 오류:", error)
    }
  }

  /** 게시물 추가 */
  const addPostFetch = async () => {
    try {
      const response = await fetch("/api/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      })
      const data = await response.json()
      setPosts([data, ...posts])
      setShowAddDialog(false)
      setNewPost({ title: "", body: "", userId: 1 })
    } catch (error) {
      console.error("게시물 추가 오류:", error)
    }
  }

  /** 게시물 업데이트 */
  const updatePostFetch = async () => {
    try {
      if (!selectedPost) {
        throw new Error()
      }
      const response = await fetch(`/api/posts/${selectedPost.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedPost),
      })
      const data = await response.json()
      setPosts(posts.map((post) => (post.id === data.id ? data : post)))
      setShowEditDialog(false)
    } catch (error) {
      console.error("게시물 업데이트 오류:", error)
    }
  }

  /** 게시물 삭제 */
  const deletePostFetch = async (id: number) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })
      setPosts(posts.filter((post) => post.id !== id))
    } catch (error) {
      console.error("게시물 삭제 오류:", error)
    }
  }

  /** 댓글 가져오기 */
  const fetchComments = async (postId: number) => {
    if (comments[postId]) return // 이미 불러온 댓글이 있으면 다시 불러오지 않음
    try {
      const response = await fetch(`/api/comments/post/${postId}`)
      const data = await response.json()
      setComments({ ...comments, [postId]: data.comments })
    } catch (error) {
      console.error("댓글 가져오기 오류:", error)
    }
  }

  /** 게시물 상세 보기 */
  const openPostDetail = async (post: Post) => {
    setSelectedPost(post)
    fetchComments(post.id)
    setShowPostDetailDialog(true)
  }

  /** 사용자 모달 열기 */
  const openUserModal = async (user: User) => {
    try {
      const response = await fetch(`/api/users/${user.id}`)
      const userData = await response.json()
      setSelectedUser(userData)
      setShowUserModal(true)
    } catch (error) {
      console.error("사용자 정보 가져오기 오류:", error)
    }
  }

  /** search query 업데이트 */
  const updateSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateParam("search", e.target.value)
  }

  /** 검색창 엔터 */
  const executeSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchPostsFetch()
    }
  }

  /** 새 게시글 수정 */
  const updateNewPost = (value: string | number, type: AddType) => {
    const newAddedPost = newPost as Post
    setNewPost({ ...newAddedPost, [type]: value })
  }

  /** 선택된 게시글 수정 */
  const updateSelectedPost = (value: string, type: EditType) => {
    const newSelectedPost = selectedPost as Post
    setSelectedPost({ ...newSelectedPost, [type]: value })
  }

  const editPost = (post: Post) => {
    setSelectedPost(post)
    setShowEditDialog(true)
  }

  return {
    loading,
    posts,
    addPostFetch,
    updatePostFetch,
    deletePostFetch,
    openPostDetail,
    openUserModal,
    searchQuery,
    updateSearchQuery,
    executeSearch,
    newPost,
    updateNewPost,
    updateSelectedPost,
    editPost,
    selectedPostId,
    selectedPostTitle,
    selectedPostBody,
    showAddDialog,
    setShowAddDialog,
    showEditDialog,
    setShowEditDialog,
    showPostDetailDialog,
    setShowPostDetailDialog,
    initialize,
  }
}

export default usePosts
