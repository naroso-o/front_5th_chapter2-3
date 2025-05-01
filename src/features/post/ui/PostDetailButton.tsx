import { MessageSquare } from "lucide-react"
import { Button } from "@/shared/ui"
import { Post } from "@/shared/types"
import usePosts from "../model/usePosts"

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
