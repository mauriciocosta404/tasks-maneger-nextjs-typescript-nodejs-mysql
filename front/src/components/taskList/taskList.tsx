import { useState, useEffect, useContext } from 'react';
import * as C from './style';
import {FaCheck, FaTimes, FaTrash} from 'react-icons/fa';
import { api } from '../../services/api';
import Link from 'next/link';
import { TasksContext } from '../../context/tasksContext';

interface statusProps{
    status:'unfinished'|'finished';
}
interface tasksProps{
    name:string;
    description:string;
    status:string;
    idUser:number;
    id:string;
}

const TaskList=()=>{

    const {tasks,setTasks}:tasksProps[] | any=useContext(TasksContext);
    const [showAllTasks, setShowAllTasks] = useState(true);
    const [id, setId] = useState('');

    const hadleValues=(id:string,taskStatus:string)=>{
        setId(id);

        let status=taskStatus==='finished'?'unfinished':'finished';

        setTasks(tasks?.map((task:tasksProps) => 
            task.id === id
                ? {
                    ...task,
                    status
                }
                : task
                ));

        api.put('/tasks',{
            id,
            status
        });  
    }

    const deleteTask=(id:string)=>{
        api.delete('/tasks/'+id);
        setTasks(tasks?.filter((task:tasksProps)=>task.id!==id));
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
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks?.map(({name,description,id,status}:tasksProps,key:number)=>(
                                <tr key={key}>
                                    <td>{name}</td>
                                    <td>{description}</td>
                                    <td
                                    onClick={()=>hadleValues(id,status)}
                                    >
                                        {status === 'finished' ? (<FaCheck color='#77AA00'  />) : (<FaTimes color='#CC0000' />)}    
                                    </td>
                                    <td onClick={()=>deleteTask(id)}><FaTrash color='#CC0000'/></td>
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