import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import HeaderForGoal from '../HeaderGrid/HeaderForGoal/HeaderForGoal';
import HeaderForRedCard from '../HeaderGrid/HeaderForRedCard/HeaderForRedCard';
import { ReportOption } from '../Store/ReportState';
import { ApplicationState } from '../../../configureStore';

const ScoreAndRedCardChooser = (reportSelect: ReportOption) =>
  reportSelect === 'Score' ? (
    <>
      <Table className="text-center" striped size="sm" bordered>
        <HeaderForGoal />
        <tbody />
      </Table>
    </>
  ) : (
    <>
      <Table className="text-center" striped size="sm" bordered>
        <HeaderForRedCard />
        <tbody />
      </Table>
    </>
  );

export default function GridReport() {
  const { reportOption } = useSelector((state: ApplicationState) => state.report);
  return <div>{ScoreAndRedCardChooser(reportOption)}</div>;
}
