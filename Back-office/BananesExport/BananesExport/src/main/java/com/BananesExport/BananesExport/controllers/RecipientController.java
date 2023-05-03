package com.BananesExport.BananesExport.controllers;

import com.BananesExport.BananesExport.Models.Entities.Recipient;
import com.BananesExport.BananesExport.Services.Service.RecipientService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("api/recipients")
@AllArgsConstructor
public class RecipientController {

    private final RecipientService recipientService;

    @PostMapping
    public ResponseEntity<Recipient> createRecipient(@Valid @RequestBody Recipient recipient) {
        Recipient newRecipient = recipientService.createRecipient(recipient);
        return ResponseEntity.ok(newRecipient);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recipient> updateRecipient(@PathVariable Long id, @Valid @RequestBody Recipient recipient) {
        Recipient updatedRecipient = recipientService.updateRecipient(id, recipient);
        return ResponseEntity.ok(updatedRecipient);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecipient(@PathVariable Long id) {
        recipientService.deleteRecipient(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{name}")
    public ResponseEntity<Recipient> getRecipientByName(@PathVariable String name) {
        Recipient recipient = recipientService.getRecipientByName(name);
        if (recipient == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(recipient);
    }

    @GetMapping
    public ResponseEntity<List<Recipient>> getAllRecipients() {
        List<Recipient> recipients = recipientService.getAllRecipients();
        return ResponseEntity.ok(recipients);
    }
}
