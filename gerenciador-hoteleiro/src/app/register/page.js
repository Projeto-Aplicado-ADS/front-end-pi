'use client'
import { Button } from '@/components/ui/button'
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';


function Page() {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        try {
          axios.post('http://localhost:8090/users', data).then((response) => {
            console.log(response.data)
          })
        } catch (e) {
          console.log(e)
        }
      };
      

  return (
    <div className='flex flex-row h-screen'>
    <div className='flex flex-col w-full h-screen justify-center items-center bg-[#FFB23E]'>
      <img src="./hotel-svg.svg" className='w-full' />
    </div>
    <form className='w-full h-screen' onSubmit={handleSubmit(onSubmit)}>
    <div className='flex flex-col w-full h-screen items-center'>
      <div className='flex flex-col justify-center h-3/4 gap-y-6'>
        <h1 className='text-[25px] text-center'>Registre-se</h1>
        <div className='flex flex-col w-full'>
          <label>Nome Completo</label>
          <input 
            {...register("full_name", {
                required: {
                    value: true,
                    message: "Por Favor insira um nome!"
                },
            })}
            type="text" 
            className='flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium' 
           />
           {errors.full_name && <p>{errors.full_name.message}</p>}
        </div>
        <div className='flex flex-col w-full'>
          <label>Email</label>
          <input 
            {...register("email", {
                required: {
                    value: true,
                    message: "Por Favor insira um email!"
                },
            })}
            type="email" 
            className='flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium' />
            {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className='flex flex-col w-full'>
          <label>Telefone</label>
          <input  
          {...register("phone", {
            required: {
                value: true,
                message: "Por Favor insira um email!"
            },
        })}
        type="text" 
        className='flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium' />
        </div>
        {/* <div className='flex flex-col w-full'>
          <label>Aniversário</label>
          <input  
          {...register("birthday", {
            required: {
                value: true,
                message: "Por Favor insira um email!"
            },
        })}
        type="date" 
        className='flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium' />
        </div> */}
        <div className='flex flex-col'>
          <label>Senha</label>
          <input 
            {...register("password", {
                required: {
                    value: true,
                    message: "Por Favor insira um email!"
                },
            })} 
            type="password" 
            className='flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium' />
        </div>
        <div className='flex flex-col'>
          <label>Confirmar Senha</label>
          <input type="password" className='flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium' />
        </div>
        <div>
            <button type='submit' className='p-2 border-black'>Teste</button>
        </div>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Page