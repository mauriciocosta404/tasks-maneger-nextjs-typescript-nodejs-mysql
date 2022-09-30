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

const FinishedTaskList=()=>{

    const [showAllTasks, setShowAllTasks] = useState<boolean>(true);
    const [finishedTasks,setFinishedTasks]=useState<tasksProps[]>([]);
    const {tasks,setTasks}:tasksProps[] | any=useContext(TasksContext);

    useEffect(() => {
        setFinishedTasks(tasks.filter((task: tasksProps) => task.status === 'finished'));
        }
    ,[tasks]);

    return(
        <C.Container>
            <div className='head'>
                <h3>Finished Tasks</h3>
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
                            finishedTasks?.map(({name,description}:tasksProps,key:number)=>(
                                <tr key={key}>
                                    <td>{name}</td>
                                    <td>{description}</td>
                                    <td>****</td>
                                    <td><FaCheck/></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    
                </table>
            )}

        </C.Container>
    )
}
export default FinishedTaskList;