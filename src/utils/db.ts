const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const appDir = path.resolve(__dirname)
const dbDir = path.join(appDir, '..', '..', 'db.json')
const adapter = new FileSync(dbDir)
export const db = low(adapter)

db.defaults({
  dayReports: []
}).write()

export const DayReport = db.get('dayReports')

module.exports = {
  db,
  DayReport
}
