import styles from "./styles.module.css"

interface TaskProps {
    id: number,
    text: string,
    username: string,
    email: string,
    is_done: boolean
}
export function Task({ id, text, email, username, is_done }: TaskProps) {
    return (
        <div className={styles.task}>
            <div className={styles.content}>
                <h1>
                    Номер задачи: {id}
                </h1>
                <div className={styles.textEmail}>
                    <p className={styles.coorentEmail}>
                        Email:&ensp;
                    </p>
                    <p className={styles.coorentEmail}>
                        {email}
                    </p>
                </div>
                <p>
                    Имя: {username}
                </p>
                <p>
                    Текст задачи: {text}
                </p>
                <p>
                    Статус задачи: {is_done?'Выпонено':'Невыполнено'}
                </p>
            </div>
        </div>
    )
}