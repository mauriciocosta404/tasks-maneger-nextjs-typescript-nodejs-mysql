import * as C from './style';
import { useEffect, useState, useContext } from 'react';
import {api} from '../../services/api';
import { TasksContext } from '../../context/tasksContext';
import { UsersContext } from '../../context/usersContext';

interface userProps{
    name:string;
    email:string;
    idAdmin:string;
}

const UsersList=()=>{

    const {users}:userProps[] | any=useContext(UsersContext);

    const [showAllUsers,setShowAllUsers]=useState(true);

    return(
        <C.Container>
            <div className='head'>
            
                <h3>All User</h3>
                <button onClick={()=>setShowAllUsers(!showAllUsers)}>Hide</button>
            </div>
            {showAllUsers && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({name,email}:userProps,key:number)=>(
                            <tr key={key}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>**********</td>
                            </tr>
                        ))}
                        
                    </tbody>
                    
                </table>
            )}
        </C.Container>
    )
}
export default UsersList;