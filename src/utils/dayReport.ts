import {DayReport} from './db'

const updateClock = async (date: string, time: string, type: string) => {
  const res = await DayReport.find({date})
    .set(`clock.${type}`, time)
    .write()
}

export const createDayReport = async (date: string, time: string) => {
  const data = {
    date,
    clock: {
      in: time,
      out: ''
    },
    tasks: []
  }
  await DayReport.push({...data}).write()
}

export const updateIn = async (date: string, time: string) => {
  await updateClock(date, time, 'in')
}

export const updateOut = async (date: string, time: string) => {
  await updateClock(date, time, 'out')
}

module.exports = {
  createDayReport,
  updateIn,
  updateOut
}
