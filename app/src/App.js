import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Questions from './questions';

const App = () => (
  <Container>
    <Row className="mx-0">
      <Col xs={6}>
        <h1>Ruby</h1>

        {Questions.map(Question => <Question key={Question.name} />)}
      </Col>
    </Row>
  </Container>
);

export default App;
