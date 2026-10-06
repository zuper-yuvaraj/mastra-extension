---
title: "Understanding Material Order Status"
source: https://docs.zuper.co/Zuper_for_Roofing/manage-material-order-and%20-work-order/material-orders/title-understanding-material-order-status-description-learn-what-each-material-order-status-means-in-zuper-for-roofing-and-which-actions-are-available-at-every-stage-understanding-material-order-s.md
fetched_at: 2026-10-06T13:30:43.117Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Understanding Material Order Status

> Learn what each Material Order status means in Zuper for Roofing and which actions are available at every stage.

# Material Order Status

Once a Material Order (MO) is created in Zuper, it goes through various stages from initiation to fulfillment. Understanding each status helps track progress, manage procurement efficiently, and take appropriate action at each stage.

This guide outlines the different MO statuses, what they mean, and the actions you can perform at each stage.

## Navigating to Material Order Status

To view the status of a material order:

1. Click the **Production** module from the left navigation menu and select **Material Orders**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO1-1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=c268a79c72e55efc403cdbcbc0f2cfde" alt="MO1 1" width="1916" height="844" data-path="images/MO1-1.png" />
</Frame>

2. A list of existing material orders will be displayed, showing key details such as **MO No**, **Title**, **Required by**, **Status**, **Associated**, and more.
3. Select any MO from the listing to open its **Details** page.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS-1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=1e8bab3254c499fca0082e45252d15aa" alt="MS 1" width="1916" height="814" data-path="images/MS-1.png" />
</Frame>

4. The **current status** of the MO is displayed prominently at the top of the screen.

## Statuses of a Material Order

### 1. Draft

This status indicates that the material order has been created but **not yet submitted for approval**.

**Available Actions:**

* **Mark as Submitted** – This moves the MO to the next stage.
* **More Actions** menu (top-right):
  1. Edit MO: Update the details of the material order.
  2. Clone: Create a duplicate of the material order.
  3. Cancel MO: Mark the material order as canceled.
  4. Delete MO: Permanently remove the material order from the system.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=defa65e7163386106bc7fa5f76ab554e" alt="MS1" width="1920" height="862" data-path="images/MS1.png" />
</Frame>

### 2. Submitted

This status indicates that the material order has been submitted and is **ready to be sent to the supplier**.

* Click **Send to Supplier** to send the material order details to the supplier in XLS or PDF format.

**Available Actions** (via **More Actions** menu):

* Mark as Sent to Supplier – Update the material order status to indicate it has been sent to the supplier.
* Edit MO – Modify the details of the material order.
* Clone – Create a duplicate of the material order.
* Cancel MO – Change the material order status to *Cancelled*.
* Delete MO – Permanently remove the material order from the system.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS2-1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=a5079b844ad427511b9906b761737566" alt="MS2 1" width="1912" height="868" data-path="images/MS2-1.png" />
</Frame>

