import { useState } from "react";
import { RiCloseCircleLine } from '@remixicon/react';
import styles from './TaskModal.module.css';

const TaskModal = ({closeModalFnc, addNewTaskFnc}) => {

    const [taskTitle, setTaskTitle] = useState("");

    const handleForm = (e) => {
        e.preventDefault();

        addNewTaskFnc(taskTitle);
        setTaskTitle("");
        closeModalFnc();
    }

  return (
    <div className={styles.modal}>
        <div className={styles["modal-content"]}>
            <h2 className="h2 text-center">Add New Task</h2>
            <form className={styles["task-form"]} onSubmit={handleForm}>
                <div className={styles.field}>
                    <input type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} placeholder="Enter Your Task Here..." />
                </div>
                <div className={styles.field}>
                    <button type="submit">Add Task</button>
                </div>
            </form>
            <span onClick={closeModalFnc} className={styles.closeModal}><RiCloseCircleLine size={40} /></span>
        </div>
    </div>
  )
}

export default TaskModal