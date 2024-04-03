import { ComponentProps } from "react"

interface TableProps extends ComponentProps<'table'> {}

const Table = (props: TableProps) => {
  return (
    <div className="w-full border border-white/10 rounded-lg">
      <table className="w-full" {...props} />
    </div>
  )
}

export default Table