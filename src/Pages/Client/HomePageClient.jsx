import React from 'react'
import { NavbarClient } from '../../Components/Client/NavbarClient'
import { ControlRapido } from '../../Components/Client/ControlRapido'
import { Control } from '../../Components/Client/Control'
import { GetControl } from '../../Components/Client/GetControl'

export const HomePageClient = () => {
  return (
    <>
      <NavbarClient/> 
        <div className="row ">
          <div className="col-7 ml-4">
            <Control/>  
          </div>
          <div className='col-4 align-self-center'>
            <div className=' '>
              <ControlRapido/>  
            </div>
            
          </div>   
          <div className="">
          <div className='m-4'>
          <GetControl/>
          </div>
          </div>
        </div> 
    </>
  )
}
