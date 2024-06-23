import React from 'react'
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

function QuartosForm() {
  return (
    <>
      <div className="flex flex-row w-full h-screen justify-center items-center">
        <div className="flex w-full h-screen">
          <form className="w-full flex justify-center">
            <div className="flex flex-col  items-center justify-center  lg:gap-y-5 md:gap-6 max-md:gap-6">
              <h1 className={`${lato.className} text-[25px] text-center`}>
                Registre-se
              </h1>
              <div className="flex flex-col w-full">
                <label>Nome Completo</label>
                <input
                  type="text"
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Email</label>
                <input className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium" />
              </div>
              <div className="flex flex-col w-full">
                <label>Telefone</label>
                <input className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium" />
              </div>
              <div className="flex flex-col w-full">
                <label>Senha</label>
                <input className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium" />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label>Confirmar Senha</label>
              <input className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium" />
            </div>
            <div className="flex flex-row gap-x-2 w-full">
              <button
                type="submit"
                className="p-2 bg-[#FB7901] text-white w-[120px] rounded-md hover:bg-[#FF9839] hover:delay-75 transition"
              >
                Criar
              </button>
              <button
                type="button"
                className="p-2 bg-[#FB7901] text-white w-[120px] rounded-md hover:bg-[#FF9839] hover:delay-75 transition"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default QuartosForm
