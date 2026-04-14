import styles from './Header.module.css';
import { RiAddCircleFill } from '@remixicon/react';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="flex ai-center jc-sb">
        <h1 className="h1 text-gray font-ibm">Good morning, <span className="text-orange">Zohaib</span></h1>
        <button  className="btn primary addTask">Add Task <RiAddCircleFill size={20} /> </button>
      </div>
    </header>
    // onClick={openModal}
  )
}

export default Header