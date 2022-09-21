import { useState } from 'react';
import * as C from './style';

const TaskList=()=>{

    const [showAllTasks, setShowAllTasks] = useState<boolean>(true);

    return(
        <C.Container>
            <div className='head'>
                <h3>All Tasks</h3>
                <button onClick={() => setShowAllTasks(showAllTasks ? false : true)}>Hide</button>
            </div>

            {showAllTasks &&(
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Codigo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Comer</td>
                            <td>Comer 2 pães com manteiga</td>
                            <td>**********</td>
                        </tr>
                        <tr>
                            <td>Bazar</td>
                            <td>Bazar na escola com as crianças</td>
                            <td>**********</td>
                        </tr>
                        <tr>
                            <td>Codar</td>
                            <td>Codar com o José em php</td>
                            <td>**********</td>
                        </tr>
                        <tr>
                            <td>Dormir</td>
                            <td>Dormir sozinho</td>
                            <td>**********</td>
                        </tr>
                    </tbody>
                    
                </table>
            )}

        </C.Container>
    )
}
export default TaskList;