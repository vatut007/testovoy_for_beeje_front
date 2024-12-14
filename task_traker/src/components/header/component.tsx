import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useGetMeQuery, useLogoutMutation } from "../../services/api/api-slice";
import { useEffect } from "react";

export function Header() {
  const { data: user, refetch } = useGetMeQuery(undefined);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  useEffect(() => {
    refetch;
  });
  return (
    <div className={styles.header}>
      <Link to="/">
        <p className={styles.headerText}>Тестовое задание для BeeJee</p>
      </Link>
      <div className={styles.loginCreateTask}>
        <Link to="/create">
          <p className={styles.headerText}>Создать задачку</p>
        </Link>
        <p
          className={styles.headerText}
          onClick={() => {
            if (user) {
              logout(undefined);
              navigate("/logout");
            } else {
              navigate("login");
            }
          }}
        >
          {user ? "Выйти" : "Войти"}
        </p>
      </div>
    </div>
  );
}
