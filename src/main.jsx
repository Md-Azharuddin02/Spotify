import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PlayerContextProvide from "./context/PlayerContext.jsx";
import DisplayHome from "./components/DisplayHome.jsx";
import DisplayAlbum from "./components/DisplayAlbum.jsx";

const router = createBrowserRouter([
  {path: '/', element: <App/>, children:[
    {path:'', element: <DisplayHome/>},
    {path:'/album/:id', element: <DisplayAlbum/>},
  ]}
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayerContextProvide>
     <RouterProvider  router={router}/>
    </PlayerContextProvide>
  </StrictMode>
);
