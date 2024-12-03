import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export function Header() {
    return (
        <div className={styles.header}>
            <Link to='/'>
            <p className={styles.headerText}>
                Тестовое задание для BeeJee
            </p>
            </Link>
            <div className={styles.loginCreateTask}>
                <Link to='/create'>
                    <p className={styles.headerText}>
                        Создать задачку
                    </p>
                </Link>
                <p>
                    Войти
                </p>
            </div>
        </div>
    )
}