import { Table } from 'react-bootstrap';

interface Props {
  head: JSX.Element | JSX.Element[];
  body: JSX.Element | JSX.Element[];
}

const GridView = ({ head, body }: Props) => (
  <Table className="text-center" striped size="sm" bordered>
    <thead>{head}</thead>
    <tbody>{body}</tbody>
  </Table>
);

export default GridView;
