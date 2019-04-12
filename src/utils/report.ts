import { clocki } from "./db";
import { getDaysOfWeek } from "./date";

export const getDayReport = async (
  date: string,
  verbose: boolean = false
): Promise<string> => {
  const res = await clocki.find({ clocki: { date } }).value();
  let report = `[${date}]:\n`;
  if (res && res.clocki && res.clocki.tasks && res.clocki.tasks.length > 0) {
    if (verbose) {
      report = report.concat(
        `start: ${res.clocki.clock.in}\nend: ${res.clocki.clock.out}\n`
      );
    }
    res.clocki.tasks.forEach((t: string) => {
      report = report.concat(`\t-${t}\n`);
    });
  } else {
    report = report.concat("\tNo information available");
  }
  return report;
};

export const getWeekReport = async (
  date: string,
  verbose: boolean = false
): Promise<string> => {
  const days = getDaysOfWeek(date);
  days.forEach(async (d: string) => {
    let report = await getDayReport(d, verbose);
    console.log(report);
  });
  return "";
};

module.exports = { getDayReport, getWeekReport };
