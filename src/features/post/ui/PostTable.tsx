import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { PostDetailButton } from "./PostDetailButton"
import { PostEditButton } from "./PostEditButton"
import { PostDeleteButton } from "./PostDeleteButton"
import { TagItem } from "./TagItem"
import { HightLightText } from "@/shared/ui/HighLightText"
import usePosts from "../model/usePosts"

/** 게시물 테이블 */
export const PostTable = () => {
  const { loading, posts, searchQuery, openUserModal } = usePosts()

  return loading ? (
    <div className="flex justify-center p-4">로딩 중...</div>
  ) : (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">ID</TableHead>
          <TableHead>제목</TableHead>
          <TableHead className="w-[150px]">작성자</TableHead>
          <TableHead className="w-[150px]">반응</TableHead>
          <TableHead className="w-[150px]">작업</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell>{post.id}</TableCell>
            <TableCell>
              <div className="space-y-1">
                <div>
                  <HightLightText text={post.title} highlight={searchQuery} />
                </div>
                <div className="flex flex-wrap gap-1">
                  {post.tags?.map((tag: string) => <TagItem key={tag} tag={tag} />)}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => openUserModal(post.author)}>
                <img src={post.author?.image} alt={post.author?.username} className="w-8 h-8 rounded-full" />
                <span>{post.author?.username}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                <span>{post.reactions?.likes || 0}</span>
                <ThumbsDown className="w-4 h-4" />
                <span>{post.reactions?.dislikes || 0}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <PostDetailButton post={post} />
                <PostEditButton post={post} />
                <PostDeleteButton postId={post.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
