import {Command, flags} from '@oclif/command'

import {today} from '../utils/date'
import {DayReport} from '../utils/db'
import {addTask, cleanTasks, removeLastTask} from '../utils/task'

export default class Task extends Command {
  static aliases = ['work']
  static description = 'Add a work task'

  static flags = {
    help: flags.help({char: 'h'}),
    date: flags.string({char: 'd', description: 'date'}),
    // flag with no value (-c, --clean)
    clean: flags.boolean({char: 'c'}),
    // flag with no value (-r, --clean-last)
    'remove-last': flags.boolean({char: 'r'})
  }

  static args = [{name: 'task'}]

  async run() {
    const {args, flags} = this.parse(Task)
    const date = flags.date ? flags.date : today()

    if (flags.clean) {
      this.log(`Cleaning all tasks for day: ${date}`)
      cleanTasks(date)
      return 0
    }

    if (flags['remove-last']) {
      this.log(`Removing last task of the day: ${date}`)
      removeLastTask(date)
      return 0
    }

    if (!args.task) {
      this.error('Please specify a task to add.')
      return 0
    }

    const exists = await DayReport.find({date}).value()
    if (exists) {
      this.log(`Adding new task: ${args.task}`)
      addTask(date, args.task)
    } else {
      this.error(`In order to add a task to ${date}, you must first clock in.`)
      return -1
    }
  }
}
