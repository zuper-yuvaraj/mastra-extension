---
title: "Creating Purchase Order"
source: https://docs.zuper.co/Purchasing/Purchase-Orders/Creating-purchase-order.md
fetched_at: 2026-10-06T13:29:56.037Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Creating Purchase Order

A Purchase Order (PO) is a formal document issued to a vendor specifying the parts or products you intend to buy, including quantities and agreed prices. It serves as a crucial step in ensuring efficient procurement, cost control, and timely service delivery.

In Zuper, you can create a PO from the following areas to request Parts & Products:

* Purchase Order listing page
* Material Request details page
* Jobs > Parts and Services
* Quotes

<Note>
  **Note:** This feature is available only on select Zuper plans. To enable it for your account, please contact your account administrator or email us at [**support@zuper.co**](mailto:support@zuper.co)
</Note>

**Prerequisites**

Before creating a Purchase Order (PO) in Zuper, ensure the following are set up:

* **Purchase Order Module**: The Purchase Order module must be enabled for your account.
* **Vendors**: Vendors should be added with complete contact and address details.
* **Parts & Products**: Items must be added to the vendor catalog.
* **Custom Line Items**: If the **job includes a custom line item**, ensure it has a **unique ID**, as this will be used as the **SKU** during PO creation.

<Note>
  Note: **Receiving free or \$0 items**

  Zuper does not currently support receiving products with a unit purchase cost of \$0 on a purchase order. If a vendor is supplying items at no charge, enter a nominal cost to complete the receiving process. If you need assistance, contact [Support.](mailto:support@zuper.co)
</Note>

# Creating a New Purchase Order

To create a new purchase order from the purchasing module, follow these steps:

* Select the **Purchasing** module from the left navigation menu and select **Purchase Orders**.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO1.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=aaa8fe4d2057684ea22faf61a2055c5f" alt="PO1 Pn" width="1908" height="805" data-path="images/PO1.png" />

* You will view a list of existing purchase orders with details such as: Purchase Order No, Purchase Order Title, Required by date, Status, Vendor name, Total PO amount, and more.
* Select the **+ New Purchase Order** button in the top right corner to create a new purchase order. A New Purchase Order creation page will open.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO2.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=41918026e133ed150f78abd1e96e20dd" alt="PO2 Pn" width="1906" height="795" data-path="images/PO2.png" />

* Fill in the following sections to create a new purchase order.

## Primary Details

This section captures all essential information related to the purchase order.

1. **PO Title**: Enter a unique title for the Purchase Order.
2. **Vendor:** Select a vendor from the existing vendor list. Only **active vendors** will be available for selection. Once selected, the following details will automatically populate (all of which are **editable** if needed):
   * **Billing Address**: The vendor's registered billing address is populated by default.
   * **Delivery Address**: The destination where the goods should be delivered. This is determined by the selected delivery method:
     1. If Direct shipment to Job's site is selected, the job's service address will be used.
     2. If Pickup from Vendor is selected, the vendor's pickup address will be shown.
     3. If Deliver to Warehouse is selected, the selected warehouse address will be used.
   * **Delivery Method**: Specifies how the goods will be delivered. This typically includes:
     1. Direct shipment to Job's site
     2. Pickup from Vendor
     3. Deliver to Warehouse
   * **Payment Term**: Indicates the payment agreement between your organization and the vendor.

