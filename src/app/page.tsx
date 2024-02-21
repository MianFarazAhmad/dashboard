import React from 'react'
import UserChart from './home/UserChart'
import SaleChart from './home/SaleChart'
import Product from './home/Product'



function Index() {
  return (
    <div >
      <div className='grid grid-flow-col grid-cols-2  mt-5   space-x-2 '>
        <div className='bg-white rounded-lg p-3'>
        <UserChart/>
        </div>
        <div className='bg-white rounded-lg p-3'>
        <SaleChart/>
</div>
   
      

      </div>
      <div className='my-5 bg-white rounded-lg p-4'>
        <Product/>
    
      </div>
      
    </div>
  )
}

export default Index