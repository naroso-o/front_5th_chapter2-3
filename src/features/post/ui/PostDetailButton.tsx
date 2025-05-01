import { MessageSquare } from "lucide-react"
import { Button } from "../../../shared/ui"
import usePosts from "../model/usePosts"
import { Post } from "../../../pages/PostsManagerPage"

interface PostDetailButtonProps {
  post: Post
}

export const PostDetailButton = ({ post }: PostDetailButtonProps) => {
  const { openPostDetail } = usePosts()

  return (
    <Button variant="ghost" size="sm" onClick={() => openPostDetail(post)}>
      <MessageSquare className="w-4 h-4" />
    </Button>
  )
}
