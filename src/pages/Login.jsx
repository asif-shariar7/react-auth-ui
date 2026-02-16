import InputField from '../components/InputField'
import useForm from '../hooks/useForm'
import { Link } from 'react-router-dom'

function Login() {
  const { values, handleChange } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (values.password.length < 8) return

    alert(`Login with Email: ${values.email}`)
  }

  return (
    <div className="container-login">
      <h2>Login</h2>

      <button className="google-btn">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          width="18"
        />
        Sign in with Google
      </button>

      <a href="#" className="divider-link">
        or Sign in with Email
      </a>

      <form onSubmit={handleSubmit}>
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

        <div className="row">
          <label className="remember">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
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
          Login
        </button>
      </form>

      <div className="bottom-text">
        Not registered yet? <Link to="/signup">Create an Account</Link>
      </div>
    </div>
  )
}

export default Login