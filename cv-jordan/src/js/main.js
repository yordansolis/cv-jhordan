import {darkTime} from './dark_time.js'
import {hamburger} from './btn_hamburger.js'
const d = document;



d.addEventListener('DOMContentLoaded', (e)=>{
    
   // hamburger('.panel-btn', '.panel', '.menu a');
    hamburger('.panel-btn', '.panel', '.menu a');

});

/***Nota: toca sacarla porque no se puede trabajar desde un evento del DOM al otro */

darkTime('.dark-time-btn','dark-mode');