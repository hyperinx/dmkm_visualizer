import React from 'react'

import '../FlexContainer/style.scss';
const FlexContainer = (props) => {
    return React.createElement('div', {className: 'flex-it'}, ...props.children);      
}

export default FlexContainer;