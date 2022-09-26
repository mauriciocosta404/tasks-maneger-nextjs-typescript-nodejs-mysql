import type { NextPage } from 'next'
import Head from 'next/head';
import AddUsers from '../../src/components/addUsers/addUsers';
import LoginAdmin from '../../src/components/loginAdmin/loginAdmin';

const AddUser: NextPage = () => {

    return (
        <>
            <LoginAdmin />
        </>
    )
}

export default AddUser