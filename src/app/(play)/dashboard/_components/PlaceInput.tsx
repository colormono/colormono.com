// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";

const PlaceInput = ({ addClock }) => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [dropdownActive, setDropdownActive] = useState(false);

  const dropdownHeight = `${results.length * 50}px`;

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
  };

  useEffect(() => {
    setDropdownActive(searchValue.length !== 0);
  }, [searchValue]);

  useEffect(() => {
    async function fetchData() {
      // to-do: use /api/cities
      const get = await fetch(
        `https://rough-night-99a5.alkmt.workers.dev/cities?fields%5B%5D=geonameid&fields%5B%5D=asciiname&fields%5B%5D=timezone&filterByFormula=SEARCH(%22${searchValue.toLowerCase()}%22%2C+LOWER(asciiname))&maxRecords=3&sort%5B0%5D%5Bfield%5D=population&sort%5B0%5D%5Bdirection%5D=desc`,
      );
      const res = await get.json();
      console.log(res.records);
      setResults(res.records);
    }
    if (searchValue.length > 0) {
      fetchData();
      // console.log(time);
      // const time = fetchData();
      // setResults(
      //   timezones.map((timezone) => {
      //     return timezone;
      //   })
      // );
      // console.log(timezones);
    } else {
      setResults([]);
    }
  }, [searchValue]);

  const addClockHandler = (value) => {
    setSearchValue("");
    addClock(value);
  };

  const clickHandler = (e) => {
    addClockHandler(
      results.filter(
        (city) => city.fields.geonameid === parseInt(e.target.value, 10),
      )[0],
    );
  };

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="space-x-2 text-sm text-muted-foreground">
        <button onClick={() => setOpen((open) => !open)}>Add City</button>

        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Input
          onChange={handleChange}
          placeholder="Add city..."
          value={searchValue}
          type="text"
        />

        <div dropdownHeight={dropdownHeight} dropdownActive={dropdownActive}>
          <ul>
            {results &&
              results.map((city) => (
                <li key={city.id}>
                  <button value={city.fields.geonameid} onClick={clickHandler}>
                    {city.fields.asciiname}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default PlaceInput;
