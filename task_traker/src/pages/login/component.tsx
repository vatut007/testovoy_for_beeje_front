import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { useGetMeQuery, useLoginMutation } from "../../services/api/api-slice";
import { useNavigate } from "react-router-dom";

type Login = {
  username: string;
  password: string;
};
export function LoginPage() {
  const { data: user, refetch } = useGetMeQuery(undefined);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Login>();
  const [login, { data, error, isLoading }] = useLoginMutation();
  const onSubmit: SubmitHandler<Login> = async (data) => {
    await login({ username: data.username, password: data.password });
    refetch;
  };
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <h1>Войти</h1>
          <div className={styles.fields}>
            <div className={styles.row}>
              <div className={styles.input}>
                <p style={{ margin: 0 }}>Имя пользователя</p>
                <input {...register("username", { required: true })} />
              </div>
              <div className={styles.errorMessage}>
                {errors?.username?.type == "required" && (
                  <span>This field is required</span>
                )}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.input}>
                <p style={{ margin: 0, marginRight: "83px" }}>пароль</p>
                <input {...register("password", { required: true })} />
              </div>
              <div className={styles.errorMessage}>
                {errors?.password?.type == "required" && (
                  <span>This field is required</span>
                )}
              </div>
            </div>
          </div>
          <input type="submit" value="Войти" onClick={() => navigate("/")} />
        </div>
      </form>
    </div>
  );
}
