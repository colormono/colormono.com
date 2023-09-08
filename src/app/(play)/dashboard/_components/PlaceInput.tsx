import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";

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

  return (
    <>
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
    </>
  );
};

export default PlaceInput;
