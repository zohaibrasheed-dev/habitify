import { RiCloseCircleLine } from '@remixicon/react';
import styles from './TaskModal.module.css';

const TaskModal = (props) => {
    console.log(props);
  return (
    <div className={styles.modal}>
        <form className={styles["task-form"]}>
            <div className={styles.field}>
                <input type="text" placeholder="Task Title" />
            </div>
            <div className={styles.field}>
                <input type="text" placeholder="Task Description" />
            </div>
            <div className={styles.field}>
                <button type="button">Add Task</button>
            </div>
        </form>
        <span onClick={props.props} className={styles.closeModal}><RiCloseCircleLine size={30} /></span>
    </div>
  )
}

export default TaskModal