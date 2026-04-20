import styles from './About.module.css';
import {useDispatch, useSelector} from "react-redux";
import { increment, decrement } from "../../redux/features/counterSlice";


function About() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="contentWrapper">
            <div className="counter">
                <span className={styles.counter}>{count}</span>

                <div className={`${styles.counterBtns} flex`}>
                    <button type="button" onClick={() => dispatch(increment())} className="btn btn-primary">Increment</button>
                    <button type="button" onClick={() => dispatch(decrement())} className="btn btn-primary">Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default About