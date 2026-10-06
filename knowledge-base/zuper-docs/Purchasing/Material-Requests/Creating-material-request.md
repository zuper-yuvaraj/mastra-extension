---
title: "Creating a Material Request in Web"
source: https://docs.zuper.co/Purchasing/Material-Requests/Creating-material-request.md
fetched_at: 2026-10-06T13:29:57.330Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Creating a Material Request in Web

The Material Requests (MR) feature allows administrators to request parts and products on behalf of a **field technician** to ensure seamless job execution. When a technician encounters a missing or damaged part, an admin can raise a material request in the web application.

This process ensures efficient sourcing, approval, and fulfillment of necessary materials either by transferring parts/products from an existing warehouse or **purchasing** new items if they are unavailable.

In Zuper, you can create a material request from the following areas:

* **Material Request Listing** page
* **Jobs** → **Line Items** tab (on the left side of the **Job Details** page) → **Parts and Services** table
* **Quotes** → **Quote Details** page

<Note>
  **Note**: This feature is available only on select Zuper plans. To enable it for your account, please contact your account administrator or email us at [support@zuper.co](mailto:support@zuper.co)
</Note>

**Note:** Before creating a material request, confirm that your purchasing settings are configured. This includes approval hierarchies and any custom fields for material requests. See [Configuring Purchasing Settings](https://docs.zuper.co/Settings/Modules/Purchasing/Configure-PO#material-requests).

# Creating a Material Request from the Listing Page

To create a new material request from the material request listing page, follow these steps:

<Frame>
  **Navigation**: Purchasing Module -> Material Requests -> + New Material Request (on the right corner of the Material Request listing page)
</Frame>

* Click the **Purchasing** module from the left navigation menu and select **Material Requests**.

<img src="https://mintcdn.com/zuperinc/3FEHP_44Ow5ZP2jg/images/1.png?fit=max&auto=format&n=3FEHP_44Ow5ZP2jg&q=85&s=0223efeae723f8b30f3937bf73b7cd22" alt="1 Pn" width="1917" height="848" data-path="images/1.png" />

* You will view a list of existing material requests with details such as: Material Request No., Material Request Title, Status, Total items, and more.
* Click the **+ New Material Request** button in the top right corner to create a new material request. A New Material Request creation page will open.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/2.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=98cad3710f610bcaf9d28ccf94fab642" alt="2 Pn" width="1916" height="878" data-path="images/2.png" />

* Fill in the following sections to create a new material request.

## Primary Details

The **Primary Details** section captures all the essential information about the material request.

* **Material Request Title** – Enter a unique title for the material request.
* **Requested By** – This field is prefilled based on the account. However, you can select a different employee from the dropdown if needed.
* **Required By** – Select the date when the material is required.

<Note>
  **Note**: This date must be today or a future date.
</Note>

*  **Delivery Method -** Select how the requested materials should be delivered.
  1. **Direct Shipment to Job’s site** – Materials are shipped directly from the vendor to the customer’s job site or the field technician’s location.
  2. **Deliver to Warehouse** – Materials are shipped to your organization’s designated warehouse.  From there, they can be transferred to the required job site or assigned to specific jobs using Transfer Order.

When selecting this option, choose the Warehouse location from the **Delivery To** dropdown menu to ensure accurate routing and inventory tracking.

* **Priority** – Choose from **Low, Medium, High, or Urgent** to indicate the urgency.
* **Remarks** – Add additional instructions or notes related to the material request.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/3.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=75b8ba89b12c13cf6c95dd96b024de19" alt="3 Pn" width="1462" height="482" data-path="images/3.png" />

## Parts & Products

This section allows you to add parts and products for the material request.

You can:

* Choose parts/products from the Inventory, or
* Add Custom Line Items that are specific to this material request.

Request items with [Options](https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service#3-options) (**Material Requests > New**).

<Frame>
  <img src="https://mintcdn.com/zuperinc/KNwbeG_nVnvoy0AB/images/optimr9.png?fit=max&auto=format&n=KNwbeG_nVnvoy0AB&q=85&s=a1a20e0bc0c9aa0798ec962cef195d42" alt="Optimr9" width="1920" height="878" data-path="images/optimr9.png" />
</Frame>

<Note>
  **Note**: If the material request is associated with a job, a modal window will appear displaying the parts/products already linked to that job. You can select from the job’s existing items, modify quantities, or add/remove items as necessary.
</Note>

<Accordion title="To add parts/products from the Inventory">
  Select parts or products directly from the organization’s inventory. This ensures that standard and pre-approved items are requested.

  * Click +**Add**  and select “**Line item**” to open the parts & products selection pop-up.

      <img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/4.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=1e07161b7fc643061ad31c6267a43477" alt="4 Pn" width="1466" height="464" data-path="images/4.png" />

  * The pop-up displays a list of available parts & products across different warehouse locations.

  * Select the required Parts/Products to be added for the material request.

  <Note>
    Negative values are not accepted. If you enter a decimal quantity, an inline warning appears before and after submission. The number of decimal places displayed follows your organization's decimal setting.
  </Note>

  * Click **Add** to include it in the MR.

      <img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/5.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=2aae0e8e931f17491ce04a17e2f3e259" alt="5 Pn" width="1901" height="802" data-path="images/5.png" />

  <Note>
    **Note**: If the required part/product is not in stock, you may need to initiate a purchase order to procure the items.  For more details on how to create a purchase order, refer [Creating a Purchase Order](https://docs.zuper.co/Purchasing/Purchase-Orders/Creating-purchase-order) article.
  </Note>
</Accordion>

<Accordion title="To add a custom line item">
  Use this option to create and add custom items that are not listed in the inventory but are required specifically for this material request.

  * In the Parts & Products section, click “**+ Add**” and select “**Custom Line Item**.”

      <img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/6.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=6ae4893195e6e77e22661e03ea2c37b9" alt="6 Pn" width="1914" height="872" data-path="images/6.png" />

  * The Create New Line Item dialog box will open.

  * Enter the following details: **1. ID** - A unique identifier for the Material request item. **2. Name** - The name or description of the part/product. **3. Type** - Select whether the item is categorized as a **Part** or a **Product**. **4. Required Quantity** - \* Enter the number of units needed under the "**Required Quantity**" field. You can enter fractional values between 0.1 and 0.9 — for example, 0.5 feet.

  <Note>
    Negative values are not accepted. If you enter a decimal quantity, an inline warning appears before and after submission. The number of decimal places displayed follows your organization's decimal setting.
  </Note>

  **5. Description** - Add any additional details about the item, such as specifications, model number, or special instructions, to provide clarity during procurement.

  * Once all fields are completed, click **Create** to add the item to the material request.

      <img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/7.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=dbeed1c5ad6d489cd515e1eccdbd5a2f" alt="7 Pn" width="874" height="680" data-path="images/7.png" />

  <Note>
    **Note**: Custom line items are specific to this MR only. They are not added to the inventory.
  </Note>
</Accordion>

<Accordion title="Viewing and Managing Selected Parts/Products" defaultOpen>
  Once added, the selected parts/products will appear in the Parts & Products section of the material request creation page with the following columns:

  * **Item**– Displays the name of the part or product and indicates whether it is a standard catalog product, custom product, or part.
  * **Type**– The classification of the item (e.g., part or product).
  * **Required Quantity** – The number of units needed.
  * **Action** – Option to remove the selected part/product.

      <img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/8.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=35ad912cf20a48ccebbb11fc2b5c0b72" alt="8 Pn" width="1433" height="475" data-path="images/8.png" />
</Accordion>

## Other Details

This section displays any **custom fields** that have been configured by your organization. These fields may capture additional MR specific data such as project codes, cost centers, priority levels, expected delivery timelines, or any other information required by your business process.

## Associate Job/Quote

You can associate the Material Request (MR) with either a Job or a Quote.

To do this:

* Click “+ **Add Job/Quote**” in the Associations section.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/9.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=61bb243b95a88a1e911b31f7a385f8c0" alt="9 Pn" width="1912" height="866" data-path="images/9.png" />

* Select the appropriate Job or Quote from the list and click **Proceed** to associate it with the Material Request.

<img src="https://mintcdn.com/zuperinc/3FEHP_44Ow5ZP2jg/images/10.png?fit=max&auto=format&n=3FEHP_44Ow5ZP2jg&q=85&s=2c8a0f4dcfcac1574b345c86bb86327b" alt="10 Pn" width="1907" height="865" data-path="images/10.png" />

<Note>
  Note: Associating a Job/quote with the material request helps track the purpose of the requested materials and streamlines your workflow by linking related records and products
</Note>

## Attachments

This section allows you to upload supporting documents, such as images, videos, or invoices related to the material request.

To upload an attachment:

* Click “**+ Add Attachment**.”

<img src="https://mintcdn.com/zuperinc/3FEHP_44Ow5ZP2jg/images/11.png?fit=max&auto=format&n=3FEHP_44Ow5ZP2jg&q=85&s=14a8ee0e064ea5a11f703c2996d2015d" alt="11 Pn" width="1914" height="863" data-path="images/11.png" />

* Choose and upload the file from your computer.
* Once the file is uploaded, click “**Done**.”

<img src="https://mintcdn.com/zuperinc/3FEHP_44Ow5ZP2jg/images/12.png?fit=max&auto=format&n=3FEHP_44Ow5ZP2jg&q=85&s=f2b7b156e8620d18af9f4aad4e55077a" alt="12 Pn" width="1920" height="849" data-path="images/12.png" />

<Tip>
  Tip: You can also download or remove attachments, as needed
</Tip>

After completing all mandatory fields and verifying the details, choose one of the following actions at the top of the material request creation form.

1. **Save as Draft**: Save the MR without submitting. Useful if you need to review or complete it later.
2. **Save & Submit:** Select this to submit the material request for approval. Based on your approval hierarchy, the request moves to the next stage for review. To set up or update approval hierarchies, see [Configuring Purchasing Settings](https://docs.zuper.co/Settings/Modules/Purchasing/Configure-PO#material-requests).

<img src="https://mintcdn.com/zuperinc/3FEHP_44Ow5ZP2jg/images/13.png?fit=max&auto=format&n=3FEHP_44Ow5ZP2jg&q=85&s=0dc8e1eba612420178052690dc5fffca" alt="13 Pn" width="1911" height="857" data-path="images/13.png" />

The new MR has been created successfully.

# Creating a Material Request from the Jobs Module

In Zuper, you can create a Material Request directly from an existing job when a technician requires additional parts or products to complete the job. This ensures that all requested materials are linked to the job, making tracking and fulfillment more efficient.

<Note>
  **Note:** A material request can be created only if the associated job has an item added under **Line Items → Part/Service Details**.
</Note>

<Frame>
  **Navigation**: Jobs -> Jobs listing page -> Select a Job -> Job Details Page -> Line Items -> Part/Service Details -> Click Request -> Select Material Request
</Frame>

**Steps to Create a Material Request:**

* From the left navigation menu, select the **Jobs** module.

<img src="https://mintcdn.com/zuperinc/3FEHP_44Ow5ZP2jg/images/14.png?fit=max&auto=format&n=3FEHP_44Ow5ZP2jg&q=85&s=b43eca84697fa6d3392f3457c8536e9f" alt="14 Pn" width="1904" height="799" data-path="images/14.png" />

* On the **Jobs Listing Page**, locate and select the job for which you need to create a material request.

<img src="https://mintcdn.com/zuperinc/3FEHP_44Ow5ZP2jg/images/15.png?fit=max&auto=format&n=3FEHP_44Ow5ZP2jg&q=85&s=34e17c38fb1a10cfc4d6a0a5bfc4439f" alt="15 Pn" width="1917" height="828" data-path="images/15.png" />

* The **Job Details Page** opens, displaying the job’s essential information.
* Navigate to the **Line Items** section and scroll down to **Part/Service Details**.
* In the **Part/Service Details** section, click **Request** and select **Material Request** from the drop-down menu.

<img src="https://mintcdn.com/zuperinc/3FEHP_44Ow5ZP2jg/images/16.png?fit=max&auto=format&n=3FEHP_44Ow5ZP2jg&q=85&s=0c899dc432510ef6412a7ae1beddd48b" alt="16 Pn" width="1920" height="871" data-path="images/16.png" />

* A modal window will appear, displaying the list of items associated with the job.
* Select the required item(s). The default quantity needed for the job is prefilled; however, you can update it in the **Required Quantity** field if necessary
* Click **Add**. A new Material Request creation page will open with prefilled data, including Material Request Title, Delivery Method, Parts & Products, and the Associated Job.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/17.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=9cbb3a36acc03cd58ef10648548bb238" alt="17 Pn" width="1912" height="825" data-path="images/17.png" />

<Note>
  Note: When a Material Request is created from the Jobs module, the system automatically links the request to the corresponding job to ensure accurate tracking.
</Note>

* Request items with [Options](https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service#3-options).
* Review the prefilled details, update any additional required fields, and click **Save as Draft** or **Save & Submit** to create the Material Request.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/18.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=71d1ec5451ffa7e6cab60ec8273a4ce5" alt="18 Pn" width="1920" height="758" data-path="images/18.png" />

 

# Creating a Material Request from the Quotes Module

In Zuper, you can also create a Material Request directly from an existing quote when additional parts or products are required to fulfill customer requirements. This ensures that all requested materials are linked to the quote, providing clear visibility into procurement needs and streamlining the fulfillment process.

<Frame>
  **Navigation**: Quotes -> Quotes Listing Page -> Select a Quote -> Quote Details Page -> On the right pane, locate the Material Request module -> Click “+” to create a new material request
</Frame>

**Steps to Create a Material Request:**

You can create a material request from the Quote Details page in two ways:

**1.      From the top-right:**

* Navigate to the **Quotes Listing Page**.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/19.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=f4b2e8738d5bba0346ab4dfd6f03b339" alt="19 Pn" width="1912" height="776" data-path="images/19.png" />

* Select the desired quote to open the **Quote Details Page**.
* Click **New** at the top right of the page and select **Material Reques**t from the dropdown menu to create a new material request.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/20.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=3c8ab58899ca45d4633a9191bf6260e4" alt="20 Pn" width="1915" height="823" data-path="images/20.png" />

**2.      From the right panel:**

* In the right pane of the quote details page, locate the **Material Requests** module.
* Click the **“+”** icon to create a new material request.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/21.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=088bfed0d71d24f9eb1c89bf068ba727" alt="21 Pn" width="1918" height="839" data-path="images/21.png" />

* A modal window will appear, displaying the list of quoted items.

*Enter the number of units needed under the* **Required Quantity** field. You can enter fractional values between 0.1 and 0.9 — for example, 0.5 feet.

<Note>
  **Note**: Negative values are not accepted. If you enter a decimal quantity, an inline warning appears before and after submission. The number of decimal places displayed follows your organization's decimal setting.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/PFwxnxla5j9SpaIb/images/fra_MR.png?fit=max&auto=format&n=PFwxnxla5j9SpaIb&q=85&s=3ee04dc9b88c608d6c21b2a7d000ac70" alt="Fra MR" width="1918" height="841" data-path="images/fra_MR.png" />
</Frame>

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/22.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=4096363970bf0114b5eb3999cfde75bf" alt="22 Pn" width="1919" height="848" data-path="images/22.png" />

Click **Add**. A new Material Request page will open with prefilled data, including Material Request Title, Delivery Method, Parts & Products, and the Associated Quote.

* Request items with [Options](https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service#3-options).

<Note>
  **Note:** When creating a Material Request from the Quotes module, the system automatically links the request to the corresponding quote for accurate tracking.
</Note>

* Review the prefilled details, complete any additional required fields, and click **Save** **as Draft** or **Save & Submit** to create the Material Request.

<img src="https://mintcdn.com/zuperinc/3e3xxup1OkK_69Go/images/23.png?fit=max&auto=format&n=3e3xxup1OkK_69Go&q=85&s=f59a909bef5f17d7f6fcb9940797e269" alt="23 Pn" width="1916" height="864" data-path="images/23.png" />


## Related topics

- [Overview](/Purchasing/Material-Requests/Overview.md)
- [Managing Material Request](/Purchasing/Material-Requests/Managing-material-request.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.