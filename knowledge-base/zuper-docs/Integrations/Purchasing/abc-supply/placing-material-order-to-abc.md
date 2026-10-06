---
title: "Placing Material Order to ABC"
source: https://docs.zuper.co/Integrations/Purchasing/abc-supply/placing-material-order-to-abc.md
fetched_at: 2026-10-06T13:30:38.528Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Placing Material Order to ABC

## Overview

When a customer accepts a quote that includes ABC Supply products, you can place the material order at your ABC Supply branch without leaving Zuper. Zuper reads the line items on the quote, pre-fills your ABC Supply supplier details, and submits the order directly to ABC Supply.

The **ABC Order ID** that appears on your Zuper document is ABC Supply's material order number, and it is your reference for tracking or modifying the order directly with ABC Supply.

Once ABC Supply accepts the material order, delivery status updates sync back to the material order in Zuper automatically. Because the material order is built from the quote, you do not need to re-enter any line items manually, and you can also create a material order from a quote in **Draft** or **Accepted** status.

## Before you begin

* Your ABC Supply integration must be installed, and at least one branch must be active. See [Connecting ABC Supply](#).
* Your parts catalog must be linked to ABC Supply. See [Linking catalog products to ABC Supply](#).
* The line items on your quote must be mapped to ABC Supply catalog products. Only mapped items appear in the item-selection step.

## Configure purchasing settings

1. Go to **Settings**.
2. Select **Purchasing**, then select **General Settings**.
3. Select the **Material Orders** tab.
4. Confirm the following values under **General Settings**.

| Setting | Required value |
| - | - |
| **Require Supplier Approval** | Yes |
| **Automatically Send MO to Supplier after Approval** | Yes (recommended) |

5. Select **Save**.

<Note>
  **Require Supplier Approval** must be set to **Yes** when you place material orders through ABC Supply. The setting label uses Zuper's current UI terminology, and it applies to all suppliers, including ABC Supply. If this setting is off, material orders bypass the supplier acceptance step, though the **ABC Order ID** still appears on the material order once ABC Supply processes it.
</Note>

## Create a material order from a quote

### Open the quote and start a material order

1. Go to **Accounting** and select **Quotes**.
2. Open the quote that contains the line items you want to procure from ABC Supply.
3. Select **New** at the top right, then select **Material Order** from the dropdown. Zuper creates this as a Material Order document internally and submits it to ABC Supply as a material order.

The **Supplier** panel on the right side of the quote shows the ABC Supply supplier pre-filled when your line items are linked to the ABC Supply catalog. If you updated the supplier assignment on the quote directly, the material order inherits that change automatically.

### Select the items to purchase

1. Select the checkbox next to each item you want to include. All items are selected by default.
2. Use the **Search Item** field to find a specific item by name.
3. Review the **Required Qty** column. This value is pulled from the quote line item.
4. Confirm the correct ABC Supply branch is assigned to each item in the **Select Supplier** column.

<Note>
  The ABC Supply supplier branch is pre-filled based on your catalog settings. Each branch uses the **Ship-To Account** you assigned during setup, so changing the branch also changes the Ship-To Account and might affect the unit price.
</Note>

5. Select **Next**.

### Select SKU options

1. Review the items listed under each product heading.
2. Select the checkbox next to the specific SKU variant you want to order.
3. Confirm the **Unit Purchase Cost** for each selected variant. Prices are pulled from the ABC Supply catalog and reflect the Ship-To Account assigned to the selected branch.
4. Adjust the **Required Qty** field if needed.
5. Select the appropriate unit of measure from the dropdown next to the quantity field.
6. Add any line-level notes in the **Remarks** field.

<Note>
  The unit purchase cost updates based on the unit of measure you select, but the quantity does not. Verify the quantity and unit of measure together before you proceed, since both values determine the total material order amount sent to ABC Supply.
</Note>

### Complete the primary details

1. Enter a **MO Title**. Zuper pre-fills this as "MO for Quote" followed by the quote number, and you can edit it.
2. Select a **Delivery Method**. Select **Direct Shipment to Job's Site** to send materials to the job address on the quote.
3. Select a **Delivery Time**, for example, Anytime.
4. Select a **Template** for the material order document.
5. Select a **Payment Term**, for example, Immediate.
6. Enter a **Required By** date. This field is mandatory.
7. Add any order-level notes in the **Remarks** field.
8. Select **Create Material Order**.

<Note>
  If your quote includes items from multiple suppliers, Zuper creates a separate material order for each supplier in a single step. Each material order appears individually under the **Material Orders** panel on the quote.
</Note>

<iframe src="https://player.vimeo.com/video/1217578363?title=0&byline=0&portrait=0" title="Create a material order from a quote with ABC Supply items" className="w-full aspect-video" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />

## What happens after you create the material order

### Draft status and submission

Zuper creates the material order document in **Draft** status and links it to the quote under the **Material Orders** panel in the right sidebar. The **ABC Order ID** field is empty at this stage, since ABC Supply has not yet created the material order on their end.

To move the material order forward, open it and select **Mark as Submitted**.

<Note>
  If **Automatically Send MO to Supplier after Approval** is enabled, Zuper sends the material order to ABC Supply as soon as it clears the approval step, and no manual send is needed.
</Note>

### Supplier accepted status and ABC Order ID

Once ABC Supply accepts the material order, Zuper updates the material order status to **Supplier Accepted**, populates the **ABC Order ID** field with ABC Supply's material order number, and records the **MO Sent Date**.

The **ABC Order ID** is your material order reference in ABC Supply's system. Use this number when contacting your branch, requesting changes, or tracking fulfillment outside Zuper.

### Delivery status updates

ABC Supply pushes delivery status updates back to the material order in Zuper.

| Status | What it means |
| - | - |
| **In Transit** | Materials have left the ABC Supply warehouse |
| **Arrived** | Materials have arrived at the delivery address |
| **Delivered** | Materials have been delivered to the delivery recipient |

### Receive items after delivery

1. Open the material order from the **Purchasing** module or from the **Material Orders** panel on the quote.
2. Select **Receive Items**.
3. Enter the quantity received for each line item.
4. Select a delivery location if applicable.
5. Select **Confirm**.

Zuper records the inward transaction and updates the material order status to **Fulfilled** or **Partially Fulfilled**.

## Add an ABC Supply product to a material order

<Note>
  The **Add product from ABC Supply** option appears only when the supplier on the material order is an ABC Supply branch. If you do not see this option, confirm the correct supplier is selected.
</Note>

1. Go to the **Purchasing** module and select **Material Orders**.
2. Open an existing draft material order, or select **+ New Material Order** to create a new one.
3. Select **+ Add** in the **MO Items** section.
4. Select **Add product from ABC Supply** from the dropdown.
5. Select the product you want to order in the **Supplier Product** field.
6. Select the variant, for example, Brown or Gray, in the **Option** field.
7. Enter the quantity and select the unit of measure, for example, PC or SQ, in the **Required Qty** field.
8. Review the **Unit Purchase Cost**. Zuper populates this from the ABC Supply catalog, priced against the Ship-To Account on the selected branch, and you can update it if needed.
9. Add any notes in the **Remarks** field. This step is optional.
10. Select **Add Product**. The product appears in **MO Items** with the supplier SKU, option, and cost pre-filled.

Repeat these steps for each additional ABC Supply product you want to add.

## Limitations

Once a material order is submitted and ABC Supply has created the material order on their end, the following restrictions apply.

<Note>
  **Cancel** and **Delete** are only available while the material order is in **Draft** status. Once submitted, you cannot cancel or delete it from Zuper. Contact ABC Supply directly with your **ABC Order ID** to coordinate any changes, and then update the **Remarks** field on the material order in Zuper for your records.
</Note>

<Note>
  Editing a line item on a submitted material order pulls the price from your Zuper catalog, not the current ABC Supply supplier price. If the catalog price has not been updated, the line item cost might be set to \$0.
</Note>

## FAQs

<AccordionGroup>
  <Accordion title="Can I create a material order from a quote that is still in Draft status?">
    Yes, you can create a material order from a quote in either **Draft** or **Accepted** status. The quote does not need to be accepted by the customer before you order materials.
  </Accordion>

  <Accordion title="The ABC Supply supplier is not pre-filled on one of my items. What should I do?">
    This means the line item is not linked to an ABC Supply catalog product. Confirm the item is mapped to the correct ABC Supply SKU in **Parts and Services**. See [Linking catalog products to ABC Supply](#) for guidance.
  </Accordion>

  <Accordion title="The ABC Order ID is not appearing on my material order. What does that mean?">
    The **ABC Order ID** is ABC Supply's material order number, and it populates only after ABC Supply accepts the material order and creates it in their system. If the field remains empty after submission, verify that **Require Supplier Approval** is set to **Yes** and that the material order has been sent to ABC Supply. If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>

  <Accordion title="The unit purchase cost changed when I selected a different unit of measure. Is that expected?">
    Yes, the unit purchase cost from ABC Supply is tied to both the unit of measure and the **Ship-To Account** assigned to your branch, so selecting a different unit of measure updates the cost accordingly. Always confirm the unit of measure and cost together before you create the material order.
  </Accordion>

  <Accordion title="I need to cancel a material order I already submitted. What can I do?">
    Contact ABC Supply directly with your **ABC Order ID** to arrange a cancellation, and then add a note in the **Remarks** field of the material order in Zuper to record the outcome. If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>

## Related articles

* [Connecting ABC Supply](https://docs.zuper.co/Integrations/Purchasing/abc-supply/connecting-abc-supply)
* [Linking catalog products to ABC Supply](https://docs.zuper.co/Integrations/Purchasing/abc-supply/setup-your-abc-catalog)
* [Creating a material order from a quote with SRS items](https://docs.zuper.co/Integrations/Purchasing/Creating%20a%20Purchase%20Order%20from%20a%20Quote%20with%20SRS%20Items)


## Related topics

- [Placing Material Order to SRS](/Integrations/Purchasing/Creating a Purchase Order from a Quote with SRS Items.md)
- [Setup Your ABC Catalog](/Integrations/Purchasing/abc-supply/setup-your-abc-catalog.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.