import { useState } from "react";
import { Task } from "../../components/task/component";
import { useGetTasksQuery } from "../../services/api/api-slice";
import styles from "./styles.module.css"
import { Paginator } from "../../components/paginator/component";

export function HomePage() {
    const { data: tasks, error, isLoading } = useGetTasksQuery(undefined);
    const [page, setPage] = useState(1);
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
    if(tasks?.result.length==0){
        return(
        <div className={styles.notContent}>
            <p>Нет задачек.Вы можете создать задачку</p>
        </div>
        )
    }
    return (
        <>
        <div className={styles.home}>
            {tasks?.result.map((task) => <Task
                key={task.id}
                id={task.id}
                text={task.text}
                email={task.email}
                is_done={task.is_done} />)}
        </div>
        {tasks&&<Paginator page={page} totalPages={tasks.total_pages} setPage={setPage}/>}
        </>
    )
}