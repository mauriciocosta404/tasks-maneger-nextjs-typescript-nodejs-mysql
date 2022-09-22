import { FaUsers,FaClipboardList,FaRegClipboard,FaClipboardCheck } from 'react-icons/fa';
import * as C from './style';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';

interface tasksProps {
    name: string;
    description: string;
    status: string;
    idUser: number;
}

const MiniCards=()=>{

    const [countUsers,setCountUsers]=useState(0);
    const [countTasks,setCountTasks]=useState(0);
    const [peddingCountTasks, setPeddingCountTasks] = useState<tasksProps[]>();
    const [finishedCountTasks, setFinishedCountTasks] = useState<tasksProps[]>();
    useEffect(()=>{
        api.get('/users').
        then((data)=>setCountUsers(data.data.length));

        api.get('/tasks').
            then((data) => 
            {
                setCountTasks(data.data.length),
                setPeddingCountTasks(data.data.filter((task: tasksProps) => task.status === 'unfinished'));
                setFinishedCountTasks(data.data.filter((task: tasksProps) => task.status === 'finished'));
            });
    },[]);

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
                    <h2>{peddingCountTasks?.length}</h2>
                    <span>Pedding tasks</span>
                </div>
                <div className='icon'>
                    <FaRegClipboard />
                </div>
            </C.MiniCard>
            <C.MiniCard>
                <div className=''>
                    <h2>{finishedCountTasks?.length}</h2>
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