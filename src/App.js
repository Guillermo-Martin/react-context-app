import Navbar from "./containers/Navbar";
import Form from "./containers/Form";
import PageContent from "./containers/PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        {/* Navbar and Form will be part of "props.children" */}
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
