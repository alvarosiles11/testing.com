import { SPageListProps } from "servisofts-component";
import Services from "../Services";
import habitacion from "./habitacion";
import Lista from "./habitacion/Pages/Lista";
// import Lista from ".//Pages/Lista";

import InicioPage from "./InicioPage";
const Pages: SPageListProps = {
  "/": Lista,
  "/ass": InicioPage,
  ...Services.Pages,
  ...habitacion.Pages
};

export const Reducers = {
  ...Services.Reducers,
  ...habitacion.Reducers
};

export default Pages;
