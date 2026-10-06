---
title: "Managing Purchase Order"
source: https://docs.zuper.co/Purchasing/Purchase-Orders/Manage-Purchase-Order.md
fetched_at: 2026-10-06T13:29:56.471Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Managing Purchase Order

Purchase Orders (POs) are essential for the timely procurement of parts and materials required for field service operations. Whether sourcing tools for a job or replenishing stock, effective PO management helps prevent delays, control costs, and ensure vendor accountability.

Once a PO is created in the Zuper web application, administrators can track its progress, manage approvals, collaborate with vendors, and handle fulfillment — all within the Purchase Orders module.\
This article explains how to access, manage, and update purchase orders at every stage of their lifecycle to support a streamlined and transparent procurement process.

# Accessing the Purchase Orders Listing Page

To view all purchase orders:

1. Click the **Purchasing** module from the left navigation menu and select **Purchase Orders**.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO1.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=aaa8fe4d2057684ea22faf61a2055c5f" alt="PO1 Pn" width="1908" height="805" data-path="images/PO1.png" />

2. You’ll see a list of purchase orders for the selected date range with key details, including:
   * **Purchase Order No.**    – This is the system-generated unique number assigned to each purchase order for easy identification.
   * **Purchase Order Title**    – This is the name given to the purchase order, often auto-filled if created from a job or quote.
   * **Required By**: Indicates the target date by when the requested purchase order is expected to be fulfiled.
   * **Status**    – Indicates the current stage of the purchase order. Statuses include:
     1. **Draft** – The PO is being prepared and not yet submitted for approval.
     2. **Submitted** – The PO has been submitted and is awaiting internal approval.
     3. **Approved** – The PO has received internal approval and is ready to be sent to the vendor.
     4. **Rejected** – The PO has been declined during the internal approval process.
     5. **Sent to Vendor** – The approved PO has been sent to the vendor for processing.
     6. **Vendor Accepted** – The vendor has accepted the PO.
     7. **Vendor Rejected** – The vendor has rejected the PO, possibly with comments.
     8. **Partially Fulfilled** – Only some items have been received; pending items remain.
     9. **Fulfilled** – All items in the PO have been delivered by the vendor.
     10. **Invoiced-** The vendor has issued an invoice for the items delivered, and the invoice has been recorded against the Purchase Order. This status indicates that the PO has moved into the billing stage and is awaiting payment.
     11. **Paid**-The payment for the vendor invoice has been completed. This status confirms that all financial obligations related to the Purchase Order have been settled.
     12. **Cancelled** – The PO has been cancelled and will not be processed further.
     13. **Closed** – The PO has been completed and closed after fulfillment.

<img src="https://mintcdn.com/zuperinc/DUNJ5iW5ANOPhxHO/images/PO70.png?fit=max&auto=format&n=DUNJ5iW5ANOPhxHO&q=85&s=e153dd896cb42dee681628b1976ff348" alt="PO70 Pn" width="1908" height="755" data-path="images/PO70.png" />

3. **Associated**  – Displays the job/project or quote linked to the purchase order, providing context on where or why the order originated.
4. **Created on** – Shows the date on which the purchase order was generated, making it easier to track order timelines and monitor processing efficiency.

<Tip>
  **Tip:** After rolling up and creating the new PO, ensure the current PO is closed to prevent discrepancies in associated Jobs or Quotes.
</Tip>

### How costs are calculated on a roll-up

When you roll up a partially fulfilled PO, Zuper recalculates costs automatically so your records stay accurate with no manual adjustment needed.

* The **original PO** updates its total to reflect only the quantity already fulfilled — not the full ordered amount.
* The **roll-up PO** carries only the unfulfilled remainder, so no items or costs are counted twice across the two POs.

Before the roll-up completes, a confirmation modal appears summarising what will be rolled over.

<Note>
  If you need to audit a roll-up after the fact, go to the **Activity** tab on either PO. The log shows who initiated the roll-up, when it occurred, and which items moved to the new PO.
</Note>

<iframe src="https://player.vimeo.com/video/1203209269?badge=0&autopause=0&player_id=0&app_id=58479" title="Roll Up PO with new cost" className="w-full aspect-video" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

