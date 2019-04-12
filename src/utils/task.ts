import { DayReport } from "./db";

export const addTask = async (date: string, task: string) => {
  const res = await DayReport.find({ date })
    .update("tasks", (t: string[]) => {
      t.push(task);
      return t;
    })
    .write();
};

export const cleanTasks = async (date: string) => {
  const res = await DayReport.find({ date })
    .set("tasks", [])
    .write();
};

export const removeLastTask = async (date: string) => {
  const res = await DayReport.find({ date })
    .update("tasks", (t: string[]) => {
      t.pop();
      return t;
    })
    .write();
};

module.exports = {
  addTask,
  cleanTasks,
  removeLastTask
};
