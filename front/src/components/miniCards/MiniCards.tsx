import { FaUsers,FaClipboardList,FaPercent,FaClipboardCheck } from 'react-icons/fa';
import * as C from './style';

const MiniCards=()=>{
    return(
        <C.Container>
            <C.MiniCard>
                <div className=''>
                    <h2>54</h2>
                    <span>All users</span>
                </div>
                <div className='icon'>
                    <FaUsers />
                </div>
            </C.MiniCard>
            <C.MiniCard>
                <div className=''>
                    <h2>54</h2>
                    <span>All Tasks</span>
                </div>
                <div className='icon'>
                    <FaClipboardList />
                </div>
            </C.MiniCard>
            <C.MiniCard>
                <div className=''>
                    <h2>54</h2>
                    <span>Percentage Of Tasks</span>
                </div>
                <div className='icon'>
                    <FaPercent />
                </div>
            </C.MiniCard>
            <C.MiniCard>
                <div className=''>
                    <h2>54</h2>
                    <span>Finished Tasks</span>
                </div>
                <div className='icon'>
                    <FaClipboardCheck />
                </div>
            </C.MiniCard>
        </C.Container>
    );
}

export default MiniCards;