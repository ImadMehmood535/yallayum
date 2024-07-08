import SignupForm from '@/components/sign-up/SignupForm'
import React from 'react'

export const metadata = {
  title: 'Sign Up',
  description: 'This is a sign up page',
}
 


const page = () => {
  return (
    <div className='sign-up'>
        <SignupForm/>
    </div>
  )
}

export default page