package com.BananesExport.BananesExport.Models.Entities.Rules;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = FutureDeliveryDateValidator.class)
public @interface FutureDeliveryDate {
    String message() default "Delivery date must be at least one week in the future";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

