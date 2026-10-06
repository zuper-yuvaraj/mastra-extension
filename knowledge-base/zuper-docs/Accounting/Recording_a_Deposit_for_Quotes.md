---
title: "Recording a deposit on quotes"
source: https://docs.zuper.co/Accounting/Recording_a_Deposit_for_Quotes.md
fetched_at: 2026-10-06T13:29:50.874Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Recording a deposit on quotes

If you need to collect money upfront from your client, you can add a required deposit to quotes. Customers will see that there is a deposit on the quote, so they know how much to pay you. When a deposit is recorded on a quote, it will transfer to the first invoice created for this job generated from the quote.

<Frame>
  **Navigation**: *Accounting* -> *Quotations*
</Frame>

### Adding a required deposit to a quote

The deposit amount on quotes is determined by the settings configured for deposits in the **Organization Settings**. By default, this value is auto populated on quotes. However, if you need to update the deposit amount, you can do so easily.

To modify the deposit amount:

1. Click the <Icon icon="pencil" color="black" /> icon next to the "**Collect Deposit**" section.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-33.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=89196a32449f438a5fae7c24a185fab4" alt="" width="1906" height="689" data-path="Accounting/images/Quotes-33.png" />

2. Update the amount as required.
3. Click "**Update Deposit**".

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-32.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=53467dac1db8527a4a0fb9bad1ab2ffc" alt="" width="1280" height="648" data-path="Accounting/images/Quotes-32.png" />

<Accordion title="Setting up deposit amounts in Organization Settings" defaultOpen="false">
  The deposit amount on quotes is determined by the **Organization Settings**. To configure these settings:

  1. Navigate to **Settings** from the left navigation menu and select **Organization Settings**.

  <img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-29.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=a873f1f144fd262beae4b9fdc7014fee" alt="" width="1873" height="826" data-path="Accounting/images/Quotes-29.png" />

  2. Click **Quotations and Invoices Settings**.

  <img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-28.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=8f4ed3db84ec04ea437a3eb60e2a6b9a" alt="" width="1429" height="842" data-path="Accounting/images/Quotes-28.png" />

  3. Configure the following fields:

  * **Allow Deposit on Quote Approval**: Choose whether to enable deposits for quotes.
  * **Enter Threshold Amount**: Specify the maximum limit for deposit amounts.
  * **Type of Deposit Value**: Choose between a fixed deposit amount or a percentage of the quote value.
  * **Enter Deposit Value**: Define the default deposit amount or percentage.
  * **Allow Payment Collection**: Enable payment collection for deposits.
  * **Allow Sending Payment Link to Customer/Contact**: Enable sending payment links for deposits.
  * **Payment Mode Facilitating the Payment**: Specify available payment methods (e.g., Card, Zuper Pay, Cash, or third-party payment apps).
  * **Allow Field Executive to Collect Payment**: Allow field executives to log deposit payments.

      <img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-27.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=79e82d469b946cec84a5d559c6f3997a" alt="" width="1467" height="840" data-path="Accounting/images/Quotes-27.png" />

  By configuring these settings, the deposit amount will be automatically populated on quotes by default.
</Accordion>

### Recording deposits on quotes

Once the quote is ready, you can email it to the customer. The customer can then pay the deposit amount directly by clicking the payment link in the email. Alternatively, if the customer pays by a different method, you can manually log the deposit received.

**To log a deposit:**

1. Click **Collect Deposit** in the product table details or navigate to **More Actions** -> **Collect Deposit**.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-34.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=c3f33e77b422d6c77da6a82659621c1a" alt="" width="1894" height="828" data-path="Accounting/images/Quotes-34.png" />

2. A **Collect Deposit** dialog box will appear. Enter the following details:

* **Payment Mode**: Select the method used for the deposit (e.g., Card, Zuper Pay, Offline Cash, or other third-party payment apps).
* **Deposit Amount (in USD)**: Enter the exact deposit amount received from the customer.
* **Payment Reference Number**: Provide a reference number, such as a transaction ID or check number, associated with the payment.
* **Payment Date**: Specify the deposited date.
* **Remarks**: Optionally, add any notes related to the deposit.
* **Send Receipt/Confirmation Note**: Check this box if you want to send a confirmation receipt or a thank-you message to the customer.

3. After entering the details, click **Collect** to successfully log the deposit.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-31.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=6f1e662b18480f3a23e6eafb4715ee50" alt="" width="1268" height="644" data-path="Accounting/images/Quotes-31.png" />

Once the full required deposit amount has been recorded, an <Icon icon="circle-check" color="green" /> icon will appear beside the "**Deposit**" field on the quote, indicating that the deposit has been collected. You also have the option to void the quote transaction.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-30.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=d0603cd71f5ff2b86842243483ea9d2e" alt="" width="1897" height="835" data-path="Accounting/images/Quotes-30.png" />


## Related topics

- [Collecting a Partial Payment ](/Accounting/Invoices/collecting-partial-payments.md)
- [Recording payments](/Accounting/Invoices/Recording_payments.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.