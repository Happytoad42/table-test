import { createSlice } from '@reduxjs/toolkit';

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState: {
    list: [],
    values: [],
  },
  reducers: {
    setItems: (state, action) => {
        state.list = action.payload;
    },
    setValues: (state, action) => {
        state.values = action.payload;
    },
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeItem: (state, action) => {
      state.list.filter(item => item.id !== action.payload)
    },
  },
});

export const { addItem, removeItem, setItems, setValues } = tableDataSlice.actions;

export const setStateData = data => async dispatch => {
    await dispatch(setItems(data));
    const values = data.reduce((valuesArr, item) => {
        for ( const [key, value] of Object.entries(item)) {
            debugger;
            if (key.includes('val')) {
                let targetItem = valuesArr.find(i => i.name === key);
                if (!targetItem) {
                    valuesArr.push({ name: key, value: +value });
                } else if (targetItem) {
                    
                    targetItem = Object.assign(targetItem, { value: targetItem.value + +value })   

                }
            }
        }
        return valuesArr
    }, []);
    dispatch(setValues(values))
};

export const selectTableData = state => state.tableData.list;
export const selectTableValues = state => state.tableData.values;

export default tableDataSlice.reducer;
