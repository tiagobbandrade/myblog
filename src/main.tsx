import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { UserContextProvider } from "./contexts/UsersContext";
import { Feed } from "./components/Feed";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { Post } from "./components/Project";
import { PostContextProvider } from "./contexts/ProjectsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <PostContextProvider>
        <RouterProvider router={router} />
      </PostContextProvider>
    </UserContextProvider>
  </StrictMode>
);
