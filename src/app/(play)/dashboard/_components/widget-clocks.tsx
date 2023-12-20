// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";

import LocationDisplay from "./LocationDisplay";
import PlaceInput from "./PlaceInput";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function lsTest() {
  var test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

export default function WidgetClocks() {
  const [clocks, setClocks] = useState([]);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (lsTest() === true) {
      const hasClocksInStorage =
        localStorage.getItem("clocks") &&
        JSON.parse(localStorage.getItem("clocks")).length > 0;
      const storedClocks = hasClocksInStorage
        ? JSON.parse(localStorage.getItem("clocks"))
        : null;
      if (hasClocksInStorage) {
        setClocks(storedClocks);
      }
    } else {
      console.log("localStorage not available");
    }
  }, []);

  useEffect(() => {
    if (lsTest() === true) {
      localStorage.setItem("clocks", JSON.stringify(clocks));
    } else {
      console.log("localStorage not available");
    }
  }, [clocks]);

  const addClock = (city) => {
    setClocks([city, ...clocks]);
  };

  const removeClock = (id) => {
    setClocks(
      clocks.filter((city) => city.fields.geonameid !== parseInt(id, 10)),
    );
  };

  return (
    <aside>
      <div className="flex justify-between">
        <Text variant="overline">Team Clock</Text>
        <PlaceInput addClock={addClock} />
      </div>

      <div className="mb-16 flex flex-col gap-10">
        {clocks &&
          clocks.map((city, index) => (
            <LocationDisplay
              index={index}
              key={city.id}
              removeClock={removeClock}
              city={city}
            />
          ))}
      </div>

      <Link href="https://timezonewizard.com/" rel="noreferrer" asChild>
        <Button size="lg">Setup a Meeting</Button>
      </Link>
    </aside>
  );
}
