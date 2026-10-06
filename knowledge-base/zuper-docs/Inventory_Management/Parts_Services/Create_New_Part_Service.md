---
title: "Create a new part/product or service"
source: https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service.md
fetched_at: 2026-10-06T13:29:47.879Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Create a new part/product or service

The **Products and Services Listing** page lets you add default products and services, ensuring that details such as name, description, and unit price are pre-filled when adding line items to quotes, jobs, or invoices.

<Frame>
  **Navigation**: *Inventory & Pricebook*-> *Parts & Services*
</Frame>

## Accessing the parts & services page

1. Select the **"Inventory & Pricebook**” module from the left navigation menu and choose "**Part & Service.**"

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Bund-2.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=4eb471b546c6eba5076dd687999da295" alt="" width="1905" height="920" data-path="Inventory_Management/Bund-2.png" />

2. Click "**+ New Part/Service**".

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/part-1.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=a803cf9966d61c05008ddb27d22cac8c" alt="" width="1904" height="918" data-path="Inventory_Management/part-1.png" />

### **Parts and Service Details Pane**

The left pane is the **Parts & Services Details** section, where you must fill in the required details.

1. Select the **Type** from the drop-down list. Available options include: **Product**, **Par**t, **Service**, or **Bundle**.
2. Based on the selected type, the fields will be displayed dynamically.
3. Enter the **Name** and unique **Number** for the part.
4. Specify whether it's **Billable** or not. You can now define whether a part, service, product, or bundle is billable or non-billable directly on the master page.
   * **Billable**: The cost of the part/service/product/bundle will be included in the transaction document.
   * **Non-Billable:** The part/service/product/bundle will be displayed as a non-billable line item, excluded from the billable total but still tracked for reference.

<Info>
  **Note:** If you haven't set the Part/Service/Product/Bundle as **Billable** in the master level, when you use it in transactions (e.g., a Job or Quote), the "*Non-Billable*" status will be reflected in all subsequent transaction documents. However, you can choose to edit it in the transaction, allowing you to modify the status on a case-by-case basis.  
</Info>

5. Define whether this part should be **Consider for Profitability** or not.

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Part-2.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=c169fabce6264e74b7cbf8d88077bdad" alt="" width="1913" height="898" data-path="Inventory_Management/Part-2.png" />

### **1. Primary Details**

The primary details section helps you to manage all the core inventory-related information. If you've enabled **Markup**, you can also view the "**markup**" option between the Unit Purchase Price/Cost and Unit Selling Price.

<Accordion title="Markup Configuration" defaultOpen="false">
  **Markup** is a percentage or fixed amount added to the purchase price of parts and services to determine the selling price. It represents the profit added on top of the cost. Once a markup is specified, the system automatically calculates the selling price for the respective part or service.

  ### **Enabling Markup in Organization Settings**

  To use the markup feature effectively in **Parts & Services**, you must enable it in the **Organization Settings**.

  1. Select the " **Settings** " module from the left navigation menu, and under **General Settings**, click "**Organization Settings**."
  2. In the **Organization Settings** page, select "**Part and Services Settings** " under configuration, set "**Yes**" to **Enable Markup**, and click "**Save Settings**."

  You can now add markup to parts and services and edit the markup for jobs, quotes, and invoices.
</Accordion>

* **Trade Type(s)**: Select the trade type from the list.
* **Category**: Select either a **Category** or a **Sub-Category** (Sub-categories are displayed nested under their respective parent category for better clarity and choice). <br />Once selected, this part/service will be associated with that specific classification. <img src="https://mintcdn.com/zuperinc/Xd4lsjSbmAf2DBD1/Settings/Modules/Parts-Services/Images/subcat-7.png?fit=max&auto=format&n=Xd4lsjSbmAf2DBD1&q=85&s=1d2687d1e989d21b629a290357e93185" alt="Subcat 7" width="1920" height="869" data-path="Settings/Modules/Parts-Services/Images/subcat-7.png" />
* **Minimum Quantity**: Specify the minimum quantity that must be maintained before triggering a low-stock alert. This value is auto-filled based on the "**Minimum Quantity**" set in the ***Availability By Location*** section.
* **Unit Purchase Price/Unit Cost**: The purchase price of the unit.
  <Note>
    **Note**: With purchase tax enabled for your organization, this section also includes Pre-Tax Cost and Purchase Tax %. These work together with the Unit Purchase Price/Unit Cost to calculate your actual item cost. See [Purchase Tax](/Inventory_Management/Parts_Services/Purchase-Tax) for details.
  </Note>
