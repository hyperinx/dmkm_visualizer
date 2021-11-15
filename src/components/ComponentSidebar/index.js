import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import '../ComponentSidebar/style.scss';

const ComponentSidebar = (props) => {
  useEffect(() => {
    const acc = document.getElementsByClassName("accordion");

    [...acc].forEach(el => {
      el.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }

      })

    })
    return () => {

    }
  }, []);



  return (
    <div className='component-sidebar'>
      <button class="accordion">Section 1</button>
      <div class="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <button class="accordion">Section 1</button>
      <div class="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <button class="accordion">Section 1</button>
      <div class="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <button class="accordion">Section 1</button>
      <div class="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>


  )
}

export default ComponentSidebar;