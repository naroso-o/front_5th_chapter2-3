import { Post } from "../../../pages/PostsManagerPage"
import { Edit2 } from "lucide-react"
import { Button } from "../../../shared/ui"
import usePosts from "../model/usePosts"

interface PostEditButtonProps {
  post: Post
}

export const PostEditButton = ({ post }: PostEditButtonProps) => {
  const { editPost } = usePosts()

  return (
    <Button variant="ghost" size="sm" onClick={() => editPost(post)}>
      <Edit2 className="w-4 h-4" />
    </Button>
  )
}
