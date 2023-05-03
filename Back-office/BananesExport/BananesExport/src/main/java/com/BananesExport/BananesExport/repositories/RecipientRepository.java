package com.BananesExport.BananesExport.repositories;

import com.BananesExport.BananesExport.Models.Entities.Recipient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecipientRepository extends JpaRepository<Recipient, Long> {

    Optional<Recipient> findByName(String name);
}


