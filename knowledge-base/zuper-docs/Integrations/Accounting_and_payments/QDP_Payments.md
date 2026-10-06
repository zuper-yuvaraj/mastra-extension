---
title: "Payments sync"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/QDP_Payments.md
fetched_at: 2026-10-06T13:30:24.593Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Payments sync

The sync will happen between QuickBooks Desktop payments and Zuper payments.

This allows you to use one system as the system of origin for payments while updates are synced on both systems.

## Before you get started

* The payment mode used for the payment in QuickBooks Desktop must be created/already existing in Zuper.
* The web connector must either be actively running in auto-sync mode
  or manually initiated by the user.

## Set sync between QuickBooks Desktop Zuper

1. The QuickBooks Desktop payments can be viewed against their corresponding invoices in Zuper for the fully or partially paid invoice.

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QDP1.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=c97ca616a2f895231ccfd3f31e091e5a" alt="" width="1679" height="778" data-path="Integrations/Accounting_and_payments/QDP1.png" />

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QDP2.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=1bbcfdb3076e57eb6dfd46e239028874" alt="" width="1671" height="701" data-path="Integrations/Accounting_and_payments/QDP2.png" />

2\. Payments made through QuickBooks Desktop for partially paid invoices can be viewed in Zuper and linked to their respective invoices.

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QDP3.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=fadd96c03b7402266938e72b490ca66b" alt="" width="1667" height="851" data-path="Integrations/Accounting_and_payments/QDP3.png" />

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QDP4.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=0ba3a86e4e0a090e35f5a3a9094a894a" alt="" width="1676" height="701" data-path="Integrations/Accounting_and_payments/QDP4.png" />

3\. When a user makes a partial or complete payment in QuickBooks Desktop using the "**Cash or Online**" payment method, Zuper updates it with the same payment method through reverse sync.

<Note>
  **Note**: Zuper will void the previous payment in QuickBooks Desktop for edited payments and update it with the new payment details.
</Note>

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QDP5.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=41645f2554376bcb1e2fbeee0fd51fa4" alt="" width="1666" height="778" data-path="Integrations/Accounting_and_payments/QDP5.png" />

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QDP6.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=72f98666871b5c524807ad5f8fd0af4a" alt="" width="1676" height="701" data-path="Integrations/Accounting_and_payments/QDP6.png" />

4\. When a user voids a payment in QuickBooks Desktop, Zuper reflects this change, with the payment history in the invoice section indicating the voided payment synced from QuickBooks Desktop.

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QDP7.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=c97f3508ac9371813ca76cfbd3ed7d61" alt="" width="1920" height="890" data-path="Integrations/Accounting_and_payments/QDP7.png" />

Zuper's reverse payment sync with QuickBooks Desktop simplifies managing payment errors by automatically reversing them and updating records in real time. This saves time, reduces mistakes, and keeps your financial data accurate and consistent.


## Related topics

- [Setup the integration](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online.md)
- [Module & Field Level Mapping](/Integrations/Accounting_and_payments/QBD_Sync.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.