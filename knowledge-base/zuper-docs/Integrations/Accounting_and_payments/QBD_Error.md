---
title: "Debugging common errors"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/QBD_Error.md
fetched_at: 2026-10-06T13:30:26.423Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Debugging common errors

The most common QuickBooks Desktop errors are listed here. We came up with the errors along with the resolution for each. If you do not find any errors listed, kindly reach out to [support@zuper.co](mailto:support@zuper.co)

## Input String Error

1. Name Character Error

**Alert description:**

The string "**name**" in the field "**Name**" is too long.

**Solution:**

As the name field exceeds the acceptable character limit,

Modify the field name; attached Quickbooks Desktop characters limit for different fields.

The character limits for different name fields are listed below.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/QBDER.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=72ec888e322d7371d675104bc29128b1" alt="/images/QBDER.png+_existingInIndexedDbMintlify" width="721" height="151" data-path="images/QBDER.png" />

2. Address Character Error

**Alert description:**

The string "**addr**" in the field "**Addr1**" is too long.

**Solution:**

As the address field characters exceed the limit, modify the characters in the address field. A maximum of 41 characters are allowed.

## Error Occurrence during QuickBooks Desktop Zuper Sync

### Customer is not found

**Alert description:**

When a customer is created in Zuper and pushed to QuickBooks Desktop, the QuickBooks ID and QuickBooks Sequence ID are synced back to the Zuper customer module and stored in a custom field.

If you encounter an error during this process, it may be because the customer has been marked as inactive or deleted in QuickBooks.

**Solution:**

If the customer is inactive, please reactivate them in QuickBooks and try again.

If the customer has been deleted, you must recreate the customer in QuickBooks and attempt the sync again.

### Estimate is not found

**Alert description:**

When a quote is created in Zuper and pushed to QuickBooks Desktop, the QuickBooks ID and QuickBooks Sequence ID are synced back to the Zuper Quote module and stored in a custom field. If an error occurs during this process, it may be due to the quote being deleted.

**Solution:**

Please create the Quote again and retry sync

### Duplicate record in Zuper

**Alert description:**

An error may occur if a user clones a record that has already been synced with QuickBooks Desktop and creates an invoice or quote without clearing the QuickBooks Sequence ID and QuickBooks ID.

**Solution:**

Please clear the sequence ID and QuickBooks Desktop ID and retry sync.

### Invoice is not found in Zuper

**Alert description:**

When an invoice is created in Zuper and pushed to QuickBooks Desktop, the QuickBooks ID and QuickBooks Sequence ID are synced back to Zuper's Invoice module and stored in a custom field. If an error occurs, it may be due to the deletion of the invoice in QuickBooks.

**Solution:**

Please create the invoice again in Zuper and retry sync.

### Product is not found in Zuper

**Alert description:**

When a product or service is used in an invoice and pushed to QuickBooks Desktop, the QuickBooks ID and QuickBooks Sequence ID are synced back to Zuper’s Parts and Service module and stored in a custom field. If an error occurs, it may be due to the deletion of the part, product, or service in Zuper.

**Solution:**

Please create the part/service/product again in Zuper and retry sync.

### Payment mode is not found in Zuper

**Alert description:**

When an invoice is pushed from Zuper to QuickBooks Desktop, a payment mode is either created in QuickBooks Desktop or mapped to an existing one. An error will occur if the payment mode has been deleted when receiving the response from QuickBooks Desktop.

**Solution:**

Please create the payment mode and retry sync.

### Rest of all other Errors

For all other errors not mentioned here:

Please contact Zuper support - [support@zuper.co](mailto:support@zuper.co) to resolve this issue.


## Related topics

- [Debugging common errors](/Integrations/Accounting_and_payments/QBO_Errors.md)
- [Setup the integration](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.