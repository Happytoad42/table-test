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
  },
});

export const { addItem, setItems, setValues } = tableDataSlice.actions;

export const removeItem = (data, id) => dispatch => {
  const newData = data.filter(item => item.id !== id);
  dispatch(setStateData(newData));
}

export const setStateData = data => async dispatch => {
    await dispatch(setItems(data.map(item => {
      if (!item.id) {
         return Object.assign(item, { id: Math.random() });
      }
      return item;
    })));
    const values = data.reduce((valuesArr, item) => {
        for ( const [key, value] of Object.entries(item)) {
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
