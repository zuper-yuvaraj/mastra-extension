---
title: "Recording payments"
source: https://docs.zuper.co/Accounting/Invoices/Recording_payments.md
fetched_at: 2026-10-06T13:29:52.010Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Recording payments

Managing payments efficiently is crucial for maintaining accurate financial records. In this article, we will guide you through the process of recording payments for invoices sent to customers.

In Zuper, you can manually log payments received for an invoice after it has been sent to the customer. This ensures that the invoice status is updated and helps maintain transparency in financial transactions.

<Frame>
  **Navigation**: *Accounting -> Invoices -> Invoice Listing Page -> Invoice Details -> More Actions-> Record Payment*
</Frame>

## **To Record a Payment**

* Navigate to the **Invoice Details** page of the invoice where you want to manually log the payment received.
* Click the "**More Actions"** button at the top right corner.
* Select "**Record Payment"** from the dropdown menu.

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/invoice27.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=73fc8119e43293ac13fa440e3ba71131" alt="Invoice27 Pn" width="1920" height="878" data-path="images/invoice27.png" />

* A dialog box will appear where you need to enter the payment details.

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/invoice28.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=28c1b6bb18e8df0a012e027f80f3125b" alt="Invoice28 Pn" width="1920" height="878" data-path="images/invoice28.png" />

1. **Choose Payment Mode** (*Mandatory*): Select the method used for the transaction. This includes Card, Bank Transfer, Check, Zuper Pay, Offline Cash, and Other third-party payment apps.
2. **Enter Amount Paid (In USD)** (*Mandatory*): Specify the exact amount received from the customer.
3. **Payment Reference Number**: Enter a reference number associated with the payment, such as a transaction ID or check number.
4. **Payment Date** (*Mandatory*): Choose the date of the payment using the date picker.
5. **Remarks**: Add any additional notes related to the payment, if necessary.
6. **Send Receipt / Thank You Note**: Check this box if you want to send a confirmation receipt or thank you message to the customer.
7. After entering the necessary details, click the "**Mark as Paid"** button to successfully record the payment. Once the payment is recorded, the invoice status will update accordingly, reflecting the recorded transaction and ensuring the customer’s commitment is accurately tracked.

<Note>
  Note: The invoice status is not updated immediately when a refund is initiated. The Partially Paid status will appear on the invoice only after the refund has been successfully transmitted to the customer's bank account in real time.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/A5oxd-qvglfYBqlW/images/Inv_refund.png?fit=max&auto=format&n=A5oxd-qvglfYBqlW&q=85&s=ef7541365865ffebb631061e916af90d" alt="Inv Refund" width="1920" height="878" data-path="images/Inv_refund.png" />
</Frame>

## Voiding a payment

When a payment has been recorded by mistake or entered with incorrect details, you can void it. Voiding cancels the payment record on that invoice and restores the outstanding balance. The invoice status updates automatically to reflect the change.

> **Note:** Voiding applies only to payments recorded manually in Zuper — for example, cash, check, or bank transfer. For payments processed through Zuper Pay, you need to issue a refund instead. See [Issuing refunds](https://docs.zuper.co/Zuper-pay/Refunds) for steps.

**Navigation:** *Accounting → Invoices → Invoice Details → Payment History*

1. Select the **Accounting** module from the left navigation menu and choose **Invoices**.
2. Select the invoice that contains the payment you want to void.
3. On the **Invoice Details** page, go to the **Payment History** section in the right panel.
4. Locate the payment you want to void.
5. Select the context menu (three-dot icon) next to the payment.
6. Select **Void**.
7. A confirmation dialog appears. Select **Confirm** to void the payment.

The payment status updates to **Voided**. The invoice balance is restored to reflect the outstanding amount.

## Deleting a payment mode

You can delete a payment mode from Zuper when it is no longer in use. Deleting a payment mode removes it from the list of available options across all invoices and quotes. This action cannot be undone.

> **Note:** Deleting a payment mode from Settings is different from voiding a payment on an invoice. Voiding cancels a specific payment transaction. Deleting a payment mode removes the payment method itself from your Zuper configuration.

**Navigation:** *Settings → Modules → Quotes & Invoices → Payment Modes & Terms*

1. Select **Settings** from the left navigation menu.
2. Under **Modules**, select **Quotes & Invoices**.
3. Select **Payment Modes & Terms**.
4. Under **Payment Mode**, locate the payment mode you want to delete.
5. Select the context menu (three-dot icon) next to the payment mode.
6. Select **Delete**.
7. A confirmation dialog appears. Select **Delete** to permanently remove the payment mode.

The payment mode is removed and will no longer appear as an option when recording payments.


## Related topics

- [Managing your invoices](/Accounting/Invoices/Managing_invoices.md)
- [Edit Paid & Partially Paid Invoices](/Accounting/Invoices/edit-paid-and-partially-paid-invoices.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.