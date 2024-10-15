import { useEffect, useState } from "react";
import { Card } from "../Card";
import styles from "./index.module.css";

type PostType = {
  userId: number;
  title: string;
  body: string;
  id: number;
};

export function Feed() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
        setIsLoading(false);
      });
  }, []);

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
            isLoading={isLoading}
            key={post.id}
          />
        ))}
      </main>
    </div>
  );
}
