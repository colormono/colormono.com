import { XCircleIcon } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

const LocationDisplay = ({ city, removeClock, index }) => {
  const startTime = new Date(Date.now()).toLocaleTimeString("en-US", {
    timeZone: city.fields.timezone,
  });
  const [time, setTime] = useState(startTime);
  const [view, setView] = useState("digital");

  const timezoneAbbreviation = new Date(Date.now())
    .toLocaleTimeString("en-US", {
      timeZone: city.fields.timezone,
      timeZoneName: "short",
    })
    .split(" ")[2];
  //
  var n = useRef(null);
  var t = useRef(null);

  useEffect(() => {
    // console.log(city.fields.timezone);
  }, [city]);

  useEffect(() => {
    const timeOffset = 1000 - new Date(Date.now()).getMilliseconds();
    n.current = setTimeout(() => {
      t.current = setInterval(() => {
        setTime(
          new Date(Date.now()).toLocaleTimeString("en-US", {
            timeZone: city.fields.timezone,
          }),
        );
      });
    }, timeOffset);

    return function cleanup() {
      n.current = null;
      clearInterval(t.current);
    };
  }, [city.fields.timezone]);

  const [timeDig, timeOfDay] = time.split(" ");
  const [hours, minutes, seconds] = timeDig.split(":");

  const closeHandler = (e) => {
    removeClock(e.currentTarget.name);
  };

  return (
    <div className="group relative @container">
      <div className="flex items-end gap-3">
        <p className="text-2xl @lg:text-4xl">{city.fields.asciiname}</p>
        <span className="flex-1 text-muted-foreground">
          {timezoneAbbreviation}
        </span>
      </div>

      {view === "digital" && (
        <p className="text-4xl">
          {/* {hours} <span>:</span> {minutes} <span>:</span> {seconds} {timeOfDay} */}
          {hours}
          <span>:</span>
          {minutes}
          <span className={`${index > 0 && "hidden"}`}>
            <span>:</span>
            {seconds}
          </span>
          {timeOfDay}
        </p>
      )}

      <button
        name={city.fields.geonameid}
        onClick={closeHandler}
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 transition-opacity hover:text-red-500 hover:!opacity-100 group-hover:opacity-25"
      >
        <XCircleIcon className="h-8 w-8" />
      </button>
    </div>
  );
};

export default LocationDisplay;
