import styles from "./styles.module.css"

export function Task() {
    return (
        <div className={styles.task}>
            <div className={styles.content}>
                <p>
                    1
                </p>
                <p>
                    vatut007@ya.ru
                </p>
                <p>
                    Текст задачи
                </p>
            </div>
        </div>
    )
}