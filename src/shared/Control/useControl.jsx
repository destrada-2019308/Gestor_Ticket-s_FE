import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { calcularControlRequest, addControlRequest } from '../../services/api.js'

export const useControl = () => {

    const [control, setControl] = useState([])

    const calcularControl = async (params) => {
        
        const res = await calcularControlRequest(params)
        
        if(res.error) return toast.error(res.error.response.data.error || 'Error to calculate control')

        console.log(res.data.result2)
        toast.success(res.data.message || 'Control calculated')
        setControl(res.data.result2)   
    }

    const addControl = async(params) => {
        const res = await addControlRequest(params)

        if(res.error) return toast.error(res.error.response.data.error || 'Error to add control')

        toast.success(res.data.message || 'Control added')

    }

  return {
    control, calcularControl, addControl
  }
}
