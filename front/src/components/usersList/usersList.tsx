import * as C from './style';
import { useEffect, useState } from 'react';
import {api} from '../../services/api';

interface userProps{
    name:string;
    email:string;
    password:string;
}

const UsersList=({name,email,password}:userProps)=>{

    const [users,setUsers]=useState<userProps[]>([]);
    const [showAllUsers,setShowAllUsers]=useState<boolean>(true);

    useEffect(() => {
        api.get('/users').
            then((data) => setUsers(data.data));
    }, []);

    return(
        <C.Container>
            <div className='head'>
                <h3>All User</h3>
                <button onClick={()=>setShowAllUsers(showAllUsers?false:true)}>Hide</button>
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
                        {users.map((user,key)=>(
                            <tr key={key}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
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