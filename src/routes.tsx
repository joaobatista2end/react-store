  import Home from './pages/Home';
  import Details from './pages/Details';
  import ShopCart from './pages/ShopCart';
  
  import {
    createBrowserRouter,
  } from "react-router-dom";

  export const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'product/:id/details',
      element: <Details />
    },
    {
      path: '/shopcart',
      element: <ShopCart />
    }
  ]

  export const router = createBrowserRouter(routes);
