import { FC } from "react"

interface Props {
    type: string
}

const TypeBadge:FC<Props> = ({ type }) => {
  return (
    <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-yellow-500 bg-white rounded-full">
        {type}
    </span>
  )
}

export default TypeBadge