import { useState, useEffect } from 'react';
import Grid from './Grid';

import '../Workspace/style.scss';

const Workspace = (props) => {
    

    return (
      <div className='workspace'>
        <Grid ref={props.gridRef}/>
      </div>
        
    )
}

export default Workspace;