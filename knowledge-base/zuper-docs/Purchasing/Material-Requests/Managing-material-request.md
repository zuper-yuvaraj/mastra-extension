---
title: "Managing Material Request"
source: https://docs.zuper.co/Purchasing/Material-Requests/Managing-material-request.md
fetched_at: 2026-10-06T13:29:57.588Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Managing Material Request

Material requests ensure that field technicians have the necessary parts and products for seamless job execution. Once a field technician submits a material request via the Zuper mobile app, administrators can track, manage, and fulfill these requests through the Material Requests module in the web application.

This guide walks you through accessing, managing, and fulfilling material requests, ensuring efficient inventory handling and procurement.

# Accessing the Material Request Listing Page

To view all material requests:

1. Click the **Purchasing** module from the left navigation menu and select Material Requests.

<img src="https://mintcdn.com/zuperinc/3FEHP_44Ow5ZP2jg/images/1.png?fit=max&auto=format&n=3FEHP_44Ow5ZP2jg&q=85&s=0223efeae723f8b30f3937bf73b7cd22" alt="1 Pn" width="1917" height="848" data-path="images/1.png" />

2. You’ll see a list of material requests with key details, including:
   * **Material Request No**. - This is the system-generated unique number assigned to each material request for easy identification.
   * **Material Request Title** - This is the name given to the material request, often auto-filled if created from a job or quote.
   * **Status** - Indicates the current stage of the material request. Statuses include:
     1. Draft – The request is still being prepared and has not been submitted.
     2. Submitted – The request has been submitted for review.
     3. Awaiting Approval – The request has been submitted and is pending action from an approver before it can proceed (Only applicable if approval hierarchy is configured).
     4. Approved – The request has been approved by authorized users (Only applicable if approval hierarchy is configured).
     5. Rejected – The request has been declined by the internal approver and cannot proceed further (Only applicable if approval hierarchy is configured).
     6. Ordered – The items in the request have been ordered through a Transfer Order or a Purchase Order.
     7. Received – The requested items have been delivered and recorded in the system.
     8. Canceled- The MR has been canceled and will not be processed further.
   * **Total Items** - Displays the total number of parts or products requested within the material request.
   * **Priority** - Categorizes the urgency of the request into:
     1. Low – Non-urgent request.
     2. Medium – Standard priority request.
     3. High – Needs to be addressed soon.
     4. Urgent – Requires immediate attention.
   * **Required By** - The deadline by which the materials are required.
   * **Associated** - Displays the job or quote linked to the material request, providing context on where or why the order originated.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/24.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=a4f65bd6c0890e0845ed7e3c5dae8510" alt="24 Pn" width="1912" height="499" data-path="images/24.png" />

## Exploring the Listing Page

The listing page is designed to provide a structured view of material requests, making it easier to track and manage them efficiently.

### Summary Cards

Enable Show KPIs to display the summary cards at the top of the listing page. These cards provide a quick snapshot of your material request pipeline, including:

* **Total Material Requests** – The total number of material requests created.
* **Submitted** – The number of material requests that have been submitted for approval.
* **Approved** – The number of material requests that have been authorized and are ready for procurement.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/25.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=db73cf497d10c33c234caf5253477b77" alt="25 Pn" width="1912" height="499" data-path="images/25.png" />

* **Ordered** – The number of material requests for which items have been ordered through a Transfer Order or Purchase Order.
* **Received** – The number of material requests for which all requested items have been received and recorded.
* **Rejected** – The number of material requests that have been declined and will not proceed further.

<Note>
  Note: The Approved and Rejected KPIs are displayed only if the Approval Hierarchy setting is enabled in your organization.
</Note>

These summary cards help you monitor your material request lifecycle at a glance, giving you visibility into how many requests are pending, progressing, or closed.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/26.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=6073dceab9398c2fcd89a76819148b82" alt="26 Pn" width="1920" height="533" data-path="images/26.png" />

### Customization Options

Tailor the listing view to match your workflow:

