import * as C from './style';
import Image from 'next/image';
import avatar from '../../../images/capturar.png';

const Admin=()=>{
    return(
        <C.Container>
            <div className='head'>
                <h3>Admin</h3>
            </div>
            <div className='content'>
                <Image src={avatar} alt='' height={180} width={180}></Image>

                <div>
                    <div className='inptus-container'>
                        <div className='input'>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Jonh Doe'/>
                        </div>
                        <div className='input'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='JonhDoe@gmail.com' />
                        </div>
                    </div>
                    <div className='inptus-container'>
                        <div className='input'>
                            <label htmlFor="">Password</label>
                            <input type="text" placeholder='******' />
                        </div>
                        <div className='input'>
                            <label htmlFor="">Age</label>
                            <input type="text" placeholder='18' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='btn'>
                <button>Save</button>
            </div>
        </C.Container>
    )
}
export default Admin;