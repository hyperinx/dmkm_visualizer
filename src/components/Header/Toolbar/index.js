import { useState } from "react"
import './style.scss'


const Toolbar = (props) => {
    return (

    <div class='toolbar'>
        <ul class='toolbar__menu'>
            <li class='toolbar__item'>+</li>
            <li class='toolbar__item'>-</li>
            <li class='toolbar__item'>M</li>
            
        </ul>
    </div>

    )
}

export default Toolbar;