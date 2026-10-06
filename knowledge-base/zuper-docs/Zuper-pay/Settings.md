---
title: "Setup Zuper Pay"
source: https://docs.zuper.co/Zuper-pay/Settings.md
fetched_at: 2026-10-06T13:29:58.426Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Setup Zuper Pay

After completing the Zuper Pay [onboarding process](/Zuper-pay/Onboarding), you can access the **Zuper Pay** settings page to manage your account details and terminals. In this guide, we will walk you through how to manage your account and payment terminals, and how to update your payout bank accounts.

## Accessing Zuper Pay settings

Navigate to **Settings** module > **Zuper Pay** from the left navigation menu in the Zuper application. The settings page includes four sections: **Account Management**, **Terminal Management**, **Payment Methods**, and **Surcharge Settings**, where you can review and manage your payment settings.<br />

<Frame>
  <img src="https://mintcdn.com/zuperinc/m_dpBO9liAW6jVZg/images/Settingsternew-1.png?fit=max&auto=format&n=m_dpBO9liAW6jVZg&q=85&s=7c2f9715cce63c172bb8aea4fdc54ff9" alt="Settingsternew 1" width="3408" height="1146" data-path="images/Settingsternew-1.png" />
</Frame>

## Account Management

The **Account Management** section allows you to view and manage key information of your account, business, personal, and ownership details.

<img src="https://mintcdn.com/zuperinc/j_9bu8ymKDpxflgb/Zuper-pay/images/Settingster-2.png?fit=max&auto=format&n=j_9bu8ymKDpxflgb&q=85&s=4b76b5fe7a78b7eeabdce20fb6e74014" alt="Settingster 2 Pn" width="1885" height="833" data-path="Zuper-pay/images/Settingster-2.png" />

* **Business Details**: This section displays your registered business name, address, and industry details. Ensure these details are accurate for compliance and verification.
* **Public Details**: This section displays customer support information such as your support address, phone number, and the descriptor shown on customer statements.
* **Management & Ownership**: This section shows the assigned account representative with their contact details. You can add or update representatives as needed.
* **Payout Details**: This section displays the linked bank account where payouts will be deposited. You can manage or update these details to ensure seamless transactions.
* **Linked Accounts**: This section lists external payment accounts connected to Zuper Pay for transaction processing. You can remove or modify linked accounts if necessary.
* **Authentication Details**: This section contains the registered email and phone number for account verification. Keeping these details updated ensures secure access to your payment settings.

### How to change the bank account for payouts

To update the bank account where payouts are deposited, follow these steps:

1. Navigate to **Settings** > **Zuper Pay** from the left navigation menu.
2. Go to the **Account Management** section and select **Payout details**. <img src="https://mintcdn.com/zuperinc/CnXsaVzX1o8zG7qq/Zuper-pay/images/settingster-5.png?fit=max&auto=format&n=CnXsaVzX1o8zG7qq&q=85&s=bfe0529806982c848ca8c3cd62ae9893" alt="Settingster 5 Pn" width="1867" height="770" data-path="Zuper-pay/images/settingster-5.png" />
3. On the **Payout details** section, you’ll see the bank account currently connected to Zuper Pay.
4. Click the **Edit** icon next to your bank account.
5. View the list of connected bank accounts. Select the appropriate account and click **Save**. If the desired account isn’t listed, choose **Link another account or enter bank account details manually** to add it. <img src="https://mintcdn.com/zuperinc/CnXsaVzX1o8zG7qq/Zuper-pay/images/settingster-6.png?fit=max&auto=format&n=CnXsaVzX1o8zG7qq&q=85&s=fad05b95738039a2036d7bc6ca21ede8" alt="Settingster 6 Pn" width="564" height="758" data-path="Zuper-pay/images/settingster-6.png" />

## Terminal Management

The **Terminal Management** section helps you manage payment terminals. You can add locations, register new payment readers, and view a list of your terminals.

### My Terminals

To view your terminals, go to **Zuper Pay** > **Terminal Management** > **My Terminals**. This page displays a list of your terminals with details like name, status, serial number, and associated location.

<img src="https://mintcdn.com/zuperinc/CnXsaVzX1o8zG7qq/Zuper-pay/images/settingster-3.png?fit=max&auto=format&n=CnXsaVzX1o8zG7qq&q=85&s=4f4b82a711278496358b7cde6b6e5152" alt="Settingster 3 Pn" width="1906" height="752" data-path="Zuper-pay/images/settingster-3.png" />

### Manage Locations

You can create and manage locations to link your payment readers (e.g., BBPOS WisePOS E) to specific physical or operational sites for streamlined device management.

<img src="https://mintcdn.com/zuperinc/j_9bu8ymKDpxflgb/Zuper-pay/images/bbpos-5.png?fit=max&auto=format&n=j_9bu8ymKDpxflgb&q=85&s=fe2f04ea46c7969eb53a1d8ed0a1e6b4" alt="Bbpos 5 Pn" width="1893" height="668" data-path="Zuper-pay/images/bbpos-5.png" />

1. On the **My Terminals** page, click the **Manage Locations** button.
2. On the **Manage Locations** page, you can:
   * **Create a Location**: Click **Create Location** to add a new location for your payment reader.
   * **Delete a Location**: Click the delete icon next to the location you want to remove.

