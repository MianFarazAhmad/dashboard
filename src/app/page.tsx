import React from 'react'
import ProductList from './pages/home/ProductList'
import UserChart from './pages/home/UserChart'
import SaleChart from './pages/home/SaleChart'


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