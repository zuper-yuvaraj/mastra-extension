---
title: "Managing Material Order"
source: https://docs.zuper.co/Zuper_for_Roofing/manage-material-order-and%20-work-order/material-orders/untitled-page-2.md
fetched_at: 2026-10-06T13:30:43.387Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Managing Material Order

> Access, track, and manage Material Orders in Zuper for Roofing from the listing page through to the details page.

# Managing Material Order

Material Orders (MOs) are essential for the timely procurement of parts and materials required for field service operations. Whether sourcing tools for a job or replenishing stock, effective MO management helps prevent delays, control costs, and ensure supplier accountability.

Once an MO is created in the Zuper web application, administrators can track its progress, manage approvals, collaborate with suppliers, and handle fulfillment — all within the Material Orders module.<br />This article explains how to access, manage, and update material orders at every stage of their lifecycle to support a streamlined and transparent procurement process.

# Accessing the Material Orders Listing Page

To view all material orders:

1. Click the **Purchasing** module from the left navigation menu and select **Material Orders**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=4f1f561b1962f37599f80df7faf5f99b" alt="MO1" width="1916" height="844" data-path="images/MO1.png" />
</Frame>

2. You'll see a list of material orders for the selected date range with key details, including:
   * **Material Order No.**    – This is the system-generated unique number assigned to each material order for easy identification.
   * **Material Order Title**    – This is the name given to the material order, often auto-filled if created from a job or quote.
   * **Required By**: Indicates the target date by when the requested material order is expected to be fulfiled.
   * **Status**    – Indicates the current stage of the material order. Statuses include:
     1. **Draft** – The MO is being prepared and not yet submitted for approval.
     2. **Submitted** – The MO has been submitted and is awaiting internal approval.
     3. **Approved** – The MO has received internal approval and is ready to be sent to the supplier.
     4. **Rejected** – The MO has been declined during the internal approval process.
     5. **Sent to Supplier** – The approved MO has been sent to the supplier for processing.
     6. **Supplier Accepted** – The supplier has accepted the MO.
     7. **Supplier Rejected** – The supplier has rejected the MO, possibly with comments.
     8. **Partially Fulfilled** – Only some items have been received; pending items remain.
     9. **Fulfilled** – All items in the MO have been delivered by the supplier.
     10. **Invoiced-** The supplier has issued an invoice for the items delivered, and the invoice has been recorded against the Material Order. This status indicates that the MO has moved into the billing stage and is awaiting payment.
     11. **Paid**-The payment for the supplier invoice has been completed. This status confirms that all financial obligations related to the Material Order have been settled.
     12. **Cancelled** – The MO has been cancelled and will not be processed further.
     13. **Closed** – The MO has been completed and closed after fulfillment.
3. **Associated**  – Displays the job/project or quote linked to the material order, providing context on where or why the order originated.
4. **Created on** – Shows the date on which the material order was generated, making it easier to track order timelines and monitor processing efficiency.

<Tip>
  **Tip:** After rolling up and creating the new MO, ensure the current MO is closed to prevent discrepancies in associated Jobs or Quotes.
</Tip>

### How costs are calculated on a roll-up

When you roll up a partially fulfilled MO, Zuper recalculates costs automatically so your records stay accurate with no manual adjustment needed.

* The **original MO** updates its total to reflect only the quantity already fulfilled — not the full ordered amount.
* The **roll-up MO** carries only the unfulfilled remainder, so no items or costs are counted twice across the two MOs.

Before the roll-up completes, a confirmation modal appears summarising what will be rolled over.

<Note>
  If you need to audit a roll-up after the fact, go to the **Activity** tab on either MO. The log shows who initiated the roll-up, when it occurred, and which items moved to the new MO.
</Note>

### Identifying a rolled-up MO

