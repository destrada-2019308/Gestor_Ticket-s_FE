import React, { useState, useEffect } from 'react'
import { NavbarClient } from '../../Components/Client/NavbarClient'
import { ControlRapido } from '../../Components/Client/ControlRapido'
import { Control } from '../../Components/Client/Control'
import { GetControl } from '../../Components/Client/GetControl'
import BtnAdd from '../../Components/UI/BtnAdd'
import { Input } from '../../Components/UI/Input'
import { useManagements } from '../../shared/Managements/useManagements'
import { useControl }  from '../../shared/Control/useControl'

export const HomePageClient = () => {

  const { getManagements, managements } = useManagements()
  const { addControl, calcularControl, control } = useControl()

  const [form1, setForm1] = useState({
    hrs_init: '',
  })

  const [form, setForm] = useState({
    hrs_init: '',
    role: '',
    description: '',
    nameClient: '',
    codeGerencia: '',
    codeUser: '',
    boletosUsados4h: '',
    boletosUsados2h: '',
    boletosUsados1h: '',
    boletosUsados30min: ''
  })

  let user = localStorage.getItem('user')
  let userId = JSON.parse(user).codeUser

  useEffect(() => {
    getManagements()
  }, [])

  // Effect to copy hrs_entry to hrs_init
  useEffect(() => {
    setForm(prevForm => ({
      ...prevForm,
      hrs_init: form1.hrs_init
    }))
  }, [form1.hrs_init])

  const cleanInputs = () => {
    setForm({
      hrs_init: '',
      role: '',
      description: '',
      nameClient: '',
      codeGerencia: '',
      codeUser: '',
      boletosUsados4h: '',
      boletosUsados2h: '',
      boletosUsados1h: '',
      boletosUsados30min: ''
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    form.codeUser = userId

    addControl(form)
    console.log(form)
    cleanInputs()
  }

  const handleOnSubmit1 = (e) => {
    e.preventDefault()
    calcularControl(form
        
    )
    //cleanInputs()
  }

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleOnChange1 = (e) => {
    setForm1({
      ...form1,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <NavbarClient />
      <div className="row">
        <div className="col-7 ml-4">
          <div>
            <div className="m-4">
              <div className="form-control m-2 p-4">
                <h4>Control de tickets</h4>
                <form action="#" onSubmit={handleOnSubmit}>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="">Hora de entrada</label>
                      <Input 
                        type={"text"} 
                        value={form.hrs_init}  
                        name="hrs_init" 
                        onChange={handleOnChange}   
                        placeholder={'00:00:00'} 
                        required={true}/>
                    </div>
                    <div className='col'>
                      <label htmlFor="">Role</label>
                      <select name="role" className='form-select my-3' value={form.role} onChange={handleOnChange}>
                        <option value="">Selecciona un role</option>
                        <option value="TRABAJADOR">TRABAJADOR</option>
                        <option value="VISITA">VISITA</option>
                      </select>
                    </div>
                    <div></div>
                    <div className="col">
                      <label htmlFor="">Descripción</label>
                      <Input 
                        type={'text'}
                        name="description" 
                        onChange={handleOnChange}
                        placeholder={'Descripción'}
                        value={form.description}
                        required={true}/>
                    </div>
                    <div></div>
                    <div className="col">
                      <label htmlFor="">Nombre Cliente</label>
                      <Input
                        type={'text'}
                        name="nameClient" 
                        onChange={handleOnChange}
                        placeholder={'Nombre del cliente'}
                        value={form.nameClient}
                        required={true}/>
                    </div>  
                    <div className="col">
                      <label htmlFor="">Gerencia a la que viene</label>
                      <select name="codeGerencia" className='form-select my-3' value={form.codeGerencia} onChange={handleOnChange}>
                        <option value="">Selecciona una gerencia</option>
                        {
                          managements.map(management => (
                            <option key={management.codeGerencia} value={management.codeGerencia}>
                              {management.nameGerencia}
                            </option>))
                        }
                      </select>
                    </div>
                    <div></div>
                    <div className="col">
                      <label htmlFor="">Boletos Usados de 4 horas</label>
                      <Input
                        type={'number'}
                        name="boletosUsados4h" 
                        onChange={handleOnChange}
                        placeholder={'Boletos de 4h'}
                        value={form.boletosUsados4h}
                        required={true}/>
                    </div>  
                    <div className="col">
                      <label htmlFor="">Boletos Usados de 2 horas</label>
                      <Input
                        type={'number'}
                        name="boletosUsados2h" 
                        onChange={handleOnChange}
                        placeholder={'Boletos de 2h'}
                        value={form.boletosUsados2h}
                        required={true}/>
                    </div>
                    <div></div>
                    <div className="col">
                      <label htmlFor="">Boletos Usados de 1 hora</label>
                      <Input
                        type={'number'}
                        name="boletosUsados1h" 
                        onChange={handleOnChange}
                        placeholder={'Boletos de 1h'}
                        value={form.boletosUsados1h}
                        required={true}/>
                    </div> 
                    <div className="col">
                      <label htmlFor="">Boletos usados de 30 minutos</label>
                      <Input
                        type={'number'}
                        name="boletosUsados30min" 
                        onChange={handleOnChange}
                        placeholder={'Boletos de 30min'}
                        value={form.boletosUsados30min}
                        required={true}/>
                    </div>
                  </div>
                  <br />
                  <BtnAdd name={'Agregar'} />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4 align-self-center'>
          <div className=''>
            <div className="m-2">
              <div className="form-control m-2 p-4">
                <h4>Control Rápido</h4>
                <form action="" onSubmit={handleOnSubmit1}>
                  <div>
                    <label htmlFor="">Ingresa la hora de entrada</label>
                    <Input 
                      type={"text"} 
                      placeholder={'00:00:00'} 
                      name={'hrs_init'} 
                      value={form.hrs_init} 
                      onChange={handleOnChange1} />
                  </div>
                  <BtnAdd name={'Calcular'} />

                  <div className='m-4'>
                    <div>
                      <table className='table table-hover border shadow-sm p-3 mb-5 bg-body rounded'>
                        <thead className='table'>
                          <tr>
                            <th scope='col'>Boletos disponibles</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            control.map((index) => (
                              <tr key={index}>
                                <td>{index}</td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=''>
            <GetControl />
          </div>
        </div>
      </div>
    </>
  )
}
