import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RoutesEle from './RouterConfig';

const App: React.FC<{}> = () => {
    // const RoutesConfig = useRoutes(RouteConfig);
    return(
        <div className="app">
            <Router>
                <ul>
                    <li><Link to="/test1" > page1</Link></li>
                    <li><Link to="/test2" > page2</Link></li>
                </ul>
                
                {/* <Link to="/test2" > page2</Link> */}
                <RoutesEle />
            </Router>
        </div>
    );
};

export default App;
