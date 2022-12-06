import { useState } from "react";

export const useTranslateMonth = (month) => {
  let current = {
    name: "",
    idx: 0,
  };

  switch (month) {
    case 0:
      return (current = { name: "Січень", idx: 0 });
      break;
    case 1:
      return (current = { name: "Лютий", idx: 1 });
      break;
    case 2:
      return (current = { name: "Березень", idx: 2 });
      break;
    case 3:
      return (current = { name: "Квітень", idx: 3 });
      break;
    case 4:
      return (current = { name: "Травень", idx: 4 });
      break;
    case 5:
      return (current = { name: "Червень", idx: 5 });
      break;
    case 6:
      return (current = { name: "Липень", idx: 6 });
      break;
    case 7:
      return (current = { name: "Серпень", idx: 7 });
      break;
    case 8:
      return (current = { name: "Вересень", idx: 8 });
      break;
    case 9:
      return (current = { name: "Жовтень", idx: 9 });
      break;
    case 10:
      return (current = { name: "Листопад", idx: 10 });
      break;
    case 11:
      return (current = { name: "Грудень", idx: 11 });
      break;
    default:
      return current;
  }
};
