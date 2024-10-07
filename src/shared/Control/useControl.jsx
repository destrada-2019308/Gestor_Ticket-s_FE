import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { calcularControlRequest, addControlRequest, getControlRequest, 
  getAllControlRequest, findByRoleRequest } from '../../services/api.js'

export const useControl = () => {

    const [control, setControl] = useState([])
    const [ isControl, setIsControl ] = useState([])
    const [ isResult, setIsResult ] = useState([])
    const [ result, setResult ] = useState([])
    const [ data, setData ] = useState([])

    const [ allControl, setAllControl ] = useState([])

    const calcularControl = async (params) => {
        
        const res = await calcularControlRequest(params)
        
        if(res.error) return toast.error(res.error.response.data.error || 'Error to calculate control')

        console.log(res.data.result2) 
        toast.success(res.data.message || 'Control calculated')
        setControl(res.data.result2)   
        setIsResult(res.data.resultOP)
    }

    const getControl = async (params) => {
      const res = await getControlRequest(params)
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

    const findByRole = async(params) => {
      
      const res = await findByRoleRequest(params)
      console.log(res, params)

      if(res.error) return toast.error(res.error.response.data.error || 'Error to get control')
      setResult(res.data.result)
      setData(res.data.find)
      
      console.log(res.data.result) 
  }

  const getAllControl = async () => {
    const res = await getAllControlRequest()
    if(res.error) return toast.error(res.error.response.data.error || 'Error to get control')
    setAllControl(res.data.data)
    return res.data.data
}

  return {
    control, 
    calcularControl, 
    addControl, 
    isControl, 
    getControl, 
    isResult, 
    findByRole,
    result, data,
    allControl, 
    getAllControl
  }
}
