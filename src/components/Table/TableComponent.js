import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import PaginationComponent from './PaginationComponent'
import { Button } from '@/components/ui/button'
import { PencilIcon, TrashIcon } from 'lucide-react'

const TableComponent = ({ columns, data }) => {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const table = useReactTable({
    columns,
    data,
    pageCount: Math.ceil(data.length / pagination.pageSize),
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  })

  return (
    <>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="border-amber-500" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  className="font-bold text-black"
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽',
                  }[header.column.getIsSorted()] ?? null}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="border-amber-500">
              {row.getVisibleCells().map((cell) => (
                <TableCell className="text-black" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
              <Button className="bg-red-600 m-2 float-right">
                <TrashIcon />
                Remover
              </Button>
              <Button className="bg-blue-500 m-2 float-right">
                <PencilIcon />
                Editar
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationComponent table={table} />
    </>
  )
}

export default TableComponent
