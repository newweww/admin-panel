'use client'
import Login from '@/components/admin-panel/Login'
import Loader from '@/components/admin-panel/loader'
import { useAppSelector } from '@/redux/hooks'
import { useSession } from 'next-auth/react'
import React from 'react'
import Sidebar from '@/components/admin-panel/Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {

  const isLoading = useAppSelector(store => store.loadingReducer)
  const { data: session } = useSession()

  if (!session?.user) {
    return <Login />
  }

  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full h-full'>
        {/* <Navbar /> */}
        <div className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>
          {children}
        </div>
        {isLoading && <Loader />}
      </div>
    </div>
  )
}

export default Layout