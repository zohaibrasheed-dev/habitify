
import styles from './Tasks.module.css';

const Tasks = ({tasksData}) => {
    
    return (
        <div className={styles["tasks-area"]}>
            <div className={styles["tasks-header"]}>
                <h2 className="h3 bold text-center  font-ibm">All Tasks</h2>
            </div>
            <div className={styles["tasks-body"]}>

                {
                    tasksData.length ? (
                        <ul>
                            {
                                tasksData.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))
                            }
                        </ul>
                    ) : (
                        <p className={`${styles.noTasks} text-center`}>You have no tasks right now!</p>
                    )
                }

            </div>
        </div>
    )
}

export default Tasks