import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulario from "../pages/CRUD";
import Home from "../pages/Home";
import Grafico from "../pages/Graphics";
import ListarTransacao from "../components/ListarTransacao";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/novoregistro" element={<Formulario />}></Route>
        <Route path="/transacoes" element={<ListarTransacao />}></Route>
        <Route path="/grafico" element={<Grafico/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}
