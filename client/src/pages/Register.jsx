import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const registerUser = async (event) => {
        event.preventDefault()
        const {name, email, password, confirmPassword} = data;

        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const {data} = await axios.post('/register', {name, email, password});
            console.log("Registration success:", data.message);
        }
        catch (error) {
            console.error(error);
            alert("Registration failed");
        }
    }

  return (
    <div>
        <form onSubmit={registerUser}>
            <label>Name</label>
            <input type='text' placeholder='Name' value={data.name} onChange={(event) => setData({...data, name: event.target.value})} />
            <label>E-mail</label>
            <input type='email' placeholder='E-mail' value={data.email} onChange={(event) => setData({...data, email: event.target.value})} />
            <label>Password</label>
            <input type='password' placeholder='Password' value={data.password} onChange={(event) => setData({...data, password: event.target.value})} />
            <label>Confirm Password</label>
            <input type='password' placeholder='Confirm Password' value={data.confirmPassword} onChange={(event) => setData({...data, confirmPassword: event.target.value})} />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
