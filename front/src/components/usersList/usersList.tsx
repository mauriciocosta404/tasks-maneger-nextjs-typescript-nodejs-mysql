import * as C from './style';
import { useEffect, useState } from 'react';
import {api} from '../../services/api';

interface userProps{
    name:string;
    email:string;
    idAdmin:string;
}

const UsersList=({name,email,idAdmin}:userProps)=>{

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
                        {users.map(({name,email},key)=>(
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