import type { NextPage } from 'next'
import Head from 'next/head'
import * as C from './style';
import Aside from '../../src/components/aside/aside'
import Header from '../../src/components/header/header'
import MiniCards from '../../src/components/miniCards/MiniCards';
import TaskList from '../../src/components/taskList/taskList';
import { TasksContext } from '../../src/context/tasksContext';
import { useEffect, useState } from 'react';
import { api } from '../../src/services/api';



const Home: NextPage = () => {
  
  return (
   <>
   <Head>
    <title>
      mauriciadas
    </title>
  </Head>
    <C.Container>
      
        <Aside></Aside>
        <div className='header'>
          <Header></Header>
          <MiniCards></MiniCards>
          <TaskList></TaskList>
        </div>
      
        
    </C.Container>
   </>
  )
}

export default Home

