import styles from "./styles.module.css"

export function Header(){
    return(
        <div className={styles.header}>
            <p>
                Тестовое задание для BeeJee
            </p>
            <p>
                Войти
            </p>
        </div>
    )
}