import { Task } from "../../components/task/component";
import { useGetTasksQuery } from "../../services/api/api-slice";
import styles from "./styles.module.css"

export function HomePage() {
    const { data: tasks, error, isLoading } = useGetTasksQuery(undefined);
    if (error) {
        return (
            <p>Произошла ошибка</p>
        )
    }
    if (isLoading) {
        return (
            <p>Идет загрузка</p>
        )
    }
    return (
        <div className={styles.home}>
            {tasks?.map((task) => <Task
                key={task.id}
                id={task.id}
                text={task.text}
                email={task.email}
                is_done={task.is_done} />)}
        </div>
    )
}