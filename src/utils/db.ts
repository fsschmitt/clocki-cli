const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({
  clockiEntries: []
}).write();

export const Clocki = db.get("clockiEntries");

module.exports = {
  db,
  clocki
};
