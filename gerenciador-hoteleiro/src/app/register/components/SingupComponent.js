import React, { useState } from 'react'
import { Lato } from 'next/font/google'
import Image from 'next/image'
import { useForm, Controller } from 'react-hook-form'
import { AlertTriangleIcon, EyeIcon, EyeOff } from 'lucide-react'
import { PhoneInput } from 'react-international-phone'
import { handleSingUp } from '../api/handleSingup'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

function SingupComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword1, setShowPassword1] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      delete data.confirm_password
      handleSingUp(data)
        .then((response) => {
          if (response.status === 201) {
            reset()
            toast({
              variant: 'default',
              title: 'Sucesso no Registro!',
              description:
                'Parabens! Sua conta foi criada com sucesso. Você sera redirecionado para o login.',
            })
            router.push('/login')
          }
        })
        .catch((error) => {
          console.log(error)
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
        <div className="flex flex-col items-center justify-center h-screen  rounded-r-lg lg:bg-[#FF9C06] lg:h-screen lg:w-full lg:flex lg:flex-col lg:items-center lg:justify-center md:hidden max-md:hidden">
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
            <div className="flex flex-col  items-center justify-center  lg:gap-y-5 md:gap-6 max-md:gap-6">
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
                      value: /^\+55\d{11}$/,
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
                    {errors.password.message}
                  </span>
                )}
                <div
                  className="absolute flex mt-[32px] ml-[210px] opacity-50"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeIcon /> : <EyeOff />}
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label>Confirmar Senha</label>
                <input
                  {...register('confirm_password', {
                    required: {
                      value: true,
                      message: 'Por favor insira sua confirmação de senha',
                    },
                    validate: (value) => {
                      if (watch('password') !== value) {
                        return 'As senhas não são iguais!'
                      }
                    },
                  })}
                  type={showPassword1 ? 'text' : 'password'}
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
                {errors.confirm_password && (
                  <span className="text-red-600 text-xs flex items-center w-full">
                    <AlertTriangleIcon className="w-4 mr-1" />
                    {errors.confirm_password.message}
                  </span>
                )}
                <div
                  className="absolute flex mt-[32px] ml-[210px] opacity-50"
                  onClick={() => setShowPassword1(!showPassword1)}
                >
                  {showPassword1 ? <EyeIcon /> : <EyeOff />}
                </div>
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

export default SingupComponent
