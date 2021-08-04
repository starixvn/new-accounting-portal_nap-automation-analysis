import _ from 'lodash';
import { initialReport, Report } from '../Feature/ISNOdds/Models/ISNOdds';
import { ReportDetail } from '../Feature/ISNOdds/Models/ISNOddsDetail';
import { dataArea } from './ConstantsUtility';

const headGroupByLeagueNames = (data: ReportDetail[]) =>
  _.chain(data)
    .groupBy((x) => x.leagueName)
    .map((value, key) => ({
      leagueName: key,
      matchName: key,
      beforeHDP: _.round(_.meanBy(value, 'beforeHDP'), 2),
      afterHDP: _.round(_.meanBy(value, 'afterHDP'), 2),
      beforeOU: _.round(_.meanBy(value, 'beforeOU'), 2),
      afterOU: _.round(_.meanBy(value, 'afterOU'), 2),
      diffHDP: _.round(_.meanBy(value, 'diffHDP'), 2),
      diffOU: _.round(_.meanBy(value, 'diffOU'), 2),
    }))
    .value();

const processReportDetailsData = (data: ReportDetail[]) => {
  const result: ReportDetail[] = [];
  const heads = headGroupByLeagueNames(data);
  heads.forEach((head, index) => {
    const indexHead = index + 1;
    result.push({ ...head, index: indexHead });
    const filtered = data.filter((value) => value.leagueName === head.leagueName);
    result.push(...filtered);
  });
  return result;
};

const generateFromInteval = (from: string, to: string | null) =>
  from === '0' || (from === '45' && to !== null) ? from : `${from}:01`;

const generateToInteval = (from: string, to: string | null) => {
  const haftTimes = ['45', '40'];
  const fullTimes = ['90', '85'];

  if (haftTimes.includes(from) && to === null) return 'HT';
  if (fullTimes.includes(from) && to === null) return 'FT';
  return to;
};

const getDataArea = (interval: number) => {
  if (interval === 15) return dataArea.FIFTEEN_INTERVAL;
  if (interval === 10) return dataArea.TEN_INTERVAL;
  return dataArea.FIVE_INTERVAl;
};

const generateFullIntervalReports = (inverval: number, reports: Report[]): Report[] => {
  const fullIntervalArea = getDataArea(inverval);

  const processedReports = fullIntervalArea.map((value) => {
    const [fromValue, toValue] = value;
    const foundReport = reports.find(
      (report) => `${report.from}` === fromValue && (report.to === toValue || `${report.to}` === toValue),
    );
    const from = generateFromInteval(fromValue, toValue);
    const to = generateToInteval(fromValue, toValue);

    return foundReport ? { ...foundReport, from, to } : { ...initialReport, from, to };
  });

  return processedReports;
};

export { processReportDetailsData, generateFullIntervalReports };
