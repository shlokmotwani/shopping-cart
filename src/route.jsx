import { App } from "./App";
import { CartPage } from "./assets/pages/CartPage";
import { ErrorPage } from "./assets/pages/ErrorPage";
import { HomePage } from "./assets/pages/HomePage";
import { ProductPage } from "./assets/pages/ProductPage";

const route = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
];

export { route };
