export class ParsedDate {
  constructor (
      public year: number,
      public month: number,
      public day: number,
      public dayWeek: string,
      public hour: number,
      public formattedDate: string
  ){}
}
