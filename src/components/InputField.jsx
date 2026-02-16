import { useState } from 'react'

function InputField({ label, type, placeholder, value, onChange, name }) {

//State for Show/Hide Password  
  const [show, setShow] = useState(false)
  const isPassword = type === 'password'
  const isInvalid = isPassword && value.length > 0 && value.length < 8

  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>

      <div className="password-wrapper">
        <input
          id={name}
          type={isPassword && show ? 'text' : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className={`auth-input ${isInvalid ? 'input-error' : ''}`}
        />

        {isPassword && (
          <>
            <span
              className="toggle-password"
              onClick={() => setShow(!show)}
            >
              {show ? 'Hide' : 'Show'}
            </span>

            {isInvalid && <span className="warning-dot" />}
          </>
        )}
      </div>
    </div>
  )
}

export default InputField