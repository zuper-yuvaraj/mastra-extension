---
title: "Debugging common errors"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/QBO_Errors.md
fetched_at: 2026-10-06T13:30:23.413Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Debugging common errors

The most common QuickBooks Online errors are listed here. We identified the errors along with their corresponding resolutions. If you do not find any errors listed, kindly reach out to [support@zuper.co](mailto:support@zuper.co)

## Overview of Sync Issues

When data fails to sync between Zuper and QuickBooks Online, the issue can stem from various sources, including configuration errors, data validation issues, or QuickBooks Online API limitations. The absence of an error in sync history often indicates that the record was created or updated by the same user whose API key was used for the integration. Other scenarios include incorrect installation (e.g., incomplete OAuth) or specific errors logged in the sync history, which can be either Zuper-validated or QuickBooks Online API errors.

### Sources of Errors

* **Zuper Entities**:
  * Primary Zuper Record: Missing line items or invoices not in a sync-ready status.
  * Associated Zuper Object: Incorrect customer details for QuickBooks Online creation.
  * Zuper App Configuration: Misconfigured settings.
  * Zuper Settings: Duplicate object errors due to mismatched unique fields.
* **QuickBooks Online Entities** :
  * Primary QuickBooks Online Record: Manual modifications in QuickBooks Online conflict with sync updates.
  * Associated QuickBooks Online Record: Issues fetching tax or other linked data.
  * QuickBooks Online Settings: Custom transaction numbers, class tracking, or multicurrency settings.
  * QuickBooks Online Plan: Limitations, such as a lack of class tracking support.
* **Combined Issues**: Errors may arise from a combination of configuration and missing data, or unsupported QuickBooks Online settings.

## Error Categories and Solutions

Below is a consolidated breakdown of errors, their causes, and actionable solutions, organized by category.

## **1. Zuper-Side Errors**

### **• Customer not found or could not be created in QuickBooks Online**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Invalid customer information. <br />Examples: incorrect email format, invalid phone number. | Verify and correct the customer's email to a valid format (e.g., [user@domain.com](mailto:user@domain.com)). <br />Fix phone number format per QuickBooks Online requirements. <br />Retry the sync. |
| **Code:** N/A | **Missing customer identification field.** The field your account uses to match customers is empty on the Zuper record,  for example, an invoice whose customer has no Billing Email populated. | Check which fields your account uses under **App Store → QuickBooks Online → Identify Customers in Zuper-QuickBooks**. <br />Populate the selected field(s) on the Zuper customer record. <br />Retry the sync. See [Identifying customers](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online) for the full mapping table. |

***

### **• Unable to upload attachment - \$ in QuickBooks Online**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Attachment exceeds QuickBooks Online’s 20MB size limit. <br />Unsupported format (e.g., PDF). | Ensure the attachment is under 20MB. <br />Use a supported format (e.g., JPEG, PNG). <br />Compress or convert the file. <br />Retry the sync. |

***

### **• Unable to fetch tax from QuickBooks Online**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Tax sync issue between Zuper and QuickBooks Online. <br />QuickBooks Online is the tax master, and the relevant tax is not created in Zuper. | Match Zuper’s tax configuration to QuickBooks Online’s tax settings. <br />If QuickBooks Online is the tax master, create the corresponding tax in Zuper. <br />Update tax mapping in integration settings. <br />Retry the sync. |

***

### **• Line item not present**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Invoice/quote has no line items. <br />QuickBooks Online requires at least one line item. | Add at least one valid line item. <br />Fill all required fields (e.g., description, amount). <br />Retry the sync. |

***

### **• Could not create or update product**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Failed to get Zuper product details. <br />QuickBooks Online doesn’t support negative price for inventory items. <br />Bundle-level pricing not supported in QuickBooks Online / Bundle not available in QuickBooks Online. <br />QuickBooks Online doesn’t allow creating bundles via API. | Retry the sync after some time. <br />Set a non-negative selling price for the inventory item. <br />Use a roll-up bundle in the invoice/estimate. <br />Create the bundle directly in QuickBooks Online, then sync the invoice/estimate. |
| | QuickBooks Online service items without a SKU value are skipped during sync. <br />Zuper requires a SKU to match and import service-type items. Unlike parts, service items do not have a fallback identifier, so missing SKU causes a silent skip — no error is logged in Zuper's sync history. | |
| | 1.  **Open Products and Services in QuickBooks Online.** In QuickBooks Online, go to **Sales → Products and Services**. 2. **Edit the affected service item.** Open each service item that is missing from Zuper and select **Edit**. 3. **Populate the SKU field.** Enter a unique value in the **SKU** field, then select **Save and close**. 4. **Retry the sync in Zuper.** In Zuper, go to **App Store → QuickBooks Online → Sync Now**. <ol><li>**Verify the items in Zuper.**</li></ol> Go to **Inventory Management → Parts & Services** and confirm the service items now appear. | |

