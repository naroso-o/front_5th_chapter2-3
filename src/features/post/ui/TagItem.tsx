import useTags from "../model/useTags"

interface TagItemProps {
  tag: string
}
export const TagItem = ({ tag }: TagItemProps) => {
  const { selectedTag, selectTag } = useTags()

  return (
    <span
      className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer ${
        selectedTag === tag ? "text-white bg-blue-500 hover:bg-blue-600" : "text-blue-800 bg-blue-100 hover:bg-blue-200"
      }`}
      onClick={() => {
        console.log("tag clicked", tag)
        selectTag(tag)
        // updateURL()
      }}
    >
      {tag}
    </span>
  )
}
