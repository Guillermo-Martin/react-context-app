import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("spanish");
  const changeLanguage = event => setLanguage(event.target.value);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

// defining our own higher order component
// 1. it expects a "Component" (an entire component), with some props
// 2. it then returns a "LanguageContext.Consumer" which expects a function as its child
// 3. this function takes a value from the "LanguageContext" (the "Context.Provider" from above)
// 4. whatever that value is, we're going to take the component that was passed in (which is now wrapped in the LanguageContext.Consumer tags)
// and return that same component with a new prop in it (in this case, "languageContext")
// 5. then pass in all other props
export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
)



// ===== CONTEXT AS A CLASS-BASED COMPONENT =====
// import React, { Component, createContext } from "react";

// export const LanguageContext = createContext();

// export class LanguageProvider extends Component {
//   state = {
//     language: "spanish"
//   }

//   changeLanguage = event => {
//     this.setState({ language: event.target.value });
//   }

//   render() {
//     return (
//       <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
//         {this.props.children}
//       </LanguageContext.Provider>
//     );
//   }
// }

// // defining our own higher order component
// // 1. it expects a "Component" (an entire component), with some props
// // 2. it then returns a "LanguageContext.Consumer" which expects a function as its child
// // 3. this function takes a value from the "LanguageContext" (the "Context.Provider" from above)
// // 4. whatever that value is, we're going to take the component that was passed in (which is now wrapped in the LanguageContext.Consumer tags)
// // and return that same component with a new prop in it (in this case, "languageContext")
// // 5. then pass in all other props
// export const withLanguageContext = Component => props => (
//   <LanguageContext.Consumer>
//     {value => <Component languageContext={value} {...props} />}
//   </LanguageContext.Consumer>
// )