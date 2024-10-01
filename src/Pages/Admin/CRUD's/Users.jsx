import React from 'react'
import BtnAdd from '../../../Components/UI/BtnAdd'
import { Input } from '../../../Components/ui/Input'
import BtnDelete from '../../../Components/UI/BtnDelete'
import BtnEdit from '../../../Components/UI/BtnEdit.jsx'

export const Users = () => {
  return (
    <div>
        <div className="m-4">
            <div className="form-control m-2 p-4">
                <h4>Agregar Usuarios</h4>
                
                <form action="" className=' '>
                
                    <div className='row'>
                        <div className="col">
                            <label htmlFor="">Nombre</label>
                            <Input/>
                        </div>
                        <div className="col">
                            <label htmlFor="">Nombre</label>
                            <Input/>
                        </div>
                        <div></div>
                        <div className="col">
                            <label htmlFor="">Nombre</label>
                            <Input/>
                        </div>
                        <div className="col">
                            <label htmlFor="">Nombre</label>
                            <Input/>
                        </div>
                        <div></div>
                        <div className="col">
                            <label htmlFor="">Nombre</label>
                            <Input/>
                        </div>
                        <div className="col">
                            <label htmlFor="">Nombre</label>
                            <Input/>
                        </div>
                        <div></div>
                        <div className="col">
                            <label htmlFor="">Nombre</label>
                            <Input/>
                        </div>
                        <div className="col">
                            <label htmlFor="">Nombre</label>
                            <Input/>
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col'>
                            <BtnAdd/>
                        </div>
                        <div className='col'>
                            <BtnEdit/>
                        </div>
                        <div className='col'>
                            <BtnDelete/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
