---
title: "Creating a new invoice"
source: https://docs.zuper.co/Accounting/Invoices/Create_new_invoice.md
fetched_at: 2026-10-06T13:29:51.391Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Creating a new invoice

An invoice is a financial document that a field service business issues to its clients to request payment for services provided. It details the work completed, parts used, labor costs, and any applicable taxes or discounts. Invoices help track revenue, manage payments, and maintain clear financial records between your business and customers.

Let’s get started with creating a new invoice in Zuper!

<Frame>
  **Navigation**: *Accounting ->Invoices --> + New Invoice*
</Frame>

* Select the “**Accounting**” module from the left navigation menu and choose “**Invoices**.”

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/invoice17.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=bbeade9bbf660bce4440583635965f38" alt="Invoice17 Pn" width="1917" height="762" data-path="images/invoice17.png" />

* On the Invoices listing page, you can view an overview of existing invoices, including the invoice number, invoice date, due date, status, and more.
* Click the “**+ New Invoice**” button at the top right corner of the page. A new Invoice creation page will appear.

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/invoice18.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=34aad8921ad9f389ff337135b8db347c" alt="Invoice18 Pn" width="1920" height="878" data-path="images/invoice18.png" />

* Select "**Customer**," "**Organization**," or "**Property**" to associate with the invoice.
* Click "**+ Add**" to associate the various modules, such as Job, Property, Quotes, and Project, with the invoice.
* A side panel will appear. Select the required module and click the "**Proceed**" button.
* The billing and service contact details are automatically populated based on the selected customer or organization.

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/invoice19.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=1f0cfe27a05b5031ae81b64a9633839c" alt="Invoice19 Pn" width="1920" height="878" data-path="images/invoice19.png" />

* Fill in the mandatory fields in the **Invoice Details** section:
  1. **Invoice Date**
  2. **Payment Term**
  3. **Due Date**
  4. **Invoice Template**
* Click "**+ Add**" in the **Parts & Services** section and select an option to add parts, products, or services to the quotation, such as *Line Item*, *Bundle*, [*Section*](https://docs.zuper.co/Accounting/Sections), *Item Group*, or *Custom Line Item*.

<Note>
  **Note:** When you add a non-billable item directly to an invoice, the cost of that item will be included in the total. This ensures that non-billable items are tracked when manually added to the invoice. However, if you include a non-billable item in a transaction (such as a job or contract) and later convert that document into an invoice, the non-billable item will not appear on the invoice. This is because non-billable items are excluded from the billable total.
</Note>

<Accordion title="Updating markup for Parts, Products, and Services" defaultOpen="false">
  After adding parts, products, and services, you can edit or update the Markup value and its discount by following these steps:

  * Locate the line item in the list of added parts, products, or services.

  * Click the <Icon icon="ellipsis" color="#060606" /> icon next to the item you want to update.

      <img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/invoice20.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=518efb77bb1cc6f6cbf7987172beba2d" alt="Invoice20 Pn" width="1920" height="878" data-path="images/invoice20.png" />

  * Choose the **Edit** option. An **Edit Line Item** pop-up will open.

  * Adjust the markup type to **Flat (+)**,**Percentage (%)**, or **Multiplier (x)** based on your requirement and enter the desired value for the selected markup condition.

      <img src="https://mintcdn.com/zuperinc/55Qa433qzSjowzFB/Accounting/Invoices/invoice5.png?fit=max&auto=format&n=55Qa433qzSjowzFB&q=85&s=3868e265e9230a0a066924d254ff7da2" alt="" width="1920" height="878" data-path="Accounting/Invoices/invoice5.png" />

  * Click **Update Line Item** to apply the changes.
</Accordion>

* If **Track Serial Number** is enabled and **Mandate Serial No** is turned on in Settings, you must need to enter a serial number before proceeding.
* After adding parts and services to the invoice, transactional discounts and global taxes will be applied.

<Note>
  **Note**:

  * If a line item includes a custom tax, transactional discounts, and global taxes cannot be applied.
  * Transactional-level discounts apply only when all parts and services in the quote are either fully taxable or fully non-taxable.
</Note>

* **Payment Methods:** Select the [payment methods](/Zuper-pay/Settings#configure-the-payment-methods-your-customers-can-see) you want to offer the customer for this invoice. You can turn individual payment methods on or off as needed.
* Enter the details for any custom fields configured in the settings.
* Click "**+ Add Attachments**" to upload any invoice-related files.
* Click "**Save as Draft**" in the top-right corner of the page to temporarily save the invoice. In the confirmation pop-up, click "**Save as Draft**" again to confirm.

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/invoice21.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=d38105af44f1935d59d09816de29d4c7" alt="Invoice21 Pn" width="1920" height="878" data-path="images/invoice21.png" />

* The invoice is created successfully.

A \$0 invoice, for example, on a warranty visit or a fully discounted job, does **not** automatically move to Paid status. Someone must manually record the payment, even when the amount due is \$0.

Once an invoice is created and sent to the customer, they can review the charges and make payment by the due date.

**Zero-amount invoice behavior on mobile:** For invoices with a \$0 total, use "**Mark as Paid**" to close the invoice without recording a payment transaction. The "Collect Payment" option does not apply to zero-amount invoices and is not shown from mobile app v4.1.27 (Android) and the equivalent iOS version onward.


## Related topics

- [Setup the integration](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online.md)
- [Multi Trade Groups in CPQ Proposals](/Zuper_for_Roofing/Multi-trade groups in CPQ proposals.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.