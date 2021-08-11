const apiKey = {
  REPORT_QUERY: 'get-isn-odds-by-goal-redcard',
  REPORT_DETAILS_QUERY: 'get-isn-odds-by-goal-redcard-detail',
};

const fiveInterval = [
  ['0', '5'],
  ['5', '10'],
  ['10', '15'],
  ['15', '20'],
  ['20', '25'],
  ['25', '30'],
  ['30', '35'],
  ['35', '40'],
  ['40', '45'],
  ['45', null],
  ['45', '50'],
  ['50', '55'],
  ['55', '60'],
  ['60', '65'],
  ['65', '70'],
  ['70', '75'],
  ['75', '80'],
  ['80', '85'],
  ['85', '90'],
  ['90', null],
] as const;
const fiveIntervalHalfTime = [
  ['0', '5'],
  ['5', '10'],
  ['10', '15'],
  ['15', '20'],
  ['20', '25'],
  ['25', '30'],
  ['30', '35'],
  ['35', '40'],
  ['40', '45'],
  ['45', null],
] as const;

const tenInterval = [
  ['0', '10'],
  ['10', '20'],
  ['20', '30'],
  ['30', '40'],
  ['40', null],
  ['45', '55'],
  ['55', '65'],
  ['65', '75'],
  ['75', '85'],
  ['85', null],
] as const;
const tenIntervalHaflTime = [
  ['0', '10'],
  ['10', '20'],
  ['20', '30'],
  ['30', '40'],
  ['40', null],
] as const;

const fifteenInterval = [
  ['0', '15'],
  ['15', '30'],
  ['30', '45'],
  ['45', null],
  ['45', '60'],
  ['60', '75'],
  ['75', '90'],
  ['90', null],
] as const;
const fifteenIntervalHalfTime = [
  ['0', '15'],
  ['15', '30'],
  ['30', '45'],
  ['45', null],
] as const;
const dataArea = {
  FIVE_INTERVAl: fiveInterval,
  TEN_INTERVAL: tenInterval,
  FIFTEEN_INTERVAL: fifteenInterval,
  FIVE_INTERVAl_HALFTIME: fiveIntervalHalfTime,
  TEN_INTERVAL_HALFTIME: tenIntervalHaflTime,
  FIFTEEN_INTERVAL_HALFTIME: fifteenIntervalHalfTime,
};

export { apiKey, dataArea };
