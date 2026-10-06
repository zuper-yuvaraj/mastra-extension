---
title: "Configuring Parts & Services Settings"
source: https://docs.zuper.co/Settings/Modules/Parts-Services/Parts-Services-Settings.md
fetched_at: 2026-10-06T13:30:12.518Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Parts & Services Settings

The Parts & Services module in Zuper is designed to streamline your organization’s management of parts and services. It allows you to configure and customize settings related to pricing and the organization of parts and services.

## Parts and Services General Settings

<Frame>
  **Navigation**: *Settings -> Modules -> Parts & Services -> Parts & Services General Settings*
</Frame>

* Select the “**Settings**” module from the left panel. Under the “**Modules**,” choose the “**Parts & Services**.” Select the “**Parts & Services General Settings**.
  <Frame>
    <img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prs1.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=e5cc12bf70e08cc0d32906aa416ca7db" alt="Prs1 Pn" width="1892" height="878" data-path="images/Prs1.png" />
  </Frame>
* **Part Prefix**: Set a prefix for parts.
* **Update Purchase Cost to?**: Select an option to determine how purchase price differences are handled.

  <AccordionGroup>
    <Accordion title="Latest Purchase Cost">
      When you receive a part or product, the most recent purchase price is saved to the part or product master record.
    </Accordion>

    <Accordion title="Weighted Average Purchase Cost">
      Each time you receive stock, Zuper recalculates the weighted average cost across all units on hand and the receiving cost and quantity using this formula: Each time you receive stock, Zuper recalculates the weighted average cost across all units on hand using this formula: ((Existing Cost × Existing Quantity) + (Receiving Cost × Receiving Quantity)) ÷ (Existing Quantity + Receiving Quantity) The result replaces the previous cost in the part or product master record.
    </Accordion>

    <Accordion title="Highest Purchase Cost">
      Zuper compares the existing cost against the latest receiving cost and saves the higher of the two to the part or product master record.
    </Accordion>
  </AccordionGroup>
