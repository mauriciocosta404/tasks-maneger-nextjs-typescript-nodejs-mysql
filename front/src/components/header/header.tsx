import * as C from './style';
import {FaSearch,FaBars} from 'react-icons/fa';
import Image from 'next/image';
import avatar from '../../../images/Capturar.png';

const Header=()=>{
    return(
        <C.Container className='header'>
            <div className='logo'><FaBars />Dashboard</div>
            <div className='searchContainer'><FaSearch /><input type="search" placeholder='search here' name="" id="" /></div>
            <div className='avatar'>
                <div className='image'>
                    <Image src={avatar} width={40} height={40} alt=''></Image>
                </div>
                <div className='content'>
                    <span>Jonh Doe</span>
                    <small>Supper admin</small>
                </div>
            </div>
        </C.Container>
    );
}
export default Header;