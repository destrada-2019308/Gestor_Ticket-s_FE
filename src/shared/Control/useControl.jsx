import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { calcularControlRequest, addControlRequest, getControlRequest } from '../../services/api.js'

export const useControl = () => {

    const [control, setControl] = useState([])
    const [ isControl, setIsControl ] = useState([])
    const [ isResult, setIsResult ] = useState([])

    const calcularControl = async (params) => {
        
        const res = await calcularControlRequest(params)
        
        if(res.error) return toast.error(res.error.response.data.error || 'Error to calculate control')

        console.log(res.data.result2) 
        toast.success(res.data.message || 'Control calculated')
        setControl(res.data.result2)   
        setIsResult(res.data.resultOP)
    }

    const getControl = async () => {
      const res = await getControlRequest()
      console.log(res)
      if(res.error) return toast.error(res.error.response.data.error || 'Error to get control')

      setIsControl(res.data.data)
      return res.data.data
  }

    const addControl = async(params) => {
        const res = await addControlRequest(params)

        if(res.error) return toast.error(res.error.response.data.error || 'Error to add control')

        toast.success(res.data.message || 'Control added')
        return getControl()
    }

    

  return {
    control, calcularControl, addControl, isControl, getControl, isResult 
  }
}