### Register New Device

You can register a new payment reader (e.g., BBPOS WisePOS E) to link it to your Zuper account and a specific location for accepting payments.

<img src="https://mintcdn.com/zuperinc/j_9bu8ymKDpxflgb/Zuper-pay/images/bbpos-7.png?fit=max&auto=format&n=j_9bu8ymKDpxflgb&q=85&s=0ac69ae259c345dc681cdd4a46f55400" alt="Bbpos 7 Pn" width="1897" height="658" data-path="Zuper-pay/images/bbpos-7.png" />

* To do so, click the "**Register New Device**" button on the **My Terminals** page.
* A **Register New Device** page opens. Enter the reader's name, specify the three-word code, and assign it to a location.
* Click "**Proceed**" to complete the registration.

## Payment Methods

Zuper Pay gives you control over which payment methods customers see on invoices, quotes, and partial payment requests. You can set the available payment methods for all transactions at the organization level, then adjust them for individual transactions when needed.

Payment Methods Configuration supports:

* Cards (includes all supported card types)
* Cash App Pay
* Amazon Pay
* ACH Direct Debit

<Info>
  **Permissions**: Admin and Team Lead have default access control for Payment method configuration. However, if your business requires a different level of visibility, you can customize the access using Custom Roles.<br />

  <Frame>
    <img src="https://mintcdn.com/zuperinc/N50jQaxMDqXg3_cx/images/paymentmethod-06.png?fit=max&auto=format&n=N50jQaxMDqXg3_cx&q=85&s=b07c4277fe3d9a3f74fb3f693545c373" alt="Paymentmethod 06" width="3402" height="1076" data-path="images/paymentmethod-06.png" />
  </Frame>
</Info>

#### Configure payment methods for your organization

1. Navigate to the **Settings** page and select **Zuper Pay**.
2. Select **Payment Methods**.<br />
   <Frame>
     <img src="https://mintcdn.com/zuperinc/N50jQaxMDqXg3_cx/images/paymentmethod-01.png?fit=max&auto=format&n=N50jQaxMDqXg3_cx&q=85&s=f902442c0d0dceebdee55b09fd606534" alt="Paymentmethod 01" width="3402" height="1720" data-path="images/paymentmethod-01.png" />
   </Frame>
3. Enable the payment methods your organization wants to accept.
4. Disable any payment methods you do not want to offer.<br />Whatever you turn on or off here applies to every future transaction you send, unless you override it on a specific document.<br />
   <Frame>
     <img src="https://mintcdn.com/zuperinc/N50jQaxMDqXg3_cx/images/paymentmethod-02.png?fit=max&auto=format&n=N50jQaxMDqXg3_cx&q=85&s=0896c91a8e645cf9865ad664b5ce3fcd" alt="Paymentmethod 02" width="3410" height="1190" data-path="images/paymentmethod-02.png" />
   </Frame>
5. Save your changes.

#### Configure payment methods for an individual transaction

For any individual transaction, you can override your payment settings and toggle specific payment methods on or off for that customer.

1. Create or open an invoice, quote, or partial payment request.
2. Locate the **Payment Method** field.

**Creation page:**<br />

<Frame>
  <img src="https://mintcdn.com/zuperinc/N50jQaxMDqXg3_cx/images/paymentmethod-03.png?fit=max&auto=format&n=N50jQaxMDqXg3_cx&q=85&s=ddf0d9bcf185e03f5d1eb7bea7be9208" alt="Paymentmethod 03" width="3258" height="1698" data-path="images/paymentmethod-03.png" />
</Frame>

**Details page:**<br />

<Frame>
  <img src="https://mintcdn.com/zuperinc/N50jQaxMDqXg3_cx/images/paymentmethod-04.png?fit=max&auto=format&n=N50jQaxMDqXg3_cx&q=85&s=afc5726931ae30119ce00ef4dd2b2213" alt="Paymentmethod 04" width="2378" height="1628" data-path="images/paymentmethod-04.png" />
</Frame>

### Frequently asked questions

<AccordionGroup>
  <Accordion title="What happens if I don't change the methods on an invoice or link?">
    The transaction uses your organization's default methods. You only need to make a change when you want to offer fewer options.
  </Accordion>

  <Accordion title="Can I offer fewer methods on a single invoice than my organization allows?">
    Yes. Open the Payment Method field on the invoice and turn off any method you want to hide for that transaction.
  </Accordion>

  <Accordion title="Can I offer a method on a transaction that is turned off at the organization level?">
    Yes, you can turn any method on or off for an individual invoice, quote, or partial payment.
  </Accordion>

  <Accordion title="Why can't I change the payment methods on an invoice?">
    Your role does not have the Manage Payment Methods permission. Ask your admin to grant it under **Users & Teams** > **Custom Roles** > **Payments.**
  </Accordion>
</AccordionGroup>

## Surcharge Settings

The **Surcharge Settings** section lets you pass credit card processing fees on to your customers. You set up your surcharge rules once, and the surcharge is applied automatically on invoices and quote deposits.

For setup steps, prohibited states, and compliance requirements, see [Surcharge Fee](/Zuper-pay/Surcharge).


## Related topics

- [Setup the integration](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online.md)
- [Zuper Pay Dashboard](/Zuper-pay/Dasboard.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.