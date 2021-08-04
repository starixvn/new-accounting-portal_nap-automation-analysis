export interface Report {
  from: string;
  to: string | null;
  numberOfLeague: number;
  numberOfMatch: number;
  beforeHDP: number;
  beforeOU: number;
  afterHDP: number;
  afterOU: number;
  diffHDP: number;
  diffOU: number;
}

export const initialReport: Report = {
  from: '',
  to: '',
  numberOfLeague: 0,
  numberOfMatch: 0,
  beforeHDP: 0,
  beforeOU: 0,
  afterHDP: 0,
  afterOU: 0,
  diffHDP: 0,
  diffOU: 0,
};
