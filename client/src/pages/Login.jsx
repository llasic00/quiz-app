import { useState } from 'react'
import axios from 'axios';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = (event) => {
    event.preventDefault()
    axios.get('/')
  }

  return (
    <div className='login-container'>
      <form onSubmit={loginUser} className='login-form'>
      <label>E-mail</label>
            <input type='email' placeholder='E-mail' value={data.email} onChange={(event) => setData({...data, email: event.target.value})} />
            <label>Password</label>
            <input type='password' placeholder='Password' value={data.password} onChange={(event) => setData({...data, password: event.target.value})} />

            <button type='submit'>Login</button>
      </form>
    </div>
  )
}
