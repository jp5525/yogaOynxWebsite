import { WebsiteData } from "~/types";
import  PublicGoogleSheetsParser from 'public-google-sheets-parser'
import { Router, Route } from "@solidjs/router";
import { createContext,createResource, Suspense } from "solid-js";
import Root from "./components/template"
import pages from "./pages"

const parser = new PublicGoogleSheetsParser("1LzEJ5Bgcdu7QOVlauooDXtBUEDWPzOcf-7Br5XPiYnc")

export const AppContext = createContext<WebsiteData>()

export default function App() {

  const [data] =  createResource(async ()=>{
    const teachers = new PublicGoogleSheetsParser("1LzEJ5Bgcdu7QOVlauooDXtBUEDWPzOcf-7Br5XPiYnc",{sheetName:"Teachers"}) 
    const pricing = new PublicGoogleSheetsParser("1LzEJ5Bgcdu7QOVlauooDXtBUEDWPzOcf-7Br5XPiYnc",{sheetName:"Pricing"}) 
    return{
        teachers: await teachers.parse(),
        pricing: await pricing.parse()
      }
    }); 

  return (
    <Suspense>
      <AppContext.Provider value={ data() }>
        <Router 
          base={import.meta.env.SERVER_BASE_URL}
          root={Root}
        >
          { pages.map(p=><Route path={p.path} component={p.component} />) }
        </Router>
      </AppContext.Provider>
      </Suspense>
  );
}