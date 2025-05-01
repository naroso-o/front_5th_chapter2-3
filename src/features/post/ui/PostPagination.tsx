import useParam from "../../../shared/model/useParam"
import usePostStore from "../../../shared/model/usePostStore"
import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui"

/* 페이지네이션 */
export const PostPagination = () => {
  const { total } = usePostStore()
  const { limit, skip, updateParam } = useParam()

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span>표시</span>
        <Select value={limit.toString()} onValueChange={(value) => updateParam("limit", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
          </SelectContent>
        </Select>
        <span>항목</span>
      </div>
      <div className="flex gap-2">
        <Button disabled={skip === 0} onClick={() => updateParam("skip", String(Math.max(0, skip - limit)))}>
          이전
        </Button>
        <Button disabled={skip + limit >= total} onClick={() => updateParam("skip", String(skip + limit))}>
          다음
        </Button>
      </div>
    </div>
  )
}
