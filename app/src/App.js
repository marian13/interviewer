import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Questions from './questions';

const App = () => (
  <Container>
    <Row className="mx-0">
      <Col xs={6}>
        <h1>Ruby</h1>

        <Questions.RemoveEvenIntegersFromArrayInRuby />
        <Questions.ProtectedInRuby />
      </Col>
    </Row>
  </Container>
);

export default App;
