import { configureStore } from '@reduxjs/toolkit';
import tableDataReducer from './slices/tableDataSlice';

// initial store config
export default configureStore({
  reducer: {
    tableData: tableDataReducer,
  },
});
