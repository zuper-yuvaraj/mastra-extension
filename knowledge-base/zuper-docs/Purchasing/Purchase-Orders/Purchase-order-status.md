---
title: "Understanding Purchase Order Status"
source: https://docs.zuper.co/Purchasing/Purchase-Orders/Purchase-order-status.md
fetched_at: 2026-10-06T13:29:56.359Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Understanding Purchase Order Status

Once a Purchase Order (PO) is created in Zuper, it goes through various stages from initiation to fulfillment. Understanding each status helps track progress, manage procurement efficiently, and take appropriate action at each stage.

This guide outlines the different PO statuses, what they mean, and the actions you can perform at each stage.

## Navigating to Purchase Order Status

To view the status of a purchase order:

1. Click the **Purchasing** module from the left navigation menu and select **Purchase Orders**.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO1.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=aaa8fe4d2057684ea22faf61a2055c5f" alt="PO1 Pn" width="1908" height="805" data-path="images/PO1.png" />

2. A list of existing purchase orders will be displayed, showing key details such as **PO ID**, **Title**, **Status**, **Vendor Name**, **Total Amount**, and more.
3. Select any PO from the listing to open its **Details** page.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO19.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=e11ad0f4db9e61cf733ad9bcbd1723f4" alt="PO19 Pn" width="1914" height="839" data-path="images/PO19.png" />

4. The **current status** of the PO is displayed prominently at the top of the screen.

## Statuses of a Purchase Order

### 1. Draft

This status indicates that the purchase order has been created but **not yet submitted for approval**.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO20.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=fcb6479aea27ca754fa0b127f34ba854" alt="PO20 Pn" width="1908" height="875" data-path="images/PO20.png" />

**Available Actions:**

* **Mark as Submitted** – This moves the PO to the next stage.
* **More Actions** menu (top-right):
  1. Edit PO: Update the details of the purchase order.
  2. Clone: Create a duplicate of the purchase order.
  3. Cancel PO: Mark the purchase order as cancelled.
  4. Delete PO: Permanently remove the purchase order from the system.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO21.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=7805f07b4cfba16dd0e5be8a46b4ba20" alt="PO21 Pn" width="1911" height="824" data-path="images/PO21.png" />

### 2. Submitted

This status indicates that the purchase order has been submitted and is **ready to be sent to the vendor**.

* Click **Send to Vendor** to send the purchase order details to the vendor in XLS or PDF format.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO22.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=65bae419c78a6fd72da02c6faaa47929" alt="PO22 Pn" width="1911" height="858" data-path="images/PO22.png" />

**Available Actions** (via **More Actions** menu):

* Mark as Sent to Vendor – Update the purchase order status to indicate it has been sent to the vendor.
* Edit PO – Modify the details of the purchase order.
* Clone – Create a duplicate of the purchase order.
* Cancel PO – Change the purchase order status to *Cancelled*.
* Delete PO – Permanently remove the purchase order from the system.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO23.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=42e3d3b984f80e9b3057ac2fe5c45b50" alt="PO23 Pn" width="1911" height="868" data-path="images/PO23.png" />

