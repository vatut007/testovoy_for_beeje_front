import { Task } from "../../components/task/component";
import styles from "./styles.module.css"

export function HomePage(){
    return (
        <div className={styles.home}>
            <Task/>
            <Task/>
            <Task/>
        </div>
    )
}