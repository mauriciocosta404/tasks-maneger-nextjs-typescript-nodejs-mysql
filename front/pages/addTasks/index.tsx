import type { NextPage } from 'next'
import Head from 'next/head'
import * as C from './style';
import Aside from '../../src/components/aside/aside'
import Header from '../../src/components/header/header'

import AddTask from '../../src/components/addTasks/addTasks';

const AddTasksPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>
                    mauriciadas
                </title>
            </Head>
            <C.Container>

                   <AddTask></AddTask>
            
            </C.Container>
        </>
    )
}

export default AddTasksPage;

