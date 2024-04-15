
// import './App.css'

import { Tab, Tabs  } from "@mui/material"
import { useState } from "react"
import Home from "./components/Home";
import Todos from "./components/Todos";

function App() {

  // states
  const [tabValue, setTabValue] = useState("home");

  // functions
  const handleTabChanged = (event, value) => {
    setTabValue(value);
    console.log(tabValue);
  }

  // return 
  return (
    <>
        <Tabs value={tabValue} onChange={handleTabChanged}>
          <Tab label="Home" value="home" />
          <Tab label="Todos" value="todos" />
        </Tabs>
        {tabValue == 'home' && <Home />}
        {tabValue == 'todos' && <Todos />}
    </>
  )
}

export default App


