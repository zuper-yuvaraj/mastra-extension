---
title: "Creating a Material Order"
source: https://docs.zuper.co/Zuper_for_Roofing/manage-material-order-and%20-work-order/material-orders/creating-a-material-order.md
fetched_at: 2026-10-06T13:30:42.831Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Creating a Material Order

> Access, track, and manage Material Orders in Zuper for Roofing from the listing page through to the details page.

# Creating a Material Order

A Material Order (MO) is a formal document issued to a supplier specifying the parts or products you intend to buy, including quantities and agreed prices. It serves as a crucial step in ensuring efficient procurement, cost control, and timely service delivery.

In Zuper, you can create an MO from the following areas to request Parts & Products:

* Material Order listing page
* Material Request details page
* Jobs > Parts and Services
* Quotes

<Note>
  **Note:** This feature is available only on select Zuper plans. To enable it for your account, please contact your account administrator or email us at [**support@zuper.co**](mailto:support@zuper.co)
</Note>

**Prerequisites**

Before creating a Material Order (MO) in Zuper, ensure the following are set up:

* **Material Order Module**: The Material Order module must be enabled for your account.
* **Suppliers**: Suppliers should be added with complete contact and address details.
* **Parts & Products**: Items must be added to the supplier catalog.
* **Custom Line Items**: If the **job includes a custom line item**, ensure it has a **unique ID**, as this will be used as the **SKU** during MO creation.

<Note>
  Note: **Receiving free or \$0 items**

  Zuper does not currently support receiving products with a unit purchase cost of \$0 on a material order. If a supplier is supplying items at no charge, enter a nominal cost to complete the receiving process. If you need assistance, contact [Support.](mailto:support@zuper.co)
</Note>

# Creating a New Material Order

To create a new material order from the purchasing module, follow these steps:

* Select the **Production** module from the left navigation menu and select **Material Orders**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO1-2.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=c5d8e51dd937a64f7ef20d9b1c22c344" alt="MO1 2" width="1916" height="844" data-path="images/MO1-2.png" />
</Frame>

* You will view a list of existing material orders with details such as: Material Order No, Material Order Title, Required by date, Status, Supplier name, Total MO amount, and more.
* Select the **+ New Material Order** button in the top right corner to create a new material order. A New Material Order creation page will open.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO2.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=855a7ed0d626bb4cff8954955b6349be" alt="MO2" width="1915" height="667" data-path="images/MO2.png" />
</Frame>

* Fill in the following sections to create a new material order.

## Primary Details

This section captures all essential information related to the material order.

1. **MO Title**: Enter a unique title for the material order.
2. **Supplier:** Select a supplier from the existing supplier list. Only **active suppliers** will be available for selection. Once selected, the following details will automatically populate (all of which are **editable** if needed):
   * **Billing Address**: The supplier's registered billing address is populated by default.
   * **Delivery Address**: The destination where the goods should be delivered. This is determined by the selected delivery method:
     1. If Direct shipment to Job's site is selected, the job's service address will be used.
     2. If Pickup from Supplier is selected, the supplier's pickup address will be shown.
     3. If Deliver to Warehouse is selected, the selected warehouse address will be used.
   * **Delivery Method**: Specifies how the goods will be delivered. This typically includes:
     1. Direct shipment to Job's site
     2. Pickup from Supplier
     3. Deliver to Warehouse
   * **Payment Term**: Indicates the payment agreement between your organization and the supplier.

