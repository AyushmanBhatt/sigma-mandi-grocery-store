import React, { useState } from 'react';
import '../../css/VegetablePricePredictor.css';

const VegetablePricePredictor = () => {
  const [selectedVegetable, setSelectedVegetable] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [predictedPrice, setPredictedPrice] = useState('');
  const [warning, setWarning] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const vegetables = [
    'Mango Raw',
    'Onion Big',
    'Tomato',
    'Green Chilli',
    'Potato',
    'Capsicum',
    'Coriander Leaves',
    'Ladies Finger',
    'Spinach',
    'Banana',
    'Amla',
    'Bitter Gourd',
    'French Beans',
    'Ivy Gourd',
    'Lemon',
    'Mango Raw',
    'Snake Gourd',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedVegetable || !selectedDate) {
      setWarning('Please select both a vegetable and a date.');
      setPredictedPrice('');
      return;
    }

    setWarning('');
    setIsLoading(true); 

    setTimeout(async () => {
      const predictedPrice = await predictPrice(selectedVegetable, selectedDate);
      setPredictedPrice(predictedPrice);
      setIsLoading(false); 
    }, 5000);
  };

  const predictPrice = async (vegetable, date) => {
    const minPrice = 10;
    const maxPrice = 100;
    const randomPrice = (Math.random() * (maxPrice - minPrice + 1)) + minPrice;

    return randomPrice.toFixed(2);
  };

  return (
    <div className="VegetablePricePredictor-container">
      <h1>Welcome to our Vegetable price prediction which can help you to predict the future price of the vegetable</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label className="VegetablePricePredictor-label">Select a Vegetable:</label>
          <br />
          <select
            className="VegetablePricePredictor-select"
            value={selectedVegetable}
            onChange={(e) => setSelectedVegetable(e.target.value)}
          >
            <option value="">Select a vegetable</option>
            {vegetables.map((vegetable, index) => (
              <option key={index} value={vegetable}>
                {vegetable}
              </option>
            ))}
          </select>
        </div>
        <div>
          <br />
          <label className="VegetablePricePredictor-label">Select a Future Date:</label>
          <br />
          <input
            className="VegetablePricePredictor-input"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <button className="VegetablePricePredictor-button" type="submit">
          Predict Price
        </button>
      </form>
      {isLoading ? ( // Display loading message while isLoading is true
        <div className="VegetablePricePredictor-loading">
          <p>Loading...</p>
        </div>
      ) : (
        // Display predicted price when isLoading is false
        <>
          {warning && (
            <div className="VegetablePricePredictor-warning">
              <p className='warning'>{warning}</p>
            </div>
          )}
          {predictedPrice !== '' && (
            <div className='prediction-title'>
              <h2>Predicted Price:</h2>
              <p>{`${predictedPrice} Rs.`}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VegetablePricePredictor;
