import * as C from './style';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../services/api';
import Link from 'next/link';

interface adminsProps{
    id: string;
    name:string;
    email:string;
    password:string;
}

const LoginAdmin = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');
    const [admins,setAdmins]= useState <adminsProps[]>([]);
    const [admin, setAdmin] = useState<adminsProps>();
    const [message, setMessage] = useState('');

    useEffect(()=>{
        api.get('/admins').
        then((data)=>setAdmins(data.data));
    },[]);

   const hadleValues=()=>{
        setAdmin(admins.find((admin)=>admin.email && admin.password===password));

        if(!admin){
            setMessage('email or password invalid')
            setInterval(() => {
                setMessage('');
            },3000);
        }else{
            window.location.replace(`/index/${admin.id}`);
        }

        setPassword('');
        setEmail('');
   }

    return (
        <C.AppContainer>
            <div className='register-container'>
                <h1>Login</h1>
                
                    <p color='red'>{message}</p>
                
                <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder='digite o email'
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="text"
                    name="password"
                    value={password}
                    placeholder='digite a password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button onClick={hadleValues}>Save</button>
            </div>
        </C.AppContainer>
    );
}   
export default LoginAdmin;