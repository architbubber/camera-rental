import React, { useState } from 'react';
import { updateBooking } from '../api/bookingApi';
import { TextField, Button } from '@mui/material';

const BookingUpdateForm = () => {
  const [bookingId, setBookingId] = useState('');
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
    await updateBooking(bookingId, {
      product: { productId: booking.productId },
      startDate: booking.startDate,
      endDate: booking.endDate,
      quantity: booking.quantity,
    });
    alert('Booking updated successfully!');
    setBookingId('');
    setBooking({ productId: '', startDate: '', endDate: '', quantity: '' });
  };

  return (
    <form className="p-4 bg-gray-100 rounded" onSubmit={handleSubmit}>
      <TextField
        label="Booking ID"
        name="bookingId"
        value={bookingId}
        onChange={(e) => setBookingId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Product ID"
        name="productId"
        value={booking.productId}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
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
        Update Booking
      </Button>
    </form>
  );
};

export default BookingUpdateForm;
