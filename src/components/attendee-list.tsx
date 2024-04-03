import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react"
import IconButton from "./icon-button"
import Table from "./table/table"
import TableHeader from "./table/table-header"
import TableCell from "./table/table-cell"
import TableRow from "./table/table-row"
import { ChangeEvent, useState } from "react"
import { attendees } from "../data/attendees"
import relativeTime from "dayjs/plugin/relativeTime"
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

const AttendeeList = () => {
  const [_, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(attendees.length / 10)

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function goToNextPage() {
    setPage(page + 1)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  function goToFirstPage() {
    setPage(1)
  }

  function goToLastPage() {
    setPage(totalPages)
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-3 items-center">
        <h1 className="font-semibold text-xl">Participants</h1>

        <div className="px-3 py-1.5 w-72 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />

          <input 
            type="text" 
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm ring-0"
            placeholder="Search participants..."
            onChange={onSearchInputChanged}
          />
        </div>
      </div>  

      <Table>
        <thead>
          <TableRow className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input type="checkbox" className="size-4 bg-transparent rounded border border-white/10 accent-orange-400" />
            </TableHeader>
            <TableHeader>Code</TableHeader>
            <TableHeader>Participant</TableHeader>
            <TableHeader>Register date</TableHeader>
            <TableHeader>Check-in date</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
            return (
              <TableRow key={attendee.id} className="border-b border-white/10 hover:bg-white/5">
                <TableCell>
                  <input type="checkbox" className="size-4 bg-transparent rounded border border-white/10 checked:accent-orange-400" />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">{attendee.name}</span>
                    <span>{attendee.email.toLocaleLowerCase()}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
                <TableCell className="py-3 px-4 text-sm text-zinc-300 w-[60px]">
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </tbody>
        <tfoot>
          <TableRow>
            <TableCell colSpan={3}>Showing 10 of {attendees.length} items</TableCell>
            <TableCell className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
              <div className="items-center gap-4 inline-flex">
                <span>Page {page} of {totalPages}</span>

                <div className="flex gap-1">
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </tfoot>
      </Table>
    </div>
  )
}

export default AttendeeList