import _ from 'lodash';
import { ReportDetail } from '../Feature/ISNOdds/Models/ISNOddsDetail';

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

export default processReportDetailsData;