<Note>
  **Note: Rolled-up MOs** are marked with a dedicated icon next to the MO number on the listing page. Hover over the icon to see the parent MO number and select the link to open the parent MO in a new tab. This helps you trace the relationship between a rolled-up MO and its origin at a glance. The same indicator appears on the **Supplier MO** page and on associated **Jobs** and **Quotes**. For more details, see Understanding [Material Order Status](https://docs.zuper.co/Zuper_for_Roofing/Material-order-status).

  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MS7-1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=78a6a9f75a16c571fffd70c1ad1e75fc" alt="MS7 1" width="1920" height="867" data-path="images/MS7-1.png" />
</Note>

## Exploring the Listing Page

The listing page is designed to provide a structured view of material orders, making it easier to track and manage them efficiently.

### 1. Summary Cards

Enable **Show KPIs** to display the summary cards at the top of the listing page. These cards provide a quick snapshot of your material order pipeline. The status cards are arranged in chronological order, following the MO workflow from Draft through to Fulfilled.

<Note>
  Note: Each summary card includes:

  * **Total Amount** – The combined value of all MOs under that status.
  * **MO Count** – The number displayed in the small badge indicates how many MOs fall under that status.
</Note>

* **Total Material Orders** – Displays the total value of all material orders, along with the total count of MOs created.
* **Submitted** – Shows the total value and count of material orders that have been submitted for approval.
* **Supplier Accepted** – Indicates the value and count of material orders accepted by the supplier.
* **Partially Fulfilled** – Represents the value and count of material orders where only some items have been received, and others are pending.
* **Fulfilled** – Shows the value and count of material orders for which all items have been successfully received.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MM.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=424c1afba14fe20cb79881d29e70a77a" alt="MM" width="1912" height="865" data-path="images/MM.png" />
</Frame>

* **Invoiced**- Displays the value and count of material orders for which the supplier has issued an invoice, and it has been recorded in the system.
* **Paid**- Shows the value and count of material orders for which the supplier invoice has been fully paid.
* **Rejected** – Displays the total value and count of material orders that were declined during the internal approval process.

**Receiving Items**: In **Receive Items**, verify selected [options](https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service#3-options) match.

These summary cards help you monitor your procurement activity at a glance and quickly identify areas that require attention.

<Note>
  Note: The **Supplier Accepted**/**Rejected** KPI will be displayed only when an approval hierarchy is configured in settings. Also, clicking a summary card filters the list to show only material orders with that status.
</Note>

### 2. Customization Options

Tailor the listing view to match your workflow:

* Click the **Columns** button at the top-right corner of the screen to open a panel with **Displayed** **Columns** and **Available Columns.**

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MM1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=03259ad418cd18051785d27cb7b633d8" alt="MM1" width="1908" height="875" data-path="images/MM1.png" />
</Frame>

* Hover over any column under Available Columns to reveal the option to **add** it, or **drag and drop** it into the Displayed Columns section.
* Reorder fields by simply dragging and dropping columns within the Displayed Columns list.

This flexibility ensures that you see only the data most relevant to your operational preference.

### 3. Search & Filtering

Quickly locate specific material orders using search and filter tools:

* Use the **Search Bar** to look up material orders by title or MO number.
* Apply filters to narrow down results based on:
  1. MO Status (e.g., Draft, Submitted, Approved)
  2. Supplier Name
  3. Associated Project, Job
  4. MO Title, and more.

This functionality helps you quickly find what you need without scrolling through the entire list.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MM2.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=c1fcec05fbf1e186619d347c55bcd23c" alt="MM2" width="1915" height="882" data-path="images/MM2.png" />
</Frame>

### 4. Bulk Actions

Easily manage multiple material orders in one go:

* Select the checkboxes next to the material orders you want to update.
* Click "**Update Status**" to update the status of the selected material orders in bulk.

Bulk actions save time and ensure consistency across multiple records.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Hx-JueNyXwJyPCaz/images/MM3.png?fit=max&auto=format&n=Hx-JueNyXwJyPCaz&q=85&s=12272edde7138910424a1ce07b6c5fc2" alt="MM3" width="1909" height="866" data-path="images/MM3.png" />
</Frame>

### 5. Pinned filters

Zuper's Material Orders module lets you use pinned filters to streamline your filter experience. Pinned filters keep your most-used criteria readily accessible for quick application.

Pin up to 3 filters in any module.

1. Select the "**Material Orders**" module from the left navigation menu.

2. **Pin Filters for Quick Access**

* Once your filters are set, click the **Pin Filters** button in the dialog box to save them as pinned.
* Pinned filters appear in the dialog box's "**Pinned Filters**" section, allowing you to apply them with one click in future sessions.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Hx-JueNyXwJyPCaz/images/MM4.png?fit=max&auto=format&n=Hx-JueNyXwJyPCaz&q=85&s=5b0094e9ca3facca25535314bbda4f1b" alt="MM4" width="1915" height="695" data-path="images/MM4.png" />
</Frame>

3. To Unpin the filter:

* To unpin, select a pinned filter and click **Remove**.
* To apply pinned or default filters, open the dialog box and select them.
* Use **Clear All** to remove active filters.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Hx-JueNyXwJyPCaz/images/MM5.png?fit=max&auto=format&n=Hx-JueNyXwJyPCaz&q=85&s=669ce01f240d1476d53ea2985d857daf" alt="MM5" width="1920" height="696" data-path="images/MM5.png" />
</Frame>

### 6. Notes quick action

You can add or view notes on a material order directly from the listing page — without opening the full MO record. This saves time when you need to leave a quick update or check a note while reviewing multiple MOs.

The same quick action is available from the:

* **Material Orders** listing page
* **Supplier** listing page
* **Material Requests** listing page

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MM6.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=d0b554ba852dc0ae2b19192fa501908d" alt="MM6" width="1904" height="631" data-path="images/MM6.png" />
</Frame>

### 7. Creating a New Material Order

To create a new material order from the listing page:

* Click the **+ New Material Order** button in the top-right corner.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MM7.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=c98367934089cc402e8ff4fe1afbbce4" alt="MM7" width="1916" height="866" data-path="images/MM7.png" />
</Frame>

For step-by-step instructions on how to create a material order, refer to the [Creating a Material Order](https://docs.zuper.co/Zuper_for_Roofing/Creating-material-order) article.

### 8. Customize Your View

You can further refine how your material orders are displayed:

* Create and save personalized views based on your preferences.
* Set view-specific permissions to ensure the right team members have appropriate access.

For more information on how to create a new view and set permissions, refer to this [article](https://docs.zuper.co/Zuper_for_Roofing/Suppliers#create-view-configuration).

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MM8.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=a8beb90dc1220c8451692406c80d0fc3" alt="MM8" width="1912" height="867" data-path="images/MM8.png" />
</Frame>

# Managing Material Order Details

Once a material order is created, the Material Order Details Page serves as the central hub for tracking and managing all aspects of the material order. The page features a three-column layout, providing quick access to relevant information and actions within each panel.

1. Click on any material order from the listing page to open its details page.

## Left Panel

The left panel displays key material order information—such as the MO title, supplier name, and current status—along with quick action buttons for calling, emailing, or adding notes. It also provides easy navigation to view MO details, items, notes, and activity history.

<AccordionGroup>
  <Accordion title="Call">
    Click the **Call** icon to view the supplier's contact number and initiate a phone call (available only if contact details are provided).

    <Frame>
      <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MM9.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=6b4124a08ea4e916fa9115ee60c9c77d" alt="MM9" width="1917" height="882" data-path="images/MM9.png" />
    </Frame>
  </Accordion>

  <Accordion title="Mail">
    Click the **Mail** icon to view the supplier's email address and send them an email regarding the material order.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MM10.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=a7c705d3464129f760a42cf0a299f024" alt="MM10" width="1866" height="843" data-path="images/MM10.png" />
    </Frame>
  </Accordion>

  <Accordion title="Add Note">
    Click "**Add Note**" to add comments or additional information to a material order throughout its lifecycle. Notes can provide extra context and may include anything from a simple text reminder to an image of parts/products, or even a video or document.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MM11.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=c9759c5571f834aa4a1ed7e7af92bdcb" alt="MM11" width="1913" height="694" data-path="images/MM11.png" />
    </Frame>

    <br /><br />For more information on how to use the notes feature, refer to the [Notes and chats](https://docs.zuper.co/Work_Order_Management/Jobs/notes_and_chats#notes) article.
  </Accordion>

  <Accordion title="Details">
    The material order details section provides an overview of the material order, including

    <Frame>
      <img src="https://mintcdn.com/zuperinc/Hx-JueNyXwJyPCaz/images/MM12.png?fit=max&auto=format&n=Hx-JueNyXwJyPCaz&q=85&s=51f1bd0eebee1f9d3348a58fdd668fea" alt="MM12" width="1913" height="863" data-path="images/MM12.png" />
    </Frame>

    | Details | Description |
    | :-: | :-: |
    | Required By | The date on which the order needs to be fulfilled. |
    | MO sent date | The date on which the material order was officially sent to the supplier. |
    | Reference No. | An internal or external reference ID used for tracking or cross-referencing purposes. |
    | Payment Term | Indicates the agreed-upon payment terms between your organization and the supplier |
    | Delivery Method | Specifies how the goods will be delivered by the supplier. (e.g., Direct shipment to Job's site, Deliver to Warehouse, pickup from supplier). |
    | Created By | Displays the name of the user who created the material order. |
    | Remarks | Additional comments or notes entered while creating the MO, offering further context. |
    | Supplier Address | Displays two key address types associated with the material order:  <br /><br />•	**Billing Address**: Automatically populated with the supplier's registered billing address from their profile. This is where invoices and payment-related documents are directed.  <br />•	**Delivery Address**: Determined by the selected delivery method:  <br /><br />o	If Direct shipment to Job's site is chosen, the delivery address will be the job's service location.  <br />o	If Pickup from Supplier is selected, the supplier's pickup address will be shown.  <br />o	If Deliver to Warehouse is selected, your organization's default warehouse address will be used. |
  </Accordion>

  <Accordion title="MO items">
    This section displays the requested items in a clear, tabular format, making it easy to review and verify material order details. Each row contains the following information:

    * **Item** shows the name of the part or product to be purchased.
    * **Supplier SKU/ID** shows the unique identifier or stock-keeping unit assigned to the item by the supplier.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/Hx-JueNyXwJyPCaz/images/MM13.png?fit=max&auto=format&n=Hx-JueNyXwJyPCaz&q=85&s=d080e5ee04834552a7c8ef749fe08b6d" alt="MM13" width="1917" height="790" data-path="images/MM13.png" />
    </Frame>

    * **Requested Quantity** shows the total number of items initially requested.
    * **Fulfilled Quantity** shows the number of items that have already been supplied or delivered.
    * **Required Quantity** shows the remaining number of items that still need to be purchased. This field is not available when the status is Fulfilled.
    * **Unit Purchase Cost** shows the price per unit charged by the supplier.
    * **Total** shows the line item total, calculated as Required Quantity × Unit Purchase Cost. This column appears across all MO statuses, from Draft through Paid.
    * **Remarks** shows any specific notes, instructions, or clarifications related to the individual line item.

    <Note>
      **Note:** The **Total** column shows the calculated amount for each line item. The overall MO total shown at the bottom of the table is the sum of all line item totals, ensuring transparency, accuracy in supplier billing, and better internal budgeting control.
    </Note>
  </Accordion>

  <Accordion title="Activity">
    This section captures the log of all activities performed on the material order, such as:

    * Notes added
    * Status changes
    * Attachments uploaded
    * Comments or approvals

    This running log helps you trace every interaction with the MO.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/Hx-JueNyXwJyPCaz/images/MM14.png?fit=max&auto=format&n=Hx-JueNyXwJyPCaz&q=85&s=8987bbcfb6a63433e04c6099166d7661" alt="MM14" width="1913" height="872" data-path="images/MM14.png" />
    </Frame>
  </Accordion>

  <Accordion title="Status history">
    Displays the **complete status lifecycle** of the material order in **chronological order**, helping you view each status update along with the timestamp and the user who made the change.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/Hx-JueNyXwJyPCaz/images/MM15.png?fit=max&auto=format&n=Hx-JueNyXwJyPCaz&q=85&s=e0d0a2ab71b28a5b779dd86243c92211" alt="MM15" width="1913" height="872" data-path="images/MM15.png" />
    </Frame>

    This helps in tracking the MO's progress from creation to fulfillment.

    <Note>
      Every time you send an MO to a supplier in PDF or XLS format, Zuper saves a copy of the document in the MO's Status History section. This gives you a permanent record of exactly what was shared with the supplier and when.

      What you can do from document history

      •       View the document inline.

      •       Open it in a new browser tab.

      •       Download it directly to your device.

      <Frame>
        <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MMP.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=d65e15828e06affef4932139092d2ba4" alt="MMP" width="1916" height="859" data-path="images/MMP.png" />
      </Frame>

      | **Scenario** | **What is saved** |
      | :- | :- |
      | You manually send the MO as separate attachments in PDF and XLS formats, or as either a PDF or an XLS file. | The attachment is saved in document history |
      | Auto-send is enabled in your settings | Documents are captured as PDF automatically on each auto send |
      | You send only a hyperlink (no attachment) | A PDF is still generated and saved so you can verify what was shared |
      | You clone an MO | The cloned MO starts with a fresh document history — previous sends are not carried over |

      **Note:** For a detailed explanation of the statuses an MO goes through, refer to the [*Material Order Status*](https://docs.zuper.co/Zuper_for_Roofing/Material-order-status) article.
    </Note>
  </Accordion>
</AccordionGroup>

## Right Panel

The **Right Panel** provides additional contextual information and quick-access links related to the selected Material Order (MO). This panel enhances visibility and traceability by consolidating related data in one place.

<AccordionGroup>
  <Accordion title="Supplier Details">
    Displays key information about the supplier, including:

    * Supplier name
    * Contact information (if available)
    * Address

    <Frame>
      <img src="https://mintcdn.com/zuperinc/Hx-JueNyXwJyPCaz/images/MM16.png?fit=max&auto=format&n=Hx-JueNyXwJyPCaz&q=85&s=7db421e26c13d94033bbe9e0e9caa22f" alt="MM16" width="1909" height="876" data-path="images/MM16.png" />
    </Frame>

    This helps you quickly reach out to suppliers when needed.
  </Accordion>

  <Accordion title="Associated Job/Quote">
    This section displays any job or quote associated with the current material order. It allows quick navigation to the corresponding Job or Quote details, offering clear visibility into which job or customer quote the MO supports.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/Hx-JueNyXwJyPCaz/images/MM16.png?fit=max&auto=format&n=Hx-JueNyXwJyPCaz&q=85&s=7db421e26c13d94033bbe9e0e9caa22f" alt="MM16" width="1909" height="876" data-path="images/MM16.png" />
    </Frame>

    This ensures better coordination between purchasing activities and job execution, improving operational transparency and reducing the risk of misalignment between procurement and service delivery.

    <Note>
      **Note**: If the associated job or quote is pending materials from the material order, an indication labeled **"Waiting on MO"** will be shown. This indication helps stakeholders track dependencies and manage timelines effectively. A job or quote linked to a material order can only be closed when the material order status is set to **Draft**, **Cancelled**, **Closed**, or **Fulfilled**.
    </Note>
  </Accordion>

  <Accordion title="Attachments">
    This section allows you to upload and manage documents related to the material order. It displays all files added, such as:

    * Supplier quotes
    * Product images
    * Delivery slips
    * Invoices or other supporting documents

    <Frame>
      <img src="https://mintcdn.com/zuperinc/Hx-JueNyXwJyPCaz/images/MM17-1.png?fit=max&auto=format&n=Hx-JueNyXwJyPCaz&q=85&s=2c61c1365260557ee29c5cd1abe9845a" alt="MM17 1" width="1901" height="681" data-path="images/MM17-1.png" />
    </Frame>

    <Tip>
      **Tip:** You can preview or download attachments directly from this panel, making it easier to access important information and streamline documentation for audits or reference.
    </Tip>
  </Accordion>

  <Accordion title="More Actions">
    * Modify Status - You can modify the existing MO status.
    * Edit MO - Modify the material order. You can edit the material order for the following statuses: **Draft, Submitted, Approved, Sent to Supplier, Supplier Accepted, Supplier Rejected, Partially Fulfilled, and Fulfilled**.

    <Note>
      Note: If an MO is edited while in the **Supplier Accepted** state, the new PDF sent to the supplier is recorded as a new version in the **Status History** section.
    </Note>

    * Clone MO - Make a new copy of your existing MO.
    * Cancel MO - Cancel your current MO.
    * Delete MO - Delete your current MO.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/Hx-JueNyXwJyPCaz/images/MM18.png?fit=max&auto=format&n=Hx-JueNyXwJyPCaz&q=85&s=bfe9b449e1b1cac13b69a8970345d3d5" alt="MM18" width="1908" height="862" data-path="images/MM18.png" />
    </Frame>

    | Status | Edit MO? | Other key actions under More Actions |
    | - | - | - |
    | Draft | ✓ Yes | Clone, Cancel, Delete |
    | Submitted | ✓ Yes | Send to Supplier, Clone, Cancel, Delete |
    | Approved | ✓ Yes | Clone, Cancel, Delete |
    | Sent to Supplier | ✓ Yes | Clone, Cancel, Delete |
    | Supplier Accepted | ✓ Yes | Clone, Cancel, Delete |
    | Supplier Rejected | ✓ Yes | Clone, Cancel, Delete |
    | Partially Fulfilled | ✓ Yes | Clone, Roll-up as New MO, Delete |
    | Fulfilled | ✓ Yes | Clone, Close MO, Delete |
    | Invoiced | ✗ No | Clone, Close MO, Delete |
    | Paid | ✗ No | Clone, Delete MO |
    | Closed MO | ✗ No | Clone, Delete |
  </Accordion>
</AccordionGroup>


## Related topics

- [Material Orders: An Overview](/Zuper_for_Roofing/manage-material-order-and -work-order/material-orders/material-orders-overview.md)
- [Managing Material Request](/Purchasing/Material-Requests/Managing-material-request.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.