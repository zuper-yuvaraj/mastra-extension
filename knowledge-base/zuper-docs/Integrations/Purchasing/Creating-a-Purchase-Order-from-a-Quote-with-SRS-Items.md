---
title: "Placing Material Order to SRS"
source: https://docs.zuper.co/Integrations/Purchasing/Creating%20a%20Purchase%20Order%20from%20a%20Quote%20with%20SRS%20Items.md
fetched_at: 2026-10-06T13:30:36.772Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Placing Material Order to SRS

<Frame>
  **Navigation**: *Accounting → Quotes → Quote → New → Material Order*
</Frame>

## Overview

When a customer accepts a quote that includes SRS Distribution products, you can place the material order at your SRS branch without leaving Zuper. Zuper reads the line items on the quote, pre-fills your SRS supplier details, and sends the material order (MO) directly to SRS. Once SRS accepts the order, the SRS Order ID, delivery status updates, and supplier invoice sync back to the MO automatically — so your procurement and billing records stay in step.

Because the MO is built from the quote, you do not need to re-enter any line items manually. You can also create a MO from a quote in Draft or Accepted status, so you do not need to wait for customer acceptance before ordering materials.

***

## Before you begin

Three things must be in place before you create a MO from an SRS quote:

* Your SRS Distribution integration must be installed and at least one branch must be active. See [SRS Distribution integration — setup and branch management](/integrations/purchasing/srs-distribution-setup).
* Your parts catalog must be linked to SRS. See [Linking SRS products to your Parts and Services catalog](/integrations/purchasing/srs-catalog-linking).
* The line items on your quote must be mapped to SRS catalog products. Only mapped items appear in the item-selection step. You can still add items to a quote that you do not plan to procure from SRS.

### Configure purchasing settings

Before you create your first SRS material order, confirm the following settings are in place.

1. Go to **Settings**.
2. Select **Purchasing**, then select **General Settings**.
3. Select the **Material Orders** tab.
4. Under **General Settings**, confirm the following values:

| Setting | Required value |
| - | - |
| **Require Supplier Approval** | Yes |
| **Automatically Send MO to Supplier after Approval** | Yes (recommended) |

5. Select **Save**.

<Note>
  **Require Supplier Approval** must be set to **Yes** when placing orders to SRS Distribution. If this setting is off, MOs bypass the supplier acceptance step. The SRS Order ID will still appear on the MO once SRS processes the order.
</Note>

***

## Create a material order from a quote

<iframe src="https://player.vimeo.com/video/1201741636?badge=0&autopause=0&player_id=0&app_id=58479" title="MO Creation from Quote" className="w-full aspect-video" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

### Open the quote and start a material order

1. Go to **Accounting** from the left navigation menu and select **Quotes**.
2. Open the quote that contains the line items you want to procure from SRS.
3. Select **New** at the top right of the quote, then select **Material Order** from the dropdown.

<Note>
  The **Supplier** panel on the right side of the quote shows the SRS supplier pre-filled when your line items are linked to the SRS catalog. If you updated the supplier assignment on the quote directly, the MO inherits that change automatically.
</Note>

### Select the items to purchase

The **Select the items you want to purchase** dialog opens, listing all eligible line items from the quote.

1. Select the checkbox next to each item you want to include in the MO. All items are selected by default.
2. Use the **Search Item** field to find a specific item by name.
3. Review the **Required Qty** column. This value is pulled from the quote line item.
4. In the **Select Supplier** column, confirm that the correct SRS branch is assigned to each item.

<Note>
  The SRS Supplier branch is pre-filled based on your catalog settings. You can change the branch for an individual item by selecting a different option from the **Select Supplier** dropdown.
</Note>

5. Select **Next**.

### Complete the material order details

The **Create Material Order** screen opens. For each product group, you will see the available SKU variants from SRS.

**Select SKU options**

1. Review the items listed under each product heading.
2. Select the checkbox next to the specific SKU variant — for example, a color or size option, you want to order.
3. Confirm the **Unit Purchase Cost** for each selected variant. Prices are pulled from the SRS catalog and updated based on the unit of measure.
4. Adjust the **Required Qty** field if needed.
5. Select the appropriate unit of measure from the dropdown next to the quantity field.
6. Add any line-level notes in the **Remarks** field.

