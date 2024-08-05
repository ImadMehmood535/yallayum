import LoginForm from '@/components/login/LoginForm'
import React from 'react'

export const metadata = {
  title: 'Log in',
  description: 'This is a log in page',
}
 

const page = () => {
  return (
    <div className='login-page '>
        <LoginForm/>
    </div>
  )
}

export default page