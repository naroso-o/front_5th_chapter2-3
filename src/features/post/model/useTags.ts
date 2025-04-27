import { useState } from "react"

type Tag = { url: string; slug: string }

const useTags = () => {
  const queryParams = new URLSearchParams(location.search)

  const [tags, setTags] = useState<Tag[]>([])
  const [selectedTag, setSelectedTag] = useState(queryParams.get("tag") || "")

  /** 태그 가져오기 */
  const fetchTags = async () => {
    try {
      const response = await fetch("/api/posts/tags")
      const data = await response.json()
      setTags(data)
    } catch (error) {
      console.error("태그 가져오기 오류:", error)
    }
  }

  /** 태그 선택하기 */
  const selectTag = (tag: string) => {
    setSelectedTag(tag)
  }

  return { tags, selectedTag, fetchTags, selectTag }
}

export default useTags
