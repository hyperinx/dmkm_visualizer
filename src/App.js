import { Fragment, useEffect, useState, useRef } from "react";
import ComponentSidebar from "./components/ComponentSidebar";
import Header from "./components/Header";
import Toolbar from "./components/Header/Toolbar";
import FlexContainer from "./containers/FlexContainer";

import Workspace from "./components/Workspace";

const App = () => {

  const setGridSizeRef = useRef(); 

  useEffect(() => {
    console.log('app effect');
      //const widthInput = document.getElementById('width');
      //const heightInput = document.getElementById('height');
      //const sizeBtn = document.getElementById('apply');

      // const gridSizeHandler = () => {
      //   setGridSizeRef.current.gridSetSize(widthInput.value, heightInput.value);
      // }
      
      //sizeBtn.addEventListener('click', gridSizeHandler);

    return () => {
      //sizeBtn.removeEventListener('click', gridSizeHandler);
    }

  }, []);

  return (
    <Fragment>
      {/* <input type='text' id='width' />
      <input type='text' id='height' />
      <button id='apply'>Apply</button> */}
      <Header/>
      <Toolbar/>
      <FlexContainer>
      <ComponentSidebar></ComponentSidebar>
      <Workspace gridRef={setGridSizeRef}/>
      </FlexContainer>
      
    </Fragment>

  );
}

export default App;
