export interface Report {
  from: string;
  to: string | null;
  numberOfLeague: number;
  numberOfMatch: number;
  beforeHDP: number | string;
  beforeOU: number | string;
  afterHDP: number | string;
  afterOU: number | string;
  diffHDP: number | string;
  diffOU: number | string;
}

export const initialReport: Report = {
  from: '',
  to: '',
  numberOfLeague: 0,
  numberOfMatch: 0,
  beforeHDP: '-',
  beforeOU: '-',
  afterHDP: '-',
  afterOU: '-',
  diffHDP: '-',
  diffOU: '-',
};
