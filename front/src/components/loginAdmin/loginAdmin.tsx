import * as C from './style';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../services/api';
import Link from 'next/link';

const LoginAdmin = () => {
   const [name,setName]=useState('');
   const [email,setEmail]= useState('');
   const [password,setPassword]=useState('');

   const hadleValues=()=>{
        setName('');
        setPassword('');
        setEmail('');
        console.log(name);
   }

    return (
        <C.AppContainer>
            <div className='register-container'>
                <h1>Login</h1>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder='digite o seu nome'
                    onChange={(event)=>setName(event.target.value)}
                />
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