import * as C from './style';
import { useState } from 'react';

const UsersList=()=>{
    
    const [showAllUsers,setShowAllUsers]=useState<boolean>(true);

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
                        <tr>
                            <td>Mauricio Costa</td>
                            <td>mc611641@gmail.com</td>
                            <td>**********</td>
                        </tr>
                        <tr>
                            <td>Mauricio Costa</td>
                            <td>mc611641@gmail.com</td>
                            <td>**********</td>
                        </tr>
                        <tr>
                            <td>Mauricio Costa</td>
                            <td>mc611641@gmail.com</td>
                            <td>**********</td>
                        </tr>
                        <tr>
                            <td>Mauricio Costa</td>
                            <td>mc611641@gmail.com</td>
                            <td>**********</td>
                        </tr>
                        <tr>
                            <td>Mauricio Costa</td>
                            <td>mc611641@gmail.com</td>
                            <td>**********</td>
                        </tr>
                        <tr>
                            <td>Mauricio Costa</td>
                            <td>mc611641@gmail.com</td>
                            <td>**********</td>
                        </tr>
                        <tr>
                            <td>Mauricio Costa</td>
                            <td>mc611641@gmail.com</td>
                            <td>**********</td>
                        </tr>
                    </tbody>
                    
                </table>
            )}
        </C.Container>
    )
}
export default UsersList;