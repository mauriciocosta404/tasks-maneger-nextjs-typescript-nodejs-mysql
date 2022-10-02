import type { AppProps } from 'next/app';
import { ContextType, useEffect, useState } from 'react';
import MainContainer from '../src/components/mainContentainer/MainContainer';
import { AuthProvider } from '../src/context/authContext';
import { TasksContext } from '../src/context/tasksContext';
import { UsersContext } from '../src/context/usersContext';
import { api } from '../src/services/api';
import { GlobalStyle } from '../styles/Global';
import {GetServerSideProps} from 'next';

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

function MyApp({ Component, pageProps }: AppProps) {

  const [users, setUsers] = useState<usersProps[]>([]);
  const [tasks, setTasks] = useState<tasksProps[]>([]);

  useEffect(() => {
    api.get('/users').
      then((data) => setUsers(data.data));

    api.get('/tasks').
      then((data) => setTasks(data.data));
  }, []);

  return (
  <>
  <GlobalStyle/>
    <UsersContext.Provider value={{users,setUsers}}>
        <TasksContext.Provider value={{ tasks, setTasks }}>
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
        </TasksContext.Provider>
      </UsersContext.Provider>
  
    
  </>)
}
export default MyApp;