* ***Unit Selling Price:*** The selling price of the individual product. It is automatically determined based on the markup applied to the purchase price of parts and services. Markup has the following conditions.
  * *Flat* (+): With the flat markup condition, a predetermined fixed amount is added to the unit purchase price to determine the unit selling price.
  * *Percentage* (%): Under the percentage markup condition, a specified percentage of the unit purchase price is added to calculate the unit selling price.
  * *Multiplier* (x): With the multiplier markup condition, the unit purchase price is multiplied by a specified amount to obtain the unit selling price.

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Parts_Services/markup.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=d51bba3945837a554785b03bf8ce80e3" alt="" width="1917" height="841" data-path="Inventory_Management/Parts_Services/markup.png" />

* **Track Quantity**: Enable inventory tracking for this part or product. If '*Yes*' is selected, the system tracks part consumption based on the module chosen in the ***Choose Module to Track Part Consumption*** field under ***Settings > Organization Settings > Part and Service Settings.*** If '*No*' is selected, the system does not track the part's consumption in inventory.
* **Quantity Formula:** Select an existing [formula](Zuper_for_Roofing/Formula_Library) or create a new one to automatically calculate the correct quantity or pricing for this part or product. When the item is added to a CPQ proposal or quote, the formula defined in the product master is applied to the line item, and the quantity is calculated automatically based on the job’s measurements and checklist answers.

<Frame>
  <img src="https://mintcdn.com/zuperinc/oThQafKlCXige2kR/images/quantitypart.png?fit=max&auto=format&n=oThQafKlCXige2kR&q=85&s=aac662d5d20a6be421ea7b39e5c1b418" alt="Quantitypart" width="1920" height="869" data-path="images/quantitypart.png" />
</Frame>

### **2. Tax Details**

In this section, you can configure and manage the tax preferences. Choose whether the tax applies to your transactions or if it's tax-exempt.

<AccordionGroup>
  <Accordion title="Taxable" defaultOpen="false">
    Enter the following details:

    * **Tax Name (Required):** Enter the name of the tax.
    * **Tax Rate (Required):** Enter the tax rate.
  </Accordion>

  <Accordion title="Tax exempt" defaultOpen="false">
    **Tax Exempt Reason (Optional):** Enter the reason for the exemption.
  </Accordion>
</AccordionGroup>

### **3. Options**

