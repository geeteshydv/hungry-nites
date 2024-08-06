import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Cart from "./components/Cart.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import About from "./components/About.js";
import Login from "./components/Login.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore.js";
const App = () => {
  return (
    <Provider store={appStore}>
      <Navbar />
      <Outlet />
      <Footer />
    </Provider>
  );
};
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
