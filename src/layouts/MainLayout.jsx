import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import TaskModal from '../components/Modal/TaskModal';
import styles from './MainLayout.module.css';

function MainLayout() {

    // Managing Tasks State
    const [tasksCollection, setTasksCollection] = useState([]);
    const addNewTask = (newTask) => {
        setTasksCollection(tasksCollection => [...tasksCollection, newTask]);
    }

    // Managing Modal State
    const [modalState, setModalState] = useState(false);
    const openModal = () => {
        setModalState(true);
    }
    const closeModal = () => {
        setModalState(false);
    }
    
    return (
        
        <section>
            <div className={styles.layout}>
                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
                <div className={`${styles.mainArea} bg-offWhite`}>
                    <Header openModalFnc = {openModal} />
                    <Outlet context={tasksCollection} />
                    {modalState && <TaskModal closeModalFnc = {closeModal} addNewTaskFnc = {addNewTask} />}
                </div>
            </div>
        </section>

    )
}

export default MainLayout;