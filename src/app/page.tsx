import React from 'react'
import ProductList from './pages/home/ProductList'
import UserChart from './pages/home/UserChart'
import SaleChart from './pages/home/SaleChart'


function Index() {
  return (
    <div className='px-5 '>
      <div className='grid grid-flow-col grid-cols-2  mt-5   space-x-2 '>
        <div className='bg-white rounded-lg p-3'>
        <UserChart/>
        </div>
        <div className='bg-white rounded-lg p-3'>
        <SaleChart/>
</div>
   
      

      </div>
      <div className='my-5 bg-white rounded-lg p-4'>
      <ProductList/>
      </div>
      
    </div>
  )
}

export default Index