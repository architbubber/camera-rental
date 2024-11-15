import React, { useState } from 'react';
import { fetchAvailability } from '../api/bookingApi';
import { TextField, Button } from '@mui/material';

const AvailabilityChecker = () => {
  const [dates, setDates] = useState({ startDate: '', endDate: '' });
  const [availableProducts, setAvailableProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDates({ ...dates, [name]: value });
  };

  const handleCheckAvailability = async () => {
    const results = await fetchAvailability(dates.startDate, dates.endDate);
    setAvailableProducts(results);
  };

  return (
    <div className="p-4 bg-gray-100 rounded">
      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={dates.startDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="End Date"
        name="endDate"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={dates.endDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckAvailability}
        className="mt-4"
      >
        Check Availability
      </Button>
      {availableProducts.length > 0 && (
        <ul className="mt-4">
          {availableProducts.map((product) => (
            <li key={product.productId}>
              {product.productName} - {product.quantity} available
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AvailabilityChecker;
