import * as C from './style';
import { api } from '../../services/api';
import { useState, useEffect, useContext } from 'react';
import { UsersContext } from '../../context/usersContext';

interface userProps {
    name: string;
    email: string;
    password: string;
    id:number;
}

interface PickUserProps{    
    setShowPickUser(showPickUser:boolean):void;
    name: string;
    description:string;
    status:string;
}

const PickUser=({name,description,status,setShowPickUser}:PickUserProps)=>{

    const {users,setUsers}:userProps[] | any=useContext(UsersContext);

    const handle=(idUser:number)=>{
        api.post('/Tasks', {
            name,
            description,
            status,
            idUser
        });
        
        setShowPickUser(false);
        window.location.replace('/index');
    }

    return(
        <C.Container>
            <C.UsersContainer>
                {
                    users.map(({name,email,id}:userProps,key:number)=>(
                        <div key={key} onClick={()=>handle(id)}>
                            <div className='initial'>
                                {name.charAt(0)}
                            </div>
                            <div className='userInfo'>
                                <h3>
                                    {name}
                                </h3>
                                <span>{email}</span>
                            </div>
                        </div>
                    ))
                }
            </C.UsersContainer>
        </C.Container>
    )
}
export default PickUser;