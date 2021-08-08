export interface MovieItem {
  id: number | string;
  title: string;
  image: string;
  showTime: Date | string;
  like: number | string;
  description?: string;
}

export enum MovieListFilter {
  LastHour = 'last_hour',
  Today = 'today',
  ThisWeek = 'this_week',
  ThisMonth = 'this_month',
  ThisYear = 'this_year',
  LastYear = 'last_year',
  LastTwoYears = 'last_two_years',
}
