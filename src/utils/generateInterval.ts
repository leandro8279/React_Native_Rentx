import { DayProps, MarkedDateProps } from "@components/Calendar";
import { colors } from "@global/theme";
import { eachDayOfInterval, format } from "date-fns";
import { getPlatformDate } from "./getPlatformDate";

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach(item => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");
    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? colors.main
            : colors.main_light,
        textColor:
          start.dateString === date || end.dateString === date
            ? colors.main_light
            : colors.main,
      },
    };
  });
  return interval;
}
