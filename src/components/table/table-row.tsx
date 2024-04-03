import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface TableRowProps extends ComponentProps<'tr'> {}

const TableRow = (props: TableRowProps) => {
  return (
    <tr 
      {...props} 
      className={twMerge('py-3 px-4 text-sm text-zinc-300', props.className)} 
    />
  )
}

export default TableRow