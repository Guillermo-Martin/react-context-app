import React, { useContext } from "react";
import { ThemeContext } from "./../../contexts/ThemeContext";

function PageContent(props) {
  // grab the data from the context
  const { isDarkMode } = useContext(ThemeContext);

  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    height: "100vh",
    width: "100vw"
  }

  return (
    <div style={styles}>
      {props.children}
    </div>
  );
}

export default PageContent;




// ===== CLASS BASED COMPONENT =====
// import React, { Component } from "react";
// import { ThemeContext } from "./../../contexts/ThemeContext";

// class PageContent extends Component {
//   // set the context for this component
//   static contextType = ThemeContext;

//   render() {
//     // grab the data from the context
//     const { isDarkMode } = this.context;

//     const styles = {
//       backgroundColor: isDarkMode ? "black" : "white",
//       height: "100vh",
//       width: "100vw"
//     }

//     return (
//       <div style={styles}>
//         {this.props.children}
//       </div>
//     );
//   }
// }

// export default PageContent;