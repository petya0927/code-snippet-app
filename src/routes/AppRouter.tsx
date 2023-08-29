import { createHashRouter } from "react-router-dom";
import Layout from "../layout/Layout";

const AppRouter = createHashRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

export default AppRouter;
