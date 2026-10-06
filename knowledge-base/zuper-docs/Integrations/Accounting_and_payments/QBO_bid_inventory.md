---
title: "Inventory sync"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/QBO_bid_inventory.md
fetched_at: 2026-10-06T13:30:21.523Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Inventory sync

QuickBooks Bi-Directional Inventory Sync lets you keep all your inventory items and their quantities in sync between QuickBooks Online and Zuper.

This allows you to use one system as the system of origin for products while consuming them in transactions on both systems. The quantities will be kept in sync on both systems.

## Pre-Requisites

1. You need to install the QuickBooks integration.
2. Set the '**Sync Product Masters**' configuration to '**Yes**.'
3. Enable categories on QuickBooks Online so the bidirectional sync functions correctly.
4. Since QuickBooks Online allows negative quantities when consumption exceeds the available stock, turn on the '**Allow Negative Stock Balance**' setting in Zuper (Organization Settings -> Parts and Service Settings).
5. In Zuper, set the '**Choose Module to Track Consumption**' setting (Organization Settings -> Parts and Service Settings) to Invoice.
6. The sync will not function properly if this setting is set to '**Job**,'' **Quotation**,' or '**None**.'

## How to use

You must set the following configurations for the bidirectional sync to function correctly:

1. **Choose Product Master** – Select the system where you will create new products, specifying whether products will be added initially in Zuper or QuickBooks Online. This setting determines how the sync operates, so ensure you create parts only in the selected system.
2. **Default Product Location** – Enter the default location for products created when synced from QuickBooks Online. This is necessary because QuickBooks Online does not support locations for inventory and non-inventory items.
3. **Product Minimum Quantity** – Set the minimum quantity for the product at the default location.
4. **Non-Inventory Product Quantity** – Set the default quantity for non-inventory items from QuickBooks Online to be created in Zuper. This is required since QuickBooks does not support quantities for non-inventory items.

Once you configure these settings, the bidirectional sync between QuickBooks Online and Zuper will be established.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/QB88.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=9928c96567796ccfd457524792a7eef7" alt="" width="807" height="608" data-path="images/QB88.png" />

Creating a part, product, or service on Zuper syncs with QuickBooks Online if 'Zuper' is selected as the product master. Similarly, if 'QuickBooks Online' is chosen as the product master, the sync happens in the reverse direction.

When a part or product is consumed in Zuper, its quantity updates in QuickBooks Online, and vice versa. This happens regardless of which system is set as the product master, ensuring that item quantities stay in sync between both systems.

<Note>
  Note: If the product categories in QuickBooks are enabled, the integration will consider both the category and the name when checking for duplicates.
</Note>

## Limitations

1. When an inventory item syncs from QuickBooks Online, it is always synced as a product, and its location is set to a default location, which can be modified as needed.
2. When a non-inventory item syncs from QuickBooks Online, it is always synced as a part, with a default quantity assigned to the configured location, which can be adjusted as needed.
3. Quantity changes are always synced to the default configured location.
4. If Zuper is selected as the '**Product Master**,' the quantity sync for invoices created in QuickBooks Online will not work as expected.


## Related topics

- [Inventory sync](/Integrations/Accounting_and_payments/QBD_Reverse_Inventory.md)
- [Setup the integration](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.