* Click the **Columns** button at the top-right corner of the screen to open a panel with Displayed Columns and Available Columns.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/27.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=956bed88bfadbeb23160c738e3346a68" alt="27 Pn" width="1920" height="535" data-path="images/27.png" />

* Hover over any column under **Available Columns** to reveal the option to add it or drag and drop it into the **Displayed Columns** section.
* Reorder fields by simply dragging and dropping columns within the Displayed Columns list.

This flexibility ensures that you see only the data most relevant to your operational preference.

### Search & Filtering

Quickly locate specific material requests using the search and filter tools:

* Use the **Search Bar** to look up material requests by title or MR Number.
* Apply filters to narrow down results based on:
  1. **Material Request Status** (e.g., Draft, Submitted, Approved)
  2. **Priority**
  3. **Material Request Date**, and more.

This functionality helps you quickly find what you need without scrolling through the entire list.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/28.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=6ec486c42ddc02ad78bb500a67f1332d" alt="28 Pn" width="1919" height="629" data-path="images/28.png" />

### Bulk Actions

Easily manage multiple material requests in one go. To do so,

* Select the checkboxes next to the material requests you want to update.
* A bottom bar appears with the following options:
  1. Click “**Update Status**” to update the status of the selected material requests in bulk.
  2. Click “**Update Priority**” to update the priority of the selected material requests in bulk.
  3. Click “**Delete**” to delete the selected material requests.

Bulk actions save time and ensure consistency across multiple records.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/29.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=99c07a7db05a5895ab4c5b3216f2e1e9" alt="29 Pn" width="1919" height="873" data-path="images/29.png" />

### Creating a New Material Request

To create a new material request from the listing page:

* Click the **+ New Material Request** button in the top-right corner.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/2.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=98cad3710f610bcaf9d28ccf94fab642" alt="2 Pn" width="1916" height="878" data-path="images/2.png" />

