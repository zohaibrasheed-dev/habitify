import styles from './MainLayout.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        
        <section>
            <div className={styles.layout}>
                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
                <div className={styles.mainArea}>
                    <Header />
                    <Outlet />
                </div>
            </div>
        </section>

    )
}

export default MainLayout;