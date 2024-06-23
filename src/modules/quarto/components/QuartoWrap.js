'use client'
import Menu from '@/modules/home/components/Menu'
import React from 'react'
import QuartosPage from '@/modules/quarto/components/QuartosPage'

function QuartoWrap() {
  return (
    <>
      <div className="fixed">
        <Menu />
      </div>
      <div className="h-screen ml-24">
        <QuartosPage />
      </div>
    </>
  )
}
export default QuartoWrap
