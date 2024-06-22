import CheckoutComponent from '@/components/Checkout/CheckoutComponent'
import InnerpageHeader from '@/components/general/InnerpageHeader'
import React from 'react'

const Index = () => {
  return (
    <div className='checkout'>
        <InnerpageHeader pagetitle="Checkout"/>
        <CheckoutComponent/>
    </div>
  )
}

export default Index