import { useEffect, useState } from 'react';
import * as C from './style';
import {FaTimes,FaCheck} from 'react-icons/fa';
import { api } from '../../services/api';

interface tasksProps {
    name: string;
    description: string;
    status: string;
    idUser: number;
}

const PeddingTaskList=()=>{
    const [showAllTasks, setShowAllTasks] = useState<boolean>(true);

    const [tasks, setTasks] = useState<tasksProps[]>();
    useEffect(() => {
        api.get('/tasks').
            then((data) =>{ 
                setTasks(data.data.filter((task:tasksProps)=>task.status==='unfinished'));
            });
        },
    []);

    return(
        <C.Container>
            <div className='head'>
                <h3>Pedding Tasks</h3>
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
                            tasks?.map((task,key)=>(

                            <tr key={key}>
                                <td>{task.name}</td>
                                <td>{task.description}</td>
                                <td>****</td>
                                <td><FaTimes/></td>
                            </tr>          
                            ))
                        }
                    </tbody>
                    
                </table>
            )}

        </C.Container>
    )
}
export default PeddingTaskList;