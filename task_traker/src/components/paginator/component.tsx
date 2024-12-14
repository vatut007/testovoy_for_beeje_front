import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";

interface PaginatorProps {
  page: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export function Paginator({ page, totalPages, setPage }: PaginatorProps) {
  const numbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className={styles.paginator}>
      {numbers.map((number) => {
        if (number == page) {
          return <p className={styles.selectNumber}>{number}</p>;
        }
        return (
          <p
            className={styles.noSelectNumber}
            onClick={() => {
              setPage(number);
            }}
          >
            {number}
          </p>
        );
      })}
    </div>
  );
}
