import { FC } from "react"

interface Props {
    type: string
}

const TypeBadge:FC<Props> = ({ type }) => {
  return (
    <span className={`capitalize flex items-center px-3 py-2 text-xs font-bold leading-none text-blue-900 ring-2 ring-blue-900 bg-yellow-400 rounded-full`}>
        {type}
    </span>
  )
}

export default TypeBadge