---
title: "Inventory sync"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/QBD_Reverse_Inventory.md
fetched_at: 2026-10-06T13:30:23.849Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Inventory sync

## Overview

Quickbooks Desktop Bi-Directional Inventory sync allows you to keep all your inventory items and their quantities in sync between Quickbooks Desktop and Zuper.

The records pushed from Zuper will be reflected in the web connector, and if you have enabled auto sync, the records will be synced automatically; if not, you should update the records manually.

## Before you get started

1. You need to install the QuickBooks integration.
2. Set the '**Sync Product Masters**' configuration to '**Yes**'.
3. Enable categories on QuickBooks Desktop for the bidirectional sync to function correctly.
4. Since QuickBooks Desktop allows negative quantities when consumption exceeds the available stock, turn on the '**Allow Negative Stock Balance**' setting in Zuper (**Organization Settings -> Parts and Service Settings**).
5. In Zuper, set the '**Choose Module to Track Consumption**' setting (**Organization Settings -> Parts and Service Settings**) to Invoice.
6. The sync will not function properly if this setting is set to '**Job**', '**Quotation**' or '**None**'.

## How to use

You must set the following configurations for the bidirectional sync to function correctly:

1. Choose Product Master (**Mandatory**): Selecting "**Zuper**" assigns it as the product master, while choosing "**QuickBooks Desktop**" assigns QuickBooks Desktop as the product master.

<Note>
  Note: To enable reverse inventory sync, ensure "**QuickBooks Desktop**" is selected as the product master.
</Note>

2. Product Minimum Quantity (**Mandatory**)–The minimum product quantity, entered as a numeric value, will be transferred from the corresponding QuickBooks Desktop inventory item to Zuper whenever a part or product is moved from QuickBooks Desktop with this minimum quantity applied here.
3. Non-Inventory Product Quantity (**Mandatory**)– The non-inventory item from QuickBooks Desktop will be synced with the default product quantity in Zuper, which is the non-inventory product quantity mentioned here.
4. Default Zuper Product Category (**Mandatory**) – Enter the default product category UID of Zuper for which the category of the QuickBooks Desktop inventory item gets synced.
5. Default Zuper Product Location (**Mandatory**) – Enter the default product location UID of Zuper for which the location of the QuickBooks Desktop inventory item gets synced. Select the "Update" button to connect QuickBooks Desktop with Zuper.

<Note>
  Note: The integration will not work as expected if any "**Mandatory**" fields are not given properly.
</Note>

## Bi-directional QuickBooks Desktop – Zuper Inventory Sync

* For advanced inventory customers, inventory site information from QuickBooks Desktop will be displayed in Zuper. If a location exists in Zuper, inventory items can be transferred from QuickBooks Desktop to Zuper.
* It is important to ensure that the location master is identical in both systems, as it is case-sensitive.
* Once you configure these settings, the bidirectional sync between QuickBooks Desktop and Zuper will be established.
* Creating a part, product, or service on Zuper syncs with QuickBooks Desktop if 'Zuper' is selected as the product master.
* Similarly, if 'QuickBooks Desktop' is chosen as the product master, the sync happens in the reverse direction
* When a part or product is consumed in Zuper, its quantity updates in QuickBooks Desktop, and vice versa. This happens regardless of which system is set as the product master, ensuring that item quantities stay in sync between both systems.

### Existing product modifications in QuickBooks Desktop and Zuper

If a product with the same name already exists in Zuper and a matching product is created in QuickBooks Desktop, the product quantity in Zuper will automatically update during the reverse sync.

If a product already exists in Zuper and a new product with a different name is created in QuickBooks Desktop, the new product will be added to Zuper during the reverse sync.

Before count changes:

**QuickBooks Desktop:**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi1.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=dd2fbc91d98ce83d4171622c4299eec5" alt="" width="1918" height="1080" data-path="Integrations/Accounting_and_payments/Qbi1.png" />

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi2.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=b4dd15254e6d95345d3a1e7879454c57" alt="" width="1918" height="1032" data-path="Integrations/Accounting_and_payments/Qbi2.png" />

**Zuper:**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi3.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=c0875da7fe3eb4d10fe997e731f424e7" alt="" width="1918" height="882" data-path="Integrations/Accounting_and_payments/Qbi3.png" />

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi4.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=940b511d01fd946d99b0890c60c1bb2d" alt="" width="1918" height="892" data-path="Integrations/Accounting_and_payments/Qbi4.png" />

### Quantity Update in QuickBooks Desktop

Whenever a purchase order is created or an inventory adjustment is made in QuickBooks Desktop, we sync the quantity update in Zuper.

Before count changes: **QuickBooks Desktop**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi5.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=3e215df8f88dae1d257aaa116b275cf9" alt="" width="1920" height="1007" data-path="Integrations/Accounting_and_payments/Qbi5.png" />

**Zuper:**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi6.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=eeb03399d3d49fdf4bb8e87df76089c2" alt="" width="1918" height="881" data-path="Integrations/Accounting_and_payments/Qbi6.png" />