### Identifying a rolled-up PO

<Note>
  **Note: Rolled-up POs** are marked with a dedicated icon next to the PO number on the listing page. Hover over the icon to see the parent PO number and select the link to open the parent PO in a new tab. This helps you trace the relationship between a rolled-up PO and its origin at a glance. The same indicator appears on the **Vendor PO** page and on associated **Jobs** and **Quotes**. For more details, see Understanding [Purchase Order Status](https://docs.zuper.co/Purchasing/Purchase-Orders/Purchase-order-status).
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/d0VAZfgc7QCgoHry/images/POu5.png?fit=max&auto=format&n=d0VAZfgc7QCgoHry&q=85&s=6eb86ff30f77e99ae10b1dc139234b3c" alt="P Ou5" width="1920" height="878" data-path="images/POu5.png" />
</Frame>

## Exploring the Listing Page

The listing page is designed to provide a structured view of purchase orders, making it easier to track and manage them efficiently.

### 1. Summary Cards

Enable **Show KPIs** to display the summary cards at the top of the listing page. These cards provide a quick snapshot of your purchase order pipeline. The status cards are arranged in chronological order, following the PO workflow from Draft through to Fulfilled.

<Note>
  Note: Each summary card includes:

  * **Total Amount** – The combined value of all POs under that status.
  * **PO Count** – The number displayed in the small badge indicates how many POs fall under that status.
</Note>

<img src="https://mintcdn.com/zuperinc/DUNJ5iW5ANOPhxHO/images/PO71.png?fit=max&auto=format&n=DUNJ5iW5ANOPhxHO&q=85&s=12b24ddc9a5afa7ec2dd3662a5ccd02c" alt="PO71 Pn" width="1908" height="755" data-path="images/PO71.png" />

* **Total Purchase Orders** – Displays the total value of all purchase orders, along with the total count of POs created.
* **Submitted** – Shows the total value and count of purchase orders that have been submitted for approval.
* **Vendor Accepted** – Indicates the value and count of purchase orders accepted by the vendor.
* **Partially Fulfilled** – Represents the value and count of purchase orders where only some items have been received, and others are pending.
* **Fulfilled** – Shows the value and count of purchase orders for which all items have been successfully received.

<img src="https://mintcdn.com/zuperinc/DUNJ5iW5ANOPhxHO/images/PO72.png?fit=max&auto=format&n=DUNJ5iW5ANOPhxHO&q=85&s=a737a282bcebf9f6e963dd976521c777" alt="PO72 Pn" width="1920" height="577" data-path="images/PO72.png" />

* **Invoiced**- Displays the value and count of purchase orders for which the vendor has issued an invoice, and it has been recorded in the system.
* **Paid**- Shows the value and count of purchase orders for which the vendor invoice has been fully paid.
* **Rejected** – Displays the total value and count of purchase orders that were declined during the internal approval process.

**Receiving Items**: In **Receive Items**, verify selected [options](https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service#3-options) match.

These summary cards help you monitor your procurement activity at a glance and quickly identify areas that require attention.

<Note>
  Note: The **Vendor Accepted**/**Rejected** KPI will be displayed only when an approval hierarchy is configured in settings. Also, clicking a summary card filters the list to show only purchase orders with that status.
</Note>

### 2. Customization Options

Tailor the listing view to match your workflow:

* Click the **Columns** button at the top-right corner of the screen to open a panel with **Displayed** **Columns** and **Available Columns.**

<img src="https://mintcdn.com/zuperinc/UcRX9_Z35UjxYMRw/images/PO73.png?fit=max&auto=format&n=UcRX9_Z35UjxYMRw&q=85&s=8215912a2620a5e835d35d90b9b21c5e" alt="PO73 Pn" width="1920" height="834" data-path="images/PO73.png" />

* Hover over any column under Available Columns to reveal the option to **add** it, or **drag and drop** it into the Displayed Columns section.
* Reorder fields by simply dragging and dropping columns within the Displayed Columns list.

This flexibility ensures that you see only the data most relevant to your operational preference.

### 3. Search & Filtering

Quickly locate specific purchase orders using search and filter tools:

* Use the **Search Bar** to look up purchase orders by title or PO number.
* Apply filters to narrow down results based on:
  1. PO Status (e.g., Draft, Submitted, Approved)
  2. Vendor Name
  3. Associated Project, Job
  4. PO Title, and more.

<img src="https://mintcdn.com/zuperinc/UcRX9_Z35UjxYMRw/images/PO74.png?fit=max&auto=format&n=UcRX9_Z35UjxYMRw&q=85&s=d75e238e9fda4f1d0499a409c610413d" alt="PO74 Pn" width="1920" height="508" data-path="images/PO74.png" />

This functionality helps you quickly find what you need without scrolling through the entire list.

### 4. Bulk Actions

Easily manage multiple purchase orders in one go:

* Select the checkboxes next to the purchase orders you want to update.
* Click “**Update Status**” to update the status of the selected purchase orders in bulk.

<img src="https://mintcdn.com/zuperinc/UcRX9_Z35UjxYMRw/images/PO75.png?fit=max&auto=format&n=UcRX9_Z35UjxYMRw&q=85&s=dbe7c4f892aeed21719e3764caa9f9ee" alt="PO75 Pn" width="1920" height="871" data-path="images/PO75.png" />

Bulk actions save time and ensure consistency across multiple records.

### 5. Pinned filters

Zuper's Purchase Orders module lets you use pinned filters to streamline your filter experience. Pinned filters keep your most-used criteria readily accessible for quick application.

Pin up to 3 filters in any module.

<Frame>
  **Navigation**: *Purchase Orders -> Filters -> Pinned Filter*
</Frame>

1. Select the “**Purchase Orders**” module from the left navigation menu.

<img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-po.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=6f5a64397c8a8bc382a7741eb17af65b" alt="Pin Po Pn" width="1920" height="878" data-path="images/pin-po.png" />

2. **Pin Filters for Quick Access**

* Once your filters are set, click the **Pin Filters** button in the dialog box to save them as pinned.
* Pinned filters appear in the dialog box's "**Pinned Filters**" section, allowing you to apply them with one click in future sessions.

<img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-po1.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=e56988cbc648dd4d8f0e25e8b2948fe7" alt="Pin Po1 Pn" width="1920" height="878" data-path="images/pin-po1.png" />

3. To Unpin the filter:

* To unpin, select a pinned filter and click **Remove**.
* To apply pinned or default filters, open the dialog box and select them.
* Use **Clear All** to remove active filters.

<img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-po2.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=71a1e29543ec86670e6647aae66e41f1" alt="Pin Po2 Pn" width="1920" height="878" data-path="images/pin-po2.png" />

### 6. Notes quick action

You can add or view notes on a purchase order directly from the listing page — without opening the full PO record. This saves time when you need to leave a quick update or check a note while reviewing multiple POs.

The same quick action is available from the:

•       **Purchase Orders** listing page

•       **Vendor** listing page

•       **Material Requests** listing page

### 7. Creating a new Purchase Order

To create a new purchase order from the listing page:

* Click the **+ New Purchase Order** button in the top-right corner.

<img src="https://mintcdn.com/zuperinc/UcRX9_Z35UjxYMRw/images/PO76.png?fit=max&auto=format&n=UcRX9_Z35UjxYMRw&q=85&s=7b870b88997b1f41b1347176229138d0" alt="PO76 Pn" width="1906" height="579" data-path="images/PO76.png" />

For step-by-step instructions on how to create a purchase order, refer [Creating a Purchase Order](https://docs.zuper.co/Purchasing/Purchase-Orders/Creating-purchase-order) article.

### 8. Customize Your View

You can further refine how your purchase orders are displayed:

* Create and save personalized views based on your preferences.
* Set view-specific permissions to ensure the right team members have appropriate access.

<img src="https://mintcdn.com/zuperinc/UcRX9_Z35UjxYMRw/images/PO77.png?fit=max&auto=format&n=UcRX9_Z35UjxYMRw&q=85&s=cf8ad0e53b271f1dbd56f0809901e03e" alt="PO77 Pn" width="1920" height="766" data-path="images/PO77.png" />

For more information on how to create a new view and set permissions, refer to this [article](https://docs.zuper.co/Purchasing/Vendors/Vendors#create-view-configuration).

# Managing Purchase Order Details

Once a purchase order is created, the Purchase Order Details Page serves as the central hub for tracking and managing all aspects of the purchase order. The page features a three-column layout, providing quick access to relevant information and actions within each panel.

1. Click on any purchase order from the listing page to open its details page.

## Left Panel

The left panel displays key purchase order information—such as the PO title, vendor name, and current status—along with quick action buttons for calling, emailing, or adding notes. It also provides easy navigation to view PO details, items, notes, and activity history.

<AccordionGroup>
  <Accordion title="Call">
    Click the **Call** icon to view the vendor’s contact number and initiate a phone call (available only if contact details are provided).

    <img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO31.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=270245123f993ecb43c71d604232e5f4" alt="PO31 Pn" width="1915" height="858" data-path="images/PO31.png" />
  </Accordion>

  <Accordion title="Mail">
    Click the **Mail** icon to view the vendor’s email address and send them an email regarding the purchase order.

    <img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO32.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=84ad1bbfee70cca5117ec3736a544e30" alt="PO32 Pn" width="1911" height="847" data-path="images/PO32.png" />
  </Accordion>

  <Accordion title="Add Note">
    Click “**Add Note**” to add comments or additional information to a purchase order throughout its lifecycle. Notes can provide extra context and may include anything from a simple text reminder to an image of parts/products, or even a video or document.

    <img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO33.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=8355eb78e9f2d5c9213243fa46431687" alt="PO33 Pn" width="1917" height="844" data-path="images/PO33.png" />

    \
    \
    For more information on how to use the notes feature, refer [Notes and chats](https://docs.zuper.co/Work_Order_Management/Jobs/notes_and_chats#notes) article.
  </Accordion>

  <Accordion title="Details">
    The purchase order details section provides an overview of the purchase order, including

    <img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO34.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=c2e75f8f7353c8fecf32171c9aec5c2d" alt="PO34 Pn" width="1909" height="831" data-path="images/PO34.png" />

    | Details | Description |
    | :-: | :-: |
    | Required By | The date on which the order needs to be fulfilled. |
    | PO sent date | The date on which the purchase order was officially sent to the vendor. |
    | Reference No. | An internal or external reference ID used for tracking or cross-referencing purposes. |
    | Payment Term | Indicates the agreed-upon payment terms between your organization and the vendor |
    | Delivery Method | Specifies how the goods will be delivered by the vendor. (e.g., Direct shipment to Job’s site, Deliver to Warehouse, pickup from vendor). |
    | Created By | Displays the name of the user who created the purchase order. |
    | Remarks | Additional comments or notes entered while creating the PO, offering further context. |
    | Vendor Address | Displays two key address types associated with the purchase order:  <br /><br />•	**Billing Address**: Automatically populated with the vendor’s registered billing address from their profile. This is where invoices and payment-related documents are directed.  <br />•	**Delivery Address**: Determined by the selected delivery method:  <br /><br />o	If Direct shipment to Job’s site is chosen, the delivery address will be the job’s service location.  <br />o	If Pickup from Vendor is selected, the vendor’s pickup address will be shown.  <br />o	If Deliver to Warehouse is selected, your organization’s default warehouse address will be used. |
  </Accordion>

  <Accordion title="PO items">
    This section displays the requested items in a clear, tabular format, making it easy to review and verify purchase order details. Each row contains the following information:

    * **Item** shows the name of the part or product to be purchased.
    * **Vendor SKU/ID** shows the unique identifier or stock-keeping unit assigned to the item by the vendor.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/hNaEmULwGX9SxeQ9/images/pco23.png?fit=max&auto=format&n=hNaEmULwGX9SxeQ9&q=85&s=231bcd457fcddfff3085ef42bfef45ba" alt="Pco23" width="1834" height="598" data-path="images/pco23.png" />
    </Frame>

    * **Requested Quantity** shows the total number of items initially requested.
    * **Fulfilled Quantity** shows the number of items that have already been supplied or delivered.
    * **Required Quantity** shows the remaining number of items that still need to be purchased. This field is not available when the status is Fulfilled.
    * **Unit Purchase Cost** shows the price per unit charged by the vendor.
    * **Total** shows the line item total, calculated as Required Quantity × Unit Purchase Cost. This column appears across all PO statuses, from Draft through Paid.
    * **Remarks** shows any specific notes, instructions, or clarifications related to the individual line item.

    <Note>
      **Note:** The **Total** column shows the calculated amount for each line item. The overall PO total shown at the bottom of the table is the sum of all line item totals, ensuring transparency, accuracy in vendor billing, and better internal budgeting control.
    </Note>
  </Accordion>

  <Accordion title="Activity">
    This section captures the log of all activities performed on the purchase order, such as:

    * Notes added
    * Status changes
    * Attachments uploaded
    * Comments or approvals

          <img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO36.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=cc5fd82d8ae507d6bc36a980b035deee" alt="PO36 Pn" width="1916" height="826" data-path="images/PO36.png" />

    This running log helps you trace every interaction with the PO.
  </Accordion>

  <Accordion title="Status history">
    Displays the **complete status lifecycle** of the purchase order in **chronological order**, helping you view each status update along with the timestamp and the user who made the change.

    This helps in tracking the PO’s progress from creation to fulfillment.

    <img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO37.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=86497de1fe25dc79e05f2405660ddf44" alt="PO37 Pn" width="1461" height="878" data-path="images/PO37.png" />

    <Note>
      Every time you send a PO to a vendor in PDF or XLS format, Zuper saves a copy of the document in the PO's Status History section. This gives you a permanent record of exactly what was shared with the vendor and when.

       What you can do from document history

      •       View the document inline.

      •       Open it in a new browser tab.

      •       Download it directly to your device.

      <Frame>
        <img src="https://mintcdn.com/zuperinc/d0VAZfgc7QCgoHry/images/POu6.png?fit=max&auto=format&n=d0VAZfgc7QCgoHry&q=85&s=b4157d778d9b62b4909ba83fcc70bbf3" alt="P Ou6" width="1821" height="829" data-path="images/POu6.png" />
      </Frame>

      | **Scenario** | **What is saved** |
      | :- | :- |
      | You manually send the PO as separate attachments in PDF and XLS formats, or as either a PDF or an XLS file. | The attachment is saved in document history |
      | Auto-send is enabled in your settings | Documents are captured as PDF automatically on each auto send |
      | You send only a hyperlink (no attachment) | A PDF is still generated and saved so you can verify what was shared |
      | You clone a PO | The cloned PO starts with a fresh document history — previous sends are not carried over |

      **Note:** For a detailed explanation of the statuses a PO goes through, refer to the [*Purchase Order Status*](https://docs.zuper.co/Purchasing/Purchase-Orders/Purchase-order-status) article.
    </Note>
  </Accordion>
</AccordionGroup>

## Right Panel

The **Right Panel** provides additional contextual information and quick-access links related to the selected Purchase Order (PO). This panel enhances visibility and traceability by consolidating related data in one place.

<AccordionGroup>
  <Accordion title="Vendor Details">
    Displays key information about the vendor, including:

    * Vendor name
    * Contact information (if available)
    * Address

          <img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO38.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=d103198571bc14f2098dc166e542fa56" alt="PO38 Pn" width="1914" height="846" data-path="images/PO38.png" />

    This helps you quickly reach out to vendors when needed.
  </Accordion>

  <Accordion title="Associated Job/Quote">
    This section displays any job or quote associated with the current purchase order. It allows quick navigation to the corresponding Job or Quote details, offering clear visibility into which job or customer quote the PO supports.

    <img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO39.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=c610427957f7edb86cbbe9778b77518c" alt="PO39 Pn" width="1911" height="817" data-path="images/PO39.png" />

    This ensures better coordination between purchasing activities and job execution, improving operational transparency and reducing the risk of misalignment between procurement and service delivery.

    **Note**: If the associated job or quote is pending materials from the purchase order, an indication labeled **"Waiting on PO"** will be shown. This indication helps stakeholders track dependencies and manage timelines effectively. A job or quote linked to a purchase order can only be closed when the purchase order status is set to **Draft**, **Cancelled**, **Closed**, or **Fulfilled**.

    <img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO40.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=1b0730650529728463ee66bbfcbd7738" alt="PO40 Pn" width="1472" height="878" data-path="images/PO40.png" />
  </Accordion>

  <Accordion title="Attachments">
    This section allows you to upload and manage documents related to the purchase order. It displays all files added, such as:

    * Vendor quotes
    * Product images
    * Delivery slips
    * Invoices or other supporting documents

          <img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO41.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=d42410eadfa0ac51f40d60ef855dffa4" alt="PO41 Pn" width="1917" height="838" data-path="images/PO41.png" />

    <Tip>
      **Tip:** You can preview or download attachments directly from this panel, making it easier to access important information and streamline documentation for audits or reference.
    </Tip>
  </Accordion>

  <Accordion title="More Actions">
    * Modify Status - You can modify the existing PO status. 
    * Edit PO - Modify the purchase order. You can edit the purchase order for the following statuses: **Draft, Submitted, Approved, Sent to Vendor, Vendor Accepted, Vendor Rejected, Partially Fulfilled, and Fulfilled**.

    <Note>
      Note: If a PO is edited while in the **Vendor Accepted** state, the new PDF sent to the vendor is recorded as a new version in the **Status History** section.
    </Note>

    * Clone PO - Make a new copy of your existing PO. 
    * Cancel PO - Cancel your current PO. 
    * Delete PO - Delete your current PO. 

    <Frame>
      <img src="https://mintcdn.com/zuperinc/aJLXxmcMfbCxmEf2/images/editponew.png?fit=max&auto=format&n=aJLXxmcMfbCxmEf2&q=85&s=12b9abf5dbd435b91fe62b1ee35a4408" alt="Editponew" width="1920" height="878" data-path="images/editponew.png" />
    </Frame>

    | Status | Edit PO? | Other key actions under More Actions |
    | - | - | - |
    | Draft | ✓ Yes | Clone, Cancel, Delete |
    | Submitted | ✓ Yes | Send to Vendor, Clone, Cancel, Delete |
    | Approved | ✓ Yes | Clone, Cancel, Delete |
    | Sent to Vendor | ✓ Yes | Clone, Cancel, Delete |
    | Vendor Accepted | ✓ Yes | Clone, Cancel, Delete |
    | Vendor Rejected | ✓ Yes | Clone, Cancel, Delete |
    | Partially Fulfilled | ✓ Yes | Clone, Roll-up as New PO, Delete |
    | Fulfilled | ✓ Yes | Clone, Close PO, Delete |
    | Invoiced | ✗ No | Clone, Close PO, Delete |
    | Paid | ✗ No | Clone, Delete PO |
    | Closed PO | ✗ No | Clone, Delete |
  </Accordion>
</AccordionGroup>

1. Select the “**Purchase Orders**” module from the left navigation menu.

<img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-po.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=6f5a64397c8a8bc382a7741eb17af65b" alt="Pin Po Pn" width="1920" height="878" data-path="images/pin-po.png" />

2. **Pin Filters for Quick Access**

* Once your filters are set, click the **Pin Filters** button in the dialog box to save them as pinned.
* Pinned filters appear in the dialog box's "**Pinned Filters**" section, allowing you to apply them with one click in future sessions.

<img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-po1.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=e56988cbc648dd4d8f0e25e8b2948fe7" alt="Pin Po1 Pn" width="1920" height="878" data-path="images/pin-po1.png" />

3. To Unpin the filter:

* To unpin, select a pinned filter and click **Remove**.
* To apply pinned or default filters, open the dialog box and select them.
* Use **Clear All** to remove active filters.

<img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-po2.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=71a1e29543ec86670e6647aae66e41f1" alt="Pin Po2 Pn" width="1920" height="878" data-path="images/pin-po2.png" />


## Related topics

- [Overview](/Purchasing/Purchase-Orders/Overview.md)
- [Getting started with your Zuper roofing trial](/Zuper_for_Roofing/Getting-started-with-your-Zuper-roofing-trial.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.