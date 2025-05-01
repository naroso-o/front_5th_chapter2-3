import { Trash2 } from "lucide-react"
import { Button } from "../../../shared/ui"
import usePosts from "../model/usePosts"

interface PostDeleteButtoProps {
  postId: number
}

export const PostDeleteButton = ({ postId }: PostDeleteButtoProps) => {
  const { deletePostFetch } = usePosts()
  return (
    <Button variant="ghost" size="sm" onClick={() => deletePostFetch(postId)}>
      <Trash2 className="w-4 h-4" />
    </Button>
  )
}