For step-by-step instructions on how to create a material request, refer to the [Creating a Material Request](https://docs.zuper.co/Purchasing/Material-Requests/Creating-material-request) article.

### Customize Your View

You can further refine how your material requests are displayed:

* Create and save personalized views based on your preferences.
* Set view-specific permissions to ensure the right team members have appropriate access.

For more information on how to create a new view and set permissions, refer to this [article](https://docs.zuper.co/Work_Order_Management/Jobs/managing_your_jobs#applying-filters).

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/30.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=947406897a34d14a76e0478fed78f13e" alt="30 Pn" width="1916" height="871" data-path="images/30.png" />

# Managing Material Request Details

Once a material request is created, the Material Request (MR) details page serves as the central hub for tracking and managing all aspects of the material request. The page features a three-column layout, providing quick access to relevant information and actions within each panel.

1. Click on any material request from the listing page to open its details.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/31.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=e6a6d35b2b5563cd5a0735d091138756" alt="31 Pn" width="1920" height="628" data-path="images/31.png" />

## Left Panel

The left panel displays key material request information, such as the MR title and current status, along with quick action buttons to order materials through a **Transfer Order** (TO) or **Purchase Order** (PO).

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/32.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=fec77dc3c81676ad037799edd9e4afcb" alt="32 Pn" width="1920" height="716" data-path="images/32.png" />

<Note>
  Note: A Transfer Order can be created from a Material Request only when the Delivery Method is set to Deliver to Warehouse.
</Note>

It also provides easy navigation to view MR Details, MR Items, Notes, and Activity History.

### Details

The Material Request Details section provides an overview of the request, including:

* **Priority** – Indicates the urgency of the request (Low, Medium, High, or Urgent).
* **Required By** – The date when the requested materials are needed.
* **Deliver Method** – Specifies how the requested materials should be delivered.
* **Requested By** – The name of the user or team member who created the request.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/33.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=12528b76ead39c01dea1d22e805796b5" alt="33 Pn" width="1920" height="716" data-path="images/33.png" />

### MR Items

This section displays the requested materials in a clear, tabular format, making it easy to review and verify details. This includes:

* **Item** – The name of the item requested; also shows if the item was added from a Job or Quote.
* **Type** – Indicates whether the item is a standard catalog product, a custom product, or a part.
* **Required Quantity** – The number of units required.
* **Received Quantity** - The number of units that have been received so far.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/34.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=c8f332aa213c2129316931212e147034" alt="34 Pn" width="1920" height="707" data-path="images/34.png" />

Edit the material request — available only when the status is Draft or Submitted. Once the request moves past Submitted, editing is locked on both the mobile app and the web. To make changes at a later stage, contact your administrator.

### Notes

The Notes section allows you to add comments or additional information to a material request throughout its lifecycle. Notes can provide extra context and may include anything from a simple text reminder to an image of parts/products, or even a video or document.

For more information on how to use the notes feature, refer to the [Notes and chats](https://docs.zuper.co/Work_Order_Management/Jobs/notes_and_chats) article.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/35.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=410e50cd1e11fc88e03333726c110954" alt="35 Pn" width="1917" height="755" data-path="images/35.png" />

### Activity

The Activity section logs all actions and updates related to the material request, helping you track recent changes and monitor status updates made by each user.

<Note>
  Note: You can also filter activities by user and within the selected date range.
</Note>

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/36.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=79c4cc953036063555746f9b16dfaa2f" alt="36 Pn" width="1920" height="797" data-path="images/36.png" />

### Status History

Displays the complete status lifecycle of the material request in chronological order, allowing you to see each status update, timestamp, and the user who made the change.

This helps in tracking the material requests’ progress from creation to fulfillment.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/37.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=235ae53f0ff535e68183e902748f9f91" alt="37 Pn" width="1916" height="817" data-path="images/37.png" />

## Right Panel

The Right Panel provides additional contextual information and quick-access links related to the selected Material Request (MR). This panel enhances visibility and traceability by consolidating related data in one place.

* **Associated Job/Quote** – Shows the job or quote linked to the material request and allows quick navigation to its details. This provides clear visibility into which job or customer quote the material request supports, ensuring better coordination between material management and job execution.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/38.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=aa2786c7a6d33f344c2df4450d8d32ec" alt="38 Pn" width="1920" height="611" data-path="images/38.png" />

<Note>
  Note: If the associated job or quote is pending materials from the material request, an indication labeled “**Waiting on MR**” will be displayed. This indication helps stakeholders track dependencies and manage timelines effectively. A job or quote linked to a material request can only be closed when the material request status is set to Draft, Cancelled, Closed, or Fulfilled.

  <img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/39.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=9b0d9a4ac689f1fd92c137ac50853384" alt="39 Pn" width="1915" height="746" data-path="images/39.png" />
</Note>

* **Attachments** – Allows you to upload and view supporting files such as images, specification sheets, invoices, or approval documents.
* **Purchase Order** – Lists any purchase orders created from the MR, along with their status and links to view details.
* **Transfer Order** – Displays associated transfer orders (if applicable), along with their status and quick links to view the order details.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/40.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=29d7c733eb6094a0afd7d41829573dde" alt="40 Pn" width="1919" height="657" data-path="images/40.png" />

## **FAQs**

1. Why is my Material Request still in “Ordered” status even though the Transfer Order is marked as Completed?

**Issue**

You may notice that a Material Request remains in “Ordered” status even after completing a linked Transfer Order. This can prevent the associated job from being completed.

**Cause**

A Material Request will automatically move out of the **“Ordered”** status **only when all associated Transfer Orders are completed**.

If even one linked Transfer Order remains in Draft, Pending, or any status other than Completed, the Material Request will not update.

**Resolution**

1. Open the relevant **Material Request** details page.
2. Check the **Associated Transfer Orders** section.
3. Verify the status of all linked Transfer Orders.
4. Complete any Transfer Orders that are still in **Draft** or incomplete status.
5. Ensure items are received (if applicable).

Once **all linked Transfer Orders are marked as Completed**, the Material Request status will update automatically.


## Related topics

- [Creating a Material Request from the Mobile App](/Purchasing/Material-Requests/Creating-Material-request-from-mobile.md)
- [Overview](/Purchasing/Material-Requests/Overview.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.