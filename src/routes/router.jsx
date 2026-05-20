import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetails from "../pages/ProjectDetails";
import BlogPage from "../pages/BlogPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
    },
    {
        path: "/project/:id",
        element: <ProjectDetails />,
    },
    {
        path: "/blog",
        element: <BlogPage />,
    },
]);