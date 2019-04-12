const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({
  dayReports: []
}).write();

export const DayReport = db.get("dayReports");

module.exports = {
  db,
  DayReport
};
