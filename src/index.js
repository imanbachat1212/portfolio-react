import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const header = document.querySelector("header");
// window.addEventListener ("scroll", function() {
// 	header.classList.toggle ("sticky", window.scrollY > 100);
// });



let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.addEventListener = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.addEventListener = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
}




// function buttonClicked(){
//     console.log("Button clicked");
// }

// window.onload=function(){
// let menu = document.querySelector('#menu-icon');
// let navlist = document.querySelector('.navlist');
// menu.addEventListener ("click", buttonClicked, true)

// window.addEventListener = () => {
	
// 	menu.classList.remove('bx-x');
// 	navlist.classList.remove('open');
// };}
