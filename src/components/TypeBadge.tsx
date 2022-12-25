import { FC } from "react"

interface Props {
    type: string
}

const TypeBadge:FC<Props> = ({ type }) => {
  return (
    <span className={`capitalize flex items-center px-3 py-2 text-xs font-bold leading-none text-white ring-2 ring-white bg-transparent rounded-full`}>
        {type}
    </span>
  )
}

export default TypeBadge