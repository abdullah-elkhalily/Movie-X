import React from 'react'
import Head from './Header'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <>
      <Head/>
      
      <Outlet/>
    </>
  )
}

export default Applayout
