import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";

export const Router = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/search" />} />
        <Route path="/search" exact element={<Results />} />
      </Routes>
    </div>
  );
};
