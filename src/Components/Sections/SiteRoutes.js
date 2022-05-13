import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutSection from './AboutSection';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import ContactConfirm from '../Pages/ContactConfirm';
// import NotFound from '../Pages/NotFound';
import Error from '../Pages/Error';
import EmployeeList from "../Pages/EmployeeList";

/**
 * Functional Component for handle routes of sites.
 * 
 * @component
 * @example
 * return (
 *   <SiteRoutes />
 * )
 */
const SiteRoutes = () =>
    <Switch>
        <Route exact path="/" component={EmployeeList} />
        <Route path="/about" component={AboutSection} />
        <Route exact path="/contact/confirm" component={ContactConfirm} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/error" component={Error} />
        
        <Route  path="*" component={Home} />
    </Switch>

export default SiteRoutes;