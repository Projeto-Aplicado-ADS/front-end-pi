import React from 'react'

function Page() {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col w-full h-screen justify-center items-center bg-[#FFB23E]">
        <img src="./hotel-svg.svg" className="w-full" />
      </div>
      <div className="flex flex-col w-full h-screen items-center">
        <div className="flex flex-col justify-center h-3/4 gap-y-6">
          <h1 className="text-[25px] text-center">Login</h1>
          <div className="flex flex-col">
            <label>Username</label>
            <input className="outline-1 ring-1 outline-blue-600 w-72 rounded-sm" />
          </div>
          <div className="flex flex-col">
            <label>Senha</label>
            <input
              placeholder="Senha"
              type="password"
              className="outline-1 ring-1 outline-blue-600 w-72 rounded-sm pl-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
