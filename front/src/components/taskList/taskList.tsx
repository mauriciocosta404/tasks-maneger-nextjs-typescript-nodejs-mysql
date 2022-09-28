import { useState, useEffect } from 'react';
import * as C from './style';
import {FaCheck, FaTimes} from 'react-icons/fa';
import { api } from '../../services/api';
import Link from 'next/link';

interface statusProps{
    status:'unfinished'|'finished';
}
interface tasksProps{
    name:string;
    description:string;
    status:string;
    idUser:number;
    id:number;
}


const TaskList=()=>{

    const [tasks,setTasks]=useState<tasksProps[]>();
    const [showAllTasks, setShowAllTasks] = useState<boolean>(true);
    const [id, setId] = useState<number>(-1);
    
    useEffect(()=>{
            api.get('/tasks').
            then((data)=>setTasks(data.data));
        },
    []);

    const hadleValues=(id:number,taskStatus:string)=>{
        setId(id);
        let status=taskStatus==='finished'?'unfinished':'finished';
        api.put('/tasks',{
            id,
            status
        });
        //window.location.replace(`/index`);
    }

    return(
        <C.Container>
            <div className='head'>
                <h3>All Tasks</h3>
                <button onClick={()=> setShowAllTasks(!showAllTasks)}>Hide</button>
            </div>

            {showAllTasks &&(
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Codigo</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks?.map(({name,description,id,status},key)=>(
                                <tr key={key}>
                                    <td>{name}</td>
                                    <td>{description}</td>
                                    <td>****</td>
                                    <td
                                    onClick={()=>hadleValues(id,status)}
                                    >
                                            {status === 'finished' ? (<FaCheck />):(<FaTimes className='close'/>)}    
                                    </td>
                                       
                                  </tr>
                            ))
                        }
                    </tbody>
                    
                </table>
            )}

        </C.Container>
    )
}
export default TaskList;