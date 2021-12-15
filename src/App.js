import "./App.scss";
import Head from "./Components/head/Head";
import Head2 from "./Components/head2/Head2";
import ShipNPay from "./Components/shipNpay/ShipNPay";
import Payment from "./Components/paymentMethod/Payment";
import Cart from "./Components/yourCart/Cart";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Head />
      <Head2 />
      <div className="MainDisplay">
        <ShipNPay />
        <Payment />
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
