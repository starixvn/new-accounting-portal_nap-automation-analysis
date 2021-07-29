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

    return `${fromMinuteInTwoDigitsFormat}:01 - ${toMinuteInTwoDigitsFormat}:00`;
  },
};

export default numberUtility;
