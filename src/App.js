import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { PageContainer } from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme/theme';
import { Loading } from "./components/Loading";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <PageContainer>
          <Router>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </PageContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
