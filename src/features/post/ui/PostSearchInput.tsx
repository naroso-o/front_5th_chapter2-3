import { Search } from "lucide-react"
import usePosts from "../model/usePosts"
import { Input } from "../../../shared/ui"

export const PostSearchInput = () => {
  const { searchQuery, updateSearchQuery, executeSearch } = usePosts()

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="게시물 검색..."
        className="pl-8"
        value={searchQuery}
        onChange={updateSearchQuery}
        onKeyPress={executeSearch}
      />
    </div>
  )
}
