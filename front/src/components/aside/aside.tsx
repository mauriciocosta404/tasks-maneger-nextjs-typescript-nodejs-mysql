import * as C from './style';
import Image from 'next/image';
import { FaIgloo,FaCartPlus, FaLeaf,FaUsers,FaUserGraduate,FaClipboardList,FaClipboardCheck,FaPercentage } from 'react-icons/fa';

const Aside=()=>{
    return(
        <C.Container>
            <div className='logoP'>
                <h2><FaLeaf/></h2>
                <h3>Encode</h3> 
                    
            </div>
            <div className='menu'>
                <div className='menu-item'>
                    <FaIgloo/>
                    Dashboard
                </div>
                <div className='menu-item'>
                    <FaUsers />
                    All Users
                </div>
                <div className='menu-item'>
                    <FaUserGraduate />
                    Admin
                </div>
                <div className='menu-item'>
                    <FaClipboardList />
                    All Tasks
                </div>
                <div className='menu-item'>
                    <FaClipboardCheck/>
                    Finished Tasks
                </div>
                <div className='menu-item'>
                    <FaPercentage/>
                    Percentage Of Tasks
                </div>
                <div className='menu-item'>
                    <FaCartPlus />
                    <a href="/addUsers">Add Users</a>
                </div>
            </div>
        </C.Container>
    );
}
export default Aside;