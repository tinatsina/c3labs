"use strict";

const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav = document.querySelector('header');

let scrolled = () => {
  let dec = scrollY/(bodyTag.scrollHeight - innerHeight);
  return Math.floor(dec*100);
}
addEventListener('scroll',()=>{
  myNav.style.setProperty('background',scrolled() > 40 ?
  "var(--color2)": "var(--color1)");
})
