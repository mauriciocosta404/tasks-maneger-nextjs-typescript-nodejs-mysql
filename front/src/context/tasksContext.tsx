import React, { createContext, PropsWithChildren, useState } from 'react';
import TaskList from '../components/taskList/taskList';
import { useEffect } from 'react';
import { api } from '../services/api';

interface tasksProps {
    name: string;
    description: string;
    status: string;
    idUser: number;
    id: string;
}

export const TasksContext = createContext({} as tasksProps[] | string);

export function TasksProvider({ children }: PropsWithChildren) {
    const [tasks, setTasks] = useState<tasksProps[]>([]);
    const dme='denkjne';
    useEffect(()=>{
        api.get('/tasks').
            then((data) => setTasks(data.data));
    },[]);

    return (
        <TasksContext.Provider value={ dme }>
            {children}
        </TasksContext.Provider>
    )
}