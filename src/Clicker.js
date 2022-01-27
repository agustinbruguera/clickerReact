import { Button, Container, Col, Row, ToastContainer, Toast } from 'react-bootstrap';
import React, { useState } from 'react';
import { useButton } from './useButton';

export const Clicker = () => {


  const { counter, increment, increment1 } = useButton(0);


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
            <Button onClick={increment1} variant="primary" size="md"> +1  </Button>

            {(counter >= 10) && (<Button onClick={() => increment(5)} variant="secondary" size="md"> +5 </Button>)}

            {(counter >= 25) && (<Button onClick={() => increment(10)} variant="success" size="md"> +10 </Button>)}

            {(counter >= 100) && (<Button onClick={() => increment(25)} variant="warning" size="md"> +25  </Button>)}

            {(counter >= 250) && (<Button onClick={() => increment(50)} variant="danger" size="md"> +50 </Button>)}

            {(counter >= 500) && (<Button onClick={() => increment(100)} variant="info" size="md"> +100 </Button>)}

            {(counter >= 1000) && (<Button onClick={() => increment(200)} variant="dark" size="md"> +200 </Button>)}
          </div>

        </Row>
      </Container>

      {counter >= 5000 &&
        (<ToastContainer position="top-end">
          <Toast bg="success">
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>Felcidades Pai</Toast.Body>
          </Toast>
        </ToastContainer>)
      }


    </>
  );
};
