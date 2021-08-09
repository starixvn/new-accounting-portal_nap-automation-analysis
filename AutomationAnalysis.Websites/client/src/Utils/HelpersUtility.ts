import { round, meanBy, chain } from 'lodash';
import { initialReport, Report } from '../Feature/ISNOdds/Models/ISNOdds';
import { ReportDetail } from '../Feature/ISNOdds/Models/ISNOddsDetail';
import { dataArea } from './ConstantsUtility';

const headGroupByLeagueNames = (data: ReportDetail[]) =>
  chain(data)
    .groupBy((x) => x.leagueName)
    .map((value, key) => ({
      leagueName: key,
      matchName: key,
      beforeHDP: meanBy(value, 'beforeHDP'),
      afterHDP: meanBy(value, 'afterHDP'),
      beforeOU: meanBy(value, 'beforeOU'),
      afterOU: meanBy(value, 'afterOU'),
      diffHDP: meanBy(value, 'diffHDP'),
      diffOU: meanBy(value, 'diffOU'),
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

const findReport = (fromValue: string, toValue: string | null, reports: Report[]): Report | undefined =>
  reports.find((report) => `${report.from}` === fromValue && (report.to === toValue || `${report.to}` === toValue));

const generateFullIntervalReports = (inverval: number, reports: Report[]): Report[] => {
  const fullIntervalArea = getDataArea(inverval);

  const processedReports = fullIntervalArea.map((value) => {
    const [fromValue, toValue] = value;
    const foundReport = findReport(fromValue, toValue, reports);
    const from = generateFromInteval(fromValue, toValue);
    const to = generateToInteval(fromValue, toValue);

    return foundReport ? { ...foundReport, from, to } : { ...initialReport, from, to };
  });

  return processedReports;
};

const isNumber = (value: any) => !Number.isNaN(+(value as string));

const toTwoDigitsFormat = (value: number) => round(value, 2).toFixed(2);

export { processReportDetailsData, generateFullIntervalReports, isNumber, toTwoDigitsFormat, findReport };
