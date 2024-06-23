import { QuartosList } from '@/modules/quarto/components/QuartosList'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

function QuartosPage() {
  return (
    <div className="pt-20 px-20">
      <h1 className="text-3xl font-bold mb-4">Lista de Quartos</h1>
      <Button className="bg-amber-500 my-5 p-2">
        <PlusIcon />
      </Button>
      <Card className="p-12 border-2 border-amber-500 mt-0 bg-gray-100">
        <QuartosList />
      </Card>
    </div>
  )
}

export default QuartosPage
