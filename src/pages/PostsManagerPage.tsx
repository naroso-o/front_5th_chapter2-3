import { useEffect } from "react"
import { PostSection } from "../features/post/ui/PostSection"
import usePosts from "../features/post/model/usePosts"
import { useLocation } from "react-router-dom"

const PostsManager = () => {
  const location = useLocation()
  const { executeInitialFetch, updatedURLFetch } = usePosts()

  useEffect(() => {
    executeInitialFetch()
  }, [])

  useEffect(() => {
    updatedURLFetch()
  }, [location.search])

  return <PostSection />
}

export default PostsManager
