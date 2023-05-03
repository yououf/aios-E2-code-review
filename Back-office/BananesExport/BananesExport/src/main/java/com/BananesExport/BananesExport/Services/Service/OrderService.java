package com.BananesExport.BananesExport.Services.Service;

import com.BananesExport.BananesExport.Models.Entities.Order;

import java.time.LocalDate;
import java.util.List;

public interface OrderService {

    List<Order> getAllOrders();

    Order getOrderById(Long id);

    Order createOrder(Order order);

    Order updateOrder(Long id, Order order);

    void deleteOrder(Long id);

    List<Order> getOrdersByRecipient(Long recipientId);

    List<Order> getOrdersByDeliveryDate(LocalDate deliveryDate);
}