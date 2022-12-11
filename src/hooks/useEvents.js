import { useHttp } from "./useHttp";

const useEvents = () => {
  const { loading, request, error } = useHttp();

  const url = "https://education-platform-server.onrender.com";

  const getEvents = async (start, end) => {
    const res = await request(`${url}/events?date_gte=${start}&date_lte${end}`);
    return res;
  };

  return { getEvents, loading, error };
};
export const useFilterEvents = (events, item) => {
  const startDay = item.clone().startOf("day").format("X");
  const endDay = item.clone().endOf("day").format("X");

  const eventsDay = events
    .filter((event) => event.date >= startDay && event.date <= endDay)
    .sort(function (a, b) {
      return a.date - b.date;
    });

  return { eventsDay };
};

export default useEvents;
