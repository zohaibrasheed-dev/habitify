import { Link } from "react-router-dom";
import logo from '../../assets/icons/logo.png';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <>
            <div className={`${styles.logo} flex jc-center`}>
                <a href="#"><img src={logo} alt="Habitify" /></a>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" className={styles.active}>Dashboard</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar