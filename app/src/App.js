import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import Highlight from 'react-highlight.js'

const App = () => {
  return (
    <Container>
      <Row className="mx-0">
        <Col xs={6}>
          <h1>Ruby</h1>

          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>#</th>
                <th>1</th>
              </tr>

              <tr>
                <td>
                  Question
                </td>

                <td>
                  Given: An array of integers, for example:
                  <br />
                  <code>arr = [1, 2, 3, 4, 5]</code>
                  <br />
                  <br />
                  Task: Remove even integers from it.
                  <br />
                  <br />
                  Expected result:
                  <br />
                  <code>[1, 3, 5]</code>
                </td>
              </tr>

              <tr>
                <td>
                  Answer
                </td>

                <td>
                  <Highlight language="language-ruby">
                    {[
                      'arr.select { |x| !x.even? } # or',
                      'arr.select { |x| x.odd? }'
                    ].join('\n')}
                  </Highlight>

                  <a href="https://ruby-doc.org/core-3.0.0/Array.html#method-i-filter" target="_blank">filter</a>
                  {", or "}
                  <a href="https://ruby-doc.org/core-3.0.0/Array.html#method-i-delete_if" target="_blank">delete_if</a>
                  {", or "}
                  <a href="https://ruby-doc.org/core-3.0.0/Array.html#method-i-reject" target="_blank">reject</a>
                  .
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
