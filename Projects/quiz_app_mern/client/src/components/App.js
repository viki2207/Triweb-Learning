import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/** Import components */
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
/**
 React routes
 route: mean join to the another components in a same application 
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
