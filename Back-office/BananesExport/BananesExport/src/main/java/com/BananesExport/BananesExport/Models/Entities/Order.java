package com.BananesExport.BananesExport.Models.Entities;
import com.BananesExport.BananesExport.Models.Entities.Rules.FutureDeliveryDate;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.hibernate.validator.constraints.Range;
import jakarta.validation.constraints.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor(force = true)
@RequiredArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipient_id")
    private Recipient recipient;

    @NonNull
    private String address;

    @NonNull
    @Pattern(regexp = "^[a-zA-Z0-9]{5}$")
    private String postalCode;

    @NonNull
    private String city;

    @NonNull
    private String country;

    @NonNull
    @FutureOrPresent
    @FutureDeliveryDate
    private LocalDate deliveryDate;

    @NonNull
    @Range(min = 25, max = 10000, message = "Quantity must be between 25 and 10,000 and must be a multiple of 25")
    private Integer quantity;

    private BigDecimal price;

    public void calculatePrice() {
        BigDecimal unitPrice = new BigDecimal("2.50");
        BigDecimal totalBananas = new BigDecimal(this.quantity);
        this.price = unitPrice.multiply(totalBananas);
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
        calculatePrice();
    }

    @PrePersist
    @PreUpdate
    public void prePersist() {
        calculatePrice();
    }

}
