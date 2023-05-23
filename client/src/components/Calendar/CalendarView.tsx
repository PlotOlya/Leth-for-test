import React, { memo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView(): JSX.Element {
  const [valueCalc, setCalc] = useState(new Date());
  const handelChang = (e: any): void => {
    setCalc(e);
  };

  return (
    <div>
      <Calendar onChange={handelChang} value={valueCalc} />
    </div>
  );
}

export default memo(CalendarView);
