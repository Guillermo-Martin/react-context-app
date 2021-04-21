import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./../../assets/styles/NavbarStyles";
import { ThemeContext } from "./../../contexts/ThemeContext";
import { LanguageContext } from "./../../contexts/LanguageContext";

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
}

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { classes } = props;
  const { search, flag } = content[language];

  return (
    
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">App Title</Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder={`${search}...`} classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>

  );
}

export default withStyles(styles)(Navbar);



// ===== USING CONTEXT IN A CLASS BASED COMPONENT =====
// import React, { Component } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import InputBase from "@material-ui/core/InputBase";
// import SearchIcon from "@material-ui/icons/Search";
// import Switch from "@material-ui/core/Switch";
// import { withStyles } from "@material-ui/core/styles";
// import styles from "./../../assets/styles/NavbarStyles";
// import { ThemeContext } from "./../../contexts/ThemeContext";
// import { withLanguageContext } from "./../../contexts/LanguageContext";

// const content = {
//   english: {
//     search: "Search",
//     flag: "🇬🇧"
//   },
//   french: {
//     search: "Chercher",
//     flag: "🇫🇷"
//   },
//   spanish: {
//     search: "Buscar",
//     flag: "🇪🇸"
//   }
// }

// class Navbar extends Component {
//   // tell the Navbar component to see if it's nested inside of a "ThemeContext" provider
//   static contextType = ThemeContext;

//   render() {
//     // data from the context is located in "this.context"
//     // console.log(this.context);

//     const { isDarkMode, toggleTheme } = this.context;
//     const { classes } = this.props;
//     const { language } = this.props.languageContext;
//     const { search, flag } = content[language];
 
//     return (
      
//           <div className={classes.root}>
//             <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
//               <Toolbar>
//                 <IconButton className={classes.menuButton} color="inherit">
//                   <span>{flag}</span>
//                 </IconButton>
//                 <Typography className={classes.title} variant="h6" color="inherit">App Title</Typography>
//                 <Switch onChange={toggleTheme} />
//                 <div className={classes.grow} />
//                 <div className={classes.search}>
//                   <div className={classes.searchIcon}>
//                     <SearchIcon />
//                   </div>
//                   <InputBase placeholder={`${search}...`} classes={{
//                       root: classes.inputRoot,
//                       input: classes.inputInput
//                     }}
//                   />
//                 </div>
//               </Toolbar>
//             </AppBar>
//           </div>

//     );
//   }
// }

// export default withLanguageContext(withStyles(styles)(Navbar));