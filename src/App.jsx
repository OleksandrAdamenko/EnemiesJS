import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <main className="pt-16">
            <Main />
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;