import React from 'react'
import UserChart from './home/UserChart'
import ProductList from './home/ProductList'
import SaleChart from './home/SaleChart'



function Index() {
  return (
    <div className='px-5 '>
      <div className='grid grid-flow-col grid-cols-2    space-x-2 '>
        
      <UserChart/>
      <SaleChart/>

      </div>
      <ProductList/>
    </div>
  )
}

export default Index