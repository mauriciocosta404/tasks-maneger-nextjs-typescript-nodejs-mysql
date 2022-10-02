import * as C from './style';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../services/api';
import Link from 'next/link';
import PickUser from '../pickUser/pickUser';

const AddTask = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('unfinished');
    const [showPickUser, setShowPickUser] = useState(false);
    
    return (
        <>
            {
                showPickUser &&
                (<PickUser name={name} description={description} status={status} setShowPickUser={setShowPickUser}/>)
            }
            <C.AppContainer>
                <div className='register-container'>
                    <h1>Adding Task</h1>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder='digite o seu nome'
                        onChange={(event) => setName(event.target.value)}
                    />
                    <textarea 
                        name="description" 
                        onChange={(event) => setDescription(event.target.value)}
                        value={description}
                        placeholder='digite a descrição'
                    >

                    </textarea>
                    <button onClick={()=>setShowPickUser(true)}>Save</button>
                </div>
            </C.AppContainer>
        </>
    );
}
export default AddTask;