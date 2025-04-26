import { useState } from "react"

const useTags = () => {
  const queryParams = new URLSearchParams(location.search)

  const [tags, setTags] = useState([])
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
  const selectTag = (tag) => {
    setSelectedTag(tag)
  }

  return { tags, selectedTag, fetchTags, selectTag }
}

export default useTags
