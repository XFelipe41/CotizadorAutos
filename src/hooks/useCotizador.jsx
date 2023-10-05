import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvaider";

const useCotizador = () => {
  return useContext(CotizadorContext);
};

export default useCotizador;