<Note>
  **Note:** This status applies when no approval hierarchy is configured in the organization settings. If an approval hierarchy is enabled, the purchase order will first follow the approval workflow before it can be sent to the vendor. For more details on configuring and managing approval workflows, refer to the [Approval Hierarchy](https://docs.zuper.co/Purchasing/Purchase-Orders/Purchase-order-status#approval-hierarchy%E2%80%93related-statuses) section.
</Note>

<Note>
  For POs linked to an integrated vendor such as SRS or ABC Supply, **Send to Vendor** is a direct action — no email modal appears. Status changes for these POs are driven automatically by vendor webhooks and do not require a manual trigger.
</Note>

**Mark as Invoiced** — Available under **More Actions**. Use this to record that the vendor has issued an invoice for items delivered so far. You can attach the invoice document and view it in the **Status History** panel. This does not move the PO to Invoiced status as a CTA — it is a manual record action only.

### 3. Sent to Vendor

This status indicates that the PO has been shared with the vendor and is now **ready for fulfillment tracking**.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO24.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=e2721848ebf1deaeca85e926c04b794a" alt="PO24 Pn" width="1912" height="872" data-path="images/PO24.png" />

You can initiate the receiving process by clicking the **Receive Items** button. While recording received items, you may need to provide the following details:

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO25.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=55a8d131c37c0bfb88da72be49b5d453" alt="PO25 Pn" width="1906" height="811" data-path="images/PO25.png" />

* **Receiving Qty** (mandatory): Enter the number of items received from the vendor.

<Note>
  **Note**: With purchase tax enabled for your organization, the Receive Items page shows Pre-Tax Cost and Purchase Tax %. These work together with the Unit Purchase Price/Unit Cost to calculate your actual item cost. See [Purchase Tax](/Inventory_Management/Parts_Services/Purchase-Tax) for how these values update the part/product master.
</Note>

* **Delivery Location**: Not mandatory if the delivery method is **Direct Shipment** or **Vendor Pickup**. If the delivery method is **Warehouse**, the location will be prefilled. For custom line items, location selection is not available as these items are not linked to a predefined inventory location.
* **Serial No.**: Only applicable if a location is selected. The count should match the quantity received (for example, if two items are received, enter two serial numbers such as “4, 5”).

If a location is selected, all received items are automatically recorded as inward transactions and added to the Parts Inventory in the Parts & Services module. If no location is selected, the inward transaction will not be recorded in the module.

When a line item on a purchase order includes an option — such as a color or size — that option now appears in the PO PDF. The **Options** column is visible in the PDF only when at least one line item has an option selected. If you edit the PO after sending it to a vendor, the next PDF you send reflects the updated options. PDFs shared via **Print → Share via email** also include the latest options, whether sent before or after the vendor send.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFwxnxla5j9SpaIb/images/PO_opti.png?fit=max&auto=format&n=PFwxnxla5j9SpaIb&q=85&s=25811c39c5edf54adc645ddfb0185388" alt="PO Opti" width="1390" height="742" data-path="images/PO_opti.png" />
</Frame>

<Note>
  **Note**: This applies to Zuper's internal PO template only. Custom or third-party templates are not affected.
</Note>

**Available Actions (via More Actions menu):**

* Clone
* Cancel PO
* Delete PO

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO26.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=c3029f5db930a478b6e3885c03681f92" alt="PO26 Pn" width="1920" height="831" data-path="images/PO26.png" />

The **Status History** panel on a PO details page logs every status change with a timestamp, the user who made it, and a versioned PDF or XLS document where one was generated. Zuper captures a document snapshot automatically each time you edit the PO or send it to a vendor — you do not manage versions manually. If the PO was sent by email with a link instead of an attachment, that link is preserved in the panel so you have a complete audit record of what the vendor received.

<Note>
  Note: To access the panel, go to **Purchasing** → **Purchase Orders** → select a PO → **Status History**. Select the file name or download icon on any entry to open or save the document for that version.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFwxnxla5j9SpaIb/images/PO_His.png?fit=max&auto=format&n=PFwxnxla5j9SpaIb&q=85&s=b03433d0a09b258cf9f4dfaf07f85ef2" alt="PO His" width="1920" height="878" data-path="images/PO_His.png" />
</Frame>

### 5. Partially fulfilled

This status means only some items in the purchase order have been received from the vendor. The remaining items are still outstanding.

**Available actions**

* **Receive Items** — Wait for the remaining items and receive them together when they arrive.
* **Roll-up Remaining as New PO** — Go to **More Actions** and select **Roll-up Remaining as New PO** to create a new purchase order for the outstanding items. When you do this, the **original PO** automatically moves to Fulfilled status.

<Note>
  A job linked to this PO cannot be closed while the PO is in **Partially Fulfilled** status. Once the roll-up items are created as a new PO, the linked job can be closed.
</Note>

All status transitions are recorded in both the **Status History** and **Activity** sections of the PO.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO27.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=e9d48a12308f6f242f258ddc630722ba" alt="PO27 Pn" width="1912" height="823" data-path="images/PO27.png" />

**Available Actions:**

* **Receive Remaining Items in Bulk**: Wait until all pending items arrive and receive them together using the **Receive Items** button.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO28.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=b3cfc55b2da6edbb24ce527f73866410" alt="PO28 Pn" width="1917" height="870" data-path="images/PO28.png" />

**Mark all as received** — Marks all items on the PO as received in a single action, moving the PO to Fulfilled status.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFwxnxla5j9SpaIb/images/Rece_all.png?fit=max&auto=format&n=PFwxnxla5j9SpaIb&q=85&s=fab0cfce69306c7c92ed3032e416b13f" alt="Rece All" width="1920" height="878" data-path="images/Rece_all.png" />
</Frame>

* **Roll-up Remaining as New PO**: From the More Actions menu, select **Roll-up Remaining as New PO** to generate a new purchase order for the pending items.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO29.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=44c75ff3db9c5d335805f16c2981f39e" alt="PO29 Pn" width="1917" height="827" data-path="images/PO29.png" />

* Clone
* Delete PO

<Tip>
  **Tip:** After rolling up and creating the new PO, ensure the current PO is closed to prevent discrepancies in associated Jobs or Quotes.
</Tip>

### Identifying a rolled-up PO

When a new PO is created from a roll-up, Zuper marks it with a **Rolled-Up PO** icon next to the PO number. This icon appears on the:

• **PO details** page

• **PO listing** page

• **Vendor PO** page

• Associated **Jobs** and **Quotes**

This approach ensures workflow continuity across associated modules, such as Jobs and Quotes, while keeping records clean and accurate.

<Note>
  Note: When you hover over the Rolled-up PO icon, you will see the number of the parent PO from which the rolled-up PO came.

  Click on the Rolled-PO icon to open the parent PO in a new tab.

  If the parent PO is deleted, the current Rolled-up PO blue icon will be grayed out, and you will be able to hover and see only the parent PO number; you will not be able to view the parent PO.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/d0VAZfgc7QCgoHry/images/POu5.png?fit=max&auto=format&n=d0VAZfgc7QCgoHry&q=85&s=6eb86ff30f77e99ae10b1dc139234b3c" alt="P Ou5" width="1920" height="878" data-path="images/POu5.png" />
</Frame>

### 6. Fulfilled

This status indicates that all items on the purchase order have been received from the vendor. A PO reaches **Fulfilled** status in two ways:

* All items are received in full via **the Receive Items process**.
* A roll-up PO is created from a **Partially Fulfilled** PO — the original PO moves to **Fulfilled** status automatically.

<img src="https://mintcdn.com/zuperinc/DUNJ5iW5ANOPhxHO/images/PO65.png?fit=max&auto=format&n=DUNJ5iW5ANOPhxHO&q=85&s=a6ff18d639bdac73d6f46c3a984effd9" alt="PO65 Pn" width="1913" height="877" data-path="images/PO65.png" />

**Note:** Once a PO is marked as **Fulfilled**:

* Any associated Jobs or Quotes will automatically receive the items from this PO.
* This ensures a smooth handover of materials and keeps your supply chain records accurate and up to date.

### 7. Invoiced

This status indicates that the vendor has issued an invoice for the delivered items and it has been recorded against the purchase order. You can attach the invoice document directly to this status entry and view it in the **Status History** panel.

You can now select **Mark as Paid** to complete the financial process.

**Edit rules at this status:**

* Requested Qty is editable.
* Inline edits are allowed for Receiving Qty, Price, Location, and Remarks.
* You cannot reduce Requested Qty below the fulfilled quantity.

Adding a new line item moves the PO back to *Partially Fulfilled*\*.

* Removing a line item that is partially fulfilled is not allowed.

<img src="https://mintcdn.com/zuperinc/DUNJ5iW5ANOPhxHO/images/PO66.png?fit=max&auto=format&n=DUNJ5iW5ANOPhxHO&q=85&s=6b225fd61497e78a9db3d02a271fef21" alt="PO66 Pn" width="1910" height="874" data-path="images/PO66.png" />

When marking a PO as paid, a remarks dialog box will appear, allowing you to record the payment amount and any additional comments (optional).

<img src="https://mintcdn.com/zuperinc/DUNJ5iW5ANOPhxHO/images/PO67.png?fit=max&auto=format&n=DUNJ5iW5ANOPhxHO&q=85&s=52d4c97461f288057a225c59af401ca6" alt="PO67 Pn" width="1920" height="875" data-path="images/PO67.png" />

### 8. Paid

This status indicates that payment for the vendor invoice has been successfully completed. All financial obligations related to the purchase order have now been settled.

<Warning>
  **Warning**: No edits are allowed at this status. Adding, removing, and editing line items are all locked. A warning appears if you attempt to make changes.
</Warning>

<img src="https://mintcdn.com/zuperinc/DUNJ5iW5ANOPhxHO/images/PO68.png?fit=max&auto=format&n=DUNJ5iW5ANOPhxHO&q=85&s=0551176eaf59a93757ad7e7346d80db6" alt="PO68 Pn" width="1920" height="876" data-path="images/PO68.png" />

## Editing a purchase order

Zuper uses a two-tier edit model for purchase orders. The type of edit available to you depends on the current status of the PO.

### Hard edit

A hard edit lets you modify the full PO details — including primary details, line items, and vendor information. It is available via the **More Actions** menu at the following statuses: Draft, Submitted, Approved, Rejected, and Vendor Rejected.

<Note>
  Selecting **Edit PO** from More Actions at any of these statuses moves the PO back to **Draft**. All prior status history is retained.
</Note>

### Line item edit

A line item edit lets you add or modify individual line items without moving the PO back to Draft. It is available across most statuses up to and including Invoiced (before Paid). The PO status stays intact except in the following cases:

* Adding a new line item when the PO is in **Fulfilled** or **Invoiced** status moves the PO back to **Partially Fulfilled**.

| Status | Requested Qty | Add line item | Remove line item | Inline edits |
| - | - | - | - | - |
| Draft | Editable | Allowed | Allowed | Allowed |
| Submitted | Editable | Allowed | Allowed | Allowed |
| Approved | Editable | Allowed | Allowed | Allowed |
| Rejected | Editable | Allowed | Allowed | Allowed |
| Vendor Rejected | Editable | Allowed | Allowed | Allowed |
| Partially Fulfilled | Cannot go below fulfilled qty | Allowed | Not allowed for partially fulfilled items | Allowed |
| Fulfilled | Cannot go below fulfilled qty | Allowed — triggers rollback to Partially Fulfilled | Not allowed for partially fulfilled items | Allowed |
| Invoiced | Cannot go below fulfilled qty | Allowed — triggers rollback to Partially Fulfilled | Not allowed for partially fulfilled items | Allowed (Receiving Qty, Price, Location, Remarks) |
| Paid | Locked | Locked | Locked | Locked |

## Additional Statuses Based on Organization Settings

Some purchase order (PO) statuses appear conditionally, depending on how your organization has configured **Approval Hierarchy** and **Vendor Approval** settings.

<Frame>
  These settings can be accessed under:<br />**Settings -> Modules -> Purchasing -> General Settings**
</Frame>

<img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO57.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=ec1572f8099bc46a4295537a99e54c14" alt="PO57 Pn" width="1915" height="817" data-path="images/PO57.png" />

### Approval Hierarchy–Related Statuses

If your organization has set up or configured an approval hierarchy, a submitted PO will move through the following statuses:

**Configuration Path:**

* **Enable Approval Hierarchy:** *Settings -> Modules -> Purchasing -> General Settings -> Choose Approval Hierarchy*

<img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO58.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=aa415e6e4c231673377e5d7be52b5729" alt="PO58 Pn" width="1914" height="758" data-path="images/PO58.png" />

* **Create & Manage Hierarchies:** *Settings -> Miscellaneous -> Approval Hierarchy*

<img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO60.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=d57a6858a82a0f18ee98cfea22268c44" alt="PO60 Pn" width="1904" height="750" data-path="images/PO60.png" />

**1. Awaiting Approval**

Indicates the PO is pending review by one or more approvers as defined in the configured hierarchy. Relevant approvers are notified via email and prompted to take action.

**Approver Actions:**

* Approve or reject the PO directly from the email notification.
* Log in to the Zuper web application to approve, reject, and/or add comments.

All approval and rejection comments are recorded in the **Activity** section for tracking and transparency.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO42.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=b8fb6454f76d80d3323ad21defad7f75" alt="PO42 Pn" width="1910" height="859" data-path="images/PO42.png" />

**Available Actions (via More Actions menu):**

* Mark as Approved / Rejected– Approve or decline the PO. ( Available to Admin users)
* Clone – Create a duplicate PO.
* Cancel – Mark the PO as Cancelled.
* Delete – Permanently remove the PO from the system.

**2. Approved**

Indicates the PO has been approved internally by all required approvers and is ready to be sent to the vendor.

<Note>
  **Note:** No further edits are allowed once the PO is in this status.
</Note>

**Available Actions (via More Actions menu):**

* Mark as Sent to Vendor – Update the status to indicate the PO has been sent.
* Clone – Create a duplicate PO.
* Cancel PO– Mark the PO as Cancelled.
* Delete PO– Permanently remove the PO from the system.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO43.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=242162664fc9bfc7138ca172e6a484b4" alt="PO43 Pn" width="1915" height="872" data-path="images/PO43.png" />

**3. Rejected**

Indicates the PO has been reviewed and declined by an approver.

<Note>
  **Note:** The PO cannot proceed to vendor communication unless it is revised and resubmitted. Rejection comments are recorded in the **Activity** section for transparency.
</Note>

**Available Actions (via More Actions menu):**

* Edit PO – Update the PO and resubmit for approval.
* Clone – Create a duplicate PO.
* Cancel PO – Mark the PO as Cancelled.
* Delete PO – Permanently remove the PO from the system.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO44.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=73e781647899b07480ceb85d531e7c67" alt="PO44 Pn" width="1917" height="848" data-path="images/PO44.png" />

### Vendor Approval–Related Statuses

If your organization has enabled vendor approval after a purchase order (PO) is sent, you can record the vendor’s response. In such cases, the following statuses may appear:

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO45.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=6219d5b1ada11f55384711bf8f26bab6" alt="PO45 Pn" width="1915" height="852" data-path="images/PO45.png" />

**Configuration Path:**<br />**Enable Vendor Approval**: *Settings -> Modules -> Purchasing -> General Settings -> Require Vendor Approval -> Toggle "**Yes**"*

<img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO59.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=96be0de8ad65dfb5526cb91965e74d7f" alt="PO59 Pn" width="1913" height="801" data-path="images/PO59.png" />

**1. Vendor Accepted**

Indicates the vendor has reviewed and accepted the PO. You can now proceed to fulfillment tracking using the **Receive Items** option.

**Available Actions (via More Actions menu):**

* Clone – Create a duplicate PO.
* Cancel PO – Mark the PO as Cancelled.
* Delete PO – Permanently remove the PO from the system

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO46.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=b20f48e3f6409bd4e000f925702ac757" alt="PO46 Pn" width="1913" height="850" data-path="images/PO46.png" />

**2. Vendor Rejected**

Indicates the vendor has reviewed and declined the PO. If provided, the rejection reason will be visible in the **Activity** section.

**Note:** During this stage, the PO will not proceed to fulfillment.

**Available Actions (via More Actions menu):**

* Clone – Create a duplicate PO.
* Cancel PO – Mark the PO as Cancelled.
* Delete PO – Permanently remove the PO from the system

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO47.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=ec20820d06e6abaff852f23754678b84" alt="PO47 Pn" width="1918" height="805" data-path="images/PO47.png" />

<Card title="Status Flow Summary" icon="sparkles">
  * **Approval Hierarchy** enables the PO to move through the following statuses: *Awaiting Approval → Approved / Rejected.*
  * **Vendor Approval** enables the PO to move through the following statuses: *Vendor Accepted / Vendor Rejected.*
  * If neither setting is configured, the PO moves directly from *Submitted → Sent to Vendor → Partially Fulfilled* or *Fulfilled → Invoiced → Paid* based on the items received and payment recorded.
</Card>


## Related topics

- [Work Order Status](/Purchasing/Work Orders/Work order status.md)
- [Managing Purchase Order](/Purchasing/Purchase-Orders/Manage-Purchase-Order.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.