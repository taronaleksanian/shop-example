import ProductsList from "./components/ProductsList";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Content>
        <ProductsList />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
