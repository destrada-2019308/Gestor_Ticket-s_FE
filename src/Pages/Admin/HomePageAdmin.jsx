import React from 'react'
import { Loading } from '../../Components/Loading/Loading'
import { NavbarAdmin } from '../../Components/Admin/NavbarAdmin'
import { Users } from './CRUD\'s/Users'

export const HomePageAdmin = () => {
  return (
    <>
        <NavbarAdmin/>
        <Users/> 
 
    </>
  )
}
