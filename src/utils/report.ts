import { DayReport } from "./db";
import { getDaysOfWeek } from "./date";

export const getDayReport = async (
  date: string,
  verbose: boolean = false
): Promise<string> => {
  const res = await DayReport.find({ date }).value();
  let report = `[${date}]:\n`;
  if (res && res.tasks && res.tasks.length > 0) {
    if (verbose) {
      report = report.concat(`start: ${res.clock.in}\nend: ${res.clock.out}\n`);
    }
    res.tasks.forEach((t: string) => {
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
