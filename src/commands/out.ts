import { Command, flags } from "@oclif/command";
import { DayReport } from "../utils/db";
import { today, now } from "../utils/date";
import { updateOut } from "../utils/dayReport";

export default class Out extends Command {
  static aliases = ["bye", "goodbye"];
  static description = "Clock out the time you left work";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-d, --date=VALUE)
    date: flags.string({ char: "d", description: "date" }),
    time: flags.string({ char: "t", description: "time" })
  };

  async run() {
    const { flags } = this.parse(Out);
    const date = flags.date ? flags.date : today();
    const time = flags.time ? flags.time : now();

    const exists = await DayReport.find({ date }).value();
    if (exists) {
      this.log(`You've stopped working on ${date} at ${time}...`);
      updateOut(date, time);
    } else {
      this.error("In order to clock out, you must first clock in.");
    }
    return 0;
  }
}
