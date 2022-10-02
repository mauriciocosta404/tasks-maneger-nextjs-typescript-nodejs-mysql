import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import * as C from './style';
import Aside from '../../src/components/aside/aside'
import Header from '../../src/components/header/header'
import MiniCards from '../../src/components/miniCards/MiniCards';
import UsersList from '../../src/components/usersList/usersList';

const UsersListPage: NextPage = () => {

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
                        <UsersList></UsersList>
                    </div>
            </C.Container>
        </>
    )
}

export default UsersListPage;



export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            name: 'mau',
        }
    }
}