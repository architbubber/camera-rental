import React, { useState } from 'react';
import { fetchBookingsForDate } from '../api/bookingApi';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const BookingsForDate = () => {
  const [date, setDate] = useState('');
  const [bookings, setBookings] = useState([]);

  const handleFetchBookings = async () => {
    try {
      const data = await fetchBookingsForDate(date);
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      alert("Failed to fetch bookings.");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded">
      <TextField
        label="Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleFetchBookings}
        className="mt-4"
      >
        Fetch Bookings
      </Button>

      {bookings.length > 0 ? (
        <List className="mt-4">
          {bookings.map((booking) => (
            <ListItem key={booking.bookingId} className="border-b">
              <ListItemText
                primary={`Booking ID: ${booking.bookingId}`}
                secondary={`Product Name: ${booking.productName}, Quantity: ${booking.quantity}, Dates: ${booking.startDate} to ${booking.endDate}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <p className="mt-4">No bookings found for the selected date.</p>
      )}
    </div>
  );
};

export default BookingsForDate;
