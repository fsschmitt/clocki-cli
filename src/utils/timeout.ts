import { clocki } from "./db";

const updateClock = async (date: string, time: string, type: string) => {
  const res = await clocki.find({ clocki: { date } })
    .set(`clocki.clock.${type}`, time)
    .write();
};

export const createclocki = async (date: string, time: string) => {
  const clocki = {
    date,
    clock: {
      in: time,
      out: ""
    },
    tasks: []
  };
  await clocki.push({ clocki }).write();
};

export const updateIn = async (date: string, time: string) => {
  await updateClock(date, time, "in");
};

export const updateOut = async (date: string, time: string) => {
  await updateClock(date, time, "out");
};

module.exports = {
  createclocki,
  updateIn,
  updateOut
};
