import { useState } from 'react'

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

//Runs when user types in input
  const handleChange = (e) => {

//Gets input name and value
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const setFieldError = (field, message) => {
    setErrors(prev => ({
      ...prev,
      [field]: message
    }))
  }

//Clears all errors
  const clearErrors = () => {
    setErrors({})
  }

  return { 
    values, 
    errors,
    handleChange, 
    setFieldError,
    clearErrors
  }
}