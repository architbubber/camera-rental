package com.lcaktion.entity;

import java.time.LocalDate;

public class BookingDTO {
    private Long bookingId;
    private String productName;
    private LocalDate startDate;
    private LocalDate endDate;
    private int quantity;

    // Constructor
    public BookingDTO(Long bookingId, String productName, LocalDate startDate, LocalDate endDate, int quantity) {
        this.bookingId = bookingId;
        this.productName = productName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.quantity = quantity;
    }

    // Getters and setters
    public Long getBookingId() {
        return bookingId;
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}


