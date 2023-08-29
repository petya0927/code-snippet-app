import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

const App = () => {
  // HACK
  window.addEventListener("error", (e) => {
    if (e.message === "ResizeObserver loop limit exceeded") {
      const resizeObserverErrDiv = document.getElementById(
        "webpack-dev-server-client-overlay-div"
      );
      const resizeObserverErr = document.getElementById(
        "webpack-dev-server-client-overlay"
      );
      if (resizeObserverErr) {
        resizeObserverErr.setAttribute("style", "display: none");
      }
      if (resizeObserverErrDiv) {
        resizeObserverErrDiv.setAttribute("style", "display: none");
      }
    }
  });

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      <RouterProvider router={AppRouter} />
    </MantineProvider>
  );
};

export default App;
