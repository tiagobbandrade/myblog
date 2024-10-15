import { useUserContext } from "../../contexts/UsersContext";
import styles from "./index.module.css";

type PostTypeProps = {
  userId: number;
  title: string;
  body: string;
  isLoading: boolean;
};

export function Card({ body, title, userId, isLoading }: PostTypeProps) {
  const { users, isUsersLoading } = useUserContext();

  return (
    <div className={styles.card}>
      {!isLoading && !isUsersLoading ? (
        <>
          <div className={styles.user_info}>
            <span className={styles.icon}>
              {users.find((user) => user.id === userId)?.name?.charAt(0)}
            </span>
            <div className={styles.texts}>
              <span>{users.find((user) => user.id === userId)?.name}</span>
              <span>@{users.find((user) => user.id === userId)?.username}</span>
            </div>
          </div>
          <h4>{title}</h4>
          <p>{body}</p>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
