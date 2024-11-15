package com.lcaktion.repository;

import com.lcaktion.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    @Query("SELECT b FROM Booking b WHERE b.product.productId = :productId " +
            "AND b.startDate <= :endDate AND b.endDate > :startDate")
    List<Booking> findOverlappingBookings(@Param("productId") Long productId,
                                          @Param("startDate") LocalDate startDate,
                                          @Param("endDate") LocalDate endDate);


    @Query("SELECT b FROM Booking b WHERE b.startDate <= :date AND b.endDate > :date")
    List<Booking> findBookingsForDate(LocalDate date);
}
