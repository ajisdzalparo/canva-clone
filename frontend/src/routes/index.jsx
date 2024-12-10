import React from "react";
import { Routes, Route } from "react-router";
import { index as Index } from "../pages";
export const RouterLayouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};
