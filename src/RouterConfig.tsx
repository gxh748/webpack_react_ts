import React, { useEffect, useLayoutEffect } from "react";
import { RouteObject, Navigate, useRoutes, useLocation, useNavigate } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

const RouteConfig : RouteObject[] = [
    /**
     * overall
    */
    {
        path: '/test1',
        element: <Page1 />
    },
    {
        path: '/test2',
        element: <Page2 />
    },

    // {
    //     path: '*',
    //     element: <Navigate to='/analytics/coin/pta/strategy_groups' />,
    //     // element: <NotFoundPage />
    // }
];

const RoutesEle = () => {
    const location = useLocation();
    const navigator = useNavigate();

    const routes = useRoutes(RouteConfig);
    return routes;
};

export default RoutesEle;
