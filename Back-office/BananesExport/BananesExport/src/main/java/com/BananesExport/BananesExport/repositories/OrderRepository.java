package com.BananesExport.BananesExport.repositories;

import com.BananesExport.BananesExport.Models.Entities.Order;
import com.BananesExport.BananesExport.Models.Entities.Recipient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByRecipient(Recipient recipient);
    List<Order> findByDeliveryDate(LocalDate deliveryDate);
}
