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
  editItem,
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
  }, [dispatch])

  const handleRemoveItem = (id) => {
    dispatch(removeItem(tableData, id));
  }

  const handleAddItem = (item) => {
    dispatch(addItem(tableData, item));
  }

  const handleEditItem = (item) => {
    dispatch(editItem(tableData, item));
  }

  return (
      <Container fluid className="App">
          <Row>
            <Col>
                <h3>Тестовое задание Frontend Михайлов Артем</h3>
                <hr/>
            </Col>
          </Row>
          
          <Row className='row'>
              <Col xs="auto" xl={4}>
                <div className='wrapper' >
                   {valuesData.map((item, i) => <Display key={i} name={item.name} value={item.value} />)}
                </div>              
              </Col>
              <Col xs="auto" xl={8}>
                <DataTable removeItem={handleRemoveItem} addItem={handleAddItem} editItem={handleEditItem} data={tableData} fields ={fieldsData}/>
              </Col>
              <Col >
                <Chart data={tableData} values={valuesData}/>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
