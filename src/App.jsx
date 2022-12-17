import React from "react";

import { GlobalStyle } from "./components/UI - Design System/GlobalStyle";
import RoutesWeb from "./routes";

function App(){
  return (
		<>
			<GlobalStyle/>
			<RoutesWeb />
		</>
  );
};

export default App;