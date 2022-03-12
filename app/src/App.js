import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Questions from './questions';
import FixedForkMeOnGithub from './components/generic/FixedForkMeOnGithub';

import sortBy from 'lodash/sortBy';
import dropWhile from 'lodash/dropWhile';
import takeWhile from 'lodash/takeWhile';

const takeQuestions = (SortedQuestions, { from = 0, to = Infinity } = {}) => {
  let Questions = SortedQuestions

  Questions = dropWhile(Questions, Question => Question.number <= from)
  Questions = takeWhile(Questions, Question => Question.number <= to)

  return Questions;
}

const renderQuestions = ({ Questions }) => Questions.map(Question => <Question key={Question.displayName} />);

const SortedQuestions = sortBy(Questions, 'number');
const RubyCoreQuestions = takeQuestions(SortedQuestions, { from: 0, to: 22 });
const RailsQuestions = takeQuestions(SortedQuestions, { from: 22, to: 37 });
const RubyToolsQuestions = takeQuestions(SortedQuestions, { from: 37, to: 46 });
const RSpecQuestions = takeQuestions(SortedQuestions, { from: 46, to: 53 });
const CucumberQuestions = takeQuestions(SortedQuestions, { from: 53, to: 54 });
const DatabaseQuestions = takeQuestions(SortedQuestions, { from: 54, to: 62 });
const JavaScriptQuestions = takeQuestions(SortedQuestions, { from: 62, to: 69 });
const MultithreadingQuestions = takeQuestions(SortedQuestions, { from: 69, to: 74 });
const WebQuestions = takeQuestions(SortedQuestions, { from: 74, to: 86 });
const SecurityQuestions = takeQuestions(SortedQuestions, { from: 86, to: Infinity });

const App = () => (
  <>
    <Container>
      <Row className="mx-0">
        <Col xs={6}>
          <h1>Ruby Core</h1>

          {renderQuestions({ Questions: RubyCoreQuestions })}

          <h1>Rails</h1>

          {renderQuestions({ Questions: RailsQuestions })}

          <h1>Ruby Tools</h1>

          {renderQuestions({ Questions: RubyToolsQuestions })}

          <h1>RSpec (Unit Tests)</h1>

          {renderQuestions({ Questions: RSpecQuestions })}

          <h1>Cucumber/Capybara (Automated Tests)</h1>

          {renderQuestions({ Questions: CucumberQuestions })}

          <h1>Databases</h1>

          {renderQuestions({ Questions: DatabaseQuestions })}

          <h1>JavaScript</h1>

          {renderQuestions({ Questions: JavaScriptQuestions })}

          <h1>Multithreading</h1>

          {renderQuestions({ Questions: MultithreadingQuestions })}

          <h1>Web</h1>

          {renderQuestions({ Questions: WebQuestions })}

          <h1>Security</h1>

          {renderQuestions({ Questions: SecurityQuestions })}
        </Col>
      </Row>
    </Container>

    <FixedForkMeOnGithub />
  </>
);

export default App;
