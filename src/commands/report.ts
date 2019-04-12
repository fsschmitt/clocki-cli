import { Command, flags } from "@oclif/command";
import { today } from "../utils/date";
import { getDayReport, getWeekReport } from "../utils/report";
import { clocki } from "../utils/db";

export default class Report extends Command {
  static description = "describe the command here";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-d, --date=VALUE)
    date: flags.string({ char: "d", description: "Specify date of report" }),
    // flag with no value (-w, --week)
    week: flags.boolean({ char: "w", description: "Weekly report" }),
    verbose: flags.boolean({
      char: "v",
      description: "Include all information"
    })
  };

  async run() {
    const { flags } = this.parse(Report);
    const date = flags.date ? flags.date : today();

    if (!flags.week) {
      const exists = await clocki.find({ clocki: { date } }).value();
      if (exists) {
        const report = await getDayReport(date);
        this.log(report);
      } else {
        this.error(
          "In order to get a report of this day, you must first clock in."
        );
      }
      return;
    }

    getWeekReport(date, flags.verbose);
  }
}
