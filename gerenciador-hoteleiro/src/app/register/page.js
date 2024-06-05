'use client'
import axios from 'axios'
import { Lato } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { AlertTriangleIcon } from 'lucide-react'
import { PhoneInput } from 'react-international-phone'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

function Page() {
  const {
    register,
    handleSubmit,
    reset,
    control,
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
        <div className="flex flex-col items-center justify-center h-screen w-full bg-[#FF9C06] rounded-r-lg">
          <Image
            src="./hotel-svg.svg"
            className="w-full"
            width={500}
            height={200}
            alt="img"
          />
        </div>
        <div className="flex w-full h-screen">
          <form
            className="w-full flex justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col  items-center justify-center gap-y-3">
              <h1 className={`${lato.className} text-[25px] text-center`}>
                Registre-se
              </h1>
              <div className="flex flex-col w-full">
                <label>Nome Completo</label>
                <input
                  {...register('full_name', {
                    required: {
                      value: true,
                      message: 'Por Favor insira um nome!',
                    },
                  })}
                  placeholder="Exp: John Doe"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
                {errors.full_name && (
                  <span className="text-red-600 text-xs flex items-center w-full pt-1">
                    <AlertTriangleIcon className="w-4 mr-1" />
                    {errors.full_name.message}
                  </span>
                )}
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
                  placeholder="Exp: johndoe@gmail.com"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
                {errors.email && (
                  <span className="text-red-600 text-xs flex items-center w-full pt-1">
                    <AlertTriangleIcon className="w-4 mr-1" />
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label>Telefone</label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Insira um numéro de telefone',
                    },
                    pattern: {
                      value: /^\+55\d{12}$/,
                      message: 'Por favor insira um numéro de telefone!',
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      value={value}
                      onChange={onChange}
                      defaultCountry="br"
                      inputClassName="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                      className="flex h-10 w-full"
                    />
                  )}
                />
                {errors.phone && (
                  <span className="text-red-600 text-xs flex items-center w-full pt-1">
                    <AlertTriangleIcon className="w-4 mr-1" />
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label>Aniversário</label>
                <input
                  type="date"
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
                {errors.birthday && (
                  <span className="text-red-600 text-xs flex items-center w-full pt-1">
                    <AlertTriangleIcon className="w-4 mr-1" />
                    {errors.birthday.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label>Senha</label>
                <input
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Por Favor insira uma senha!',
                    },
                  })}
                  type="password"
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
                {errors.password && (
                  <span className="text-red-600 text-xs flex items-center w-full pt-1">
                    <AlertTriangleIcon className="w-4 mr-1" />
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label>Confirmar Senha</label>
                <input
                  type="password"
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
              </div>
              <div className="flex flex-row gap-x-2 w-full">
                <button
                  type="submit"
                  className="p-2 bg-[#FB7901] text-white w-[120px] rounded-md hover:bg-[#FF9839] hover:delay-75 transition"
                >
                  Enviar
                </button>
                <button className="p-2 bg-[#FB7901] text-white w-[120px] rounded-md hover:bg-[#FF9839] hover:delay-75 transition">
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Page
