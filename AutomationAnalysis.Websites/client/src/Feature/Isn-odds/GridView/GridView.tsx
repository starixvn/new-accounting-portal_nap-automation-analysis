import { Table } from 'react-bootstrap';

interface Props {
  head: JSX.Element | JSX.Element[];
  body: JSX.Element | JSX.Element[];
}

const GridView = ({ head, body }: Props) => (
  <div className="grid-container">
    <Table className="text-center" size="sm" bordered>
      <thead style={{ backgroundColor: '#3c5ea5', color: 'white' }}>{head}</thead>
      <tbody style={{ fontSize: '1rem' }}>{body}</tbody>
    </Table>
  </div>
);

export default GridView;
