import styles from './Header.module.css'
import { RiNotification4Line } from '@remixicon/react';

const Header = () => {
  return (
    <div className={styles.header}>
        <header>
            <div className="flex jc-end">
                <span className="notifications"><RiNotification4Line /></span>
            </div>
        </header>
    </div>
  )
}

export default Header