import { Task } from "../../components/task/component";
import { useGetTasksQuery } from "../../services/api/api-slice";
import styles from "./styles.module.css"

export function HomePage(){
    const {data:tasks, error, isLoading} = useGetTasksQuery(undefined);
    if (error){
        return(
            <p>Произошла ошибка</p>
        )
    }
    if (isLoading){
        return(
            <p>Идет загрузка</p>
        )
    }
    console.log(tasks)
    return (
        <div className={styles.home}>
            <Task/>
            <Task/>
            <Task/>
        </div>
    )
}