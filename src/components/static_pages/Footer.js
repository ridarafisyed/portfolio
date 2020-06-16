import React from 'react';

import './StaticPage.css'
import './General.css'


export const Footer = () => (  
    <footer className=" text-right " style={{marginBottom:'0', marginRight:'20px'}}>
        <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
            <span class="glyphicon glyphicon-chevron-up"></span>
        </a><br/><br/>
        <p>© 2020 <a href="https://www.linkedin.com/in/ridarafisyed/"> Rida Rafi Syed</a> All Rights are well.</p> 
    </footer>
)