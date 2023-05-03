package com.BananesExport.BananesExport.Services.ServiceImp;

import com.BananesExport.BananesExport.Models.Entities.Recipient;
import com.BananesExport.BananesExport.Services.Service.RecipientService;
import com.BananesExport.BananesExport.repositories.RecipientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class RecipientServiceImpl implements RecipientService {

    private final RecipientRepository repository;
    @Autowired
    public RecipientServiceImpl(RecipientRepository repository) {
        this.repository = repository;
    }

    @Override
    public Recipient createRecipient(Recipient recipient) {
        if (repository.findByName(recipient.getName()).isPresent()) {
            throw new IllegalArgumentException("A recipient with the same name already exists");
        }
        return repository.save(recipient);
    }

    @Override
    public Recipient updateRecipient(Long recipientId, Recipient recipient) {
        Recipient existingRecipient = repository.findById(recipientId)
                .orElseThrow(() -> new NoSuchElementException("Recipient not found"));
        if (!existingRecipient.getName().equalsIgnoreCase(recipient.getName()) &&
                repository.findByName(recipient.getName()).isPresent()) {
            throw new IllegalArgumentException("A recipient with the same name already exists");
        }
        existingRecipient.setName(recipient.getName());
        existingRecipient.setAddress(recipient.getAddress());
        existingRecipient.setPostalCode(recipient.getPostalCode());
        existingRecipient.setCity(recipient.getCity());
        existingRecipient.setCountry(recipient.getCountry());
        return repository.save(existingRecipient);
    }

    @Override
    public void deleteRecipient(Long recipientId) {
        repository.deleteById(recipientId);
    }

    @Override
    public List<Recipient> getAllRecipients() {
        return repository.findAll();
    }

    @Override
    public Recipient getRecipientByName(String name) {
        return repository.findByName(name)
                .orElseThrow(() -> new NoSuchElementException("Recipient not found"));
    }
}