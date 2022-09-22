import { useState, useEffect } from 'react';
import * as C from './style';
import {FaCheck, FaTimes} from 'react-icons/fa';
import { api } from '../../services/api';

interface tasksProps{
    name:string;
    description:string;
    status:string;
    idUser:number;
}

const TaskList=()=>{

    const [tasks,setTasks]=useState<tasksProps[]>();
    const [showAllTasks, setShowAllTasks] = useState<boolean>(true);
    useEffect(()=>{
            api.get('/tasks').
            then((data)=>setTasks(data.data));
        },
    []);

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
                                    <td> {tasks.status === 'finished' ? (<FaCheck />):(<FaTimes className='close'/>)} </td>
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