Zuper’s [**Options**](https://docs.zuper.co/Settings/Modules/Parts-Services/Parts-Services-Settings#parts-and-services-general-settings) feature lets you offer choices directly to your customers on the **Proposal Authorization** page. For example, customers can select material colors, styles, or designs before approving the proposal.

* In the **Option** section, click **+ Add** to create attributes:
* Upload an image for visual reference.
* Set Name, Label, and toggle **Available** to "**Yes**".
* ·For proposal behavior, select any one of the options from the list:
  * **Internal Only** - The option is visible only to your internal team. Customers do not see it on the authorization page. Your back-office team can mark this option for the line item directly.
  * **Mandatory Customer Selection -** The option appears on the authorization page. The customer must select it for the line item before they can sign and accept the proposal.
  * **Non-Mandatory Customer Selection -** The option appears on the authorization page. The customer can select it for the line item, but it is not required to sign and accept the proposal.

<Note>
  Note: How does this help?

  Use selection options to decide how much control your customer has over each line item. Mark high-priority items as mandatory to secure financial commitment, and leave lower-priority items as optional to give your customer time to think and decide.
</Note>

* The customer-facing label entered here will appear as a subheading for the line item on the proposal presentation page.

<Frame>
  <img src="https://mintcdn.com/zuperinc/rQnrZwxw5mP6JfJG/images/Option_new-1.png?fit=max&auto=format&n=rQnrZwxw5mP6JfJG&q=85&s=f4669b45b4887dd72250c244dc250665" alt="Option New 1" width="1920" height="878" data-path="images/Option_new-1.png" />
</Frame>

**Usage Standards:**

* A product can have up to 20 options.
* Each option name can be up to 200 characters long.

<Frame>
  <img src="https://mintcdn.com/zuperinc/rQnrZwxw5mP6JfJG/images/Option_new1.png?fit=max&auto=format&n=rQnrZwxw5mP6JfJG&q=85&s=9e9c44cdaec4aeabfdf2e25edd15b9df" alt="Option New1" width="1920" height="878" data-path="images/Option_new1.png" />
</Frame>

### **4. Other Details**

The other details section will display all the custom fields you define under the Settings.

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Part-7.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=3043379be569cc10c5d80e6406bea12f" alt="" width="1894" height="913" data-path="Inventory_Management/Part-7.png" />

### **5. Location Availability**

The location availability helps to manage the inventory items based on the warehouse location with available and minimum quantity.

* Enable "**Track Serial Number"** to assign unique serial numbers to individual inventory items.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Part-8.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=70711f5bb3bcc42ea4a32276945c387b" alt="Part 8" width="1920" height="890" data-path="Inventory_Management/Part-8.png" />
</Frame>

* Add the serial numbers required for the parts. You need to enter the serial numbers individually and press the "**Enter**" key to save the serial number.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Part-9.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=d3a11a7cd42486f66647a113dabb66d8" alt="Part 9" width="1901" height="877" data-path="Inventory_Management/Part-9.png" />
</Frame>

* Click the “**Update Item"** button.

<Note>
  Important: The location assigned to a part/product at creation cannot be changed after the record is saved.

  This applies both to correcting an incorrect location and to adding an additional warehouse location to a part that has already been imported or created.
</Note>

### **6. Add Attachments**

You can add attachments related to the product by following these steps:

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Part-12.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=7e525660c879ff570db416b06e2af38b" alt="" width="1920" height="924" data-path="Inventory_Management/Part-12.png" />

* Click to open the attachments dialog box.
* Upload your files.
* Once uploaded, the attachments will be added successfully.

After filling in all the required details, click the "**Save Part/Service**" button to add the product to the inventory.

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Part-16.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=69fa07a5503daf0bc86b3c44f5175dfa" alt="" width="1920" height="924" data-path="Inventory_Management/Part-16.png" />

The new product is created successfully.

The serial track number can be viewed from the **Location Availability** section. To do so, click the "**Location Availability**" section and tap the "**View Details**" button on the **Parts & Services Details** page.

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Part-11.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=80e510484f20df075fbe16fbb06177c5" alt="" width="1883" height="860" data-path="Inventory_Management/Part-11.png" />

### Editing Part/Service

You can edit a part/service detail in the following areas:

1. From the Parts/services listing page
2. From job, quote, and invoices.

**From the Parts/Services listing page**

1. Click the "**Parts & Services**" from the left navigation menu, then select the desired part or service from the list.
2. Once in the respective part or service, click "**More Actions**" at the top right corner and select "**Edit Part**." From there, you can make the necessary changes.
3. After you have made the edits, the part or service will be updated in the mastery. You can add the updated part/service when creating a job, quote, or invoice.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Part-19.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=c91c324a284d484e7e0da7273c9a7604" alt="Part 19" width="1860" height="767" data-path="Inventory_Management/Part-19.png" />
</Frame>

**From Job, Quotes, and Invoices**

You can edit a part, service, or product within a transaction. Follow these steps to update the details:

1. Navigate to the "**Jobs"** module from the left navigation menu and select " **Jobs**."
2. In the **Jobs** listing page, locate and select the relevant job where you want to edit the part, service, or product.
3. In the **Parts & Services** section, find the respective part or service:
   * Click the three-dot icon next to the item.
   * Select **"Edit"** from the dropdown menu.
   * Make the necessary changes, such as editing the markup for the selected part or service.
   * Click the **"Update Line Item"** button to save your changes.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Part-24.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=0b1813417b259c0abb2ab1e481127f21" alt="Part 24" width="1910" height="901" data-path="Inventory_Management/Part-24.png" />
</Frame>

<Note>
  Note: If you are logged in with Admin access or your role permits, you can update the billable status of a part, product, or service directly on the **Update Line Item** page. If you are experiencing issues updating the expense policies, please reach out to us at [support@zuper.co](support@zuper.co).
</Note>

## Listing Views

Customize the Parts & Services listing by adding/removing or reordering columns, then Update View to overwrite or save it as a new view.

* **Update View**: Click Update View to modify the current view after changes.
* **Save as new view**: Use the dropdown beside Update View → Save as new view.
* In the Create View dialog, enter the View Name (mandatory), choose Share with (User/Team) and add users, toggle the Visibility to all users, and click Create.
* **Reset View**: Click Reset View to restore the current view to the default.
* **Permissions**:
  * **Edit**: Add/remove/reorder columns; save as new or overwrite existing views.
  * **View-only**: Apply views but can’t edit; can Save as new view to copy without altering the original.
* **Manage view**: Rename, adjust Visibility (Only Me/User/Team or global toggle), Duplicate, or Delete (creator only; reverts to default/another saved view).
* **Open item details**: After filtering, click a Product name to view and manage details.

The respective part/service will be updated only for the specific job and will not be added to the mastery list.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1mzTcbR1mv5mXk-J/images/PV1.png?fit=max&auto=format&n=1mzTcbR1mv5mXk-J&q=85&s=f5407fd3b93030ba053a9e9e51383290" alt="PV1 Pn" width="1920" height="878" data-path="images/PV1.png" />
</Frame>

## Pin Filters for Quick Access

Once your filters are set, click the Pin Filters button in the filters panel as pinned. Pinned filter appears on the listing page, allowing you to apply it with one click in future sessions.

<Frame>
  <img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-ps2.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=82e60300f6fa240b7fb44d489da0acc1" alt="Pin Ps2" width="1920" height="878" data-path="images/pin-ps2.png" />
</Frame>

To **unpin** a filter, select it and click Remove. To apply pinned or default filters, click the filters option and unpin to remove active filters.

<Frame>
  <img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-ps3.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=785a2941ea06e79d6c5efd846b9d641a" alt="Pin Ps3" width="1920" height="878" data-path="images/pin-ps3.png" />
</Frame>

### FAQ

**Where can I find Parts & Services and Expenses now, and why was this change made? How does it affect my workflow?**

The **Parts & Services** and **Expenses** sections have been moved to the **Line Items** navigation tab on the **Job** **Details** page, effective July 23, 2025, 02:45 PM IST. This change shifted from a vertical scrolling layout, where you had to scroll up and down to view details, to a connected view that organizes product, service, and expense details for a clearer, more streamlined experience. The update enhances your workflow by consolidating related data into a single place, making management and review more efficient.

<Frame>
  <img src="https://mintcdn.com/zuperinc/9v682BF8430etEBz/Work_Order_Management/Jobs/line9.png?fit=max&auto=format&n=9v682BF8430etEBz&q=85&s=cd10dd3612414d245926704d03e5519d" alt="Line9 Pn" width="1898" height="911" data-path="Work_Order_Management/Jobs/line9.png" />
</Frame>


## Related topics

- [Creating a new job](/Work_Order_Management/Jobs/creating_a_new_job.md)
- [Create a new quotation](/Accounting/Create_New_Quote.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.