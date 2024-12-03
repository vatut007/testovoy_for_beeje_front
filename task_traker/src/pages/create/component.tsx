import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./styles.module.css"

type TaskCreate = {
    email: string,
    username: string,
    text: string,
    required: string
}

export function CreatePage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TaskCreate>()
    const onSubmit: SubmitHandler<TaskCreate> = (data) => console.log(data)
    return (
        <div className={styles.page}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form}>
                    <h1>Создание задачи</h1>
                    <div className={styles.fields}>
                        <div className={styles.row}>
                            <p>email</p>
                            <input {...register("email", {required:true})} />
                        </div>
                        <div className={styles.row}>
                            <p>Имя пользователя</p>
                            <input {...register("username", {required:true})} />
                        </div>
                        <div className={styles.row}>
                            <p>Текст</p>
                            <input {...register("text", {required:true})} />
                        </div>
                        {errors.required && <span>This field is required</span>}
                    </div>

                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}