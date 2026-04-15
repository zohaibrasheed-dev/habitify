import { Link, NavLink } from "react-router-dom";
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
                    <li><NavLink to="/" className={ ({isActive}) => isActive ? styles.active : "" }>Dashboard</NavLink></li>
                    <li><NavLink to="/about" className={ ({isActive}) => isActive ? styles.active : "" }>About</NavLink></li>
                </ul>
            </nav>
        </>
    )
}
export default Sidebar