<Note>
  Note: For more information on how to set up your vendors, see the [Vendors](https://docs.zuper.co/Purchasing/Vendors/Vendors) article.
</Note>

3. **Delivery Method**: This defines how the items in the Purchase Order will be delivered. Choose one of the following delivery methods based on your logistics or vendor arrangement:
   * **Direct Shipment to Job's site** When this option is selected, the ordered items will be shipped directly to the job location.
   <Note>
     **Note**: If this method is selected, the delivery address will be automatically populated with the service address linked to the associated job.
   </Note>
   * **Deliver to Warehouse**\
     When this option is selected, the ordered items will be delivered to the selected warehouse within your organization for storage or future dispatch.
   <Note>
     **Note:** If this method is selected, ensure that the correct warehouse is chosen from the **Delivery To** dropdown list and that the delivery address for the selected warehouse is added in the **Delivery Address** field.
   </Note>
   * **Pickup from Vendor**\
     When this option is selected, your team will collect the ordered items directly from the vendor's location and transport them to one of your organization's warehouses.
   <Note>
     **Note:** If this method is selected, the delivery address will be auto-filled with the vendor's pickup address.
   </Note>
4. **Delivery Time**: Select the preferred time window for receiving the item. This helps the vendor plan the delivery more accurately. The available options include:
   * **Anytime** – No specific delivery window is required.
   * **Morning** – Delivery is expected during morning hours.
   * **Afternoon** – Delivery is expected during afternoon hours.
   * **Special Request** – Select this option if you need the delivery at a specific time or under special conditions.
5. **Reference Number**: Enter an optional internal or vendor-specific reference ID.
6. **Required By**: Select the date by which the items are required.

<Note>
  **Note**: This date must be today or a future date.
</Note>

6. **Payment Term**: Automatically filled based on the selected vendor's default payment terms. You may update it if required.
7. **Template**: A default template is pre-selected. If required, you can choose a different template for the purchase order from the drop-down menu.
8. **Remarks**: Add any additional notes or instructions related to the purchase order.

<img src="https://mintcdn.com/zuperinc/DUNJ5iW5ANOPhxHO/images/PO64.png?fit=max&auto=format&n=DUNJ5iW5ANOPhxHO&q=85&s=054a55881530ba6a44c313260fba4244" alt="PO64 Pn" width="1849" height="758" data-path="images/PO64.png" />

### Options

When creating a PO, select [options](https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service#3-options) for procurement alignment.

<Frame>
  <img src="https://mintcdn.com/zuperinc/jdBZbTsAYGchLwIJ/images/optipr11.png?fit=max&auto=format&n=jdBZbTsAYGchLwIJ&q=85&s=22886ad3dec577f8e0de73a7f082ddb9" alt="Optipr11" width="1920" height="878" data-path="images/optipr11.png" />
</Frame>

## Associations

You can associate a Purchase Order (PO) with either a Job or a Quote.

To do this:

* Select **"+ Add**" in the Associations section.
* Select the appropriate Job or Quote from the list.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO4.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=094cdd15672c8e7267d273790026617c" alt="PO4 Pn" width="1914" height="874" data-path="images/PO4.png" />

* Once the association is made, a modal will appear displaying the list of products from the selected Job or Quote. Choose the relevant items, and they will automatically populate in the PO Items section.

<img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO62.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=fbd6293041f9f15f99f9bc6f41d55cb0" alt="PO62 Pn" width="1920" height="878" data-path="images/PO62.png" />

<Note>
  Note: Associating a PO with a Job or Quote helps track the purpose of the purchase and streamlines your workflow by linking related records and products.
</Note>

## PO items

This section allows you to add parts and products that you wish to purchase from the selected vendor.

You can:

* Choose items from the **Vendor Catalog**, or
* Add **Custom Line Items** that are specific to this PO.

<AccordionGroup>
  <Accordion title="To add parts/products from the Vendor Catalog:" defaultOpen>
    1. In the *PO Items* section, select **"+ Add"** and select **"Line Item."**

    <img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO5.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=3fca03ebf519313600f4f11786f5b145" alt="PO5 Pn" width="1920" height="877" data-path="images/PO5.png" />

    2. The Vendor Catalog will open.
    3. Browse or search to find desired parts/products.
    4. Select the Vendor SKU / ID.
    5. Enter the quantity in the **Required Qty** field.
    6. Select **"Add Item"** to include it in the PO.
           <img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO6.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=1294d99ff332cf59a6efb9789b66009b" alt="PO6 Pn" width="1917" height="874" data-path="images/PO6.png" />
  </Accordion>

  <Accordion title="To add a custom line item:" defaultOpen>
    Use this option to add items that are not listed in the Vendor Catalog.

    1. In the *PO Items* section, select **"+ Add"** and select **"Custom Line Item."**
           <img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO7.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=95734e53a874308f2de474c0b14e1c07" alt="PO7 Pn" width="1914" height="849" data-path="images/PO7.png" />
    2. The **Create New Line Item** dialog box will open.
    3. Enter the following details:
       * **ID** – A unique identifier for the purchase order item.
       * **Name** – The name or description of the product.
       * **Unit Purchase Cost** – The cost per unit of the item (in USD).
       * **Required Quantity** – The number of items needed.
       * **Remarks (if any)** – Optional notes or instructions related to the item.
    4. Select **"Create"** to add the item to the PO.
           <img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO61.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=47e68bb1b5303fb9b6990bca333db8d6" alt="PO61 Pn" width="884" height="553" data-path="images/PO61.png" />

    <Note>
      **Note:** Custom line items are specific to this PO only. They are **not added to the Vendor Catalog** or inventory.
    </Note>
  </Accordion>

  <Accordion title="Viewing and Managing Selected Parts/Products">
    Once added, all PO items will be displayed in a table with the following columns:

    * **Item** shows the name of the part or product you want to purchase.
    * **Vendor SKU/ID** shows the unique product identifier from the vendor.
    * **Unit Purchase Cost** shows the per-unit cost charged by the vendor.
    * **Required Quantity** shows the number of units to order.
    * **Total** shows the line item total, calculated as Required Quantity × Unit Purchase Cost. This column appears across all PO statuses, from Draft through Paid.
    * **Remarks** shows any notes or special instructions added to the PO.

    <Note>
      **Note**: The **Total** column shows the calculated amount for each line item. The overall PO total shown at the bottom of the table is the sum of all line item totals.
    </Note>

    To modify the required quantity or remove an item:

    * Select the ellipsis (⋯) icon under the **Actions** column next to the item.
    * Select the desired action: **Edit** or **Remove**.
          <img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO8.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=dd8760009774763c10ba736f384505b0" alt="PO8 Pn" width="1374" height="351" data-path="images/PO8.png" />
  </Accordion>
</AccordionGroup>

## Other Details

This section displays any **custom fields** that have been configured by your organization. These fields may capture additional PO-specific data, such as department codes, project references, and approval notes.

## Attachments

The **Attachments** section allows you to upload supporting documents such as images, videos, specifications, or invoices related to the purchase order.

To upload an attachment:

1. Select **"+ Add Attachment."**

<img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO9.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=2469b072e1bcbc057129de8c0502eb37" alt="PO9 Pn" width="1918" height="856" data-path="images/PO9.png" />

2. Choose and upload the file from your computer.
3. Once the file is uploaded, select **"Done."**

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO10.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=927a623dd7387034c2ede5c85f054a12" alt="PO10 Pn" width="1046" height="644" data-path="images/PO10.png" />

You can also **download** or **remove** attachments, as needed.

After completing all mandatory fields and verifying the details, choose one of the following actions at the top of the purchase order creation form.

* **Save as Draft**: Save the PO without submitting. Useful if you need to review or complete it later.
* **Save & Submit**: This option allows you to submit the Purchase Order (PO) for approval. Based on the configured workflow, the PO will then move to the next stage in the approval hierarchy for review.
* **Discard PO**: Cancel and permanently delete the draft PO.

The new PO will be created successfully.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO11.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=dde103a80605f83690a48a28e4de91a5" alt="PO11 Pn" width="1918" height="843" data-path="images/PO11.png" />

# Creating a Purchase Order from Other Areas

As mentioned above, you can also create a purchase order (PO) directly from other modules where material needs arise, such as **Jobs** or **Quotes**.

This association streamlines the procurement process by linking the PO to its source, auto-filling relevant details, and ensuring accurate tracking.

## Material Request details page

You can initiate a purchase order from the **Material Request Details** page when the requested materials are unavailable in inventory and need to be sourced externally.

<Note>
  **Note:** If your organization has enabled the Approval Hierarchy setting, the material request must first be internally approved before a purchase order can be created. This approval step ensures that procurement is based on validated needs, helping prevent unnecessary or duplicate purchases.
</Note>

Once approved, the **Purchase Orders** button becomes available on the Material Request Details page, allowing you to seamlessly convert the request into a PO.

<Frame>
  **Navigation: Material Requests Listing Page → Select a Material Request → Material Request Details Page → Select "Purchase Orders**\*"\* (available after approval)
</Frame>

### Creating the Purchase Order

* From the left panel of the material request details page, select **Purchase Order** or select "**Convert to Purchase Order**" at the top-right.

<img src="https://mintcdn.com/zuperinc/PHaJXOZ0eFDpNN71/images/53.png?fit=max&auto=format&n=PHaJXOZ0eFDpNN71&q=85&s=5984982c715122550c35710dd63ff761" alt="53 Pn" width="1920" height="758" data-path="images/53.png" />

* The Parts & Products dialog appears with all requested items.

<Note>
  Note: Vendor mapping must be configured for the items before they can be converted into a Purchase Order. If vendor mapping is missing, you cannot create a Purchase Order for the MR items.
</Note>

* Select the required items to be purchased and choose the Vendor from the drop-down menu.
* Once chosen, select **Next**. The Create Purchase Order screen appears.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/54.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=fe53b3cb9a0d58e9046d0e378d70d322" alt="54 Pn" width="1908" height="846" data-path="images/54.png" />

* Fill in the necessary details and select **Create Purchase Order** to finalize.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/55.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=c512a7645dde71c4aa32a02bb2f1f51f" alt="55 Pn" width="1920" height="865" data-path="images/55.png" />

The newly created Purchase Order will then appear on the Purchase Orders listing page with a status of Draft.

## Jobs

When a technician identifies missing or additional parts during a job, you can raise a purchase order directly from the **Job Details** page. This helps ensure that materials needed to complete the job are procured without delay.

<Note>
  **Note:** A purchase order can be created only if the associated job has an item added under the **Line Items**>> **Part/Service Details** section and the required quantity is not available in stock.
</Note>

If the **job includes a custom line item**, please make sure it has a **unique ID**, as this ID will be used as the **SKU** during PO creation.

This seamless workflow connects the job with the purchase process, improving accuracy and reducing manual effort.

<Frame>
  **Navigation:**

  *Jobs Listing Page -> Select a Job -> Job Details Page -> Select Line Items -> Part/Service Details -> Select "Request" -> Choose Purchase Order(s)*
</Frame>

### Creating the Purchase Order

* In the Part/Service Details section, select **Request** and choose **Purchase Order(s**) from the drop-down menu.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO12.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=e20cdbe4fe8c992ddbe248a78c391fb6" alt="PO12 Pn" width="1920" height="878" data-path="images/PO12.png" />

* A modal window will appear with the list of items.
* Select the item(s) you want to purchase and choose the vendor from the dropdown menu.

<Note>
  If an item has a **preferred vendor** configured, that vendor will be **pre-filled** during vendor selection
</Note>

* Once selected, select "**Next**." The Create Purchase Order screen will appear.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO13.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=e50e4e597f3d37230effe3d16324fbee" alt="PO13 Pn" width="1803" height="848" data-path="images/PO13.png" />

* Fill in the necessary details and select **Create Purchase Order** to finalize.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO14.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=7466d6bdbce705797fc911f4cc6a76fd" alt="PO14 Pn" width="1643" height="836" data-path="images/PO14.png" />

* The newly created PO will then appear in the Purchase Orders listing page with a status of **Draft**.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO15.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=8df79fa49b8638149adc48cdc943003e" alt="PO15 Pn" width="1920" height="867" data-path="images/PO15.png" />

<Note>
  **Note:** A job associated with a purchase order cannot be closed unless the purchase order status is **Draft**, **Cancelled**, **Closed**, or **Fulfilled**.
</Note>

## Quotes

You can create a purchase order directly from the **Quote Details** page when the quoted items need to be sourced externally.

<Note>
  **Note:** A purchase order can be created only if the quote includes line items that are not currently available in inventory. This helps streamline procurement and avoid discrepancies during fulfillment.
</Note>

This ensures a smooth transition from the quoting stage to procurement, helping maintain alignment between what was promised to the customer and what is ordered from vendors.

<Frame>
  **Navigation:**\
  You can create a purchase order from the Quote Details page in two ways:

  1. *1. Quotes Listing Page -> Select a Quote -> Quote Details Page -> On the right pane, locate the Purchase Orders module -> Select "+" to create a new purchase order.*
  2. *2. Quote Details Page -> On the top-right corner of the page, select New -> Select Purchase Order to create a new purchase order.*
</Frame>

### Creating the Purchase Order

* You can create a purchase order from the Quote Details page in two ways:
  1. **Directly from the top-right corner:**
     * Navigate to the **Quotes Listing Page**.
     * Select the desired quote to open the **Quote Details Page**.
     * On the top-right corner of the page, select **New**.
     * Select **Purchase Order** to create a new purchase order.
  2. **From the right panel:**
     * In the right pane of the quote details page, locate the **Purchase Orders** module.
     * Select the **"+"** icon to create a new purchase order.

<img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/PO63.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=1d1ebe637706f9df61eebb1f9649a417" alt="PO63 Pn" width="1908" height="839" data-path="images/PO63.png" />

* A **modal window** will appear with the list of quoted items.
* **Select the item(s)** you want to purchase and choose the **vendor** from the dropdown menu.
* Once selected, select **Next**. The **Create Purchase Order** screen will appear.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO17.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=59765702030590e953d0d4c4c8292859" alt="PO17 Pn" width="1797" height="852" data-path="images/PO17.png" />

* Fill in the required details and select **Create Purchase Order** to finalize.

<img src="https://mintcdn.com/zuperinc/Baq9duNPxzOaMeTr/images/PO18.png?fit=max&auto=format&n=Baq9duNPxzOaMeTr&q=85&s=ee42d0fbffe2a8e759bd7555030f2534" alt="PO18 Pn" width="1671" height="842" data-path="images/PO18.png" />

The newly created purchase order will then appear on the purchase orders listing page with a status of **Draft**.

For more information on the stages a purchase order goes through, refer to this [article](https://docs.zuper.co/Purchasing/Purchase-Orders/Purchase-order-status).

## Editing a purchase order inline

Once a purchase order is saved, you can update key fields directly on the details page — without reopening the creation form. This lets you correct details quickly and keeps the PO moving without interruption.

Fields that support inline editing

* **PO Title**
* **Required By** date
* **Reference Number**
* **Payment Terms**
* **Delivery Time**
* **Remarks**
* Any configured **Custom Fields**

<Note>
  **Note**: Inline editing is available to PO initiators and administrators only. Inline editing is not available when a PO is in Cancelled or Closed status. All fields are locked in those states.
</Note>

### Edit a field inline

1. Open the purchase order from the **Purchase Orders** listing page.
2. Select the field you want to update. When you hover over the field, you will get the **Pencil** icon to edit.  A dialog box appears, and you can update the latest information.
3. Enter the new value.
4. Select "**Update**" to save the latest changes.

Every inline edit is automatically recorded in the PO's Activity section, providing a full audit trail of what changed, when, and by whom.

<Note>
  **Note**: Check the Activity section after editing to confirm your changes were captured.
</Note>

## Troubleshooting

<AccordionGroup>
  <Accordion title="Not all active vendors are appearing in the vendor dropdown">
    The vendor selection dropdown should show all vendors with Active status.

    If only a subset of your active vendors appears:

    1. Confirm that the missing vendors are set to Active status in the Vendors module (Purchasing > Vendors).
    2. Verify that the missing vendors have complete contact and address details configured — incomplete vendor profiles may prevent them from appearing.
    3. If all vendors appear correctly in the Vendors module but not in the PO dropdown, this may be an instance-specific issue. Contact [Zuper Support](mailto:support@zuper.co) with the names of the affected vendors and a screenshot of the dropdown.
  </Accordion>
</AccordionGroup>

## FAQs

<AccordionGroup>
  <Accordion title="Can I associate one PO with multiple jobs?">
    A Purchase Order can only be linked to one job or one quote at a time. If parts are needed across multiple jobs or locations, you need to create a separate PO for each job.

    If the jobs are related — for example, the same customer requiring parts across different site locations — consider using Child Jobs to group them under a single Parent Job. This keeps your work organized in one place while still allowing each job to have its own PO.
  </Accordion>
</AccordionGroup>

***


## Related topics

- [Managing Purchase Order](/Purchasing/Purchase-Orders/Manage-Purchase-Order.md)
- [Creating Work Orders](/Purchasing/Work Orders/Creating work orders.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.