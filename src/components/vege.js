// App.js
import "../css/vege.css";
import AdminSidebar from "./AdminSidebar";
import React from 'react';
import VegetableSelector from '../v2/templates/VegetablePricePredictor';

function App() {
  return (
    <div className="vege">
      <AdminSidebar />
      <div className="vegedetails">
        <h1 className="vege-title">Vegetable Price Predictor</h1>
        <div className="copm">
          <VegetableSelector />
        </div>
      </div>
    </div>
  );
}

export default App;

