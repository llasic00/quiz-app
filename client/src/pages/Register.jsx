import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (event) => {
        event.preventDefault()
        const {name, email, password} = data
        try {
            const {data} = await axios.post('/register', {name, email, password})
        
            /*if(data.error){
                toast.error(data.error)
            }
            else{
                setData({})
                toast.success('login successful')
                navigate('/')
            }*/
        }
        catch (error) {
            console.log(error)
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

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
