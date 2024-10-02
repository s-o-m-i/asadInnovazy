// gatsby-browser.js
import React from "react";
import MainLayout from "./src/components/MainLayout";

// Ensures the layout is applied to all pages
export const wrapPageElement = ({ element, props }) => {
  return <MainLayout {...props}>{element}</MainLayout>;
};
