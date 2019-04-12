import { clocki } from "./db";

export const addTask = async (date: string, task: string) => {
  const res = await clocki.find({ clocki: { date } })
    .update(`clocki.tasks`, (t: string[]) => {
      t.push(task);
      return t;
    })
    .write();
};

export const cleanTasks = async (date: string) => {
  const res = await clocki.find({ clocki: { date } })
    .set("clocki.tasks", [])
    .write();
};

export const removeLastTask = async (date: string) => {
  const res = await clocki.find({ clocki: { date } })
    .update(`clocki.tasks`, (t: string[]) => {
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
