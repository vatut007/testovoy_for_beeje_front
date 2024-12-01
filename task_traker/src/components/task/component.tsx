import styles from "./styles.module.css"

interface TaskProps {
    id: number,
    text: string,
    email: string,
    is_done: boolean
}
export function Task({ id, text, email, is_done }: TaskProps) {
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
                    <p>
                        {email}
                    </p>
                </div>
                <p>
                    Текст задачи: {text}
                </p>
            </div>
        </div>
    )
}