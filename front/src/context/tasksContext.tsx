import React, { createContext, PropsWithChildren, useState } from 'react';
import TaskList from '../components/taskList/taskList';
import { useEffect } from 'react';
import { api } from '../services/api';

interface tasksProps {
    name: string;
    description: string;
    status: string;
    idUser: string;
    id: string;
}

export const TasksContext = createContext({});

/*
export function TasksProvider({ children }: PropsWithChildren) {
    const [tasks, setTasks] = useState<tasksProps[]>([]);
    

    async function signIn(){
        api.get('/tasks').
            then(async (data)  => setTasks(await data.data));
    }


    return (
        <TasksContext.Provider value={ tasks }>
            {children}
        </TasksContext.Provider>
    );
}*/