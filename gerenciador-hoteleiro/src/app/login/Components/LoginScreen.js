import React, { useState } from 'react'
import { Lato } from 'next/font/google'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { AlertTriangleIcon, EyeIcon, EyeOff } from 'lucide-react'

import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { handleLoginByEmailAndPassword } from '../api/handleLoginByEmailAndPassword'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const { toast } = useToast()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      handleLoginByEmailAndPassword(data)
        .then((response) => {
          if (response.status === 201) {
            reset()
            toast({
              variant: 'default',
              title: 'Sucesso no Login!',
              description:
                'Parabens! Login realizado com sucesso. você sera redirecionado para o menu.',
            })
            setTimeout(() => {
              router.push('/')
            }, 3000)
          }
        })
        .catch((error) => {
          console.log(error)
          setError(error.response.data)
        })
    } catch (e) {
      console.log(e)
    }
  }

  const password = (event) => {
    if (event.target.value.length < 6) {
      event.target.setCustomValidity('Senha deve ter pelo menos 6 caracteres')
    } else {
      event.target.setCustomValidity('')
    }
  }

  return (
    <>
      <div className="flex flex-row w-full h-screen justify-center items-center">
        <div className="flex flex-row items-center justify-center h-screen  rounded-r-lg lg:bg-[#FF9C06] lg:h-screen lg:w-full lg:flex lg:flex-col lg:items-center lg:justify-center md:hidden max-md:hidden">
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
            <div className="flex flex-col items-center justify-center ">
              <h1 className={`${lato.className} text-[25px] text-center`}>
                Registre-se
              </h1>
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
                <label>Senha</label>
                <input
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Por Favor insira uma senha!',
                    },
                    onChange: (event) => password(event),
                  })}
                  type={showPassword ? 'text' : 'password'}
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
                {errors.password && (
                  <span className="text-red-600 text-xs flex items-center w-full pt-1">
                    <AlertTriangleIcon className="w-4 mr-1" />
                    {errors.password.message ? errors.password.message : error}
                  </span>
                )}
                <div
                  className="absolute flex mt-[32px] ml-[210px] opacity-50"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeIcon /> : <EyeOff />}
                </div>
              </div>
              <div className="flex flex-row gap-x-2 pt-5">
                <button
                  type="submit"
                  className="p-2 bg-[#FB7901] text-white w-[120px] rounded-md hover:bg-[#FF9839] hover:delay-75 transition"
                >
                  Enviar
                </button>
                <button
                  type="button"
                  onClick={() => router.push('/')}
                  className="p-2 bg-[#FB7901] text-white w-[120px] rounded-md hover:bg-[#FF9839] hover:delay-75 transition"
                >
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

export default LoginScreen
