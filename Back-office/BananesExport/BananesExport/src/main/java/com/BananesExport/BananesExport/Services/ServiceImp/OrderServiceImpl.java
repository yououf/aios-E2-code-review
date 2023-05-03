package com.BananesExport.BananesExport.Services.ServiceImp;

import com.BananesExport.BananesExport.Models.Entities.Order;
import com.BananesExport.BananesExport.Models.Entities.Recipient;
import com.BananesExport.BananesExport.Services.Service.OrderService;
import com.BananesExport.BananesExport.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;
import com.BananesExport.BananesExport.Utils.Validators.OrderQuantity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository repository;
    private final OrderQuantity orderQuantity;
    @Autowired
    public OrderServiceImpl(OrderRepository repository, OrderQuantity orderQuantity) {
        this.repository = repository;
        this.orderQuantity = orderQuantity;
    }



    @Override
    public Order createOrder(Order order) {
        orderQuantity.validateQuantity(order.getQuantity());
        order.calculatePrice(); // calculate the price using the Order entity's calculatePrice method
        return repository.save(order);
    }

    @Override
    public Order updateOrder(Long orderId, Order order) {
        Order existingOrder = repository.findById(orderId)
                .orElseThrow(() -> new NoSuchElementException("Order not found"));
        existingOrder.setRecipient(order.getRecipient());
        existingOrder.setDeliveryDate(order.getDeliveryDate());
        existingOrder.setQuantity(order.getQuantity());
        existingOrder.calculatePrice(); // calculate the price using the Order entity's calculatePrice method
        return repository.save(existingOrder);
    }

    @Override
    public void deleteOrder(Long orderId) {
        repository.deleteById(orderId);
    }

    @Override
    public List<Order> getAllOrders() {
        return repository.findAll();
    }

    @Override
    public Order getOrderById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Order not found"));
    }

    @Override
    public List<Order> getOrdersByRecipient(Long recipientId) {
        Recipient recipient = new Recipient();
        recipient.setId(recipientId);
        return repository.findByRecipient(recipient);
    }

    @Override
    public List<Order> getOrdersByDeliveryDate(LocalDate deliveryDate) {
        return repository.findByDeliveryDate(deliveryDate);
    }
}
