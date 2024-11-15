import React, { useState } from 'react';
import { makeBooking } from '../api/bookingApi';
import { TextField, Button, MenuItem } from '@mui/material';

const BookingForm = ({ products }) => {
  const [booking, setBooking] = useState({
    productId: '',
    startDate: '',
    endDate: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await makeBooking({
      product: { productId: booking.productId },
      startDate: booking.startDate,
      endDate: booking.endDate,
      quantity: booking.quantity,
    });
    alert('Booking created successfully!');
    setBooking({ productId: '', startDate: '', endDate: '', quantity: '' });
  };

  return (
    <form className="p-4 bg-gray-100 rounded" onSubmit={handleSubmit}>
      <TextField
        select
        label="Product"
        name="productId"
        value={booking.productId}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        {products.map((product) => (
          <MenuItem key={product.productId} value={product.productId}>
            {product.productName}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={booking.startDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="End Date"
        name="endDate"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={booking.endDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Quantity"
        name="quantity"
        type="number"
        value={booking.quantity}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit" className="mt-4">
        Create Booking
      </Button>
    </form>
  );
};

export default BookingForm;
