import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import DataTable from './components/DataTable';
import Chart from './components/Chart';
import Display from './components/Display';

import { useSelector, useDispatch } from 'react-redux';
import {
  setStateData,
  selectTableData,
  selectTableValues,
  selectTableFields,
  addItem,
  removeItem,
} from './redux/slices/tableDataSlice';

import { getApiData } from './API/AppAPI'

import './App.css';

function App() {
  const dispatch = useDispatch();  
  const tableData = useSelector(selectTableData);
  const valuesData = useSelector(selectTableValues);
  const fieldsData = useSelector(selectTableFields);

  useEffect(() => {
    dispatch(setStateData(getApiData()));
  }, [])

  const handleRemoveItem = (id) => {
    dispatch(removeItem(tableData, id));
  }

  const handleAddItem = (item) => {
    debugger;
    dispatch(addItem(tableData, item));
  }

  return (
      <Container fluid className="App">
          <Row>
              <Col className='wrapper' sm={6}>
                {valuesData.map((item, i) => <Display key={i} name={item.name} value={item.value} />)}
              </Col>
              <Col className='wrapper' sm={6}>
                <DataTable removeItem={handleRemoveItem} addItem={handleAddItem}  data={tableData} fields ={fieldsData}/>
              </Col>
              <Col className='wrapper' >
                <Chart/>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
