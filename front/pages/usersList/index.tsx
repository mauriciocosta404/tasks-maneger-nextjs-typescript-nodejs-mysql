import type { NextPage } from 'next'
import Head from 'next/head'
import * as C from './style';
import Aside from '../../src/components/aside/aside'
import Header from '../../src/components/header/header'
import MiniCards from '../../src/components/miniCards/MiniCards';
import UsersList from '../../src/components/usersList/usersList';
import { TasksContext } from '../../src/context/tasksContext';
import { useState, useEffect } from 'react';
import { api } from '../../src/services/api';
import { UsersContext } from '../../src/context/usersContext';

interface usersProps {
    id: string;
    name: string;
    email: string;
}
interface tasksProps {
    name: string;
    description: string;
    status: string;
    idUser: number;
    id: string;
}

const UsersListPage: NextPage = () => {

    const [users, setUsers] = useState<usersProps[]>([]);
    const [tasks, setTasks] = useState<tasksProps[]>([]);

    useEffect(() => {
        api.get('/users').
            then(async (data) => setUsers(await data.data));

        api.get('/tasks').
            then(async (data) => setTasks(await data.data));
    },[]);

    return (
        <>
            <Head>
                <title>
                    mauriciadas
                </title>
            </Head>
            <C.Container>
                 <UsersContext.Provider value={{users}}> 
                    <Aside></Aside>
                    <div className='header'>
                        <Header></Header>
                        <TasksContext.Provider value={{tasks}}>
                            <MiniCards></MiniCards>
                        </TasksContext.Provider>
                        <UsersList></UsersList>
                    </div>
                 </UsersContext.Provider>

            </C.Container>
        </>
    )
}

export default UsersListPage;