<Note>
  The unit purchase cost updates based on the unit of measure you select, but the quantity does not. Verify the quantity and unit of measure together before proceeding — both values determine the total order amount sent to SRS.
</Note>

**Complete the primary details**

1. Enter a **MO Title**. This is pre-filled as "MO for Quote" followed by the quote number and can be edited.
2. Select a **Delivery Method**. Select **Direct Shipment to Job's site** to send materials to the job address on the quote.
3. Select a **Delivery Time** — for example, **Anytime**.
4. Select a **Template** for the MO document.
5. Select a **Payment Term** — for example, **Immediate**.
6. Enter a **Required By** date. This field is mandatory.
7. Add any order-level notes in the **Remarks** field.
8. Select **Create Material Order**.

<Note>
  If your quote includes items from multiple suppliers, Zuper creates a separate MO for each supplier in a single step. Each MO appears individually under the **Material Orders** panel on the quote.
</Note>

***

## What happens after you create the MO

### Draft status and submission

The MO is created in **Draft** status and linked to the quote under the **Material Orders** panel in the right sidebar. The **SRS Order ID** field on the MO is empty at this stage.

To move the MO forward, open it and select **Mark as Submitted**.

<Note>
  If **Automatically Send MO to Supplier after Approval** is enabled in your purchasing settings, Zuper sends the MO to SRS as soon as it clears the approval step — no manual send is needed.
</Note>

### Supplier accepted status and SRS Order ID

Once SRS accepts the order, Zuper automatically updates the MO status to **Supplier Accepted**, populates the **SRS Order ID** field with the order reference number from SRS, and records the **MO Sent Date**.

The SRS Order ID appearing on the MO confirms that SRS has accepted and is processing your order.

### Delivery status updates

SRS pushes delivery status updates back to the MO in Zuper. The **Delivery Status** field reflects the current state of the shipment:

| Status | What it means |
| - | - |
| **In Transit** | Materials have left the SRS warehouse |
| **Arrived** | Materials have arrived at the delivery address |
| **Delivered** | Materials have been delivered to the delivery recipient |

### Receive items after delivery

After the materials are delivered, verify receipt in Zuper.

1. Open the MO from the **Purchasing** module or from the **Material Orders** panel on the quote.
2. Select **Receive Items**.
3. Enter the quantity received for each line item.
4. Select a delivery location if applicable.
5. Select **Confirm**.

Zuper records the inward transaction and updates the MO status to **Fulfilled** or **Partially Fulfilled** depending on whether all items were received.

### Invoice sync from SRS

When SRS issues an invoice for the delivered materials, it syncs automatically to the MO in Zuper. The MO status updates to **Invoiced**.

<Note>
  You do not need to manually enter the SRS invoice. Zuper fetches it automatically once SRS marks the order as invoiced on their end.
</Note>

***

## Add an SRS product to a material order

<Note>
  The **Add product from SRS** option appears only when the supplier on the material order is an SRS Distribution branch. If you do not see this option, confirm that the correct suppliers are selected on the material order.
</Note>

1. Go to the **Purchasing** module and select **Material Orders**.
2. Open an existing draft material order, or select **+ New Material Order** to create a new one.
3. In the **MO Items** section, select **+ Add**.
4. From the dropdown, select **Add product from SRS**. The **Add Product from SRS \[Branch Name] catalog** dialog opens.
5. In the **Supplier Product** field, select the product you want to order from the SRS catalog.
6. In the **Option** field, select the variant you need — for example, a color such as Brown or Gray.
7. In the **Required Qty** field, enter the quantity. Then select the unit of measure from the adjacent dropdown — for example, PC or RL.
8. Review the **Unit Purchase Cost** field. Zuper populates this automatically from the SRS catalog. Update it if needed.
9. In the **Remarks** field, enter any notes or special instructions for this line item. This step is optional.
10. Select **Add Product**. The product appears as a new line item in the **MO Items** section, with the supplier SKU, option, and cost pre-filled.

Repeat these steps for each additional SRS product you want to add to the material order.

