import { useEffect } from 'react'
import { useControl } from '../../shared/Control/useControl'

export const GetControl = () => {

    const { isControl, getControl } = useControl()

    useEffect(() => {
        getControl()
    }, [])

    console.log(isControl)

    return (
        <table className="table table-hover  border shadow-sm p-3 mb-5 bg-body rounded">
            <thead className='thead-dark'>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Hora de entrada</th>
                    <th scope='col'>Hora de salida</th>
                    <th scope='col'>Descripción</th>
                    <th scope='col'>Cliente</th>
                    <th scope='col'>Rol</th>
                    <th scope='col'>Código de gerencia</th>
                    <th scope='col'>Fecha</th> 
                </tr>
            </thead >
            <tbody className=''>
                {
                    isControl.map((index) => (
                        <tr key={index.codeBoleta}>
                            <th>{index.codeBoleta}</th>
                            <td>{index.hrs_init}</td>
                            <td>{index.hrs_end}</td>
                            <td>{index.description}</td>
                            <td>{index.nameClient}</td>
                            <td>{index.role}</td>
                            <td>{index.codeGerencia}</td>
                            <td>{index.date.split('T')[0]}</td> 
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
