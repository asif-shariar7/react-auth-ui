import InputField from '../components/InputField'
import useForm from '../hooks/useForm'
import { Link } from 'react-router-dom'

function Signup() {
  const { values, handleChange } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (values.password.length < 8) return

    alert(`Signup with Email: ${values.email}`)
  }

  return (
    <div className="container">
      <h2>Sign Up</h2>

      <button className="google-btn">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          width="18"
        />
        Sign up with Google
      </button>

      <a href="#" className="divider-link">
        or Sign up with Email
      </a>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          placeholder="Your name"
          value={values.name}
          onChange={handleChange}
          name="name"
        />

        <InputField
          label="Email"
          type="email"
          placeholder="mail@website.com"
          value={values.email}
          onChange={handleChange}
          name="email"
        />

        <InputField
          label="Password"
          type="password"
          placeholder="••••••••"
          value={values.password}
          onChange={handleChange}
          name="password"
        />

        <div className="checkbox">
          <input type="checkbox" required />
          <span>I agree to the Terms & Conditions</span>
        </div>

        <button
          type="submit"
          className="primary-btn"
          disabled={values.password.length < 8}
          style={{
            opacity: values.password.length < 8 ? 0.6 : 1,
            cursor: values.password.length < 8 ? 'not-allowed' : 'pointer',
          }}
        >
          Sign Up
        </button>
      </form>

      <div className="bottom-text">
        Already have an Account? <Link to="/">Sign in</Link>
      </div>
    </div>
  )
}

export default Signup