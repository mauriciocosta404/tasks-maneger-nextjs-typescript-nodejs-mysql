import * as C from './style';
import Image from 'next/image';
import { FaIgloo,FaCartPlus, FaRegClipboard,FaLeaf,FaUsers,FaUserGraduate,FaClipboardList,FaClipboardCheck,FaPercentage, FaNewspaper, FaHeartbeat } from 'react-icons/fa';
import Link from 'next/link';

const Aside=()=>{
    return(
        <C.Container>
            <div className='logoP'>
                <h2><FaLeaf/></h2>
                <h3>Encode</h3> 
                    
            </div>
            <div className='menu'>
                <div className='menu-item'>
                    <Link href='/index'>
                        <FaIgloo/>
                    </Link>
                    <Link href='/index'>Dashboard</Link>
                </div>
                <div className='menu-item'>
                    <Link href='/usersList'>
                        <FaUsers />
                    </Link>
                    <Link href='/usersList'>All Users</Link>
                </div>
                <div className='menu-item'>
                    <Link href='/admin'>
                        <FaUserGraduate />
                    </Link>
                    <Link href='/admin'>Admin</Link>
                </div>
                <div className='menu-item'>
                    <Link href='/index'>
                        <FaClipboardList />
                    </Link>
                    <Link href='/index'>All tasks</Link>
                </div>
                <div className='menu-item'>
                    <Link href='/finishedTasks'>
                        <FaClipboardCheck/>
                    </Link>
                    <Link href='/finishedTasks'>Finished Tasks </Link>
                </div>
                <div className='menu-item'>
                    <Link href='/peddingTasks'>
                        <FaRegClipboard/>
                    </Link>
                    <Link href='/peddingTasks'>Pedding Tasks</Link>
                </div>
                <div className='menu-item'>
                    <Link href="/addUsers">
                        <FaCartPlus />
                    </Link>
                    <Link href="/addUsers">Add User</Link>
                </div>
                <div className='menu-item'>
                    <Link href="/addTasks">
                        <FaHeartbeat />
                    </Link>
                    <Link href="/addTasks">Add Task</Link>
                </div>
            </div>
        </C.Container>
    );
}
export default Aside;