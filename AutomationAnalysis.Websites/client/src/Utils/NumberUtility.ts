import { round } from 'lodash';

const toTwoDigitsNumber = (value: number) => {
  return value.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};

const numberUtility = {
  toTimeRangeString: (fromMinute: number, toMinute: number) => {
    const fromMinuteInTwoDigitsFormat = toTwoDigitsNumber(fromMinute);
    const toMinuteInTwoDigitsFormat = toTwoDigitsNumber(toMinute);

    let lastTimeToString = '';
    if (fromMinuteInTwoDigitsFormat === '45') {
      lastTimeToString = 'HT';
    } else if (fromMinuteInTwoDigitsFormat === '90') {
      lastTimeToString = 'FT';
    } else {
      lastTimeToString = `${toMinuteInTwoDigitsFormat}:00`;
    }

    return `${fromMinuteInTwoDigitsFormat}:01 - ${lastTimeToString}`;
  },
};

const toTwoDigitsFormat = (value: number) => round(value, 2).toFixed(2);

export { numberUtility, toTwoDigitsFormat };
