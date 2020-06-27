import React,{useState, useEffect} from "react";

import { Cards, CountryPicker, Charts } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";

const virusImg = "https://i.ibb.co/7QpKsCX/image.png";

export default function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetch = async () => {
      setData(await fetchData(country));
    };
    fetch();
  });

  return (
    <div className={styles.container}>
      <img className={styles.image} alt="Covid ilustration" src={virusImg} />
      <Cards data={data} />
      <CountryPicker countryChange={setCountry} />
      <Charts data={data} country={country} />
    </div>
  );
}
