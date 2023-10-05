import { CotizadrProvaider } from "./context/CotizadorProvaider";
import AppSeguro from "./components/AppSeguro";

function App() {
  return (
    <>
      <CotizadrProvaider>
        <AppSeguro />
      </CotizadrProvaider>
    </>
  );
}

export default App;
