import React, { useEffect } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import Table from './components/Table';
import Chart from './components/Chart';
import Display from './components/Display';

import { useSelector, useDispatch } from 'react-redux';
import {
  setItems,
  selectTableData
} from './redux/slices/tableDataSlice';

import { getApiData } from './API/AppAPI'

import './App.css';

function App() {
  const dispatch = useDispatch();
  const tableData = useSelector(selectTableData);

  useEffect(() => {
    dispatch(setItems(getApiData()));
  }, [dispatch])

  return (
      <Container fluid className="App">
          <Row>
              <Col sm={6}>
                <Display/>
              </Col>
              <Col sm={6}>
                <Table data={tableData}/>
              </Col>
              <Col>
                <Chart/>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
