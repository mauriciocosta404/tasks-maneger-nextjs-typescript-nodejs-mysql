import { useState, useEffect } from 'react';
import * as C from './style';
import {FaCheck, FaTimes} from 'react-icons/fa';
import { api } from '../../services/api';
import Link from 'next/link';

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
    //const [status, setStatus] = useState('');
    const [id, setId] = useState(-1);
    useEffect(()=>{
            api.get('/tasks').
            then((data)=>setTasks(data.data));
        },
    []);

    const hadleValues=(id:number,statusP:string)=>{
        setId(id);
        let status=statusP==='finished'?'unfinished':'finished';
        api.put('/tasks',{
            id,
            status
        });
        window.location.replace(`/index`);
    }

    return(
        <C.Container>
            <div className='head'>
                <h3>All Tasks</h3>
                <button onClick={() => setShowAllTasks(showAllTasks ? false : true)}>Hide</button>
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
                            tasks?.map((tasks,key)=>(
                                <tr key={key}>
                                    <td>{tasks.name}</td>
                                    <td>{tasks.description}</td>
                                    <td>****</td>
                                    <td
                                    onClick={()=>hadleValues(tasks.id,tasks.status)}
                                    >
                                            {tasks.status === 'finished' ? (<FaCheck />):(<FaTimes className='close'/>)}    
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