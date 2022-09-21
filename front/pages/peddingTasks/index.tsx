import type { NextPage } from 'next'
import Head from 'next/head'
import * as C from './style';
import Aside from '../../src/components/aside/aside'
import Header from '../../src/components/header/header'
import MiniCards from '../../src/components/miniCards/MiniCards';
import PeddingTaskList from '../../src/components/peddingTasksList/taskList';

const PeddingTasksPage: NextPage = () => {

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
                    <PeddingTaskList></PeddingTaskList>
                </div>

            </C.Container>
        </>
    )
}

export default PeddingTasksPage;