***

### **• Excess Payment Detected**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Payment collected in Zuper failed to sync to QuickBooks Online. <br />Payment then collected in QuickBooks Online; reverse sync shows payments exceed invoice total. | Usually safe to ignore as payments will match between Zuper and QuickBooks Online. <br />Confirm payment totals align in both systems. |

***

### **• Payment method not found in Zuper/QuickBooks Online**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Payments collected in QuickBooks Online lack a payment method or use one not present in Zuper. | Add a fallback payment method in Zuper for reverse-sync from QuickBooks Online. <br />Retry the sync. |

***

## **2. QuickBooks Online API Errors**

### **• Unsupported Operation**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** 500 | QuickBooks Online plan selected in Zuper doesn’t match the subscribed QuickBooks Online plan. <br />Technical issues (e.g., encoding or special characters). | Contact Zuper support ([support@zuper.co](mailto:support@zuper.co)) to verify/update the plan mapping. <br />Ensure plan selection matches QuickBooks Online subscription. <br />Remove or correct special characters/encoding issues. <br />Retry the sync. |

***

### **• Business Validation Error**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** 6000 | QuickBooks Online business rule failed. <br />Examples: missing GST/HST rate (Canada), agency issues, currency mismatch, missing required fields. | Read the QuickBooks Online error message for the exact cause. <br />Update fields in Zuper (e.g., add valid GST/HST, fix currency). <br />Retry the sync. |

***

### **• Invalid Email Address Format Error**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** 2210 | Customer email in Zuper is not in a valid format. | Update the email to a valid format (e.g., [user@domain.com](mailto:user@domain.com)). <br />Validate other customer details. <br />Retry the sync. |

***

### **• Invalid Reference ID Error**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** 2500 | A line item name matches a master record (e.g., product category) in QuickBooks Online. | Rename the line item in Zuper to be unique (not matching any QuickBooks Online master). <br />Retry the sync. |

***

### **• Stale Object Error**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** 5010 | Updating an outdated object version. <br />Concurrent edits in QuickBooks Online by the OAuth user. | Contact Zuper support to refresh the integration connection. <br />Avoid concurrent edits on the same record in QuickBooks Online. <br />Retry the sync. |

***

### **• Object not found**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Referenced record (e.g., customer/product) is deleted or inactive in QuickBooks Online. | Check QuickBooks Online for the referenced record’s status. <br />Reactivate or recreate the record. <br />Retry the sync. |

***

### **• Incorrect account type or missing account reference**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Referenced account is invalid or missing in QuickBooks Online. | Verify the account exists and has the correct type (e.g., income, expense). <br />Update account mapping in Zuper integration settings. <br />Retry the sync. |

## **3. Duplicate Errors**

### **• Duplicate Object Error**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** 630 | Object in Zuper violates a unique constraint in QuickBooks Online (e.g., reference ID, name). | Update the object in Zuper to ensure uniqueness (e.g., change reference ID or name). <br />Check QuickBooks Online for conflicting records. <br />Retry the sync. |

***

### **• Duplicate Document Error / Duplicate Document Number Error**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** 6140 | Document number in Zuper already exists in QuickBooks Online. <br />Often occurs when existing QuickBooks Online records predate integration and Zuper uses a similar series with ID preference set to Zuper. | Use a unique document number in Zuper or enable auto-numbering in QuickBooks Online. <br />Set ID preference to “QuickBooks Online” and retry. <br />**Note:** Document numbers will not match between Zuper and QuickBooks Online. |

***

### **• Duplicate Name Exists Error**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** 6240 | Customer name exists in QuickBooks Online but with a different QuickBooks Online ID. <br />Often due to manual deletion and recreation in QuickBooks Online. | Change the customer’s display name in Zuper to be unique. <br />Or merge or rename duplicates in QuickBooks Online to align with Zuper. <br />Retry the sync. |

