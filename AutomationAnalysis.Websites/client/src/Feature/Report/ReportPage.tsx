import './ReportPage.css';
import Filter from './Filter/Filter';
import GridView from './GridView/GridView';
import HeaderForGoal from './GridView/HeaderForGoal';

function ReportPage() {
  return (
    <>
      <Filter />
      <GridView head={<HeaderForGoal />} body={<tr />} />
    </>
  );
}

export default ReportPage;
