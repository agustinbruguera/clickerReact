import { Button, Container, Col, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { useButton } from './useButton';

export const Clicker = () => {


  const {counter, increment, increment1} = useButton(20);


  return (
    <>

      <Container fluid>
        <Row>
          <Col>
            <h1 className='text-center'>Clicker</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className='text-center'> { counter } </h2>
          </Col>
        </Row>
        
        <Row>
          <div className="d-grid gap-1">
            <Button onClick={ increment1 } variant="primary" size="md"> +1  </Button>

            <Button onClick={ () => increment(5) } variant="secondary" size="md"> +5 </Button>

            <Button onClick={ () => increment(10) } variant="success" size="md"> +10 </Button>

            <Button onClick={ () => increment(25) } variant="warning" size="md"> +25  </Button>
 
            <Button onClick={ () => increment(50) } variant="danger" size="md"> +50 </Button>

            <Button onClick={ () => increment(100) } variant="info" size="md"> +100 </Button>

            <Button onClick={ () => increment(200) } variant="dark" size="md"> +200 </Button>
          </div>

        </Row>
      </Container>














    </>
  );
};