* **Choose module to track Part Consumption**: Select a module for tracking part consumption. You can choose the job, quote, invoice, or none.
* **Choose Job Status type to trigger Consumption** (This will be visible only if you choose the option as a job in the previous option): Select a status to trigger part consumption.
* **Notify if stock is running below the threshold quantity?**: Toggle **Yes** to enable notifications for low stock. Add email addresses to receive notifications. Toggle No to disable notifications for low stock.
* **Allow negative stock balance?**: Toggle **Yes** to allow negative stock balances. Toggle No to disable stock notifications.
* **Enable markup?**: Toggle to **Yes** to enable markup on parts.
* **Default Markup Type?**: Select the markup type. You can choose flat, percentage, or Multiplier.
* **Default Pricing level for Bundle?**: Select the pricing level. You can choose Bundle or Roll up.
* **Enable** **[Options](https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service#3-options)?** Toggle to **Yes** enables adding configurable attributes to the product system-wide.
* **Mandate Serial No?**: Set this to **Yes** if you want the user to select a serial number while using the material in transactions such as Jobs, Quotes, and Invoices.
* **Enable Purchase Tax?**: Toggle to **Yes** to track purchase tax separately from cost on parts, purchase orders, and inward transactions. See [Purchase Tax](/Inventory_Management/Parts_Services/Purchase-Tax) for how this affects your parts.
* Click **Save** to apply changes.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KUBVjs8a_AzAqNDP/images/opti1.png?fit=max&auto=format&n=KUBVjs8a_AzAqNDP&q=85&s=66803b2b8a141a36ddee755e0b772048" alt="Opti1" width="1920" height="878" data-path="images/opti1.png" />
</Frame>

## Category Settings

The **Category** **Settings** page allows you to organize parts, products, and services into logical groups for better inventory management and assignment to jobs, quotes, invoices, etc.

### Adding a New Category

* Navigate to **Settings** from the left navigation. 
* Choose **Parts & Services** from the module and click “**Category Settings**” to create or manage a category or subcategory.
  <Frame>
    <img src="https://mintcdn.com/zuperinc/Xd4lsjSbmAf2DBD1/Settings/Modules/Parts-Services/Images/subcat-1.png?fit=max&auto=format&n=Xd4lsjSbmAf2DBD1&q=85&s=05693c431235f55839ea90abbc08507d" alt="Subcat 1" width="1920" height="869" data-path="Settings/Modules/Parts-Services/Images/subcat-1.png" />
  </Frame>

**To create a new category:**

* Click **+ New Category** at the top right.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Xd4lsjSbmAf2DBD1/Settings/Modules/Parts-Services/Images/subcat-2.png?fit=max&auto=format&n=Xd4lsjSbmAf2DBD1&q=85&s=3b3e6ed561519dffeff4dc0d836ff5af" alt="Subcat 2" width="1920" height="869" data-path="Settings/Modules/Parts-Services/Images/subcat-2.png" />
</Frame>

* The **New Category** dialog opens. 
* **Category Name**: Enter a unique name. 
* **Icon for Product Category**: Upload an image file (optional). 
* **Trade Type(s)**: Select one or more trade types from the dropdown (e.g., Plumbing, Electrical, HVAC). 
* **Category Description**: Provide a brief description (optional). 
* Click **Create** to save the category.
  <Frame>
    <img src="https://mintcdn.com/zuperinc/Xd4lsjSbmAf2DBD1/Settings/Modules/Parts-Services/Images/subcat-3.png?fit=max&auto=format&n=Xd4lsjSbmAf2DBD1&q=85&s=6849b6b050264da73c6d1358f3e591e6" alt="Subcat 3" width="1920" height="869" data-path="Settings/Modules/Parts-Services/Images/subcat-3.png" />
  </Frame>
* A new category will be successfully created.  

### Adding a New Sub-Category 

Sub-Categories allow you to create a second level of classification under a parent category. This is useful when you want to further organize items within a broader category (e.g., “Installation”, “Maintenance”, “Spare Parts” under HVAC). 

1. In the **Category Settings** listing page, click the **Context** menu for a category and select + **Add Sub-Category**. <br />  <img src="https://mintcdn.com/zuperinc/Xd4lsjSbmAf2DBD1/Settings/Modules/Parts-Services/Images/subcat-4.png?fit=max&auto=format&n=Xd4lsjSbmAf2DBD1&q=85&s=c555b038b5df845ee3a145b805f523c9" alt="Subcat 4" width="1920" height="869" data-path="Settings/Modules/Parts-Services/Images/subcat-4.png" />
2. In the **New Sub-Category for \[Category Name]** dialog (e.g., New Sub-Category for HVAC): 
   * **Category Name**: Enter the sub-category name. 
   * **Icon for Product Category**: Upload an image file (optional). 
   * **Trade Type(s)**: This will be inherited from the parent category. 
   * **Category Description**: Provide a brief description (optional). 
   * Click **Create** to add the sub-category. <br />  <img src="https://mintcdn.com/zuperinc/Xd4lsjSbmAf2DBD1/Settings/Modules/Parts-Services/Images/subcat-5.png?fit=max&auto=format&n=Xd4lsjSbmAf2DBD1&q=85&s=846f412169e0179c37de481653fbc923" alt="Subcat 5" width="1920" height="869" data-path="Settings/Modules/Parts-Services/Images/subcat-5.png" />
3. The parent category will show a count of sub-categories (e.g., HVAC (1)). 

### Managing a category or Sub-Category

After creating categories and sub-categories, you can edit or delete them as your business needs evolve. 

<img src="https://mintcdn.com/zuperinc/Xd4lsjSbmAf2DBD1/Settings/Modules/Parts-Services/Images/subcat-6.png?fit=max&auto=format&n=Xd4lsjSbmAf2DBD1&q=85&s=4a1c89c20d39ad2be8a891e18dd082c3" alt="Subcat 6" width="1920" height="869" data-path="Settings/Modules/Parts-Services/Images/subcat-6.png" />

#### Editing a Category or Sub-Category

1. On the **Category Settings** page, locate the category or sub-category you want to modify. 
2. Click the **context menu** (⋮) and select **Edit**. 
3. In the edit dialog, make the necessary changes. 
4. Click **Update** to apply changes. 

#### Deleting a Category or Sub-Category 

1. On the **Category Settings** page, click the **context menu** (three dots ⋮) for the category or sub-category. 
2. Select **Delete**. 
3. A confirmation dialog appears: 
   * **If the category has no sub-categories:** Simple confirmation prompt. 
   * **If the category has sub-categories**: Warning message: “This will also delete \[n] sub-categories.” 
4. Review the warning carefully. 
   <Note>
     Note: Deleting a parent category automatically removes all its sub-categories. 
   </Note>
5. If certain, click **Delete**. Otherwise, click **Cancel**. 

#### Searching and Filtering Categories 

* Use the search bar at the top to filter by name. 
* Expand all categories using the **Expand all** link to view sub-categories inline. 
* Reorder by dragging and dropping is the preferred location for the subcategory. 

## **Parts and services locations**

Locations help organize parts and services tracking for easier management.

<Frame>
  **Navigation**: *Settings -> Modules -> Parts & Services -> Parts & Services Locations*
</Frame>

Adding a new location

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” choose the “**Parts & Services**.” Select the “**Parts & Services Location Settings**.”

<Frame>
  <img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prs3.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=0cca37bd001b5adab6fba54ef3197dfd" alt="Prs3 Pn" width="1892" height="878" data-path="images/Prs3.png" />
</Frame>

2. Click the + New Location button.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prs9.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=e9ee2f3bc1d087064c4b5e69b2969786" alt="Prs9 Pn" width="1919" height="865" data-path="images/Prs9.png" />
</Frame>

3. Fill in the following details.

* Location Name (Mandatory): Enter a name for the location. Maximum 26 characters.
* Location Type ( Mandatory): Select from the dropdown (Site, Warehouse, Van, Others).
* Can FE access this location? (Mandatory): Choose an option
* Location Description: Add a brief description.
* Address: Use “**Pick from map**” to select an address. A map preview will display the selected location.
* Street Address ( Mandatory): Automatically filled based on the selected address but can be edited.
* Landmark: Add a nearby landmark (optional).
* City (required): Automatically filled but editable.
* State/Province: Automatically filled but editable.
* ZIP code: Automatically filled but editable.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prs10.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=1801b09aab334edb46791e28f5851148" alt="Prs10 Pn" width="1914" height="869" data-path="images/Prs10.png" />
</Frame>

* Click **Create** to save the location.

## **Product - parts custom fields**

<Frame>
  **Navigation**: *Settings -> Modules -> Parts & Services - > Parts & Services Custom Fields*
</Frame>

1. Select the "**Settings**" module from the left panel. Under the "**Modules**," choose the "**Parts & Services**" Select the "**Parts & Services Custom Fields**."

<Frame>
  <img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prs15.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=8b1636d2af74cd9b9465c6b080cb68c6" alt="Prs15 Pn" width="1919" height="870" data-path="images/Prs15.png" />
</Frame>

<AccordionGroup>
  <Accordion title="Text">
    * Single-Line Input: This allows you to create a field to enter a single line of free text.
    * Multi-Line Input: This allows you to create a field to enter multiple lines of free text.
  </Accordion>

  <Accordion title="Date">
    * Date Input: This allows you to create a field to select a specific date from a calendar.
    * Time Input: This allows you to create a field where you can select a specific time.
    * Date Time Input: This allows you to create a field where both date and time can be selected.
  </Accordion>

  <Accordion title="Selection">
    * Single-Selection: This allows you to create a radio input Field where one of the provided options can be selected.
    * Multi-Selection: This allows you to create check boxes where the provided options can be checked.
    * Drop-Down: This allows you to create a drop-down field with the required list of options.
  </Accordion>

  <Accordion title="Media">
    * Upload: This allows you to create a file input field to upload files.
  </Accordion>

  <Accordion title="Misc">
    * **Look up** : This allows you to create a file input field to look up the products from the parts and services module.
  </Accordion>
</AccordionGroup>

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prs18.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=697d6589f5bc7a85a1fa79f0c42377cd" alt="Prs18 Pn" width="1913" height="883" data-path="images/Prs18.png" />

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prs17.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=6b78ab461ad4dadf1ac892c718c2c007" alt="Prs17 Pn" width="1920" height="874" data-path="images/Prs17.png" />

<Note>
  Note: You can also control the behavior and visibility of each field using the following options:

  * Mark as Required Field -  Makes the field mandatory to fill out before submitting the form.
  * Mark as Read Only—This option makes the field non-editable; users can view the value but cannot modify it.
  * Mark as hidden field- This hides the field from all users; it will not appear in the form interface.
  * Hide to FE/Technician- This option makes the field invisible to technicians or front-end users during form access.
</Note>

2. Click “**Create New**” to create the “**Custom Field**” group.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prs16.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=593dd15755e84a7e6d86bc6c11f30843" alt="Prs16 Pn" width="1913" height="883" data-path="images/Prs16.png" />

Zuper’s Parts and Services settings let you manage your inventory and offerings effortlessly, ensuring accurate pricing and availability.


## Related topics

- [Avalara](/Integrations/Accounting_and_payments/Avalara.md)
- [Configuring Request Settings](/Settings/Modules/Requests/Request_Settings.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.