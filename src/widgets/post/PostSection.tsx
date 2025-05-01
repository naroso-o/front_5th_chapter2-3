import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui"
import { PostPagination } from "../../features/post/ui/PostPagination"
import { PostTable } from "../../features/post/ui/PostTable"
import { PostAddButton } from "../../features/post/ui/PostAddButton"
import { PostSearchInput } from "../../features/post/ui/PostSearchInput"
import { PostSortFilter } from "../../features/post/ui/PostSortFilter"
import { PostTagFilter } from "../../features/post/ui/PostTagFilter"
import { UserDialog } from "../../features/post/ui/UserDialog"

export const PostSection = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>게시물 관리자</span>
          <PostAddButton />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <PostSearchInput />
            </div>
            <PostTagFilter />
            <PostSortFilter />
          </div>
          <PostTable />
          <PostPagination />
        </div>
      </CardContent>
      <UserDialog />
    </Card>
  )
}
