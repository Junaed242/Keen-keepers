import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { TimelineProvider } from "./components/TimelineContext";
import './index.css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FriendDetail from "./pages/FriendDetail";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: (
      <TimelineProvider>
        <Layout />
      </TimelineProvider>
    ),
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/friend/:id", element: <FriendDetail /> },
      { path: "/timeline", element: <Timeline /> },
      { path: "/stats", element: <Stats /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);