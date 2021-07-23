import { Breadcrumb } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../configureStore';

const BreadcrumbFilter = () => {
  const { reportOption } = useSelector((state: ApplicationState) => state.report);
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">ISN Odds</Breadcrumb.Item>
      <Breadcrumb.Item active>{reportOption.toString()}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbFilter;
