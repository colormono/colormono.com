import { Text } from "@/components/ui/text";
import React, { useEffect, useState, useRef } from "react";

const LocationDisplay = ({ city, removeClock }) => {
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
    <div>
      <div className="flex items-end gap-3">
        <p className="text-2xl">{city.fields.asciiname}</p>
        <span className="flex-1 text-muted-foreground">
          {timezoneAbbreviation}
        </span>
        <button name={city.fields.geonameid} onClick={closeHandler}>
          Close
        </button>
      </div>
      {view === "digital" && (
        <p className="text-4xl">
          {/* {hours} <span>:</span> {minutes} <span>:</span> {seconds} {timeOfDay} */}
          {hours}
          <span>:</span>
          {minutes}
          <span>:</span>
          {seconds} {timeOfDay}
        </p>
      )}
    </div>
  );
};

export default LocationDisplay;
