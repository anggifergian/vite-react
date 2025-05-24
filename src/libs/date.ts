import { format, isValid, parse } from 'date-fns';

export const formatDate = (
  input: string | Date,
  displayFormat: string = "MMMM dd, yyyy",
  parseFormat: string = "dd-MM-yyyy"
) => {
  let date: Date;

  if (typeof input === "string") {
    date = parse(input, parseFormat, new Date());
  } else {
    date = input;
  }

  return isValid(date) ? format(date, displayFormat) : "Invalid date";
};

export const parseDate = (date: string, parseFormat: string = "dd-MM-yyyy") =>
  parse(date, parseFormat, new Date());