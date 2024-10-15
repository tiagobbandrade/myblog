import { usePostsContext } from "../../contexts/ProjectsContext";
import { Card } from "../Card";
import styles from "./index.module.css";

export function Feed() {
  const { posts, isPostsLoading } = usePostsContext();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h2>Seu feed</h2>
        <p>Fique por dentro de todas as atualizações que rolarem!</p>
      </header>
      <main className={styles.main}>
        {posts.map((post) => (
          <Card
            body={post.body}
            title={post.title}
            userId={post.userId}
            isLoading={isPostsLoading}
            postId={post.id}
            key={post.id}
          />
        ))}
      </main>
    </div>
  );
}
