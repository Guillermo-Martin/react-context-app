import React, { createContext } from "react";
import useToggleState from "./../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false)
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}




// ===== CONTEXT AS A CLASS-BASED COMPONENT =====
// import React, { Component, createContext } from "react";

// export const ThemeContext = createContext();

// export class ThemeProvider extends Component {
//   state = {
//     isDarkMode: false
//   }

//   toggleTheme = () => {
//     this.setState({ isDarkMode: !this.state.isDarkMode });
//   }

//   render() {
//     return (
//       <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }
