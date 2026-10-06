---
title: "Module & Field Level Mapping"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/QBD_Sync.md
fetched_at: 2026-10-06T13:30:26.499Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Module & Field Level Mapping

## Zuper Customer – QuickBooks Desktop Customers

Prerequisites If you want to sync all customers between QuickBooks Desktop and Zuper, please select “**Yes**” under the “**Customer Master Sync**” field on the App Configuration page.

Selecting this as “**No**” will only sync the customer as a part of the Quote or Invoice sync between the systems.

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/QDS2.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=e54278fa22b3e8099531c47ec5e6e716" alt="" width="1002" height="265" data-path="Integrations/Accounting_and_payments/QDS2.png" />

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QDS33.jpg?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=58d3255d9f55e8b0362a8f9737d7f035" alt="" width="1498" height="872" data-path="images/QDS33.jpg" />

<Note>
  **Note:** The tax-exempt information under the customer in Zuper will not be synced to Quick Books Desktop due to the limitation in the Quick Books Desktop API. Hence, you will need to update this information manually.
</Note>

## Zuper Parts & Services – QuickBooks Desktop Items & Services

Prerequisites:

The parts and services master sync should be “**Yes**” on the configuration page. If “**No**” is selected, the parts/services will be pushed whenever a new quote or invoice is created.

In Zuper, if a part or product is set to track quantity as "**Yes**," it is pushed to QuickBooks as inventory. If set to "**No**," it is pushed as non-inventory, while services in Zuper are pushed as item service in QuickBooks Desktop.

The various sync details:

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/QDS4.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=97ee40236a35e27ed5f451fb867dbf47" alt="" width="1045" height="424" data-path="Integrations/Accounting_and_payments/QDS4.png" />

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QDS34.jpg?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=8e76bc8888cf89c7420b4abbd96a7ff1" alt="" width="1593" height="869" data-path="images/QDS34.jpg" />

<Note>
  Note: You must create four custom fields (****QuickBooks Desktop Income Account, QuickBooks DesktopCOGS Account, QuickBooks Desktop Asset Account, and QuickBooks Desktop Expense Accoun****  t) in Zuper for every part, product, or service to map the QuickBooks Desktop Income Account, QuickBooks Desktop COGS Account, QuickBooks Desktop Asset Account, and QuickBooks Desktop Expense Account from QuickBooks Desktop. Ensure these fields match, as they are case-sensitive.
</Note>

<Note>
  Note: QuickBook Desktop does not support a first-class field called Category, and hence, it will not be synced with Zuper.
</Note>

## Zuper Quote – QuickBooks Desktop Estimate

The sync happens from Zuper Quote to QuickBooks Desktop Estimate.

Prerequisites: The Quote sync should be “**Yes**” on the configuration page; only Zuper Quote integration to Quick Books Desktop will happen. You can do three significant actions: *Quote Create Sync, Quote Update Sync, and Quote Deposit Payment Sync*.

The various sync details:

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/QDS6.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=2b43dcc3895bfe3b5baf52c2547a53f9" alt="" width="1039" height="354" data-path="Integrations/Accounting_and_payments/QDS6.png" />

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QDS35.jpg?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=cd803050f95a1f91cb247a101a0fd943" alt="" width="1459" height="851" data-path="images/QDS35.jpg" />

<Note>
  Note:

  * Quote sync happens from Zuper Quote to Quick Books Desktop only when the quote reaches the “**Sent**” status.
  * The fee entered in a Quote will not be pushed to QuickBooks Desktop.
  * If a quote includes a deposit amount, we will also push the deposit as a partial payment when creating the invoice from that quote to QuickBooks Desktop.
</Note>

## Zuper Invoice – QuickBooks Desktop Invoice

The sync happens from Zuper Invoice to QuickBooks Desktop Invoice. The sync from Zuper to QuickBooks occurs based on the status selected in the configuration settings.

You can do three significant actions: Invoice Create Sync, Invoice Update Sync, and Invoice Payment.

The various sync details:

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/QDS8.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=138e02ee0ade888f0d67aa1555e1ca28" alt="" width="1053" height="361" data-path="Integrations/Accounting_and_payments/QDS8.png" />

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QDS36.jpg?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=4b7a87e34c568b22f51afc5a70fbcf86" alt="" width="1631" height="874" data-path="images/QDS36.jpg" />

<Note>
  **Note:**

  * By default, we will create custom fields in Zuper named QuickBooks ID and QuickBooks Sequence ID. When cloning any invoice that has been pushed to QuickBooks Desktop, please remove both IDs; otherwise, the push will fail.
  * From Zuper’s side, we will create a payment mode if the payment mode between the system does not match.
  * The fee and tip entered in Zuper invoice will not be synced in Quickbooks desktop.
</Note>

## Zuper Payments – QuickBooks Desktop Payments

The sync will happen from Zuper payments to Quickbooks payments.

The various sync details:

* When Zuper pushes payments, they can be viewed against their corresponding invoices in QuickBooks Desktop.
* We will mark a payment as void whenever it is voided in Zuper.
* For seamless sync, the payment mode must be configured in Zuper and Quick Books Desktop. If it is not present, we will create it on Quick Books Desktop.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QDS37.jpg?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=eff87cf6328ec79ede01dc3a4fde01bb" alt="" width="1648" height="850" data-path="images/QDS37.jpg" />

### Points to note:

* QuickBooks Desktop does not retain the relationship between a quote and an invoice as Zuper does.
* You can sync customers or organizations from Zuper to QuickBooks Desktop. If you select organization syncing, we will push organization information only when creating transactions. A master sync of organizations is not possible.
* New features in Zuper's latest version, such as markup, Stock Transfer Order, etc., will not be pushed to QuickBooks Desktop.
* Multi-currency support is not available in Zuper.
* Classes handling is not managed.
* Credit memo and refund process scenarios are not handled.
* Custom field mapping capabilities are not handled for now.
* We recommend maintaining tax or discount in only one system. Either you can maintain tax or discount in QuickBooks Desktop or Zuper, not both.
* If the percentage or value of a discount changes in any transaction from the master value, a new discount item will be created in QuickBooks Desktop.
* If you add a custom line item to any quote or invoice in Zuper, the item  will be created as a service item in QuickBooks Desktop.


## Related topics

- [HubSpot SalesHub & Service Hub](/Integrations/CRM/Zuper_HubSpot_Integration.md)
- [Data Import](/Settings/Data_Adminstration/Data_Import.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.