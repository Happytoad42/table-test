import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import tableDataReducer from './slices/tableDataSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    tableData: tableDataReducer,
  },
});
