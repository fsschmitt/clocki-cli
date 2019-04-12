import { Command, flags } from "@oclif/command";
import { clocki } from "../utils/db";
import { today, now } from "../utils/date";
import { createclocki, updateIn } from "../utils/clocki";

export default class In extends Command {
  static aliases = ["hi", "hello"];
  static description = "Clock in the time you arrived at work";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-d, --date=VALUE)
    date: flags.string({ char: "d", description: "date" }),
    time: flags.string({ char: "t", description: "time" })
  };

  async run() {
    const { flags } = this.parse(In);
    const date = flags.date ? flags.date : today();
    const time = flags.time ? flags.time : now();

    const exists = await clocki.find({ clocki: { date } }).value();
    if (exists) {
      this.log("Entry already exists, updating...");
      updateIn(date, time);
    } else {
      createclocki(date, time);
    }
    this.log(`You've started working on ${date} at ${time}...`);
  }
}
