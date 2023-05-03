package com.BananesExport.BananesExport.Utils.Validators;

import com.BananesExport.BananesExport.CustomExceptions.OrderExceptions.InvalidQuantityException;
import org.springframework.stereotype.Component;

@Component
public class OrderQuantity {

    public void validateQuantity(Integer quantity) {
        if (quantity % 25 != 0) {
            throw new InvalidQuantityException("Quantity must be a multiple of 25");
        }
    }
}
