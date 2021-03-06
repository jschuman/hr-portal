import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Portal from './components/portal';
import EmployeesIndex from './containers/employees_index';
import EmployeesNew from './components/employees_new';
import EmployeesShow from './containers/employees_show';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Portal} />
    <Route path="employees" component={EmployeesIndex} />
    <Route path="employees/new" component={EmployeesNew} />
    <Route path="employees/:id" component={EmployeesShow} />
  </Route>

);
