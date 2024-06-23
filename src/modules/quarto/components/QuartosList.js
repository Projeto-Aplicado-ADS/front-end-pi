'use client'

import TableComponent from '@/components/Table/TableComponent'
import React, { useMemo } from 'react'

export function QuartosList() {
  const data = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        header: 'Column 1',
        accessorKey: 'col1', // accessor is the "key" in the data
      },
      {
        header: 'Column 2',
        accessorKey: 'col2',
      },
    ],
    [],
  )

  return (
    <div className="App">
      <TableComponent columns={columns} data={data} />
    </div>
  )
}