<Note>
  Note: For more information on how to set up your suppliers, see the [Suppliers](https://docs.zuper.co/Zuper_for_Roofing/Suppliers) article.
</Note>

3. **Delivery Method**: This defines how the items in the material order will be delivered. Choose one of the following delivery methods based on your logistics or supplier arrangement:
   * **Direct Shipment to Job's site** When this option is selected, the ordered items will be shipped directly to the job location.
   <Note>
     **Note**: If this method is selected, the delivery address will be automatically populated with the service address linked to the associated job.
   </Note>
   * **Deliver to Warehouse**<br />When this option is selected, the ordered items will be delivered to the selected warehouse within your organization for storage or future dispatch.
   <Note>
     **Note:** If this method is selected, ensure that the correct warehouse is chosen from the **Delivery To** dropdown list and that the delivery address for the selected warehouse is added in the **Delivery Address** field.
   </Note>
   * **Pickup from Supplier**<br />When this option is selected, your team will collect the ordered items directly from the supplier's location and transport them to one of your organization's warehouses.
   <Note>
     **Note:** If this method is selected, the delivery address will be auto-filled with the supplier's pickup address.
   </Note>
4. **Delivery Time**: Select the preferred time window for receiving the item. This helps the supplier plan the delivery more accurately. The available options include:
   * **Anytime** – No specific delivery window is required.
   * **Morning** – Delivery is expected during morning hours.
   * **Afternoon** – Delivery is expected during afternoon hours.
   * **Special Request** – Select this option if you need the delivery at a specific time or under special conditions.
5. **Reference Number**: Enter an optional internal or supplier-specific reference ID.
6. **Required By**: Select the date by which the items are required.

<Note>
  **Note**: This date must be today or a future date.
</Note>

6. **Payment Term**: Automatically filled based on the selected supplier's default payment terms. You may update it if required. **Template**: A default template is pre-selected. If required, you can choose a different template for the material order from the drop-down menu.
7. **Remarks**: Add any additional notes or instructions related to the material order.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO22-1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=dc8205948cf4dbbb63c1c4c8a51d012b" alt="MO22 1" width="1920" height="878" data-path="images/MO22-1.png" />
</Frame>

### Options

When creating an MO, select [options](https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service#3-options) for procurement alignment.

## Associations

You can associate a Material Order (MO) with either a Job or a Quote.

To do this:

* Select **"+ Add**" in the Associations section.
* Select the appropriate Job or Quote from the list.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO23.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=02f953e78b449e26848a269bbb6a4f2a" alt="MO23" width="1919" height="875" data-path="images/MO23.png" />
</Frame>

* Once the association is made, a modal will appear displaying the list of products from the selected Job or Quote. Choose the relevant items, and they will automatically populate in the MO Items section.

<Note>
  Note: Associating an MO with a Job or Quote helps track the purpose of the purchase and streamlines your workflow by linking related records and products.
</Note>

## MO items

This section allows you to add parts and products that you wish to purchase from the selected supplier.

You can:

* Choose items from the **Supplier Catalog**, or
* Add **Custom Line Items** that are specific to this MO.

<AccordionGroup>
  <Accordion title="To add parts/products from the Supplier Catalog:" defaultOpen>
    1. In the *MO Items* section, select **"+ Add"** and select **"Line Item."**

    <Frame>
      <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO3.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=8d34ec0c48272e0622485e5fd8719245" alt="MO3" width="1919" height="857" data-path="images/MO3.png" />
    </Frame>

    2. The Supplier Catalog will open.
    3. Browse or search to find desired parts/products.
    4. Select the Supplier SKU/ID.
    5. Enter the quantity in the **Required Qty** field.
    6. Click **"Add Item"** to include it in the MO.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/Unit-cost-1.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=75f82b16caa134f5941f9101e1af9c95" alt="Unit Cost 1" width="1857" height="847" data-path="images/Unit-cost-1.png" />
    </Frame>
  </Accordion>

  <Accordion title="To add a custom line item:" defaultOpen>
    Use this option to add items that are not listed in the Supplier Catalog.

    1. In the *MO Items* section, select **"+ Add"** and select **"Custom Line Item."**
           <Frame>
             <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO24.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=7c40d1f7000e5c0b173cf4f6a8be9ff8" alt="MO24" width="1919" height="857" data-path="images/MO24.png" />
           </Frame>
    2. The **Create New Line Item** dialog box will open.
    3. Enter the following details:
       * **ID** – A unique identifier for the material order item.
       * **Name** – The name or description of the product.
       * **Unit Purchase Cost** – The cost per unit of the item (in USD).
       * **Required Quantity** – The number of items needed.
       * **Remarks (if any)** – Optional notes or instructions related to the item.
    4. Select **"Create"** to add the item to the MO.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO5.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=1d5a71aeeb4cdaeffb653db123093b6b" alt="MO5" width="1903" height="739" data-path="images/MO5.png" />
    </Frame>

    <Note>
      **Note:** Custom line items are specific to this MO only. They are **not added to the Supplier Catalog** or inventory.
    </Note>
  </Accordion>

  <Accordion title="Viewing and Managing Selected Parts/Products">
    Once added, all MO items will be displayed in a table with the following columns:

    * **Item** shows the name of the part or product you want to purchase.
    * **Supplier SKU/ID** shows the unique product identifier from the supplier.
    * **Unit Purchase Cost** shows the per-unit cost charged by the supplier.
    * **Required Quantity** shows the number of units to order.
    * **Total** shows the line item total, calculated as Required Quantity × Unit Purchase Cost. This column appears across all MO statuses, from Draft through Paid.
    * **Remarks** shows any notes or special instructions added to the MO.

    <Note>
      **Note**: The **Total** column shows the calculated amount for each line item. The overall MO total shown at the bottom of the table is the sum of all line item totals.
    </Note>

    To modify the required quantity or remove an item:

    * Click the ellipsis (⋯) icon under the **Actions** column next to the item.
    * Select the desired action: **Edit** or **Remove**.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO6.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=1a4c79295c09a70927e8523e025225df" alt="MO6" width="1337" height="241" data-path="images/MO6.png" />
    </Frame>
  </Accordion>
</AccordionGroup>

## Other Details

This section displays any **custom fields** that have been configured by your organization. These fields may capture additional MO-specific data, such as department codes, project references, and approval notes.

## Attachments

The **Attachments** section allows you to upload supporting documents such as images, videos, specifications, or invoices related to the material order.

To upload an attachment:

1. Select **"+ Add Attachment."**

2. Choose and upload the file from your computer.

3. Once the file is uploaded, select **"Done."**
   <Frame>
     <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO7.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=5af9e143072cfc9c22894171b2f28250" alt="MO7" width="1918" height="878" data-path="images/MO7.png" />
   </Frame>

You can also **download** or **remove** attachments, as needed.

After completing all mandatory fields and verifying the details, choose one of the following actions at the top of the material order creation form.

* **Save as Draft**: Save the MO without submitting. Useful if you need to review or complete it later.
* **Save & Submit**: This option allows you to submit the Material Order (MO) for approval. Based on the configured workflow, the MO will then move to the next stage in the approval hierarchy for review.
* **Discard MO**: Cancel and permanently delete the draft MO.

The new MO will be created successfully.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO25.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=e0c6524c7181b123df0e4819ab863667" alt="MO25" width="1915" height="871" data-path="images/MO25.png" />
</Frame>

# Creating a Material Order from Other Areas

As mentioned above, you can also create a Material Order (MO) directly from other modules where material needs arise, such as **Jobs** or **Quotes**.

This association streamlines the procurement process by linking the MO to its source, auto-filling relevant details, and ensuring accurate tracking.

## Material Request details page

You can initiate a material order from the **Material Request Details** page when the requested materials are unavailable in inventory and need to be sourced externally.

<Note>
  **Note:** If your organization has enabled the Approval Hierarchy setting, the material request must first be internally approved before a material order can be created. This approval step ensures that procurement is based on validated needs, helping prevent unnecessary or duplicate purchases.
</Note>

Once approved, the **Material Orders** button becomes available on the Material Request Details page, allowing you to seamlessly convert the request into an MO.

<Frame>
  ***Navigation***\*: Material Requests Listing Page → Select a Material Request → Material Request Details Page → Select "**Material Orders**" (available after approval)\*
</Frame>

### Creating the Material Order

* Select "**Convert to Material Order**" at the top-right.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO26.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=6667099832553d2940a211db4365a808" alt="MO26" width="1917" height="867" data-path="images/MO26.png" />
</Frame>

* The Parts & Products dialog appears with all requested items.

<Note>
  Note: Supplier mapping must be configured for the items before they can be converted into a Material Order. If supplier mapping is missing, you cannot create a Material Order for the MR items.
</Note>

* Select the required items to be purchased and choose the Supplier from the drop-down menu.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO9.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=87c35105a9188f9b14e016b0a6d809a1" alt="MO9" width="1915" height="885" data-path="images/MO9.png" />
</Frame>

* Once chosen, select **Next**. The Create Material Order screen appears.
* Fill in the necessary details and select **Create Material Order** to finalize.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/Unit-cost.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=7a710524e06875ba1f6a5c4ba905442d" alt="Unit Cost" width="1857" height="847" data-path="images/Unit-cost.png" />
</Frame>

The newly created material order will then appear on the Material Orders listing page with a status of Draft.

## Jobs

When a technician identifies missing or additional parts during a job, you can raise a material order directly from the **Job Details** page. This helps ensure that materials needed to complete the job are procured without delay.

<Note>
  **Note:** A material order can be created only if the associated job has an item added under the **Line Items**>> **Part/Service Details** section and the required quantity is not available in stock.
</Note>

If the **job includes a custom line item**, please make sure it has a **unique ID**, as this ID will be used as the **SKU** during MO creation.

This seamless workflow connects the job with the purchase process, improving accuracy and reducing manual effort.

<Frame>
  **Navigation:**

  *Jobs Listing Page -> Select a Job -> Job Details Page -> +>  -> Select Material Order*
</Frame>

### Creating the Material Order

* On the job details page, click the **+** icon at the top of the side panel, and then select **Material Order** from the actions.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO11.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=bc77026d7d1907fe3f77f09665d7a22f" alt="MO11" width="1916" height="877" data-path="images/MO11.png" />
</Frame>

* A modal window will appear with the list of items.
* Select the item(s) you want to purchase and choose the supplier from the drop-down menu.

<Note>
  If an item has a **preferred supplier** configured, that supplier will be **pre-filled** during supplier selection
</Note>

* Once selected, select "**Next**." The Create Material Order screen will appear.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO12.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=9a8eb8403b6a34d11e6c9885131c608a" alt="MO12" width="1916" height="876" data-path="images/MO12.png" />
</Frame>

* Fill in the necessary details and select **Create Material Order** to finalize.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/Unit-cost.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=7a710524e06875ba1f6a5c4ba905442d" alt="Unit Cost" width="1857" height="847" data-path="images/Unit-cost.png" />
</Frame>

* The newly created material order will then appear in the Material Orders listing page with a status of **Draft**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO14.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=7ffe25df2158df8aa14dec1135e9ff02" alt="MO14" width="1912" height="343" data-path="images/MO14.png" />
</Frame>

<Note>
  **Note:** A job associated with a material order cannot be closed unless the material order status is **Draft**, **Cancelled**, **Closed**, or **Fulfilled**.
</Note>

## Quotes

You can create a material order directly from the **Quote Details** page when the quoted items need to be sourced externally.

<Note>
  **Note:** A material order can be created only if the quote includes line items that are not currently available in inventory. This helps streamline procurement and avoid discrepancies during fulfillment.
</Note>

This ensures a smooth transition from the quoting stage to procurement, helping maintain alignment between what was promised to the customer and what is ordered from suppliers.

<Frame>
  **Navigation:**<br />You can create a material order from the Quote Details page in two ways:

  1. *1. Quotes Listing Page -> Select a Quote -> Quote Details Page -> On the right pane, locate the Material Orders module -> Select "+" to create a new material order.*
  2. *2. Quote Details Page -> In the top-right corner of the page, select New -> Select Material Order to create a new material order.*
</Frame>

### Creating the Material Order

* You can create a material order from the Quote Details page in two ways:
  1. **Directly from the top-right corner:**
     * Navigate to the **Quotes Listing Page**.
     * Select the desired quote to open the **Quote Details Page**.
     * In the top-right corner of the page, select **New**.
     * Select **Material Order** to create a new material order.
  2. **From the right panel:**
     * In the right pane of the quote details page, locate the **Material Orders** module.
     * Select the **"+"** icon to create a new material order.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO15.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=8d75bfc89ef1b2c1195a4b8728700166" alt="MO15" width="1904" height="859" data-path="images/MO15.png" />
</Frame>

* A **modal window** will appear with the list of quoted items.
* **Select the item(s)** you want to purchase and choose the **supplier** from the dropdown menu.
* Once selected, select **Next**. The **Create Material Order** screen will appear.

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFSHDLwxhpWSR0Ls/images/MO16.png?fit=max&auto=format&n=PFSHDLwxhpWSR0Ls&q=85&s=1d85cc269163afede087b279ce6bb95d" alt="MO16" width="1920" height="862" data-path="images/MO16.png" />
</Frame>

* Fill in the required details and select **Create Material Order** to finalize.

<Frame>
  <img src="https://mintcdn.com/zuperinc/98TJrPH8MNvi5pTx/images/mocr18.png?fit=max&auto=format&n=98TJrPH8MNvi5pTx&q=85&s=412314bc774b45ed456eb73240ee1f2a" alt="Mocr18" width="1920" height="878" data-path="images/mocr18.png" />
</Frame>

The newly created material order will then appear on the material orders listing page with a status of **Draft**.

For more information on the stages a material order goes through, refer to this [article](https://docs.zuper.co/Zuper_for_Roofing/Material-order-status).

## Editing a material order inline

Once a material order is saved, you can update key fields directly on the details page — without reopening the creation form. This lets you correct details quickly and keeps the MO moving without interruption.

Fields that support inline editing

* **MO Title**
* **Required By** date
* **Reference Number**
* **Payment Terms**
* **Delivery Time**
* **Remarks**
* Any configured **Custom Fields**

<Note>
  **Note**: Inline editing is available to MO initiators and administrators only. Inline editing is not available when an MO is in Cancelled or Closed status. All fields are locked in those states.
</Note>

### Edit a field inline

1. Open the material order from the **Material Orders** listing page.
2. Select the field you want to update. When you hover over the field, you will get the **Pencil** icon to edit.  A dialog box appears, and you can update the latest information.
3. Enter the new value.
4. Select "**Update**" to save the latest changes.

Every inline edit is automatically recorded in the MO's Activity section, providing a full audit trail of what changed, when, and by whom.

<Note>
  **Note**: Check the Activity section after editing to confirm your changes were captured.
</Note>

## Troubleshooting

<AccordionGroup>
  <Accordion title="Not all active suppliers are appearing in the supplier dropdown">
    The supplier selection dropdown should show all suppliers with Active status.

    If only a subset of your active suppliers appears:

    1. Confirm that the missing suppliers are set to Active status in the Suppliers module (Purchasing > Suppliers).
    2. Verify that the missing suppliers have complete contact and address details configured — incomplete supplier profiles may prevent them from appearing.
    3. If all suppliers appear correctly in the Suppliers module but not in the MO dropdown, this may be an instance-specific issue. Contact [Zuper Support](mailto:support@zuper.co) with the names of the affected suppliers and a screenshot of the dropdown.
  </Accordion>
</AccordionGroup>

## FAQs

<AccordionGroup>
  <Accordion title="Can I associate one MO with multiple jobs?">
    A Material Order can only be linked to one job or one quote at a time. If parts are needed across multiple jobs or locations, you need to create a separate MO for each job.

    If the jobs are related — for example, the same customer requiring parts across different site locations — consider using Child Jobs to group them under a single Parent Job. This keeps your work organized in one place while still allowing each job to have its own MO.
  </Accordion>
</AccordionGroup>

***


## Related topics

- [Managing Material Order](/Zuper_for_Roofing/manage-material-order-and -work-order/material-orders/untitled-page-2.md)
- [Material Orders: An Overview](/Zuper_for_Roofing/manage-material-order-and -work-order/material-orders/material-orders-overview.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.