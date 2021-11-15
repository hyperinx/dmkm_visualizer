import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import d3 from 'd3';
import createPanZoom from 'panzoom';

import { PANZOOM_CONFIG } from '../../../variables/config';

const Grid = (props, ref) => {

  const [gridSize, setGridSize] = useState({gridWidth: '2000px', gridHeight: '1000px'});

  useEffect(() => {
    const panzoomId = createPanZoom(document.getElementById('board'), PANZOOM_CONFIG);
    return () => {
      console.log('dispose panzoom!');
      panzoomId.dispose();
    };
  }, [gridSize]);

  useImperativeHandle(ref, () => ({
    gridSetSize(width, height){
      console.log(width + ', '+ height);
      setGridSize({gridWidth: width, gridHeight: height});
    }
  }), [])

    
    return (
        <svg id="board" width={gridSize.gridWidth} height={gridSize.gridHeight} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="url(#smallGrid)"/>
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" strokeWidth="1"/>
            </pattern>
          </defs>
      
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    )
}

export default forwardRef(Grid);