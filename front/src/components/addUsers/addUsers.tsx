import * as C from './style';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';



const AddUsers = () => {
   
    return (
        <C.AppContainer>
            <div className='register-container'>
                <h1>Adding User</h1>
                <input
                    type="text"
                    name="name"
                    placeholder='digite o seu nome'
                />
                <input
                    type="text"
                    name="email"
                    placeholder='digite o email'
                />
                <input
                    type="text"
                    name="password"
                    placeholder='digite a password'
                />
                <button>Save</button>
            </div>
        </C.AppContainer>
    );
}
export default AddUsers;