'use client'

import React from 'react'
import LoginScreen from './Components/LoginScreen'
import { Toaster } from '@/components/ui/toaster'

function Page() {
  return (
    <>
      <LoginScreen />
      <Toaster />
    </>
  )
}

export default Page
