package com.BananesExport.BananesExport.Models.Entities.Rules;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.time.LocalDate;

public class FutureDeliveryDateValidator implements ConstraintValidator<FutureDeliveryDate, LocalDate> {

    @Override
    public boolean isValid(LocalDate value, ConstraintValidatorContext context) {
        if (value == null) {
            return true;
        }

        LocalDate minDeliveryDate = LocalDate.now().plusWeeks(1);
        return value.isEqual(minDeliveryDate) || value.isAfter(minDeliveryDate);
    }
}