***

## **4. Other Errors**

### **• Unable to Fetch Customer from QuickBooks Online**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Unknown issues blocking customer retrieval. <br />Possible connectivity or permission problems. | Verify OAuth connection and API permissions. <br />Confirm the customer exists and is active in QuickBooks Online. <br />Re-authenticate the integration if needed. <br />Retry the sync. |

***

### **• Unable to Fetch the Estimate from QuickBooks Online**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Unknown issues fetching the estimate. <br />Possible data mismatches or QuickBooks Online access issues. | Check the estimate’s status in QuickBooks Online and sync requirements. <br />Re-authenticate integration and confirm connectivity. <br />Retry the sync. |

***

### **• All Other Error Codes**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Unlisted or unknown issues (connectivity, permissions, data problems). | Contact Zuper support ([support@zuper.co](mailto:support@zuper.co)) with the specific error code and sync history details. <br />Provide logs or screenshots to assist troubleshooting. |

***

### **• Customer not present in QuickBooks Online for the given ID: XXXX**

| **Error** | **Cause** | **Solution** |
| :- | :- | :- |
| **Code:** N/A | Customer synced from Zuper to QuickBooks Online but was made inactive. <br />Sometimes due to temporary connection issues preventing retrieval. | Reactivate the customer in QuickBooks Online. <br />Retry the sync. <br />If connection-related, try again after some time. |

## Best Practices to Prevent Sync Errors

1. **Verify Integration Setup**:
   * Ensure OAuth is completed correctly and the API key is valid.
   * Confirm that the QuickBooks Online plan selected in the app configuration matches the user’s subscription.
2. **Data Validation**:
   * Regularly check customer details, tax settings, and line items in Zuper for accuracy.
   * Avoid manual changes in QuickBooks Online that could conflict with sync updates.
3. **QuickBooks Online Configuration**:
   * Enable or disable features like custom transaction numbers, class tracking, or multicurrency as needed.
   * Ensure tax settings in QuickBooks Online align with Zuper’s configuration.
4. **Monitor Sync Activity**:
   * Regularly review sync history and activity logs to identify and address issues early.
   * Compare QuickBooks Online’s transaction audit history with Zuper’s invoice activity for discrepancies.
5. **User Coordination**:
   * Prevent the OAuth user from editing QuickBooks Online records during sync to avoid stale object errors.
6. **Unique Identifiers**:
   * Ensure customer names, invoice numbers, and reference IDs are unique to avoid Duplicate Object (630), Duplicate Document (6140), and Duplicate Name Exists (6240) errors.
   * Use distinct names for line items to prevent Invalid Reference ID Errors (Error Code: 2500).
7. Ensure all **service items** in QuickBooks Online have a **SKU / Item ID** populated. Items without a SKU will not sync into Zuper and will not appear in sync history error logs.
8. Use a **separate Zuper account** for the integration API key and for day-to-day invoice and payment work. Records created or updated by the API key's own account are skipped silently and do not appear in sync history error logs.

## Additional Notes

* **Multiple Causes**: Sync failures may result from combined issues (e.g., missing data and incorrect settings). Address each potential cause systematically.
* **Documentation**: Refer to the QuickBooks Online API error codes and Zuper’s error documentation for detailed troubleshooting.
* **Support**: If issues persist, contact Zuper or QuickBooks Online support with specific error details from the sync history.

### Diagnostic Tools

* **Sync Activity**: Review to identify created or associated records during sync.
* **QuickBooks Online** **Transaction Audit History**: Compare with Zuper’s invoice activity to distinguish user-initiated changes from integration-driven changes.
* **Error Codes**: Use the provided error codes to pinpoint the issue and apply the corresponding solution.
* **Combined Issues**: Some errors may result from multiple causes (e.g., incorrect plan selection and missing data). Address each issue systematically using the provided solutions.
* **Escalation**: For errors requiring Zuper support (e.g., Unsupported Operation, Stale Object, or unlisted error codes), provide detailed information, including the error code, sync history logs, and affected records.
* **Documentation**: For further details on specific error messages, refer to QuickBooks Online’s API documentation and Zuper’s error code reference.

***


## Related topics

- [Debugging common errors](/Integrations/Accounting_and_payments/QBD_Error.md)
- [Setup the integration](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.