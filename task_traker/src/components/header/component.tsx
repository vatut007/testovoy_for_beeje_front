import styles from "./styles.module.css"

export function Header() {
    return (
        <div className={styles.header}>
            <p>
                Тестовое задание для BeeJee
            </p>
            <div className={styles.loginCreateTask}>
                <p>
                    Создать задачку
                </p>
                <p>
                    Войти
                </p>
            </div>
        </div>
    )
}