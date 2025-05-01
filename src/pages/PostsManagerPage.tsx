import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { PostAddDialog, PostDetailDialog, PostEditDialog, PostSection } from "@/widgets/post"
import usePosts from "../features/post/model/usePosts"
import { CommentAddDialog, CommentEditDialog } from "@/widgets/comment/ui"

const PostsManager = () => {
  const location = useLocation()
  const { executeInitialFetch, updatedURLFetch } = usePosts()

  useEffect(() => {
    executeInitialFetch()
  }, [])

  useEffect(() => {
    updatedURLFetch()
  }, [location.search])

  return (
    <>
      <PostSection />
      <PostDetailDialog />
      <PostAddDialog />
      <PostEditDialog />
      <CommentAddDialog />
      <CommentEditDialog />
    </>
  )
}

export default PostsManager
