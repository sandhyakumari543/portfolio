// const styleSwitcherToggle =document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener('click',()=>{
//     document.querySelector('.style-switcher').classList.toggle("open");
// })

// window.addEventListener("scroll",()=>{
//     if(document.querySelector(".style-switcher").classList.contains("open"))
// {
// document.querySelector(".style-switcher").classList.remove("open");
// }

// })

// const alternateStyle=document.querySelectorAll(".alternate-style");
// function setActiveStyle(color)
// {
//     alternateStyle.forEach((style) =>{
//         if(color === style.getAttribute('title'))
//         {
// style.removeAttribute("disabled")
//         }
//         else {
//             style.removeAttribute("disabled" ,"true"); 
//         }
//     })
// }

import React from 'react';

const StyleSwitcher = ({color,setColor}) => {
  return (
    <>
      <div onClick={setColor} className="color-item" style={{'--skin-color' : color}}></div>
    </>
  );
}

export default StyleSwitcher;
