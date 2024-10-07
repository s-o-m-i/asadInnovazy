// gatsby-browser.js
import React from "react";
import MainLayout from "./src/components/MainLayout";
import './src/ui/nprogress.css'
// Ensures the layout is applied to all pages
export const wrapPageElement = ({ element, props }) => {
  return <MainLayout {...props}>{element}</MainLayout>;
};



export const onRouteUpdate = () => {
  // window.scrollTo(0, 0);
  setTimeout(()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
    
  },1000)
  window.requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  });
};
