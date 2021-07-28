// import { useState } from 'react';
import { useSelector } from 'react-redux';
import Filter from './Filter/Filter';
import { ApplicationState } from '../../configureStore';
import GridViewMain from './GridView/GridViewMain/GridViewMain';
import GridViewDrilldown from './GridView/GridViewDrilldown/GridViewDrilldown';
import './ReportPage.css';

function ReportPage() {
  const reportState = useSelector((state: ApplicationState) => state.report);
  const { reports, reportOption, reportDetails } = reportState;

  const drillDown = (from: string, to: string) => {
    console.log(from, to);
  };

  return (
    <div className="report-container">
      <Filter />
      {!!reports?.length && <GridViewMain mode={reportOption} reports={reports} drillDown={drillDown} />}
      {!!reportDetails?.length && <GridViewDrilldown mode={reportOption} reportDetails={reportDetails} />}
    </div>
  );
}

export default ReportPage;
