import { useEffect } from "react"
import { PostAddDialog, PostDetailDialog, PostEditDialog, PostSection } from "@/widgets/post"
import usePosts from "../features/post/model/usePosts"
import { CommentAddDialog, CommentEditDialog } from "@/widgets/comment/ui"
import { useTagsQuery } from "@/features/post/api/useTagsQuery"
import { usePostsQuery } from "@/features/post/api/usePostsQuery"
import { usePostsByTagQuery } from "@/features/post/api/usePostsByTagQuery"
import useParam from "@/shared/model/useParam"
import usePostStore from "@/shared/model/usePostStore"

const PostsManager = () => {
  const { initialize } = usePosts()
  const { selectedTag } = useParam()

  const { data: tags } = useTagsQuery()
  const postsQuery = usePostsQuery()
  const postsByTagQuery = usePostsByTagQuery(selectedTag)

  const isUsingTag = !!selectedTag && selectedTag !== "all"
  const postsData = isUsingTag ? postsByTagQuery.data : postsQuery.data

  const setLoading = usePostStore((s) => s.setLoading)

  const isLoading = isUsingTag ? postsByTagQuery.isLoading : postsQuery.isLoading

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  useEffect(() => {
    if (tags && postsData) {
      initialize(tags, postsData.posts, postsData.total)
    }
  }, [tags, postsData])

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
