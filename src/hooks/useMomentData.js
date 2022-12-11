import { useState } from "react";
import moment from "moment";
import "moment/locale/uk";

export const useMomentData = () => {
  moment.updateLocale("uk", {
    week: { dow: 1 },
  });
  const [today, setToday] = useState(moment());

  const startDay = today.clone().startOf("month").startOf("week");
  const endDay = today.clone().endOf("month").endOf("week");
  const totalDays = endDay.diff(startDay, "days");

  const day = startDay.clone().subtract(1, "days");
  const daysArr = [];

  while (daysArr.length <= totalDays) {
    daysArr.push(day.add(1, "day").clone());
  }

  const startDateQuery = startDay.clone().format("X");
  const endDateQuery = endDay.clone().format("X");

  return {
    today,
    setToday,
    startDay,
    endDay,
    daysArr,
    totalDays,
    startDateQuery,
    endDateQuery,
  };
};
