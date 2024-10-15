import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type PostContextType = {
  posts: Post[];
  isPostsLoading: boolean;
};

const PostContext = createContext<PostContextType>({} as PostContextType);

export function PostContextProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsPostsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
        setIsPostsLoading(false);
      });
  }, []);

  return (
    <PostContext.Provider value={{ posts, isPostsLoading }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePostsContext() {
  const context = useContext(PostContext);

  if (!context) throw new Error("useContext must be used with provider");

  return context;
}
