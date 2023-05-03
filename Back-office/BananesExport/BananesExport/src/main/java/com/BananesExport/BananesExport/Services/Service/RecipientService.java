package com.BananesExport.BananesExport.Services.Service;

import com.BananesExport.BananesExport.Models.Entities.Recipient;

import java.util.List;

public interface RecipientService {

    Recipient createRecipient(Recipient recipient);
    Recipient updateRecipient(Long recipientId, Recipient recipient);
    void deleteRecipient(Long recipientId);
    List<Recipient> getAllRecipients();
    Recipient getRecipientByName(String name);
}