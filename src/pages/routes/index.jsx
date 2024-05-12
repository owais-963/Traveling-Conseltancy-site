import { lazy } from 'react';
import Home from "../home/home"
import BlogPage from '../blogs/blog';
import { useRoutes } from 'react-router-dom';


const Routes = {
    path: '/',
    element: <Home />,
    children: [
        
            {
            path: 'blogs/:title?',
            element: <BlogPage />,
        }
    ]
};


export default function ThemeRoutes() {
    return useRoutes(Routes);
}

// export default Routes;