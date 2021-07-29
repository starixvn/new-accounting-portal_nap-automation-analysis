import { Table } from 'react-bootstrap';

interface Props {
  head: JSX.Element | JSX.Element[];
  body: JSX.Element | JSX.Element[];
}

const GridView = ({ head, body }: Props) => (
  <div className="grid-container">
    <Table className="text-center" striped size="sm" bordered>
      <thead>{head}</thead>
      <tbody>{body}</tbody>
    </Table>
  </div>
);

export default GridView;
