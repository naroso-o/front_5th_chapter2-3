import { PostDetailDialog } from "./PostDetailDialog"
import { PostAddDialog } from "./PostAddDialog"
import { PostEditDialog } from "./PostEditDialog"
import { PostPagination } from "./PostPagination"
import { PostTable } from "./PostTable"
import { PostAddButton } from "./PostAddButton"
import { PostSearchInput } from "./PostSearchInput"
import { PostSortFilter } from "./PostSortFilter"
import { PostTagFilter } from "./PostTagFilter"
import { Card, CardContent, CardHeader, CardTitle } from "../../../shared/ui"
import { UserDialog } from "./UserDialog"

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
      <PostDetailDialog />
      <PostAddDialog />
      <PostEditDialog />
      <UserDialog />
    </Card>
  )
}
