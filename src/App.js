import React, { Component } from "react";

import { Cards, CountryPicker, Charts } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";

const virusImg = "https://i.ibb.co/7QpKsCX/image.png";

export default class App extends Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const fetch = await fetchData();
    this.setState({ data: fetch });
  }

  countryChange = async country => {
    const fetch = await fetchData(country);
    this.setState({ data: fetch, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} alt="Covid ilustration" src={virusImg} />
        <Cards data={data} />
        <CountryPicker countryChange={this.countryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
