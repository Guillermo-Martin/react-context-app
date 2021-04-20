import Navbar from "./containers/Navbar";
import Form from "./containers/Form";
import PageContent from "./containers/PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          
          {/* Navbar and Form will be part of "props.children" */}
          <Navbar />
          <Form />
        
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