<Note>
  **Note:** This status applies when no approval hierarchy is configured in the organization settings. If an approval hierarchy is enabled, the material order will first follow the approval workflow before it can be sent to the supplier. For more details on configuring and managing approval workflows, refer to the [Approval Hierarchy](https://docs.zuper.co/Zuper_for_Roofing/Material-order-status#approval-hierarchy%E2%80%93related-statuses) section.
</Note>

<Note>
  For MOs linked to an integrated supplier such as SRS or ABC Supply, **Send to Supplier** is a direct action — no email modal appears. Status changes for these MOs are driven automatically by supplier webhooks and do not require a manual trigger.
</Note>

**Mark as Invoiced** — Available under **More Actions**. Use this to record that the supplier has issued an invoice for items delivered so far. You can attach the invoice document and view it in the **Status History** panel. This does not move the MO to Invoiced status as a CTA — it is a manual record action only.

### 3. Sent to Supplier

This status indicates that the MO has been shared with the supplier and is now **ready for fulfillment tracking**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS3.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=d54307b2ef271e26d432c2a817767b9c" alt="MS3" width="1920" height="876" data-path="images/MS3.png" />
</Frame>

You can initiate the receiving process by clicking the **Receive Items** button. While recording received items, you may need to provide the following details:

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS4.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=06b1d7b002478e2c9646321e70af24f3" alt="MS4" width="1917" height="880" data-path="images/MS4.png" />
</Frame>

* **Receiving Qty** (mandatory): Enter the number of items received from the supplier.

<Note>
  **Note**: With purchase tax enabled for your organization, the Receive Items page shows Pre-Tax Cost and Purchase Tax %. These work together with the Unit Purchase Price/Unit Cost to calculate your actual item cost. See [Purchase Tax](/Inventory_Management/Parts_Services/Purchase-Tax) for how these values update the part/product master.
</Note>

* **Delivery Location**: Not mandatory if the delivery method is **Direct Shipment** or **Supplier Pickup**. If the delivery method is **Warehouse**, the location will be prefilled. For custom line items, location selection is not available as these items are not linked to a predefined inventory location.
* **Serial No.**: Only applicable if a location is selected. The count should match the quantity received (for example, if two items are received, enter two serial numbers such as “4, 5”).

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS5.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=21cc2135fc9ff9db879cfce44e051770" alt="MS5" width="1829" height="791" data-path="images/MS5.png" />
</Frame>

If a location is selected, all received items are automatically recorded as inward transactions and added to the Parts Inventory in the Parts & Services module. If no location is selected, the inward transaction will not be recorded in the module.

When a line item on a material order includes an option — such as a color or size — that option now appears in the MO PDF. The **Options** column is visible in the PDF only when at least one line item has an option selected. If you edit the MO after sending it to a supplier, the next PDF you send reflects the updated options. PDFs shared via **Print → Share via email** also include the latest options, whether sent before or after the supplier send.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFwxnxla5j9SpaIb/images/PO_opti.png?fit=max&auto=format&n=PFwxnxla5j9SpaIb&q=85&s=25811c39c5edf54adc645ddfb0185388" alt="PO Opti" width="1390" height="742" data-path="images/PO_opti.png" />
</Frame>

<Note>
  **Note**: This applies to Zuper's internal MO template only. Custom or third-party templates are not affected.
</Note>

**Available Actions (via More Actions menu):**

* Mark all as received
* Mark as invoiced
* Edit MO
* Clone
* Cancel MO
* Delete MO

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS3.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=d54307b2ef271e26d432c2a817767b9c" alt="MS3" width="1920" height="876" data-path="images/MS3.png" />
</Frame>

The **Status History** panel on an MO details page logs every status change with a timestamp, the user who made it, and a versioned PDF or XLS document where one was generated. Zuper captures a document snapshot automatically each time you edit the MO or send it to a supplier — you do not manage versions manually. If the MO was sent by email with a link instead of an attachment, that link is preserved in the panel so you have a complete audit record of what the supplier received.

<Note>
  Note: To access the panel, go to **Purchasing** → **Material Orders** → select an MO → **Status History**. Select the file name or download icon on any entry to open or save the document for that version.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MMP.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=d65e15828e06affef4932139092d2ba4" alt="MMP" width="1916" height="859" data-path="images/MMP.png" />
</Frame>

### 5. Partially fulfilled

This status indicates that only a few items in the material order have been received from the supplier. The remaining items are still outstanding.

**Available actions**

* **Receive Items** — Wait for the remaining items and receive them together when they arrive.
* **Roll-up Remaining as New MO** — Go to **More Actions** and select **Roll-up Remaining as New MO** to create a new material order for the outstanding items. When you do this, the **original MO** automatically moves to Fulfilled status.

<Note>
  A job linked to this MO cannot be closed while the MO is in **Partially Fulfilled** status. Once the roll-up items are created as a new MO, the linked job can be closed.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS6-1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=b90101258437f92a6bf7ff824cdfca19" alt="MS6 1" width="1916" height="886" data-path="images/MS6-1.png" />
</Frame>

**Available Actions (via More Actions menu):**

* **Receive Remaining Items in Bulk**: Wait until all pending items arrive and receive them together using the **Receive Items** button.
* **Mark all as received**: Marks all items on the MO as received in a single action, moving the MO to Fulfilled status.
* **Roll-up Remaining as New MO**: From the More Actions menu, select **Roll-up Remaining as New MO** to generate a new material order for the pending items.
* **Clone**
* **Delete MO**

<Tip>
  **Tip:** After rolling up and creating the new MO, ensure the current MO is closed to prevent discrepancies in associated Jobs or Quotes.
</Tip>

### Identifying a rolled-up MO

When a new MO is created from a roll-up, Zuper marks it with a **Rolled-Up MO** icon next to the MO number. This icon appears on the:

* **MO details** page
* **MO listing** page
* **Supplier MO** page
* Associated **Jobs** and **Quotes**

This approach ensures workflow continuity across associated modules, such as Jobs and Quotes, while keeping records clean and accurate.

<Note>
  Note: When you hover over the Rolled-up MO icon, you will see the number of the parent MO from which the rolled-up MO came.

  Click on the Rolled-MO icon to open the parent MO in a new tab.

  If the parent MO is deleted, the current Rolled-up MO blue icon will be grayed out, and you will be able to hover and see only the parent MO number; you will not be able to view the parent MO.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS7-2.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=d6e5fa7b636dc50e7796789a94afdd9f" alt="MS7 2" width="1920" height="867" data-path="images/MS7-2.png" />
</Frame>

### 6. Fulfilled

This status indicates that all items on the material order have been received from the supplier. An MO reaches **Fulfilled** status in two ways:

* All items are received in full via **the Receive Items process**.
* A roll-up MO is created from a **Partially Fulfilled** MO — the original MO moves to **Fulfilled** status automatically.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS8-1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=2eb88f37486db11a3cb8335673c2a9bf" alt="MS8 1" width="1918" height="869" data-path="images/MS8-1.png" />
</Frame>

**Note:** Once an MO is marked as **Fulfilled**:

* Any associated Jobs or Quotes will automatically receive the items from this MO.
* This ensures a smooth handover of materials and keeps your supply chain records accurate and up to date.

### 7. Invoiced

This status indicates that the supplier has issued an invoice for the delivered items and it has been recorded against the material order. You can attach the invoice document directly to this status entry and view it in the **Status History** panel.

You can then select **Mark as Paid** to complete the financial process.

**Edit rules at this status:**

* Requested Qty is editable.
* Inline edits are allowed for Receiving Qty, Price, Location, and Remarks.
* You cannot reduce Requested Qty below the fulfilled quantity.

Adding a new line item moves the MO back to *Partially Fulfilled*\*.

* Removing a line item that is partially fulfilled is not allowed.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS11.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=048d3fe4864baef605261e8f85ad51a1" alt="MS11" width="1918" height="875" data-path="images/MS11.png" />
</Frame>

When marking an MO as paid, a remarks dialog box will appear, allowing you to record the payment amount and any additional comments (optional).

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS13.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=0102abbac5ce56c521c6b59d5e2ba2ea" alt="MS13" width="1913" height="870" data-path="images/MS13.png" />
</Frame>

### 8. Paid

This status indicates that payment for the supplier invoice has been successfully completed. All financial obligations related to the material order have now been settled.

<Warning>
  **Warning**: No edits are allowed at this status. Adding, removing, and editing line items are all locked. A warning appears if you attempt to make changes.
</Warning>

<Frame>
  <img src="https://mintcdn.com/zuperinc/98TJrPH8MNvi5pTx/images/most25.png?fit=max&auto=format&n=98TJrPH8MNvi5pTx&q=85&s=18a5fc3648bd9baf8045764183124ce6" alt="Most25" width="1920" height="878" data-path="images/most25.png" />
</Frame>

## Editing a material order

Zuper uses a two-tier edit model for material orders. The type of edit available to you depends on the current status of the MO.

### Hard edit

A hard edit lets you modify the full MO details — including primary details, line items, and supplier information. It is available via the **More Actions** menu at the following statuses: Draft, Submitted, Approved, Rejected, and Supplier Rejected.

<Note>
  Selecting **Edit MO** from More Actions at any of these statuses moves the MO back to **Draft**. All prior status history is retained.
</Note>

### Line item edit

A line item edit lets you add or modify individual line items without moving the MO back to Draft. It is available across most statuses up to and including Invoiced (before Paid). The MO status stays intact except in the following cases:

* Adding a new line item when the MO is in **Fulfilled** or **Invoiced** status moves the MO back to **Partially Fulfilled**.

| Status | Requested Qty | Add line item | Remove line item | Inline edits |
| - | - | - | - | - |
| Draft | Editable | Allowed | Allowed | Allowed |
| Submitted | Editable | Allowed | Allowed | Allowed |
| Approved | Editable | Allowed | Allowed | Allowed |
| Rejected | Editable | Allowed | Allowed | Allowed |
| Supplier Rejected | Editable | Allowed | Allowed | Allowed |
| Partially Fulfilled | Cannot go below fulfilled qty | Allowed | Not allowed for partially fulfilled items | Allowed |
| Fulfilled | Cannot go below fulfilled qty | Allowed — triggers rollback to Partially Fulfilled | Not allowed for partially fulfilled items | Allowed |
| Invoiced | Cannot go below fulfilled qty | Allowed — triggers rollback to Partially Fulfilled | Not allowed for partially fulfilled items | Allowed (Receiving Qty, Price, Location, Remarks) |
| Paid | Locked | Locked | Locked | Locked |

## Additional Statuses Based on Organization Settings

Some material order (MO) statuses appear conditionally, depending on how your organization has configured **Approval Hierarchy** and **Supplier Approval** settings.

<Frame>
  These settings can be accessed under:<br />**Settings -> Modules -> Production -> General Settings**
</Frame>

### Approval Hierarchy–Related Statuses

If your organization has set up or configured an approval hierarchy, a submitted MO will move through the following statuses:

**Configuration Path:**

* **Enable Approval Hierarchy:** *Settings -> Modules -> Production -> General Settings -> Choose Approval Hierarchy*

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MSS.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=a2d18bf5f8facca8b719972558280c3a" alt="MSS" width="1908" height="829" data-path="images/MSS.png" />
</Frame>

* **Create & Manage Hierarchies:** *Settings -> Miscellaneous -> Approval Hierarchy*

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MSA.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=49365e899f357a2381ed3013a0961471" alt="MSA" width="1902" height="866" data-path="images/MSA.png" />
</Frame>

**1. Awaiting Approval**

Indicates the MO is pending review by one or more approvers as defined in the configured hierarchy. Relevant approvers are notified via email and prompted to take action.

**Approver Actions:**

* Approve or reject the MO directly from the email notification.
* Log in to the Zuper web application to approve, reject, and/or add comments.

All approval and rejection comments are recorded in the **Activity** section for tracking and transparency.

**Available Actions (via More Actions menu):**

* Mark as Approved / Rejected– Approve or decline the MO. ( Available to Admin users)
* Clone – Create a duplicate MO.
* Cancel – Mark the MO as Canceled.
* Delete – Permanently remove the MO from the system.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO20SS.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=93fea1c8ae2b799be481b3a1d198ba15" alt="MO20SS" width="1920" height="874" data-path="images/MO20SS.png" />
</Frame>

**2. Approved**

Indicates the MO has been approved internally by all required approvers and is ready to be sent to the supplier.

<Note>
  **Note:** No further edits are allowed once the MO is in this status.
</Note>

**Available Actions (via More Actions menu):**

* Mark as Sent to Supplier – Update the status to indicate the MO has been sent.
* Clone – Create a duplicate MO.
* Cancel MO– Mark the MO as Canceled.
* Delete MO– Permanently remove the MO from the system.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO21S.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=8c50a479f08e6cf69169823937a4ee1a" alt="MO21S" width="1920" height="882" data-path="images/MO21S.png" />
</Frame>

**3. Rejected**

Indicates the MO has been reviewed and declined by an approver.

<Note>
  **Note:** The MO cannot proceed to supplier communication unless it is revised and resubmitted. Rejection comments are recorded in the **Activity** section for transparency.
</Note>

**Available Actions (via More Actions menu):**

* Edit MO – Update the MO and resubmit for approval.
* Clone – Create a duplicate MO.
* Cancel MO – Mark the MO as Cancelled.
* Delete MO – Permanently remove the MO from the system.

### Supplier Approval–Related Statuses

If your organization has enabled supplier approval after a material order (MO) is sent, you can record the supplier's response. In such cases, the following statuses may appear:

**Configuration Path:**<br />**Enable Supplier Approval**: *Settings -> Modules -> Production -> General Settings -> Require Supplier Approval -> Toggle "**Yes**"*

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS14-1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=10db2420326034ee9705bc08eb300d46" alt="MS14 1" width="1912" height="877" data-path="images/MS14-1.png" />
</Frame>

**1. Supplier Accepted**

Indicates the supplier has reviewed and accepted the MO. You can now proceed to fulfillment tracking using the **Receive Items** option.

**Available Actions (via More Actions menu):**

* Clone – Create a duplicate MO.
* Cancel MO – Mark the MO as Cancelled.
* Delete MO – Permanently remove the MO from the system.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS17.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=094ee61995c2f2be6882a4dc877a631d" alt="MS17" width="1912" height="886" data-path="images/MS17.png" />
</Frame>

**2. Supplier Rejected**

Indicates the supplier has reviewed and declined the MO. If provided, the rejection reason will be visible in the **Activity** section.

**Note:** During this stage, the MO will not proceed to fulfillment.

**Available Actions (via More Actions menu):**

* Clone – Create a duplicate MO.
* Cancel MO – Mark the MO as Cancelled.
* Delete MO – Permanently remove the MO from the system

<Card title="Status Flow Summary" icon="sparkles">
  - **Approval Hierarchy** enables the MO to move through the following statuses: *Awaiting Approval → Approved / Rejected.*
  - **Supplier Approval** enables the MO to move through the following statuses: *Supplier Accepted / Supplier Rejected.*
  - If neither setting is configured, the MO moves directly from *Submitted → Sent to Supplier → Partially Fulfilled* or *Fulfilled → Invoiced → Paid* based on the items received and payment recorded.
</Card>


## Related topics

- [Managing Material Order](/Zuper_for_Roofing/manage-material-order-and -work-order/material-orders/untitled-page-2.md)
- [Material Orders: An Overview](/Zuper_for_Roofing/manage-material-order-and -work-order/material-orders/material-orders-overview.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.