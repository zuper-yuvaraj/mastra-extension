---
title: "Understanding Material Request Status"
source: https://docs.zuper.co/Purchasing/Material-Requests/Material-request-status.md
fetched_at: 2026-10-06T13:29:57.969Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Understanding Material Request Status

When a **Material Request (MR)** is created in Zuper, it progresses through several stages from initiation to fulfillment. Understanding what each status signifies allows you to track progress, manage procurement efficiently, and take appropriate actions at every stage.

This guide explains the different MR statuses, their meanings, and the actions you can perform at each stage.

# Navigating to Material Request Status

To view the status of a material request:

* Click the **Purchasing** module from the left navigation menu and select **Material Requests**.

<img src="https://mintcdn.com/zuperinc/3FEHP_44Ow5ZP2jg/images/1.png?fit=max&auto=format&n=3FEHP_44Ow5ZP2jg&q=85&s=0223efeae723f8b30f3937bf73b7cd22" alt="1 Pn" width="1917" height="848" data-path="images/1.png" />

* A list of existing material requests will be displayed, showing key details such as Material Request No., Material Request Title, Status, Total items, and more.
* Select any MR from the list to open its Details page.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/31.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=e6a6d35b2b5563cd5a0735d091138756" alt="31 Pn" width="1920" height="628" data-path="images/31.png" />

* The current status of the MR is displayed prominently at the top of the screen.

## Statuses of a Material Request

### 1. Draft

This status indicates that the material request has been created but not yet submitted for approval.

**Available Actions:**

* **Mark as Submitted** - This moves the MR to the next stage.

**More Actions menu (top-right):**

* **Edit** - Modify the details of the material request.
* **Clone** - Creates a duplicate of the current material request, including all items and details, allowing you to quickly generate a new request with similar information.
* **Cancel** - Change the material request status to Cancelled. Doing this will stop the material request from moving further in the process.
* **Delete** - Permanently removes the material request from the system.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/42.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=b495fb33e3cae00c3c8b7c99873ebbf9" alt="42 Pn" width="1918" height="563" data-path="images/42.png" />

### 2. Submitted

This status indicates that the material request has been submitted and is awaiting approval from the designated approvers. Once submitted, the relevant approvers are notified via email and prompted to take the necessary action.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/44.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=42d0e78c17098f078c35e18f77816bb5" alt="44 Pn" width="1920" height="715" data-path="images/44.png" />

**Approver Actions**:

* Approve or reject the MR directly from the email notification.
* Log in to the Zuper web application to approve, reject, and/or add comments.

All approval and rejection comments are automatically recorded in the Activity Section for tracking, accountability, and transparency.

<Note>
  Note: If your organization has enabled the Approval Hierarchy setting, the material request will require approval and will remain pending at this stage until an authorized user reviews and approves it.

  If the Approval Hierarchy is not enabled, the material request is automatically approved, allowing you to directly create a **Transfer Order** (TO) or **Purchase Order** (PO) without requiring additional approval.

  <img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/43.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=fcabc623accf9aef564a57dd7e47e4c4" alt="43 Pn" width="1915" height="661" data-path="images/43.png" />
</Note>

You can configure approval workflows from the settings as follows:

<AccordionGroup>
  <Accordion title="Enable Approval Hierarchy:">
    Navigate to Settings → Modules → Purchasing → General Settings → Material Requests → Choose Approval Hierarchy.

    <img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/45.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=a140382ac3db5ec99bf6d3a3e140cc6a" alt="45 Pn" width="1920" height="688" data-path="images/45.png" />
  </Accordion>

  <Accordion title="Create & Manage Hierarchies:">
    Navigate to Settings → Miscellaneous → Approval Hierarchy to define and manage approval levels.

    <img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/46.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=4127ada6b1a3f5645c88df53ff82ff0a" alt="46 Pn" width="1920" height="680" data-path="images/46.png" />
  </Accordion>
</AccordionGroup>

**Available Actions**:

* **Mark as Approved** – Approves the material request and moves it to the next stage in the workflow.

**More Actions menu (top-right)**:

* **Clone** - Creates a duplicate of the current material request, including all items and details, allowing you to quickly generate a new request with similar information.
* **Edit** – Opens the Material Request in edit mode, allowing you to modify existing details such as title, delivery method, parts, products, or other relevant fields.
* **Mark as Rejected** – Rejects the material request, preventing it from progressing further.
* **Cancel** – Changes the material request status to Canceled, stopping it from moving forward in the process.
* **Delete**: Permanently removes the material request from the system.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/47.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=31d0670ccae09dabf3a10fa1865f384a" alt="47 Pn" width="1920" height="737" data-path="images/47.png" />

### 3. Rejected

This status indicates that the material request has been reviewed and declined by an approver.

<Note>
  Note: The MR cannot proceed to procurement unless it is updated and resubmitted for approval.
</Note>

**Available Actions**:

* **Edit** – Update the material request as required and resubmit it for approval.
* **Clone** – Creates a duplicate of the current material request, including all items and details, allowing you to quickly generate a new request with similar information.
* **Delete** – Permanently removes the material request from the system.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/48.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=f9267f5009b77ec50b0116ca150dddbf" alt="48 Pn" width="1914" height="719" data-path="images/48.png" />

### 4. Approved

