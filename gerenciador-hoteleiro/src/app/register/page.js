'use client'
import { Card, CardContent } from '@/components/ui/card'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      birthday: '2023-06-02T15:04:05Z',
    },
  })

  const onSubmit = async (data) => {
    try {
      axios.post('http://localhost:8090/users', data).then((response) => {
        if (response.status === 201) {
          reset()
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className="flex flex-row w-full h-screen justify-center items-center">
        <Card className="flex flex-row items-center w-full m-20 h-[802px]">
          <CardContent className="p-0 flex flex-row">
            <div className="flex flex-col items-center justify-center h-[800px] bg-orange-500 rounded-r-lg">
              <Image
                src="./hotel-svg.svg"
                className="w-full"
                width={500}
                height={600}
                alt="img"
              />
            </div>
            <div className="flex w-full">
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col h-[800px] items-center justify-center gap-y-6">
                  <h1 className="text-[25px] text-center">Registre-se</h1>
                  <div className="flex flex-col w-full">
                    <label>Nome Completo</label>
                    <input
                      {...register('full_name', {
                        required: {
                          value: true,
                          message: 'Por Favor insira um nome!',
                        },
                      })}
                      type="text"
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                    />
                    {errors.full_name && <p>{errors.full_name.message}</p>}
                  </div>
                  <div className="flex flex-col w-full">
                    <label>Email</label>
                    <input
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'Por Favor insira um email!',
                        },
                      })}
                      type="email"
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                  </div>
                  <div className="flex flex-col w-full">
                    <label>Telefone</label>
                    <input
                      {...register('phone', {
                        required: {
                          value: true,
                          message: 'Por Favor insira um email!',
                        },
                      })}
                      type="text"
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label>Aniversário</label>
                    <input
                      type="datetime-local"
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Senha</label>
                    <input
                      {...register('password', {
                        required: {
                          value: true,
                          message: 'Por Favor insira um email!',
                        },
                      })}
                      type="password"
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Confirmar Senha</label>
                    <input
                      type="password"
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                    />
                  </div>
                  <div>
                    <button type="submit" className="p-2 border-black">
                      Teste
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Page
