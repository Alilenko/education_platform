import { useState } from "react";
import moment from "moment";

export const useMomentData = (data) => {
  moment.updateLocale("en", { week: { dow: 1 } });
  const [today, setToday] = useState(data);

  const startDay = today.clone().startOf("month").startOf("week");
  const endDay = today.clone().endOf("month").endOf("week");
  const totalDays = endDay.diff(startDay, "days");

  const day = startDay.clone().subtract(1, "days");
  const daysArr = [];

  while (daysArr.length <= totalDays) {
    daysArr.push(day.add(1, "day").clone());
  }
  return { today, setToday, startDay, endDay, daysArr, totalDays };
};
