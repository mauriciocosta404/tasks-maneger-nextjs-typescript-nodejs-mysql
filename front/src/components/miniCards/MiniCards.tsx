import { FaUsers,FaClipboardList,FaRegClipboard,FaClipboardCheck } from 'react-icons/fa';
import * as C from './style';
import { api } from '../../services/api';
import { useEffect, useState,useContext } from 'react';
import { TasksContext } from '../../context/tasksContext';
import { UsersContext } from '../../context/usersContext';

interface tasksProps {
    name: string;
    description: string;
    status: string;
    idUser: number;
}
interface usersProps {
    id: string;
    name: string;
    email: string;
}

const MiniCards=()=>{
    const {tasks}:tasksProps[] | any =useContext(TasksContext);
    const {users}:usersProps[] | any =useContext(UsersContext);
    const [countUsers,setCountUsers]=useState(0);
    const [countTasks,setCountTasks]=useState(0);
    const [peddingCountTasks, setPeddingCountTasks] = useState<tasksProps[]>();
    const [finishedCountTasks, setFinishedCountTasks] = useState<tasksProps[]>();
    
    useEffect(()=>{
        setCountUsers(users.length)
        setCountTasks(tasks.length),
        setPeddingCountTasks(tasks.filter((task: tasksProps) => task.status === 'unfinished'));
        setFinishedCountTasks(tasks.filter((task: tasksProps) => task.status === 'finished'));
        
    },[users,tasks]);

    return(
        <C.Container>
            <C.MiniCard>
                <div className=''>
                    <h2>{countUsers}</h2>
                    <span>All users</span>
                </div>
                <div className='icon'>
                    <FaUsers />
                </div>
            </C.MiniCard>
            <C.MiniCard>
                <div className=''>
                    <h2>{countTasks}</h2>
                    <span>All Tasks</span>
                </div>
                <div className='icon'>
                    <FaClipboardList />
                </div>
            </C.MiniCard>
            <C.MiniCard>
                <div className=''>
                    <h2>{peddingCountTasks?.length ?? 0}</h2>
                    <span>Pedding tasks</span>
                </div>
                <div className='icon'>
                    <FaRegClipboard />
                </div>
            </C.MiniCard>
            <C.MiniCard>
                <div className=''>
                    <h2>{finishedCountTasks?.length ?? 0}</h2>
                    <span>Finished Tasks</span>
                </div>
                <div className='icon'>
                    <FaClipboardCheck />
                </div>
            </C.MiniCard>
        </C.Container>
    );
}

export default MiniCards;