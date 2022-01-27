import { Button, Container, Col, Row } from 'react-bootstrap';
import React, { useState } from 'react';

export const Clicker = () => {

  const [counter, setCounter] = useState(0);


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
            <h2 className='text-center'> {counter} </h2>
          </Col>
        </Row>
        <Row>
          <div className="d-grid gap-1">
            <Button variant="primary" size="md"> +1  </Button>

            <Button variant="secondary" size="md"> +5 </Button>

            <Button variant="success" size="md"> +10 </Button>

            <Button variant="warning" size="md"> +25  </Button>

            <Button variant="danger" size="md"> +50 </Button>

            <Button variant="info" size="md"> +100 </Button>

            <Button variant="dark" size="md"> +200 </Button>
          </div>

        </Row>
      </Container>














    </>
  );
};
