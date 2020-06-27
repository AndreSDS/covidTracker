import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

export default function CountryPicker({ countryChange }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setCountries(await fetchCountries());
    };
    fetch();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={e => countryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
