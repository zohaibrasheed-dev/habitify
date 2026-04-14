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
                    <li><a href="#" className={styles.active}>Dashboard</a></li>
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                    <li><a href="#">Page 3</a></li>
                    <li><a href="#">Page 4</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar