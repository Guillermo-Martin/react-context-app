import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  state = {
    language: "spanish"
  }

  changeLanguage = event => {
    this.setState({ language: event.target.value });
  }

  render() {
    return (
      <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}