import styles from './Dashboard.module.css'
import TaskModal from '../../components/Modal/TaskModal';
import { useState } from 'react';

function Dashboard() {

    const [tasksList, setTasksList] = useState([]); // All Tasks List
    const [showModal, setShowModal] = useState(false); // Modal State - Open/Close

    // Add Task
    const addNewTask = (task) => {
        setTasksList([...tasksList, task]);
    }
    console.log(tasksList);

    // Open Modal
    const openModal = () => {
        setShowModal(true);
    }

    // Close Modal - Pass this to children as Close Button in inside children
    const closeModal = () => {
        setShowModal(false);
    }


    return (

        <div className="contentWrapper">
            
        </div>



            // {/* {
            //     tasksList.length === 0 ? (
            //         <div className="dashboard-wrapper flex jc-center ai-center h-full">
            //             <div className={`${styles['no-tasks']} flex ai-center flex-dc`}>
            //                 <h2>Tasks List is Empty!</h2>
            //             </div>
            //         </div>
            //     ) : (
            //         <div className="tasks-listing">
            //             <ul>
            //                 {
            //                     tasksList.map(task => (
            //                         <li>task</li>
            //                     ))
            //                 }
            //             </ul>
            //         </div>
            //     )
            // }  */}

            

            // {/* {showModal && <TaskModal closeModal={closeModal} taskAdder={addNewTask} />} */}
        
    )
}

export default Dashboard