import { WebsiteData } from "~/types";
import { Router, Route } from "@solidjs/router";
import { createContext } from "solid-js";
import Root from "./components/template"
import pages from "./pages"

export const AppContext = createContext<WebsiteData>()

export default function App() {

  return (

        <Router 
          base={import.meta.env.SERVER_BASE_URL}
          root={Root}
        >
          { pages.map(p=><Route path={p.path} component={p.component} />) }
        </Router>

  );
}