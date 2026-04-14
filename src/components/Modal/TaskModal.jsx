import { RiCloseCircleLine } from '@remixicon/react';
import styles from './TaskModal.module.css';
import { useState } from 'react';

const TaskModal = ({closeModal, taskAdder}) => {

    // Form Handling
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        taskAdder(task);

        setTask("");
        closeModal();
    }
    

  return (
    <div className={styles.modal}>
        <div className={styles["modal-content"]}>
            <h2 className="h2 text-center">Add New Task</h2>
            <form className={styles["task-form"]} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <input type="text" value={task} onChange={(e) => {setTask(e.target.value)}} placeholder="Enter Your Task Here..." />
                </div>
                <div className={styles.field}>
                    <button type="submit">Add Task</button>
                </div>
            </form>
            <span onClick={closeModal} className={styles.closeModal}><RiCloseCircleLine size={30} /></span>
        </div>
    </div>
  )
}

export default TaskModal