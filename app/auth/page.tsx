import { LoginForm } from '@/components/auth'
import React from 'react'

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoginForm className='w-1/3 mx-auto'/>
    </div>
  )
}

export default page