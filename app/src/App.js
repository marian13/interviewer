import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Questions from './questions';

import sortBy from 'lodash/sortBy';
import slice from 'lodash/slice';

const SortedQuestions = sortBy(Questions, 'number');

const RubyCoreQuestions = slice(SortedQuestions, 0, 22);
const RailsQuestions = slice(SortedQuestions, 22);

const renderQuestions = ({ Questions }) => Questions.map(Question => <Question key={Question.displayName} />);

const App = () => (
  <Container>
    <Row className="mx-0">
      <Col xs={6}>
        <h1>Ruby Core</h1>

        {renderQuestions({ Questions: RubyCoreQuestions })}

        <h1>Rails</h1>

        {renderQuestions({ Questions: RailsQuestions })}
      </Col>
    </Row>
  </Container>
);

export default App;
