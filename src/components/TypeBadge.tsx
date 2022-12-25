import { FC } from "react"

interface Props {
    type: string
}

const TypeBadge:FC<Props> = ({ type }) => {
  return (
    <span className={`capitalize flex items-center px-3 py-2 text-xs font-bold leading-none cursor-pointer hover:text-black text-white ring-2 hover:ring-black ring-white hover:bg-white bg-transparent rounded-full`}>
        {type}
    </span>
  )
}

export default TypeBadge