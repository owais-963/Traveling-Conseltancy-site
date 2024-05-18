// import { lazy } from 'react';

// import Home from "../home/home"
// import BlogPage from '../blogs/blog';
// import { useRoutes } from 'react-router-dom';


// // const Main = {
// //     path: '/',
// //     element: <Home />,
// //     children: [
// //         {
// //             path: '/',
// //             element: <Home />,
// //         },
// //         {
// //             path: '/blogs',
// //             element: <BlogPage />,
// //         }
// //     ]
// // };


// // export default function Routes() {
// //     return useRoutes([Main]);
// // }

// export default Routes;

// routes/index.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/home';
import BlogPage from '../blogs/blog';

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blogs/:title?" element={<BlogPage />} />
  </Routes>
);

export default RoutesConfig;
