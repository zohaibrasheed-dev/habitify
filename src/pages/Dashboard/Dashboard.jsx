import { RiAddCircleFill } from '@remixicon/react';
import styles from './Dashboard.module.css'
import TaskModal from '../../components/Modal/TaskModal';
import { useState } from 'react';

function Dashboard() {

    const [showModal, setShowModal] = useState(false); // Modal State - Open/Close

    // Open Modal
    const openModal = () => {
        setShowModal(true);
    }

    // Close Modal - Pass this to children as Close Button in inside children
    const closeModal = () => {
        setShowModal(false);
    }


    return (
        <>
            <div className="dashboard-wrapper flex jc-center ai-center h-full">
                <div className={`${styles['no-tasks']} flex ai-center flex-dc`}>
                    <h2>Tasks List is Empty!</h2>
                    <button onClick={openModal} className="btn primary addTask">Add Task <RiAddCircleFill size={20} /> </button>
                </div>
            </div>

            {showModal && <TaskModal props={closeModal} />}
        </>
    )
}

export default Dashboard