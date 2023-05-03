package com.BananesExport.BananesExport.Models.Entities;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "recipients", uniqueConstraints = @UniqueConstraint(columnNames = "name"))
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Recipient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Column(nullable = false,unique = true)
    private String name;

    @NotBlank(message = "Address is required")
    @Column(nullable = false)
    private String address;


    @NotBlank(message = "Postal code is required")
    @Column(nullable = false)
    private String postalCode;


    @NotBlank(message = "City is required")
    @Column(nullable = false)
    private String city;


    @NotBlank(message = "Country is required")
    @Column(nullable = false)
    private String country;


}


