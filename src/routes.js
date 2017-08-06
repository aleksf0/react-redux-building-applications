import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

export default (
  /* Always load the App component and then pass the nested items as "children" to the App based on the routing. */
  <Route path="/" component={App}>
    {/* If someone goes to /, we will load the HomePage. */}
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);