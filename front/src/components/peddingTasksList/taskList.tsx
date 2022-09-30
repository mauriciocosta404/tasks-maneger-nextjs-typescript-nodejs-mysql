import { useEffect, useState, useContext } from 'react';
import * as C from './style';
import {FaTimes,FaCheck} from 'react-icons/fa';
import { api } from '../../services/api';
import { TasksContext } from '../../context/tasksContext';

interface tasksProps {
    name: string;
    description: string;
    status: string;
    idUser: number;
}

const PeddingTaskList=()=>{
    const [showAllTasks, setShowAllTasks] = useState<boolean>(true);
    const [peddingTasks, setPeddingTasks] = useState<tasksProps[]>();
    const {tasks, setTasks}:tasksProps[] | any=useContext(TasksContext);

    useEffect(() => {
        setPeddingTasks(tasks.filter(({status}: tasksProps) => status !== 'finished'));
        }
    ,[]);
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
                            peddingTasks?.map(({name,description,status}:tasksProps,key:number)=>(

                            <tr key={key}>
                                <td>{name}</td>
                                <td>{description}</td>
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