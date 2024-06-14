'use client'
import { BadgeDollarSignIcon, BedDoubleIcon, CalendarSearchIcon, HomeIcon, TimerResetIcon, User, Users2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Menu() {
  return (
    <>
        <div className='flex flex-col h-screen w-24 bg-[#FF9C06] text-white text-[14px]'>
            <Link href={"/login"} className="p-4">
                <div className='flex flex-col items-center w-full mt-6 p-2 text-center hover:bg-[#ffcb9c] transition ease-in-out delay-100 rounded-2xl'>
                    <HomeIcon />
                    <p>Home</p>
                </div>
            </Link>
            <Link href={"/login"} className="p-3">
            <div className='flex flex-col items-center w-full p-2 text-center hover:bg-[#ffcb9c] transition ease-in-out delay-100 rounded-2xl'>
                <CalendarSearchIcon />
                <p>Reservas</p>
            </div>
            </Link>
            <Link href={"/login"} className="p-2">
                <div className='flex flex-col items-center w-full text-center hover:bg-[#ffcb9c] transition ease-in-out delay-100 rounded-2xl'>
                    <TimerResetIcon />
                    <p>Check-in Check-out</p>
                </div>
            </Link>
            <Link href={"/login"} className="p-3">
                <div className='flex flex-col items-center w-full p-2 text-center hover:bg-[#ffcb9c] transition ease-in-out delay-100 rounded-2xl'>
                    <BedDoubleIcon />
                    <p>Quartos</p>
                </div>
            </Link>
            <Link href={"/login"} className="p-2">
                <div className='flex flex-col items-center w-full p-2 text-center hover:bg-[#ffcb9c] transition ease-in-out delay-100 rounded-2xl'>
                    <BadgeDollarSignIcon />
                    <p>Financeiro</p>
                </div>
            </Link>
            <Link href={"/login"} className="p-3">
                <div className='flex flex-col items-center w-full p-2 text-center hover:bg-[#ffcb9c] transition ease-in-out delay-100 rounded-2xl'>
                    <Users2Icon />
                    <p>Pessoas</p>
                </div>
            </Link>
            <Link href={"/login"} className="p-3 mt-28">
                <div className='flex flex-col items-center w-full mt-32 p-2 text-center hover:bg-[#ffcb9c] transition ease-in-out delay-100 rounded-2xl'>
                    <User />
                    <p>Perfil</p>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Menu