import axios from 'axios';

const BASE_URL = 'http://localhost:8080/bookings';

export const fetchAvailability = async (startDate, endDate) => {
  const response = await axios.get(`${BASE_URL}/availability`, {
    params: { startDate, endDate },
  });
  return response.data;
};

export const makeBooking = async (booking) => {
  const response = await axios.post(BASE_URL, booking);
  return response.data;
};

export const updateBooking = async (id, booking) => {
  const response = await axios.put(`${BASE_URL}/${id}`, booking);
  return response.data;
};

export const fetchBookingsForDate = async (date) => {
    const response = await axios.get(`${BASE_URL}/by-date`, {
        params: { date },
    });
    return response.data;
};