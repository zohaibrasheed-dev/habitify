import { useOutletContext } from "react-router-dom";
import Tasks from '../../components/Tasks/Tasks.jsx';

function Dashboard() {

    const tasksData = useOutletContext();

    return (

        <div className="contentWrapper">
            <div className="flex flex-wrap">
                <div className="col-50">
                    <Tasks tasksData = {tasksData} />
                </div>
            </div>
        </div>
        
    )
}

export default Dashboard