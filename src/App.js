import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesConfig from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
const router = createBrowserRouter(routesConfig)

function App() {
  return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>


  );
}

export default App;