Indicates that the material request has been approved internally by all required approvers and is now ready to be converted into a Purchase Order or a Transfer Order, depending on material availability and procurement needs.

<Note>
  Note: Transfer Order creation is available only when the **Deliver to Warehouse** method is selected.
</Note>

**More Actions menu (top-right):**

* **Convert to Purchase Order** – Initiates a Purchase Order directly from the approved material request.
* **Convert to Transfer Order** – Initiates a Transfer Order if the requested materials can be fulfilled from existing stock in another location.
* **Clone** – Creates a duplicate of the current material request, including all items and details, allowing you to quickly generate a new request with similar information.
* **Cancel** – Cancels the approved material request, preventing further processing.
* **Delete** - Permanently removes the material request from the system.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/49.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=eafad089242749ec91348ca8b25f51db" alt="49 Pn" width="1920" height="753" data-path="images/49.png" />

#### Steps to Convert MR to Transfer Order (For In-stock items)

If the requested items are available in inventory, you can create a Transfer Order to move materials from the source location to the field technician’s delivery location.

* From the left panel of the material request details page, click **Transfer Order** or select **Convert to Transfer Order** under the **More Actions** menu.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/50.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=7ac24f9f634f789f5c264a5eb50c9e70" alt="50 Pn" width="1918" height="713" data-path="images/50.png" />

* The Parts & Products dialog appears, listing all requested items.
* Select the items to be transferred and provide the following details:
  1. **Transfer Quantity** – The number of units to be transferred.
  2. **From Location** – The source stock location.
  3. **To Location** – The destination location (pre-filled when creating the request).

<Note>
  Note: The From Location and To Location cannot be the same.
</Note>

* Once done, click **Proceed**.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/51.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=10ad51dd505b09a92aade4a0f54a10da" alt="51 Pn" width="1919" height="695" data-path="images/51.png" />

* The Create Transfer Order page opens. Review the details and click **Create Transfer Order(s)**.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/52.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=cf040e806887e6b596386c6493280a3e" alt="52 Pn" width="1917" height="864" data-path="images/52.png" />

A Transfer Order will be created for the requested items with a status of **Draft** in the Transfer Order module.

<Note>
  Note: Ensure that your organization has enabled the Transfer Order module to manage stock transfers. For more information on how to access and manage transfer orders, refer to the Transfer Orders article.
</Note>

#### Steps to Convert MR to Purchase Order (For Out-of-Stock Items)

If the items are not available in inventory, you can create a Purchase Order from a vendor.

* From the left panel of the material request details page, click **Purchase Order** or click “**Convert to Purchase Order**” at the top-right.
* The Parts & Products dialog appears with all requested items.

<Note>
  Note: Vendor mapping must be configured for the items before they can be converted into a Purchase Order. If vendor mapping is missing, you cannot create a Purchase Order for the MR items.
</Note>

* Select the required items to be purchased and choose the Vendor from the drop-down menu.
* Once chosen, click **Next**. The Create Purchase Order screen appears.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/54.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=fe53b3cb9a0d58e9046d0e378d70d322" alt="54 Pn" width="1908" height="846" data-path="images/54.png" />

* Fill in the necessary details and click **Create Purchase Order** to finalize.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/55.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=c512a7645dde71c4aa32a02bb2f1f51f" alt="55 Pn" width="1920" height="865" data-path="images/55.png" />

The newly created Purchase Order will then appear on the Purchase Orders listing page with a status of Draft.

<Note>
  Note: Ensure that your organization has enabled the Purchase Orders module to manage procurement. For more information on how to access and manage purchase orders, refer to the Creating a Purchase Order article.
</Note>

### 5. Ordered

This status indicates that the requested materials have been converted into either a **Transfer Order** or a **Purchase Order**. Once this conversion is completed, the material request status automatically updates to Ordered, confirming that the requested items have been formally placed.

<Note>
  Note: During this stage, you can track and monitor the status of your requested items from the right panel under Purchase Orders or Transfer Orders.
</Note>

Once the requested materials are transferred or purchased and delivered to the field technician, the material request status automatically updates to **Received**, and the request will be closed, indicating successful fulfillment.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/56.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=0b4ec563c9e01a487596658cc135c8e5" alt="56 Pn" width="1920" height="662" data-path="images/56.png" />

### 6. Received

This status indicates that the requested materials have been successfully delivered to the designated location and the material request has been fulfilled.

The status changes to **Received** automatically once the associated **Purchase Order** or **Transfer Order** has been marked as **completed**/fulfilled in the system.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/57.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=a5d330e78b254cb0a2ee92232e627cbb" alt="57 Pn" width="1920" height="658" data-path="images/57.png" />

## Impact on the Job & Quote

If the material request is associated with a Job/quote, the delivered items are automatically linked to that job/quote.

1. **For job**: The quantity of parts or products received will be reflected under Job > Details > Line Items> Part & Service Details.
2. **For quote**: The received parts or products will be displayed under Quote > Details > Parts & Products to ensure accurate visibility of material allocation against the quoted work.


## Related topics

- [Overview](/Purchasing/Material-Requests/Overview.md)
- [Understanding Material Order Status](/Zuper_for_Roofing/manage-material-order-and -work-order/material-orders/title-understanding-material-order-status-description-learn-what-each-material-order-status-means-in-zuper-for-roofing-and-which-actions-are-available-at-every-stage-understanding-material-order-s.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.