---
title: "Product Bundles"
source: https://docs.zuper.co/Inventory_Management/Parts_Services/Bundles.md
fetched_at: 2026-10-06T13:29:48.425Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Product Bundles

Product Bundles in Zuper allow your business to streamline operations by grouping multiple parts, products, or services into a single unit. Whether you need to sell a collection of items together or offer a package of services as one, product bundles simplify the process by allowing you to create **bundle level** or **Roll-Up items**, giving you flexibility in pricing and managing products.

Using product bundles, you can customize how grouped items appear to customers as a single line item or with a detailed breakdown, ensuring transparency where needed. Additionally, these bundles can be incorporated into Quotes, Invoices, Proposals, Contracts, Jobs, and Projects, allowing seamless workflows across various transactions.

This article will guide you step-by-step through the process of creating, managing, and integrating product bundles into your transactions for seamless workflows.

## Prerequisites

1. Product Bundle is only available on the V3 Web app. If you are using V2, you can get started with V3 using the link below. Your login credentials will be the same as those for V2: **V3 Live (Production)** - [https://web.zuperpro.com/login.](https://web.zuperpro.com/login.)
2. To enable the Parts & Services module for your account, please contact the account admin or email [support@zuper.co](mailto:support@zuper.co).
3. Ensure you have configured the following settings under **Settings > Organizations >Parts & Services Settings** :

* **Default pricing level for Bundle?:** This setting allows you to choose between **Bundle price** (fixed price for the entire bundle) or **Roll up price** (automatically sums individual item prices). Note that even with the default pricing setting configured, you can still select the pricing method—either **Bundle level price** or **Roll up item prices**—when creating a new product bundle.
* **Display the Bundle to the Customer as**
  1. **One Item**: Display the entire bundle as a single line item in transactions.
  2. **All Items**: Shows a detailed breakdown of each component within the bundle. This setting determines how individual items within a bundle are displayed to customers in transactions.

<img src="https://mintcdn.com/zuperinc/egc-PiUGdG7ej2Pe/Inventory_Management/Bund-1.png?fit=max&auto=format&n=egc-PiUGdG7ej2Pe&q=85&s=c803d95b4ed80998370bff9c059dc1ce" alt="" width="1828" height="910" data-path="Inventory_Management/Bund-1.png" />

<Frame>
  **Navigation**: *Inventory & Pricebook*-> *Parts & Services*
</Frame>

## Creating a product bundle

Now, let's get started with creating the Product Bundle. Follow these steps to group your parts, services, or products into a single unit:

1. Select the "**Inventory & Pricebook**" module from the left navigation menu and choose " **Parts &** **Services**".

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Bund-2.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=4eb471b546c6eba5076dd687999da295" alt="" width="1905" height="920" data-path="Inventory_Management/Bund-2.png" />

2. In the action bar, click “ **+ New Part/Service** ." <img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/part-1.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=a803cf9966d61c05008ddb27d22cac8c" width="1904" height="918" data-path="Inventory_Management/part-1.png" /> 3. Select “ **Bundle** ” as a Type under the " **Parts & Services Details** " section.

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Bund-3.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=35a3eeb7df6dda195288cebaf241c1be" alt="" width="1909" height="620" data-path="Inventory_Management/Bund-3.png" />

4. The Product Bundle creation page appears.

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Bund-4.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=d7fdffb39282288b027975392ed0b22a" alt="" width="1919" height="897" data-path="Inventory_Management/Bund-4.png" />

5. Provide a descriptive **Bundle Name**.

6. Provide a unique identifier for the **Bundle Number**.

7. Assign the bundle to a relevant **Category**.

8. Specify whether the item is **Billable** or **Non-Billable** :

* **Billable**: The cost of the bundle will be included in the transaction document.
* **Non-Billable**: The bundle will be shown as a non-billable line item, which is excluded from the total amount billed but will still be tracked for reference.

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Bund-5.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=5bdddc5ab104a53aaf17001806c873fb" alt="" width="1919" height="897" data-path="Inventory_Management/Bund-5.png" />

9. **Choose pricing options** —either a “ **Set Bundle Price** ” (with a set price for the group) or a “ **Roll-Up Item Price** ” (with individual item prices adding up).

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Bund-6.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=2ed0a87afc85596e4797002d3735bd40" alt="" width="1919" height="897" data-path="Inventory_Management/Bund-6.png" />

<Info>
  **Info**: If you haven't set Bundle as Billable in the master level, when you use it in transactions (e.g., a Job or Quote), the "**Non-Billable**" status will be reflected in all subsequent transaction documents. However, you can choose to edit it in the transaction, allowing you to modify the status on a case-by-case basis.
</Info>

<Accordion title="Understanding Bundle Price and Roll-Up Item Price" defaultOpen={false}>
  * **Bundle Price**: The Bundle level price allows you to set a fixed selling price for the entire bundle of items. This price is defined at the bundle level, and it represents the total cost for all the included parts, products, and services, regardless of the individual item prices. *<u>Example:</u>* If "Product X" costs $50 and "Service Y" costs $100, and you set the Bundle selling price to $200, the customer will see $200 as the total price for the entire bundle.
  * **Roll-Up Item Price**: With a Roll-Up Item bundle, the final price is determined by adding the prices of each item within the bundle. This is useful when you want customers to see how much each component costs but still sell it as a package. *<u>Example:</u>* If you offer "Product X" for $50 and "Service Y" for $100, the bundle will automatically calculate to \$150.
</Accordion>

10. Add Bundle Items:

* Click "**Add"** and select parts, products, or services in the **Bundle Items** section.

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Bund-7.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=efcf6a1286771c6cf457b4608770c282" alt="" width="1909" height="802" data-path="Inventory_Management/Bund-7.png" />

* Specify the **Quantity** of each item to be included in your bundle.
* After specifying the parts and products, click "**Add Product**".

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Bund-8.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=2f24236f67c1fa423aff4d84b997a78f" alt="" width="1910" height="815" data-path="Inventory_Management/Bund-8.png" />

11. Enter the following pricing details. Based on your bundle type selection:

<AccordionGroup>
  <Accordion title="For Set bundle price" defaultOpen={false}>
    * **Bundle Cost Price:** Specify the total cost of the entire bundle.
    * **Markup** (optional): Apply a markup percentage, which will automatically adjust the final price based on the cost price.
    * **Bundle Sell Price**: This is the total price at which the bundle will be sold to the customer, calculated based on the cost price and the markup you set.

          <img src="https://mintlify.s3.us-west-1.amazonaws.com/zuperinc/Inventory_Pricing_Management/Bund-9.png" alt="" />
  </Accordion>

  <Accordion title="For Roll-Up item prices" defaultOpen={false}>
    The system will automatically calculate the price of the bundle based on the sum of the individual prices of the parts, products, and services included in the bundle. **Markup** is not applicable for **Roll-Up** pricing.

    <img src="https://mintlify.s3.us-west-1.amazonaws.com/zuperinc/Inventory_Pricing_Management/Bund-10.png" alt="" />
  </Accordion>
</AccordionGroup>

12. Enter the relevant tax codes for the bundle. If the bundle has a **Set Price** (i.e., a fixed price for the entire bundle), tax will be applied to the total price of the entire bundle. If the bundle consists of individual **Roll-Up Items** (components with separate prices), the tax will be automatically calculated for each item based on its individual price and tax rate.

<Accordion title="Setting the Bundle's Display Quantity" icon="star">
  When a roll-up bundle contains items with different units of measure, selecting one item’s quantity as the bundle quantity helps show a single clear number on quotes, invoices, and proposals. 

  You can now choose which item’s quantity and unit of measure Zuper will use as the bundle’s display quantity on these documents.  

  <Note>
    **Note**: This applies to **Roll-Up bundles** only. 
  </Note>

  **To set the display quantity:** 

  1. In the **Bundle Items** section, click the **context** menu next to the item whose quantity should represent the entire bundle. 

  2. Select **Set as Bundle's Display Quantity**. 

  3. Click **Save Part / Service**. 

  The selected quantity and unit of measure are reflected on the present proposal screen, proposal PDF, and public links of proposals, quotes, and invoices. 

  <Frame>
    <img src="https://mintcdn.com/zuperinc/xRcsXOKwPOg_4Tea/images/displayquantity-01.png?fit=max&auto=format&n=xRcsXOKwPOg_4Tea&q=85&s=9d2dff6816eb7c0451dd6af03f206a02" alt="Displayquantity 01" width="1920" height="869" data-path="images/displayquantity-01.png" />
  </Frame>

  <Note>
    **Important Note:** Update your quote and invoice templates for these changes to take effect. This does not apply retroactively to existing templates or previously created documents. 
  </Note>
</Accordion>

13. Now, click " **Save Part / Service** ."

<img src="https://mintcdn.com/zuperinc/egc-PiUGdG7ej2Pe/Inventory_Management/Bund-11.png?fit=max&auto=format&n=egc-PiUGdG7ej2Pe&q=85&s=fe8586ae3fb50e45efff71c1baf8d409" alt="" width="1908" height="916" data-path="Inventory_Management/Bund-11.png" />

Your new Product Bundle is now ready to use!

## Adding product bundles to a transaction

When creating a transaction such as a Quote, Invoice, Proposal, Contract, Job, or Project, follow these steps to add Product Bundles:

1. During the transaction creation, Under the " **Parts/Services** " tab.

2. Click the " **Add** " button and select “ **Bundle** ” to open the Product Bundle selector. <img src="https://mintcdn.com/zuperinc/egc-PiUGdG7ej2Pe/Inventory_Management/Bund-12.png?fit=max&auto=format&n=egc-PiUGdG7ej2Pe&q=85&s=184fb32c6d8d5b555245aa19520c3d67" width="1906" height="921" data-path="Inventory_Management/Bund-12.png" /> 3. The left-hand side displays a list of available product bundles. The filter options at the top allow you to search for specific bundles and filter by category, availability, or pricing. <img src="https://mintcdn.com/zuperinc/egc-PiUGdG7ej2Pe/Inventory_Management/Bund-13.png?fit=max&auto=format&n=egc-PiUGdG7ej2Pe&q=85&s=449b04c6065ae9bd950bad16ed290b8b" width="1908" height="914" data-path="Inventory_Management/Bund-13.png" /> 4. After selecting a product bundle, the **Primary Details** section on the right side will show key information. The fields available in this section depend on the pricing level configured for the bundle.

* **Description**: Description will be auto-populated. However, you can choose to modify.
* **Quantity**: Enter the bundle quantity to add the desired number of bundles to the transaction.
* **Bundle Cost**: Specify the total cost of the entire bundle.
* **Markup**: You can apply a markup percentage, which will automatically adjust the final price based on the cost price.
* **Bundle Sell Price**: The price for the entire bundle.

<Note>
  **Note:** For Roll-Up item bundles, the system calculates the total price based on the individual prices of the parts, products, or services included in the bundle.
</Note>

* **Billable**: Specify whether the product bundle is billable or not.
  <img src="https://mintcdn.com/zuperinc/egc-PiUGdG7ej2Pe/Inventory_Management/Bund-14.png?fit=max&auto=format&n=egc-PiUGdG7ej2Pe&q=85&s=cf2be99811973fe35025bbd3315b4c9c" alt="" width="1920" height="908" data-path="Inventory_Management/Bund-14.png" />

5. Under the **Bundle Items** section, you will see the components included in the bundle:

* **Line Item:** The name of each part or product in the bundle.
* **Description:** A brief description of the item. You can update the description of the item.
* **Type:** Indicates whether the item is a part, product, or service.
* **Location:** Specify the item’s location of each item in the bundle during the transaction.
  <img src="https://mintcdn.com/zuperinc/egc-PiUGdG7ej2Pe/Inventory_Management/Bund-15.png?fit=max&auto=format&n=egc-PiUGdG7ej2Pe&q=85&s=a20a8e9b55e640b4a266cecb2eac54ab" alt="" width="1920" height="908" data-path="Inventory_Management/Bund-15.png" />

6. After selecting and reviewing the bundle, click " **Add Bundle** " to include it in your transaction. Note that only one bundle can be added to a transaction at a time since the location for each component needs to be specified individually.

<img src="https://mintcdn.com/zuperinc/egc-PiUGdG7ej2Pe/Inventory_Management/Bund-16.png?fit=max&auto=format&n=egc-PiUGdG7ej2Pe&q=85&s=1ec16a0873d885bae81a6602b7c601bd" alt="" width="1920" height="908" data-path="Inventory_Management/Bund-16.png" />

7. The bundle will now appear in your Parts/Services list on the transaction. The visibility of the grouped items is based on the setting configured in **Settings -> Organizations ->** **Parts and Services Settings -> “Display Bundle to Customer as** ."

<img src="https://mintcdn.com/zuperinc/egc-PiUGdG7ej2Pe/Inventory_Management/Bund-17.png?fit=max&auto=format&n=egc-PiUGdG7ej2Pe&q=85&s=e1673afe06999df09a4a1caa72defa21" alt="" width="1907" height="901" data-path="Inventory_Management/Bund-17.png" />

<Note>
  **Note:** The visibility of product bundles as either a single line item or a detailed breakdown of each item within the bundle will not apply to existing templates (e.g., Quotes, Invoices, Proposals, or Jobs in the Customer Portal).  Existing templates will continue to display bundles based on their original configuration, regardless of changes to the bundle display settings. To reflect these changes, new templates must be created for Quotes, Invoices, Proposals, or Jobs.
</Note>

### Adding product bundles to a service package

The following procedure describes how to add product bundles to a Service Package. The steps are similar for adding product bundles to a Contract Package.

1. Select the **Settings** icon from the left navigation menu.

2. Under **Configuration** Settings, click the **Quotes & Invoices** section.

3. Select **Service Packages** and click the **+ New Package** button.

4. Fill in the Service Package Details:

* **Name**: Enter the name of the service package.
* **Description**: Provide a brief description of the service package.
* **Remarks**: Add any additional notes or remarks.

5. Add items to the package:

* Click the **+ Add Item** button to include individual parts, products, and services.
* Alternatively, use the dropdown menu next to the **+ Add Item** button to:
  <br />
  i. **Add from Group**: Select a predefined group of items to add to the package.
  <br />
  ii. **Bundle**: Include a product or service bundle.

<Note>
  **Note**: Bundles will not appear in the **Product Type** filter menu; you can add them separately.
</Note>

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Parts_Services/chrome_5z7J1tNaeQ.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=9915ff4d8ebdf5f485bd87a54f8049bd" alt="" width="1906" height="582" data-path="Inventory_Management/Parts_Services/chrome_5z7J1tNaeQ.png" />

Once all details are added, the Service Package is created successfully.

## FAQs

1. **What is the difference between an Item Group and a Product Bundle in Zuper?** A Product Bundle in Zuper combines multiple items into a single package for streamlined pricing and sales, with options to display as a single item or with itemized details in transactions. An Item Group is used grouping items without impacting pricing or how they appear to customers.
2. **How can I update the billable status for a bundle item while working on a transaction?** If you are logged in with Admin access or your role permits, you can update the billable status of a bundle item directly on the **Update Line Item** page. If you are experiencing issues while trying to update the billable status, please reach out to us at [support@zuper.co](mailto:support@zuper.co).
3. **What should I know about syncing product bundles with QuickBooks Online** **(QBO)?** For product bundles to sync correctly with QuickBooks Online (QBO), ensure the bundle is first created manually in QBO. If a bundle doesn’t exist in QBO, the sync will fail, and an error message appears in the Sync History. **Note that:** a. Bundle Level Pricing is currently not supported by QBO. b. Roll-Up bundle will sync using the combined item costs. c. Discounts and markups may not sync properly due to integration limitations. d. If an invoice with bundles fails to sync, the entire transaction will not be processed.


## Related topics

- [Create a new part/product or service](/Inventory_Management/Parts_Services/Create_New_Part_Service.md)
- [Debugging common errors](/Integrations/Accounting_and_payments/QBO_Errors.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.