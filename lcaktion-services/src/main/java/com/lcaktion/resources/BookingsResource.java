package com.lcaktion.resources;

import com.lcaktion.entity.Booking;
import com.lcaktion.entity.BookingDTO;
import com.lcaktion.entity.Product;
import com.lcaktion.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "*")
public class BookingsResource {
    @Autowired
    private BookingService bookingService;

    @GetMapping("/by-date")
    public ResponseEntity<List<BookingDTO>> getBookingsForDate(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {
        List<BookingDTO> bookings = bookingService.getBookingsForDate(date);
        return ResponseEntity.ok(bookings);
    }

    @PostMapping
    public Booking makeBooking(@RequestBody Booking booking) {
        return bookingService.makeBooking(booking);
    }

    @PutMapping("/{id}")
    public Booking updateBooking(@PathVariable Long id, @RequestBody Booking booking) {
        return bookingService.updateBooking(id, booking);
    }

    @GetMapping("/availability")
    public List<Product> getAvailableProducts(
            @RequestParam String startDate,
            @RequestParam String endDate) {
        return bookingService.getAvailableProducts(
                LocalDate.parse(startDate),
                LocalDate.parse(endDate));
    }
}