After count changes: **QuickBooks Desktop**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi77.jpg?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=edaf37c45b10b01861069cd115d3fe04" alt="" width="1638" height="847" data-path="Integrations/Accounting_and_payments/Qbi77.jpg" />

**Zuper:**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi8.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=2727e15c49edac22fa1711bf0248c612" alt="" width="1918" height="887" data-path="Integrations/Accounting_and_payments/Qbi8.png" />

### Quantity adjustment in QuickBooks Desktop

You can adjust the quantity of the purchased items.

In QuickBooks Desktop, under the "**Inventory**," select "**Adjust Quantity / Value on Hand**." Select the adjustment type as "**Quantity**" and fill in other details.

* If you add the quantity in "**New Quantity**," QuickBooks Desktop will adjust the existing quantity of the inventory line item in Zuper.
* If you modify the quantity difference, QuickBooks Desktop will add the quantity to your existing inventory line item in Zuper.
* If you add the quantity in "**New Quantity**" and as "**New Line Item**," QuickBooks Desktop will create a new location, if available in Zuper, with the new quantity of the inventory line item in Zuper.

Before count changes:

**QuickBooks Desktop**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi9.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=40466d21d228668356287bb21d819c2f" alt="" width="1920" height="1014" data-path="Integrations/Accounting_and_payments/Qbi9.png" />

**Zuper**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi10.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=b069ea2e4a6e7715e65e8f7865d7ddec" alt="" width="1918" height="882" data-path="Integrations/Accounting_and_payments/Qbi10.png" />

* If the quantity is reduced in QuickBooks Desktop, it will get decreased in Zuper at the designated location.
* If the quantity increases in QuickBooks Desktop, it will get added to the same configured location in Zuper.
* If only a single location exists in Zuper, any quantity adjustments will automatically apply to that location.

After count changes: **QuickBooks Desktop**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi11.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=ebae8a74b13087258d730919c8a3dcf4" alt="" width="1920" height="1005" data-path="Integrations/Accounting_and_payments/Qbi11.png" />

**Zuper**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi12.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=3761c0fdca819715b845328a66d7364f" alt="" width="1918" height="888" data-path="Integrations/Accounting_and_payments/Qbi12.png" />

### Handling service in QuickBooks Desktop

The service can be charged for the purchase, professional fees, and service charges. You can create a service item type from QuickBooks Desktop that will sync with Zuper's service.

In QuickBooks Desktop:

* Navigate to Inventory and select Service as the type.
* Fill in the required fields as needed.

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi13.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=8e50898d9053853ca4aa619bb6968a17" alt="" width="1920" height="976" data-path="Integrations/Accounting_and_payments/Qbi13.png" />

Syncing with Zuper:

* The connector can be set to run manually or automatically to sync data between QuickBooks Desktop and Zuper.
* The Service category in Zuper is determined based on the default settings configured.

### <img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi14.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=ee060b4f4504178bebd290f71b71c4c8" alt="" width="1918" height="887" data-path="Integrations/Accounting_and_payments/Qbi14.png" />

Handling Non-Inventory items in QuickBooks Desktop

The non-inventory item in QuickBooks Desktop is synced with Zuper's Part. The taxable and non-taxable options set in QuickBooks Desktop are also reflected in Zuper.

In QuickBooks Desktop, under "**Inventory**," under type, select "Non-Inventory Part." Add the "Serial Name/Number, Description, Manufacturer's Part Number, Price, Tax Code, and Account."

The minimum quantity and category of the part in Zuper is fetched from the configuration default settings.

**QuickBooks Desktop:**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi15.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=5523d7227a8f92f52470c11f80e3501b" alt="" width="1920" height="1006" data-path="Integrations/Accounting_and_payments/Qbi15.png" />

**Zuper:**

<img src="https://mintcdn.com/zuperinc/GxFqzfn7M9mS5su_/Integrations/Accounting_and_payments/Qbi16.png?fit=max&auto=format&n=GxFqzfn7M9mS5su_&q=85&s=242eb1d915fd061258c29e113641157a" alt="" width="1918" height="885" data-path="Integrations/Accounting_and_payments/Qbi16.png" />

<Note>
  Note: Settings -> Organization Settings -> Parts and Services Settings -> Choose module to track part consumptions -> Invoice (choose invoice only).
</Note>

### Important points to note

1. During setup, a default product category will be entered, and all products synced from QuickBooks Desktop to Zuper will be categorized under this default product category in Zuper.
2. The quantity tracking only applies to Inventory items in QuickBooks Desktop and not to Non-Inventory or Service items. Transfer transactions do not affect the total product quantity across locations and do not require synchronization.
3. Transfer transactions do not affect the total product quantity across locations and do not require synchronization.
4. Syncing product locations from QuickBooks Desktop to Zuper is not supported. Instead for users without advanced inventory in QuickBooks Desktop, a default location will be configured in the settings to manage product locations in Zuper.

To conclude, the bidirectional inventory sync between QuickBooks Desktop and Zuper ensures seamless and efficient inventory management by keeping all inventory items and quantities updated in real time.


## Related topics

- [Inventory sync](/Integrations/Accounting_and_payments/QBO_bid_inventory.md)
- [Setup the integration](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.