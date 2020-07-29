import { createSlice } from '@reduxjs/toolkit';

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState: {
    list: [],
  },
  reducers: {
    setItems: (state, action) => {
        state.list = action.payload;
    },
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeItem: (state, action) => {
      state.list.filter(item => item.id !== action.payload)
    },
  },
});

export const { addItem, removeItem, setItems } = tableDataSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectTableData = state => state.tableData.list;

export default tableDataSlice.reducer;
