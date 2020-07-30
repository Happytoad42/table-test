import { createSlice } from '@reduxjs/toolkit';

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState: {
    list: [],
    values: [],
    fields: [],
  },
  reducers: {
    setItems: (state, action) => {
        state.list = action.payload;
    },
    setValues: (state, action) => {
        state.values = action.payload;
    },
    setFields: (state, action) => {
      state.fields = action.payload;
    }
  },
});

export const { setItems, setValues, setFields } = tableDataSlice.actions;

export const removeItem = (data, id) => dispatch => {
  const newData = data.filter(item => item.id !== id);
  dispatch(setStateData(newData));
}

export const addItem = (data, newItem) => dispatch => {
  const newData = [...data, newItem];
  dispatch(setStateData(newData));
}

export const setStateData = data => async dispatch => {
  let fieldsArr = [];
    await dispatch(setItems(data.map(item => {
      let itemFields = Object.keys(item);
      itemFields.map(field => {
        if (field !== 'id' && fieldsArr.indexOf(field) < 0) {
          fieldsArr.push(field);
        }
      })
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
    dispatch(setFields(fieldsArr));
    dispatch(setValues(values));
};

export const selectTableData = state => state.tableData.list;
export const selectTableValues = state => state.tableData.values;
export const selectTableFields = state => state.tableData.fields;

export default tableDataSlice.reducer;
