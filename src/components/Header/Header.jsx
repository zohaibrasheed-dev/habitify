import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { RiAddCircleFill, RiSunLine, RiMoonLine } from '@remixicon/react';
import styles from './Header.module.css';

const Header = ({openModalFnc}) => {

  const {toggleTheme} = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className="flex ai-center jc-sb">
        <h1 className="h1 text-gray font-ibm">Good morning, <span className="accent">Zohaib</span></h1>
        <div className="header-btns flex ai-center">
          <button onClick={openModalFnc} className="btn btn-primary addTask">Add Task <RiAddCircleFill size={20} /> </button>
          <button type="button" className="themeBtn" onClick={toggleTheme}>
            <span className="lightIcon"><RiSunLine /></span>
            <span className="darkIcon"><RiMoonLine /></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header