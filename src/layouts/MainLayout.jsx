import styles from './MainLayout.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from '../pages/Dashboard/Dashboard';



function MainLayout() {
    return (
        
        <section>
            <div className={styles.layout}>
                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
                <div className="mainArea">
                    <Dashboard />
                </div>
            </div>
        </section>

    )
}

export default MainLayout;