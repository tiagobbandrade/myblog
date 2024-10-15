import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UsersContext";
import { LeftArrow } from "../LeftArrow";
import { usePostsContext } from "../../contexts/ProjectsContext";

import styles from "./index.module.css";

export function Post() {
  const { id } = useParams();
  const { users } = useUserContext();
  const { posts } = usePostsContext();
  const navigate = useNavigate();

  if (!id || !posts.some((post) => post.id === parseInt(id))) return null;

  const post = posts.find((post) => post.id == parseInt(id!));
  const user = users.find((user) => user.id == post?.userId);

  function handleBackScreen() {
    navigate(-1);
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <button onClick={handleBackScreen} className="back">
          <LeftArrow />
        </button>
        <h2>Post de {user?.name}</h2>
      </header>
      <main className={styles.main}></main>
    </div>
  );
}
