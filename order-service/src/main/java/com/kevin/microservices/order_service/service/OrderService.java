package com.kevin.microservices.order_service.service;

import com.kevin.microservices.order_service.client.InventoryClient;
import com.kevin.microservices.order_service.dto.OrderRequest;
import com.kevin.microservices.order_service.exception.BusinessException;
import com.kevin.microservices.order_service.model.Order;
import com.kevin.microservices.order_service.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final InventoryClient inventoryClient;

    public void placeOrder(OrderRequest orderRequest){
        var isProductInStock = inventoryClient.isInStock(orderRequest.skuCode(), orderRequest.quantity());

        if(!isProductInStock){
            /*throw new RuntimeException("Product with skuCode " + orderRequest.skuCode() + " is not in stock");*/
            throw new BusinessException("Product with skuCode " + orderRequest.skuCode() + " is not in stock", 409);
        }

        //map OrderRequest to Order object
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());
        order.setPrice(orderRequest.price());
        order.setSkuCode(orderRequest.skuCode());
        order.setQuantity(orderRequest.quantity());

        //save order to OrderRepository
        try{
            orderRepository.save(order);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
