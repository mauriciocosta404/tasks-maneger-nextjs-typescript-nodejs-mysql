import * as C from './style';
import React, { useState } from 'react';
import { api } from '../../services/api';

const AddUsers = () => {
   const [name,setName]=useState('');
   const [email,setEmail]= useState('');
   const [idAdmin,setIdAdmin]=useState('');

   const hadleValues=()=>{
        api.post('/users',{
            name,
            email,
            idAdmin
        });
        setName('');
        setIdAdmin('');
        setEmail('');
        window.location.replace('/usersList');
   }

    return (
        <C.AppContainer>
            <div className='register-container'>
                <h1>Adding User</h1>
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
                    value={idAdmin}
                    placeholder='digite a password'
                    onChange={(event) => setIdAdmin(event.target.value)}
                />
                <button onClick={hadleValues}>Save</button>
            </div>
        </C.AppContainer>
    );
}
export default AddUsers;