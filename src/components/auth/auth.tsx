import '../../assets/css/auth.css'
import { useNavigate } from "react-router-dom";


export default function Auth () {
  
  const navigate = useNavigate()
  
  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/')
  }
  
  
  return (
    
    <div className="auth_page">
      
        <form
          className="auth_form"
          onSubmit={ handleLogin }
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"/>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"/>
          
          <button
            className="save__credentials"
            type="submit">
            Login
          </button>
        </form>
    </div>
    
  )
  
  
}
