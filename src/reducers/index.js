import { combineReducers } from 'redux';
import EmployeesReducer from './reducer_employees';
import { reducer as formReducer } from 'redux-form';

import normalizeDate from '../utils/normalize_date';

const rootReducer = combineReducers({
  employees: EmployeesReducer,
  form: formReducer.normalize({
    EmployeesDetailForm: {
      birthday: normalizeDate
    }
  })
});

export default rootReducer;
