import { Router, Route } from "@solidjs/router";
import Root from "./components/template"
import pages from "./pages"
import { Component } from "solid-js";

type Page = {
  path: string,
  component: Component
}

export default function App() {

  return (
        <Router 
          base={import.meta.env.SERVER_BASE_URL}
          root={Root}
        >
          { pages.map((p: Page)=><Route path={p.path} component={p.component} />) }
        </Router>
  );
}