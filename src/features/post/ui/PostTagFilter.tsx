import useParam from "../../../shared/model/useParam"
import useTagStore from "../../../shared/model/useTagStore"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui"
import usePosts from "../model/usePosts"
import useTags from "../model/useTags"

export const PostTagFilter = () => {
  const { selectedTag } = useParam()
  const { selectTag } = useTags()
  const { tags } = useTagStore()
  const {fetchPostsByTag} = usePosts()

  return (
    <Select
      value={selectedTag}
      onValueChange={(value) => {
        selectTag(value)
        fetchPostsByTag(value)
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tags.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
