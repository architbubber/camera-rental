package com.lcaktion.services;

import com.lcaktion.entity.Booking;
import com.lcaktion.entity.BookingDTO;
import com.lcaktion.entity.Product;
import com.lcaktion.repository.BookingRepository;
import com.lcaktion.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<BookingDTO> getBookingsForDate(LocalDate date) {
        List<Booking> bookings = bookingRepository.findBookingsForDate(date);

        return bookings.stream()
                .map(booking -> new BookingDTO(
                        booking.getBookingId(),
                        booking.getProduct().getProductName(), // Fetch the product name
                        booking.getStartDate(),
                        booking.getEndDate(),
                        booking.getQuantity()
                ))
                .collect(Collectors.toList());
    }

    public Booking makeBooking(Booking booking) {
        Product product = productRepository.findById(booking.getProduct().getProductId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

        List<Booking> overlappingBookings = bookingRepository.findOverlappingBookings(
                product.getProductId(), booking.getStartDate(), booking.getEndDate());

        int bookedQuantity = overlappingBookings.stream()
                .mapToInt(Booking::getQuantity).sum();

        if (bookedQuantity + booking.getQuantity() > product.getQuantity()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Insufficient availability");
        }

        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Long bookingId, Booking updatedBooking) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        booking.setStartDate(updatedBooking.getStartDate());
        booking.setEndDate(updatedBooking.getEndDate());
        booking.setQuantity(updatedBooking.getQuantity());
        return bookingRepository.save(booking);
    }

    public List<Product> getAvailableProducts(LocalDate startDate, LocalDate endDate) {
        List<Product> products = productRepository.findAll();
        for (Product product : products) {
            List<Booking> bookings = bookingRepository.findOverlappingBookings(
                    product.getProductId(), startDate, endDate);

            int bookedQuantity = bookings.stream()
                    .mapToInt(Booking::getQuantity).sum();

            product.setQuantity(product.getQuantity() - bookedQuantity);
        }
        return products;
    }

}