<Tip>
  To view all products available in an SRS branch catalog, go to **Suppliers**, open the branch supplier record, and select the **Product Catalog** tab. Each product lists its supplier SKU, unit purchase cost, and available options.
</Tip>

<Frame>
  <img src="https://mintcdn.com/zuperinc/au8aWaUadg5puHZB/images/wl6-1.png?fit=max&auto=format&n=au8aWaUadg5puHZB&q=85&s=19ddae33aa3b11f324c63644211e14a6" alt="Wl6 1" width="1920" height="827" data-path="images/wl6-1.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/eZGuR-IaOqouJWQp/images/aproSRS1.png?fit=max&auto=format&n=eZGuR-IaOqouJWQp&q=85&s=6d7abce59d613e9b15a609efa76ccb88" alt="Apro SRS1" width="1649" height="713" data-path="images/aproSRS1.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/eZGuR-IaOqouJWQp/images/aproSRS2.png?fit=max&auto=format&n=eZGuR-IaOqouJWQp&q=85&s=840636091b0873b9e59f02aae7a08c4e" alt="Apro SRS2" width="1658" height="690" data-path="images/aproSRS2.png" />
</Frame>

## Limitations

Before you submit a MO, confirm all item selections, quantities, and delivery details. Once a MO is submitted, the following restrictions apply:

<Warning>
  **Cancel** and **Delete** are only available while the MO is in **Draft** status. Once a MO is submitted, you cannot cancel or delete it from Zuper. Contact SRS directly to coordinate any changes, then update the **Remarks** field on the MO in Zuper for your records.
</Warning>

<Warning>
  Editing a line item on a submitted MO pulls the price from your Zuper catalog, not from the current SRS supplier price. If the catalog price has not been updated, the line item cost may be set to \$0. Review your catalog pricing before editing line items on a submitted MO.
</Warning>

***

## FAQs

<AccordionGroup>
  <Accordion title="Can I create a MO from a quote that is still in Draft status?">
    Yes. You can create a MO from a quote in either Draft or Accepted status. The quote does not need to be accepted by the customer before you order materials.
  </Accordion>

  <Accordion title="The SRS supplieis not pre-filled on one of my items. What should I do?">
    This means the line item is not linked to an SRS catalog product. Go to your Parts and Services settings and confirm the item is mapped to the correct SRS SKU. See [Linking SRS products to your Parts and Services catalog](/integrations/purchasing/srs-catalog-linking) for guidance.
  </Accordion>

  <Accordion title="The SRS Order ID is not appearing on my MO. What does that mean?">
    The SRS Order ID populates only after SRS accepts the order. If the field remains empty after submission, verify that **Require Vendor Approval** is set to **Yes** in your purchasing settings and that the MO has been sent to SRS. If the issue continues, contact [support@zuper.co](mailto:support@zuper.co).
  </Accordion>

  <Accordion title="The unit purchase cost changed when I selected a different unit of measure. Is that expected?">
    Yes. The unit purchase cost from SRS is tied to the unit of measure. Selecting a different unit of measure — for example, switching from each to pallet — updates the cost accordingly. Always confirm the unit of measure and cost together before creating the MO.
  </Accordion>

  <Accordion title="I need to cancel a MO I already submitted. What can I do?">
    Cancel and Delete are not available once a MO is submitted. Contact SRS directly to arrange a cancellation, then add a note in the **Remarks** field of the MO in Zuper to record the outcome. If the issue continues, contact [support@zuper.co](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>

***

## Related articles

* [Connect your SRS account](/Integrations/Purchasing/SRS-setup)
* [Setup your catalog with SRS products](/Integrations/Purchasing/Link%20Catalog%20Products%20to%20SRS)
* [Using SRS pricing on your proposals](/Integrations/Purchasing/Creating%20a%20CPQ%20proposal%20with%20SRS%20pricing)
* [Understanding purchase order status](/Purchasing/Purchase-Orders/Purchase-order-status)


## Related topics

- [Placing Material Order to ABC](/Integrations/Purchasing/abc-supply/placing-material-order-to-abc.md)
- [Connect Your SRS Account](/Integrations/Purchasing/SRS-setup.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.