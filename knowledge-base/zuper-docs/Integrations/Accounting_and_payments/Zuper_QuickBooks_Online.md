---
title: "Setup the integration"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online.md
fetched_at: 2026-10-06T13:30:23.179Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Setup the integration

Zuper is integrated with QuickBooks Online to make your accounting and inventory management go hand-in-hand with this seamless integration.

## Zuper - QuickBooks Online integration plans

* **Simple Start (US/Global) and Essentials (US) Plans**: Most integration features are available.
* **Features Requiring Higher Plans**:
  * **Inventory Sync (bi-directional)**: Requires Plus or Advanced plan.
  * **Class Tracking**: Requires Plus or Advanced plan.
  * **Multicurrency Support**: Requires Essentials or higher (Essentials, Plus, or Advanced).
* **Custom Fields**:
  * Depending on the plan, the number of custom fields that can be added to a transaction or synced from Zuper may vary.

## Before you get started

* You must have an active account with QuickBooks Online.
* You cannot connect multiple QuickBooks Online organizations to your Zuper account and vice versa.
* Ensure that the base currency of both these organizations is the same.
* Ensure that the Zuper account used for API key generation and the one used for syncing invoices with QuickBooks Online are separate.

<Note>
  **Note:** It is mandatory to enter the Zuper API Key for Integration to perform smoothly.
</Note>

## Set up QuickBooks Online integration with Zuper

Integrating Zuper with QuickBooks Online is a simple and streamlined process.

* Log in to your Zuper account. Navigate to the App Store on the sidebar.

<Frame>
  <img src="https://mintcdn.com/zuperinc/nNoa-R0ZKv3XbxIR/images/GAF9.png?fit=max&auto=format&n=nNoa-R0ZKv3XbxIR&q=85&s=11f5fef8bf812367825d02d2bb15df41" alt="GAF9" width="1920" height="878" data-path="images/GAF9.png" />
</Frame>

* Choose **Accounting & Payments** from the side menu. Select QuickBooks Online.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/QBC5.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=b702e764618d6695a66017c1ae83d879" alt="QBC5 Pn" width="1907" height="868" data-path="images/QBC5.png" />

* Click "**Connect to QuickBooks Online**".

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/QBC11.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=aa41208bf9ae68741eea4dc35878a951" alt="QBC11 Pn" width="1905" height="855" data-path="images/QBC11.png" />

* You will be redirected to the QuickBooks Online sign-in page. Enter your credentials to proceed with the integration.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/QBC8.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=1a2af7e1b06a6f10306eb7baa69b4c21" alt="QBC8 Pn" width="1920" height="827" data-path="images/QBC8.png" />

* Once you sign in to QuickBooks Online, select the organization you want to connect with inventory if you have multiple organizations. After choosing an organization, click **Next** to complete the integration.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/QBC9.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=b46257134cbb56be3a2cc485dbce9a3e" alt="QBC9 Pn" width="1920" height="827" data-path="images/QBC9.png" />

## Zuper App Configuration

* Once you have connected with QuickBooks Online, you will be redirected to your Zuper account to configure the integration.
* You must configure the settings to sync the Zuper modules with QuickBooks Online.

<img src="https://mintcdn.com/zuperinc/GNO0CoOxkbGRGWuz/images/QBA.png?fit=max&auto=format&n=GNO0CoOxkbGRGWuz&q=85&s=529f573c4f8ea81ee4bdbabd73a577f7" alt="QBA Pn" width="1920" height="2786" data-path="images/QBA.png" />

* To create the Zuper API (**Mandatory**), refer to the section below:

<Accordion title="API Key Creation" defaultOpen="false">
  If you are trying to integrate Zuper with any external systems, you will need an API key to access the Zuper APIs. To generate API (Application Programming Interface) Key, please follow the below steps.

  1. Log in to Zuper with an admin account.
  2. Scroll down the menu bar on the left and select the "**Settings**" icon key.
  3. Under the "**General Settings**" category, select "**Account Settings.**"

  <img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/API1.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=a527a974f60fa2d2ab4576c7a6fc3cf7" alt="" width="1882" height="879" data-path="Integrations/API1.png" />

  4. On the account settings page, select **"API Keys."**

  <img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/API2.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=8bbd950683db330523b40ee4267114ae" alt="" width="1888" height="861" data-path="Integrations/API2.png" />

  5. Click on "**New API Key**" and enter the name of the API key in the pop-up windows.

  <img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/API3.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=f78ab7d03ebfd419b93654e064679930" alt="" width="1891" height="880" data-path="Integrations/API3.png" />

  6. Click on "**Create**" to generate the API key. (Once created, the API key can be viewed by clicking on the "**View API Key**" hyperlink.)

  <img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/API4.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=c16b227ad38b8432695bc0fcec75c789" alt="" width="1892" height="871" data-path="Integrations/API4.png" />

  5. To delete/deactivate an existing API, click on the "**Delete API Key**" (x) next to the respective API.

  <img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/API5.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=0530249aab942ef9652ddb90e7b49968" alt="" width="888" height="168" data-path="Integrations/API5.png" />

  <Note>
    Note: The API key generated will provide full permission & access to the user who

    created this key. Please ensure to store this key securely.
  </Note>
</Accordion>

<Note>
  **Note:** It is mandatory to enter the Zuper API Key for Integration to perform smoothly.
</Note>

* Sync Customers (**Mandatory**) - If you select "**Yes**," whenever a new customer is created in Zuper, it will automatically synchronize with the QuickBooks Online customer module. If you choose "**No**," customer sync between Zuper and QuickBooks Online will not be executed.
* Sync Estimates (**Mandatory**) - If you select "**Yes**," whenever a new quote is created in Zuper, it will automatically synchronize with the QuickBooks Online estimate module. If you choose "**No**," a quote sync between Zuper and QuickBooks Online will not be executed.
* Sync Deposits to Customer -  If you select "**Yes**," whenever a deposit is created in Zuper, it will automatically synchronize with the QuickBooks Online customer module. If you choose "**No**," the deposit will not be synced to the customer on QuickBooks Online.
* Sync Services and Products (**Mandatory**) -  By selecting "**Yes**,"  inventory will synchronize two ways from Zuper to QuickBooks Online and vice versa. If "**No**" is selected, Zuper and QuickBooks Online do not synchronize inventory items.

<Note>
  **Note:** You need a QuickBooks Online "Essentials" plan and above
</Note>

* Master Product System (**Mandatory**) - By selecting "**Zuper**," the master product system will be Zuper. If "**QuickBooks Online**" is selected, the master product is QuickBooks Online.
* Master Product Location- Enter the Master product location to which the inventory line is synced from Zuper to QuickBooks Online.
* Non-Inventory Product Quantity -  Enter the non-inventory product quantity synced from Zuper to QuickBooks Online.
* Product Minimum Quantity -  Enter the product minimum quantity of Zuper to which QuickBooks Online is synced.
* Invoice Status (**Mandatory**) - Upon selecting the status for the Invoice in  Zuper, we trigger the sync to create a similar invoice in QuickBooks Online without any duplication. If the status is selected as "**All**" upon creating the Invoice in Zuper, sync will be triggered immediately, and the invoice will be made in QuickBooks Online.
* Default Tax Agency (In QuickBooks) - Copy and paste the "**Default tax Agency**" from QuickBooks Online, if available.
* Sync Failure Emails - A failed error message will be emailed to the given IDs upon sync.
* Default Payment Mode UID (**Mandatory**) - To sync with QuickBooks Online, enter the default Zuper payment mode UID.
* Auto Enable invoice payment methods - If you select "**Yes**," the invoice payment method created in Zuper will automatically sync with the QuickBooks Online invoice module. If you choose "**No**," the invoice sync between Zuper and QuickBooks Online will not be executed.
* Default Payment Mode UID (To get the "**Payment UID**," click "**CTRL+Shift+J**" and copy and paste the payment mode code).

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QBO2.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=9cf452a828423e681e7e714b767b812c" alt="" width="1366" height="693" data-path="Integrations/Accounting_and_payments/QBO2.png" />

* Estimate or Invoice ID (**Mandatory**)- After selecting the "**Zuper ID or QuickBooks Online ID**," This will be updated in QuickBooks online under the field name "**Estimate or Invoice No**."
* Identify Customers in Zuper-QuickBooks - When selecting the option below and syncing the invoice or estimate with QuickBooks Online, it checks and creates the invoice for the right customer.

| Zuper Fields | QuickBooks Online Fields |
| - | - |
| Customer Email | Customer Email |
| Customer Name | Customer Name |
| Billing Email | Customer  Email |
| Billing Name | Customer Display Name |
| Organization Name | Customer Display Name |

* QuickBooks Plan (**Mandatory**) - The product type is allowed as "**Service**" only for the Essentials plan in QuickBooks Online. If not the Essentials plan, the product type can be "**Inventory or Non-Inventory**."
* Custom Field Mapping - The data flows from Zuper Custom fields to QuickBooks Online Custom fields from the invoice. The sync is limited to custom fields from the Invoice module.

The format of custom field mapping is:

**QuickBooksOnlineField1, ZuperField1; QuickBooksOnlineField2, ZuperField2.**

<Note>
  **Note:** QuickBooks Online supports only three custom fields; if we add more than three custom fields, the data sync will not occur.
</Note>

* Display Name Format - From Zuper account for the invoices and estimates, the customer name sync to QuickBooks Online happens based on the dropdown options:

**First Name, Last Name (Default)**

**Last Name, First Name**

Based on the preference chosen, the name sync happens.

* Account Name to deposit Payments – Enter the account name to which the payment needs to be allocated. The payment amount will be recorded in the chosen account, ensuring accurate financial tracking and allocation.
* For example, if the deposit payment is for rent, you might enter "**Rent Expense account**" in this field to ensure the payment amount is recorded under the Rent Expense account in QuickBooks Online.
* Delete action in Zuper to Void in QuickBooks – Upon selecting "**Yes**," whenever any invoice is deleted in Zuper, it will also be voided in QuickBooks Online. If "**No**" is selected, deleting an invoice in Zuper will only remove it from Zuper, leaving the corresponding invoice unaffected in QuickBooks Online.
* Invoice Cancel in Zuper to Void in QuickBooks – If you select "**Yes**," the invoice voided in Zuper will be invalid in QuickBooks Online. If you select "**No**," the invoice voided in Zuper will not be invalid in QuickBooks Online.
* Use QuickBooks as Tax Master – Upon selecting "**Yes**," QuickBooks Online will be the primary source for tax-related information, such as tax rates and codes. If "**No**" is selected, Zuper will be the primary source for Tax.

If QuickBooks Online is chosen as the primary tax source, ensure that tax configurations in Zuper align with those specified in QuickBooks Online.

* Push Email Field for Customer in QuickBooks – Enter the Zuper customers' email to sync with them on QuickBooks Online.
* Use Different Discount Accounts in QuickBooks – If "**Yes**," the different discount accounts will be used in QuickBooks Online; the discount account is specified in the Discount Name. If "**No**" is selected, the default discount account will be used in QuickBooks Online.
* Class Tracking - Enabling Class Tracking for Invoices, Quotes, and Products in QuickBooks Online.

In our App Settings, we allow "**Item Level**" or "**Invoice Level**" class tracking

* If it is set as "**Invoice Level**", we look for the custom field '**QuickBooks Online Class**', if a value is found, we sync that to QuickBooks Online as part of the invoice sync
* If it is set as "**Item Level**", then we iterate through each line item in the invoice & each item's custom field "**QuickBooks Online Class**" and use that for itemitem-level level class sync with QuickBooks Online.

**QuickBooks Sync**

**Sync Line Items As** - Choose how line items from Zuper invoices or estimates are synced to QuickBooks Online:

* **Summarized Line Items**: : Syncs each product line item individually. With this option, bundles are not split into components and may fail to sync if not already present in QuickBooks Online.
* **Bundle as components**: Roll-up bundles sync to QuickBooks Online as their individual component Products/Services, preserving each component’s quantity, price, discount, and tax as defined by the bundle. Non-bundle items continue syncing using the standard/default behavior.

<Note>
  **Note**: This applies only to roll-up bundles. Because the QuickBooks Online API does not support creating bundles, bundles are exported by syncing their components instead.
</Note>

<img src="https://mintcdn.com/zuperinc/vIV0lg237dpv95yJ/Integrations/Accounting_and_payments/QBO_bu1.png?fit=max&auto=format&n=vIV0lg237dpv95yJ&q=85&s=c2dc2cd2af3df4cba3354775b2c59d6f" alt="QBO Bu1" width="1919" height="824" data-path="Integrations/Accounting_and_payments/QBO_bu1.png" />

**Zuper:**

<img src="https://mintcdn.com/zuperinc/vIV0lg237dpv95yJ/Integrations/Accounting_and_payments/QBO_bu3.png?fit=max&auto=format&n=vIV0lg237dpv95yJ&q=85&s=efc9437b59bec8f449e941bd02c08998" alt="QBO Bu3" width="1920" height="827" data-path="Integrations/Accounting_and_payments/QBO_bu3.png" />

**QuickBooks:**

<img src="https://mintcdn.com/zuperinc/vIV0lg237dpv95yJ/Integrations/Accounting_and_payments/QBO_bu2.png?fit=max&auto=format&n=vIV0lg237dpv95yJ&q=85&s=f7764ccc2402d29bf0a7af0ff7942232" alt="QBO Bu2" width="1920" height="2528" data-path="Integrations/Accounting_and_payments/QBO_bu2.png" />

**Payment Sync Direction** - Configure the direction of payment synchronization between Zuper and QuickBooks Online:

* **Both Ways**: Payments sync bidirectionally.
* **Zuper to QuickBooks Online**: Syncs payments only from Zuper to QuickBooks Online.
* **QuickBooks Online to Zuper**: Syncs payments only from QuickBooks Online to Zuper.
* **No Sync**: Disables payment synchronization.

<img src="https://mintcdn.com/zuperinc/TgucQ-0eb3aCZcIc/images/QBNew2.png?fit=max&auto=format&n=TgucQ-0eb3aCZcIc&q=85&s=ea8525c46005a0d631fe9bb310645aa4" alt="QB New2 Pn" width="594" height="223" data-path="images/QBNew2.png" />

**Estimate Status to Trigger Sync (Mandatory)** - Select the status of the Quote in Zuper that will trigger the sync to QuickBooks Online. Options include:

* **All**: : Sync is triggered for any new estimate created in Zuper in the "**Draft**" status.
* **Sent**: Sync is triggered only when the estimate status changes to "**Sent**."
* **Accepted**: Sync is triggered only when the estimate status changes to "**Accepted**".

<img src="https://mintcdn.com/zuperinc/TgucQ-0eb3aCZcIc/images/QBNew3.png?fit=max&auto=format&n=TgucQ-0eb3aCZcIc&q=85&s=d6430b241a1bc7fc87a62245d07ae15a" alt="QB New3 Pn" width="587" height="192" data-path="images/QBNew3.png" />

Sync Deposits to Customer - If you select “**Yes**,” whenever a deposit is created in Zuper, it will automatically synchronize with the QuickBooks Online customer module. If you choose “**No**,” the deposit will not be synced to the customer on QuickBooks Online.

<Note>
  **Note**: This setting is independent of the Estimate Status to Trigger Sync setting and operates separately for deposit synchronization.
</Note>

***

## QuickBooks Online **Field mapping**

**Module - Invoices**

| **Zuper Field** | **QuickBooks Online Field** | **Notes** |
| - | - | - |
| Prefix | Doc No. | Prefix and Invoice No. are joined to create Doc No. (when ID preference is Zuper) |
| Invoice No. | Doc No. | |
| Reference No. | Doc No. | When ID preference is set to QuickBooks Online. Doc No. syncs from QuickBooks Online to Zuper Reference No. |
| Invoice Date | Transaction Date | |
| Payment Term | Sales Term | |
| Invoice Due Date | Due Date | |
| Invoice Template | NA | |
| Invoice Tags | NA | |
| Invoice Description | NA | |
| Invoice Total | Total Amount | |
| Invoice Remarks | Customer Memo | “Note to Customer” in the UI |
| Invoice CC Email | Secondary Contacts Email (From Job) | The associated jobs' secondary contact emails are synced to the CC fields in the invoice. |
| Billing Address | Billing Address | |
| Service Address | Shipping Address | |
| Notes | Private Note | “Memo on Statement” in the UI |

 

**Module – Products**

*Inventory to Product*

| QuickBooks Online **Field** | **Zuper Field** | **Notes** |
| :- | :- | :- |
| Name | Product Name | |
| SKU | Product No. | |
| Product Image | Product Image | |
| Category | Product Category | |
| Initial Quantity on hand | Available Quantity | |
| As of date | NA | |
| Reorder Point | Min. Quantity | |
| Description | Description | |
| Sales Price/Rate | Unit Selling Price | |
| Income Account | Custom Field | |
| Sales Tax | NA | Info not directly available in API |
| Purchasing Information | | |
| Cost | | |
| Expense Account | Custom Field | |
| Asset Account | Custom Field | |
| Preferred vendor | | |
| NA | Minimum Quantity | Configured Value |
| NA | Location | Configured Location |

 *Non-Inventory to Part* 

| QuickBooks Online**Field** | **Zuper Field** | **Notes** |
| :- | :- | :- |
| Name | Part Name | |
| SKU | Part No. | |
| Category | Product Category | |
| Description | Description | |
| Sales Price/Rate | Unit Selling Price | |
| Income Account | Custom Field | |
| Sales Tax | NA | Info not directly available in API |
| Purchasing Information | | |
| NA | Available Quantity | Configured Value |
| NA | Minimum Quantity | Configured Value |
| NA | Location | Configured Location |

 *Service to Service*: <br /> 

| QuickBooks Online **Field** | **Zuper Field** | **Notes** |
| :- | :- | :- |
| Name | Service Name | |
| SKU | Service No. | |
| Category | Category | |
| Description | Description | |
| Sales Price/Rate | Unit Selling price | |
| Income Account | Custom Field | |
| Sales Tax | NA | Info not directly available in API |
| Purchasing information | NA | |

**Module - Customer** 

| **Zuper Field** | QuickBooks Online **Field** | **Notes** |
| - | - | - |
| First Name | First, Last, Display Name | Combined to create Display Name |
| Last Name | | |
| Organization | NA | Not synced to QuickBooks Online "**Company**" |
| Email | Email | |
| Category | NA | |
| Billing Street | Street Address 1 | |
| Billing City | City | |
| Billing State | State | Mapped using SubdivisionCode |
| Billing Country | Country | |
| Billing Zip Code | Zip Code | |
| Mobile Number | Mobile Number | If the Mobile Number is empty in Zuper, it will be empty in QBO. |
| Home / Work Number | Primary Phone Number | The priority order is Home > Work. |
| Description | Notes | |
| Service Address | Shipping Address | |
| Tags | NA | |
| SLA | NA | |
| Accessible to Everyone | NA | |
| Preferred Time Zone | NA | |

**Module - Vendor Management**

| **Zuper Field** | **QuickBooks Online Field** | **Notes** |
| - | - | - |
| NA | Vendor Currency | Mandatory for Vendor Creation when multicurrency is turned on |
| Vendor Name | Company Name | Changed from Company Name. Backend Key is changed |
| Vendor Display Name | Display Name | Auto Populated by QuickBooks. Mandatory field for Vendor Creation. |
| Vendor Contact Name | First Name, Last Name | |
| Name to print on checks | Auto-populated | |
| Vendor Description/Plaintext Description | NA | |
| Street Address | Street Address | |
| Landmark | NA | |
| City | City | |
| State/Province | State | |
| Country | Country | |
| Zip Code | Zip Code | |
| Latitude and Longitude | NA | |
| Contact First Name | NA | |
| Contact Last Name | NA | |
| Phone Number | Phone Number | |
| Email Address | Email | |
| Default Delivery Method | NA | |
| Additional Email Recipients | NA | |
| Default Tax Rate | | |
| Vendor Payment Terms | Payment - Terms | “Terms” field under payment section. |
| Bank Name | | |
| Bank A/C no. | Bank Account Number | |
| NA | Routing Number | |
| Opening Balance | | |
| Default Expense Category | | |
| Billing Rate (per hr) | | |
| Business ID no./SSN | NA | |
| Custom Fields | | |

## **Class-Tracking in QuickBooks Online(QuickBooks Online plus or advanced)**

In QuickBooks Online, classes can be used to track transactions and group them according to different classifications, such as business units within a company or by product lines.

Classes appear are tracked at the invoice level when the class assignment is chosen as “**one to each transaction**”. When the assignment is chosen as “**one to each row in transaction**,” the class is tracked at the line item level.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/QBC1.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=1864bf7b51994a77eec68a6d2c4fabbf" alt="QBC1 Pn" width="1560" height="714" data-path="images/QBC1.png" />

The choice made for the class assignment should also be selected in the Zuper QuickBooks Online app configuration.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/QBC2.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=6adfee51c567ef984a8deffb14f2a6f8" alt="QBC2 Pn" width="581" height="98" data-path="images/QBC2.png" />

To track classes when syncing from Zuper to QuickBooks Online, a custom field called “**QuickBooks Online Class**” must be created in the invoice or products records, depending on the configuration. The field must be configured with the values of available classes in QuickBooks Online.

When used in the transaction, the field's value must be set to the class for that record.

When synced to QuickBooks Online, these transactions will appear in the respective Class report.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/QBC3.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=1ab9404dd8984ad94a58703c0ac8acf9" alt="QBC3 Pn" width="1648" height="760" data-path="images/QBC3.png" />

<br />**Account tracking:**

We work with two types of accounts in GL - Income Account & Expense Account

* Businesses can set an Account on the item level. By default, we map it to '**Sales of Product Income**' for the Income account and "**Cost of Goods Sold**" for the Expense Account
* But if they would like to override, we can set up a custom field called '**QuickBooks Online Income Account**' and '**QuickBooks Onlin**e **Expense Account** ' on the item level to override the above default account while syncing to QuickBooks Online.

When creating a new invoice or quote or product in QuickBooks Online, we can assign it a class while syncing it from Zuper to accurately track and categorize financial transactions.

1. In the QuickBooks Online configuration screen, based on what you've specified in QuickBooks Online, select whether class tracking is to be done and if it is to be done for the entire transaction or each line item in the transaction.
2. Go to Settings > Custom Fields & Checklist Settings > Invoice Fields, Product Fields, Part Fields, streamlined and straightforward or Quotation Fields.
3. Create a custom field with the label "**QuickBooks Online Class**."
4. While creating the invoice, ensure that the value for the custom field is present.

## QuickBooks Online Account Configure

* Sign in to the QuickBooks Online account and click the link below based on the signed-in account. Then click the "**Switch Now**" button.
* [QuickBooks Online Live Account ](https://app.qbo.intuit.com/app/categorymigration)
* [QuickBooks Online Staging Account](https://sandbox.qbo.intuit.com/app/categorymigration)

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QBO4.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=dd960cf0cb79dfd1f13d71ef43d598e8" alt="" width="1366" height="653" data-path="Integrations/Accounting_and_payments/QBO4.png" />

* Go to Accounting -> Chart of Accounts and make the following changes to the below 3 accounts:

| Name | Account Type | |
| - | - | - |
| Inventory Asset | Account Type: Other Current Details | Details Type: Inventory |
| Cost of Goods Sold | Account Type: Cost of Goods Sold | Details Type: Supplies and Materials - COGS |
| Sales of Product Name | Account Type: Income | Details Type: Sale of Product Income |
| | | |

### Pushing Customers to QuickBooks Online

With the Zuper-QuickBooks Online integration, you can sync Customer master data from Zuper to QuickBooks. You can control this through a setting that is available in the configuration.

The customer records can be created or updated in QuickBooks Online based on changes in Zuper. If the Zuper customer is present in QuickBooks Online, then they are identified using:

* Customer QuickBooks ID.
* Email ID.
* Customer Name. (First Name Last Name)

Similarly, if the organization is present in QuickBooks Online, then they are identified using:

* Org QuickBooks ID
* Org name

The billing contact of QuickBooks Online is identified using: For billing contact

* Billing name
* Billing email

If the customer, organization, or billing contact is absent in QuickBooks Online, it will be created during the sync. This can be configured using the below setting:

<img src="https://mintcdn.com/zuperinc/OlBwuqRiLXFu-WAH/images/QBaa.png?fit=max&auto=format&n=OlBwuqRiLXFu-WAH&q=85&s=04920bbae88d6c631a18c669b7cd6f24" alt="Q Baa Pn" width="1595" height="824" data-path="images/QBaa.png" />

The various mapping details:

* The **Customer Description** mapped as **Customer Notes** in Zuper.
* The **Customer's** Address is mapped as a **Billing Address** in Zuper.

<Info>
  **Alert:** The Customer ID created in QuickBooks Online is stored as a Custom field in Zuper. To maintain the sync, it is important not to delete or override this field.
</Info>

### Push Products and Services to QuickBooks Online

* Depending on the configuration for Products Master, products and services are synced from Zuper to QuickBooks Online and vice versa.
* If the QuickBooks Online product is present in Zuper, the validation is done based on the following criteria: a. Product QuickBooks ID. b. Product Name.

<Note>
  **Note:** Based on the validation – The system will return a specific product or service if a product ID is given; another wise list of products or services will be returned if we search using the product name.
</Note>

Notes for Inventory sync

* Products and Parts of Zuper are captured as Inventory in QuickBooks Online. (Track Quantity means inventory).
* Service is captured as Service in QuickBooks Online (If the track quantity is not present, this is captured as non-Inventory).
* Before a product or part or service is created in Quickbooks Online, the category must be in QuickBooks Online. Once identified, the item will be created.

**Mapping Details**:

For all the products, a chart of account details is needed. a. Income account reference

b. Inventory Asset account reference

c. Expense account reference.

* Inventory Start Date – Company created date or Current day –1 (if company date is absent).
* Description – Product Description.
* Purchase Cost – Unit Selling Price.
* SKU – Unique ID identifying the product.

<Note>
  Note: The product type allowed in QuickBooks Online is "**Service**" only for the Essentials plan. Other than the Essentials plan, the product type can be "**Inventory or Non-Inventory**."
</Note>

Based on Zuper's tax information, the tax masters should be created in QuickBooks Online, and then the tax mapping will happen with the tax ID and name. The created Product ID in QuickBooks Online is stored as Custom fields in Zuper. Refer to this article to enable bidirectional inventory sync.

### Push Quotes to QuickBooks Online:

With the Zuper-QuickBooks Online integration, you can sync quotes from Zuper to Quickbooks Online. You can control this through a setting in the configuration.

* The data push will happen from QuickBooks Online to Zuper.
* If the Estimate settings are enabled in the integration settings, we will fetch the Estimate UID.
* If the QuickBooks Online Estimate is present in Zuper, the validation is done based on the following criteria:
* List of matching criteria is listed

<Note>
  **Note:** Based on the validation, The QuickBooks Online Estimate ID is back verified in Zuper if the ID is not present, and a new Estimate ID is created in Zuper.
</Note>

**Notes for Quotes Sync:**

* The billing address in Zuper is captured as a Customer Address in QuickBooks Online.
* Service and Billing customers of Zuper are considered Billing customers in QuickBooks Online only.
* If the customer already exists, then the customer will have a QuickBooks Online ID; if not, a new customer will be created in QuickBooks Online based on the billing address of the Zuper details.

**Line-Item Details:**

The service charge varies based on the estimate for installation or repair, so these situations are not captured as master line items. For custom line items, the amount is captured dynamically.

* Estimate's expiration date – QuickBooks Online's expiry date
* Notes - QuickBooks Online's Customer Memo
* Await Payment – Email sent (Payment collection pending)
* Customer, Customer ID – Verify that if a new customer is absent, the customer ID will be created in Zuper.
* The status names will be synchronized from Zuper to QuickBooks Online (This transaction status verification is to be done).
* US tax rule – The tax rule structure is to be followed; for the rest of the world, different taxes are calculated straightforwardly.
* The Quote number in Zuper is captured as a document number in QuickBooks Online.

The created estimate ID in QuickBooks Online is stored as a custom field in Zuper.

### Push Invoices to QuickBooks Online

Zuper-QuickBooks Online integration syncs invoices. You automatically synchronize Invoices according to the pre-defined settings and quote conversion. You can take three significant actions: Invoice Create Sync, Invoice Update Sync, Invoice Payment Sync, and Invoice Note Addition Sync.

* The data push will happen from QuickBooks Online to Zuper.
* We will fetch the invoice if the invoice settings are enabled in the integration settings.
* If the QuickBooks Online Estimate is present in Zuper, the validation is done based on the following criteria:
* List of matching criteria listed in Zuper.

<Note>
  **Note:** Based on the validation – The QuickBooks Online Invoice ID is back verified in Zuper if the ID is not present, and a new Invoice ID is created in Zuper.
</Note>

The various preliminary details:

* Customer Address in QuickBooks Online is captured as a Billing address in Zuper.
* Service and Billing customers of Zuper are considered Billing customers in QuickBooks Online only.
* If the customer already exists, then the customer will have a QuickBooks Online ID; if not, a new customer will be created in QuickBooks Online based on the billing address of the Zuper details.

Line-Item Details:

The service charge varies based on the installation or repair invoice, so these situations are not captured as master line items. For dynamic custom line items – the amount is captured dynamically.

* Invoice's due date – QuickBooks Online's due date
* Remarks - QuickBooks Online's Customer Memo
* Customer, Customer ID – Verify that if not present, a new Customer customer ID is to be created in Zuper.
* Await Payment – Email sent (Payment collection pending)
* The status names will be synchronized from Zuper to QuickBooks Online (This transaction status verification is to be done).
* US tax rule – The tax rule structure is to be followed; for the rest of the world, different taxes are calculated straightforwardly.
* Item Description of Zuper is captured as a Sale Item Line Item in QuickBooks Online.

<Note>
  **Note:** If the contract includes an Invoice, the contract details will be synchronized as line items in QuickBooks Online.
</Note>

The discount details and subtotal are captured as line items in QuickBooks Online.

* You can convert an estimate into an invoice or create an invoice directly in both Zuper and QuickBooks Online. The converted estimate is captured as a linked transaction.
* Private Note – This is visible to a few users based on the settings.
* Job – Invoice creation – This is done based on the Job's prefix.
* For the existing invoice sync – An update operation will happen if the new invoice creation means a new invoice is created.
* The full payment done in Zuper gets synchronized with QuickBooks Online as the total invoice payment, along with the mode of payment.
* The partial payment made in Zuper is recorded in QuickBooks Online. The invoice ID created in QuickBooks Online is stored as a Custom field in Zuper.

### **Push Vendors to QuickBooks Online**

Zuper–QuickBooks Online integration syncs Vendor master records and related Purchase Orders (POs). You automatically synchronize Vendors according to the pre-defined settings. You can take significant actions: Vendor Create Sync, Vendor Update Sync, Vendor Status Sync (Active/Inactive), Vendor Attachment Sync (active vendors only).

The data push will happen from Zuper to QuickBooks Online.

We will push the vendor if the vendor settings are enabled in the integration settings. The options available are Yes or No.

If the QuickBooks Online Vendor is present in Zuper, the validation is done based on the following criteria:

* Match the stored QuickBooks Online Vendor ID in Zuper.
* If no ID is present, match by the QuickBooks Online unique Display Name.
* If no match is found, a new Vendor will be created in QuickBooks Online.

<Note>
  **Note**: Based on the validation – The QuickBooks Online Vendor ID is back verified in Zuper; if the ID is not present, the new Vendor ID from QuickBooks Online is stored in Zuper for future updates.
</Note>

<img src="https://mintcdn.com/zuperinc/xykriCG8yCRPW26t/images/QVM1.png?fit=max&auto=format&n=xykriCG8yCRPW26t&q=85&s=414eef33cb82d0bebe95084f3285ed5a" alt="QVM1 Pn" width="1601" height="660" data-path="images/QVM1.png" />

<img src="https://mintcdn.com/zuperinc/xykriCG8yCRPW26t/images/QVM2.png?fit=max&auto=format&n=xykriCG8yCRPW26t&q=85&s=25ac5312189324d49b331de28104fa75" alt="QVM2 Pn" width="1602" height="698" data-path="images/QVM2.png" />

The various preliminary details:

* Zuper is the master system; this is a one-way sync. Changes made directly in QuickBooks Online do not flow back to Zuper.
* When the configuration is set to Yes, new Vendors created in Zuper are pushed to QuickBooks Online immediately. When set to Yes during PO sync, the Vendor is created in QuickBooks Online at the time the first PO is synced.
* Editing a Vendor record in Zuper will sync the changes to QuickBooks Online.
* Handling Vendor Status:
  * Marking a Vendor Inactive in Zuper marks the Vendor Inactive in QuickBooks Online (shown as deleted). <img src="https://mintcdn.com/zuperinc/B_NQVwNY9C1T3-Dq/images/QVM4.png?fit=max&auto=format&n=B_NQVwNY9C1T3-Dq&q=85&s=578cd3ca6346050dff3225525457ba9e" alt="QVM4 Pn" width="1578" height="656" data-path="images/QVM4.png" /> <img src="https://mintcdn.com/zuperinc/B_NQVwNY9C1T3-Dq/images/QVM3.png?fit=max&auto=format&n=B_NQVwNY9C1T3-Dq&q=85&s=6c7befbc66da131287380ff59ab578e5" alt="QVM3 Pn" width="1597" height="700" data-path="images/QVM3.png" />
  * Marking a Vendor Active in Zuper reactivates the Vendor in QuickBooks Online.
  * While a Vendor is Inactive in Zuper, edits and attachments are allowed in Zuper, but QuickBooks Online does not accept updates/attachments for inactive Vendors. Once the Vendor is marked Active again, the latest Vendor details are synced; attachments added while inactive are not synced.
* Attachments:
  * Vendor attachments added while the Vendor is Active in Zuper are synced one-way to QuickBooks Online.
  * The maximum file size for attachments in QuickBooks Online is 20 MB.

<img src="https://mintcdn.com/zuperinc/B_NQVwNY9C1T3-Dq/images/QVM5.png?fit=max&auto=format&n=B_NQVwNY9C1T3-Dq&q=85&s=d98b9be9095c96f6cf6b80fa959f5dbe" alt="QVM5 Pn" width="1596" height="658" data-path="images/QVM5.png" />

<img src="https://mintcdn.com/zuperinc/B_NQVwNY9C1T3-Dq/images/QVM6.png?fit=max&auto=format&n=B_NQVwNY9C1T3-Dq&q=85&s=37a43a397ced710dfcf87535b6c2ff4a" alt="QVM6 Pn" width="1607" height="656" data-path="images/QVM6.png" />

* Multicurrency:
  * If multicurrency is enabled in QuickBooks Online, a Vendor Currency custom field must be added to the Vendor module in Zuper and populated for each Vendor. This currency is mandatory for creating vendors in QuickBooks Online.
* Vendor custom fields in Zuper are not synced to QuickBooks Online.
* QuickBooks Online requires a unique Display Name for each Vendor.
* Vendor email is pulled from the vendor record in Zuper and carried over to QBO.

### **Push purchase orders to QuickBooks Online**

Purchase order (PO) sync lets you send purchase orders created in Zuper directly to QuickBooks Online (QBO). When a PO is created or updated in Zuper, those changes flow to QBO automatically, so your procurement records stay consistent across both systems without manual re-entry.

Status updates that reach a terminal state in QBO such as Closed flow back to Zuper, keeping both systems aligned throughout the order lifecycle.

<Note>
  **Note:** Deleting a PO in Zuper does not delete or void it in QBO. Deletions are excluded from sync.
</Note>

**Before you enable PO sync**

Complete these steps in QBO before turning on PO sync in Zuper.

1. Confirm your QBO account is on the Plus or Advanced plan. PO sync requires inventory tracking, which is available only on these plans.
2. In QBO, go to Settings, then select Account and Settings.
3. Select Expenses.
4. Under Purchase orders, turn on Show Items table on expense and purchase forms. This setting is required for line items from Zuper POs to appear on QBO POs.

<Frame>
  <img src="https://mintcdn.com/zuperinc/3BhLqZ9HuAn-DRwF/images/QBOPO1.png?fit=max&auto=format&n=3BhLqZ9HuAn-DRwF&q=85&s=55c175e428f52d0f8bb7d206210423e9" alt="QBOPO1" width="1917" height="675" data-path="images/QBOPO1.png" />
</Frame>

5. If you plan to map custom fields, enable custom fields for purchase orders in QBO. A maximum of three custom fields can be mapped across invoices, estimates, and purchase orders combined.

### Enable PO sync in Zuper

Once your QBO account is ready, configure PO sync in Zuper.

1. Go to Settings, then select Integrations.
2. Select QuickBooks Online.
3. In the Zuper App Configuration panel, locate Sync Purchase Orders.
4. Select Yes to turn on PO sync.
5. Locate Purchase Order Status to Trigger Sync.
6. Select the PO status at which Zuper should send the PO to QBO. The available options are: •   Submitted •  Approved •   Sent to Vendor •   Vendor Accepted
7.  Select Save to apply the configuration.

<Frame>
  <img src="https://mintcdn.com/zuperinc/3BhLqZ9HuAn-DRwF/images/QBOPO2.png?fit=max&auto=format&n=3BhLqZ9HuAn-DRwF&q=85&s=64634720899b222ff00182afe04cab74" alt="QBOPO2" width="768" height="375" data-path="images/QBOPO2.png" />
</Frame>

<Note>
  **Note**: Once you save, any PO that reaches the selected trigger status and statuses after it will sync to QBO automatically. POs created before you enabled sync will not sync retroactively.
</Note>

### How vendors sync

When a PO syncs to QBO, Zuper checks whether the associated vendor already exists in QBO.

* If the vendor exists in QBO, Zuper links the vendor to the PO automatically.
* If the vendor does not exist in QBO, Zuper creates the vendor in QBO first, then links them to the PO.

### What syncs from Zuper to QBO

**PO fields**

The table below shows how PO fields in Zuper map to fields in QBO.

| **Zuper field** | **QBO field** |
| :- | :- |
| PO number | PO number |
| Vendor | Vendor |
| Vendor email | Email |
| Required by date | Due date |
| Order date | Purchase order date |
| Delivery address | Shipping address |
| Billing address | Mailing address |
| Remarks | Your message to vendor |
| Status | PO status |

<Note>
  **Note**: The PO title, payment term, and template fields in Zuper do not map to QBO fields. Job, project, asset, and material request associations are also not synced.
</Note>

**Line items**

Line items added from a vendor's product catalog in Zuper sync to QBO as product line items.

| **Zuper field** | **QBO field** |
| :- | :- |
| Item name | Product/Service name |
| Part number | SKU |
| Unit purchase cost | Rate |
| Required quantity | Quantity |
| Total | Amount |
| Remarks | Description |
| Option or variant | Description |
| Vendor SKU | Description |

Custom line items added to a PO in Zuper are created in the QBO product master and then associated with the PO.

<Note>
  **Note**: Variant information is included in the QBO Description field. It does not sync to a dedicated line item field in QBO.
</Note>

### Notes and attachments

Notes and files attached to a PO in Zuper sync to the corresponding PO in QBO — notes as internal memo content and files as attachments

<Note>
  **Note**: If you remove an attachment from a PO in Zuper after it has synced, that removal does not delete the attachment from QBO. Attachment deletions are excluded from sync.
</Note>

### Custom fields

Custom field mapping follows the same configuration used for Zuper invoice and estimate sync to QBO. If you have already mapped custom fields for invoices or estimates, those mappings apply to POs as well — provided the custom fields are enabled for purchase forms in QBO.

A maximum of three custom fields can be mapped in total across invoices, estimates, and purchase orders.

After a successful sync, Zuper updates two custom fields on the PO record —QBO PO Number and QBO Purchase Order ID — with the corresponding values from QBO. You can use these fields to cross-reference the record in either system.

### Checking sync status

Once a PO syncs to QBO, you can verify the result under Sync History in Zuper. The page shows a success message for the PO sync. It also displays the sync status for each line item inside the PO, so you can confirm that all items transferred correctly.

### Purchase order status mapping

Zuper and QBO use different status labels for purchase orders. The table below shows how statuses correspond between the two systems.

| **Zuper status** | **QBO PO state** |
| :- | :- |
| Draft | Open |
| Submitted | Open |
| Approved | Open |
| Rejected | Closed |
| Sent to vendor | Open |
| Vendor accepted | Open |
| Vendor rejected | Closed |
| Partially fulfilled | Open |
| Fulfilled | Closed |
| Closed | Closed |
| Cancelled | Closed |

When a bill is created in QBO for a given PO, the PO status in Zuper automatically updates to Closed.

### What purchase order data does not sync

Not all purchase order data flows to QuickBooks Online. The following are excluded from the integration:

* **PO deletions** — Deleting a PO in Zuper does not remove it from QuickBooks Online.
* **Attachment removals** — Removing a file in Zuper does not remove it from QuickBooks Online.
* **Job, project, asset, and material request associations** — Links to these records are not included in the sync.
* **Variant details** — Variant information does not appear in a dedicated line item field in QuickBooks Online. It appears in the **Description** field only.

### Chart of Accounts in QuickBooks Online

In QuickBooks Online, the chart of accounts needs to be set up for Accounting and tracking financial transactions. The major type of accounts are:

* Balance Sheet Accounts
* Profit and Loss Accounts

Balance Sheet Account statements provide a snapshot of the company’s financial health at a given point in time.

Profit and Loss Account statements provide a view into the performance of a company over a period of time.

**AR and AP:**

AR (Accounts Receivable) and AP (Accounts Payable) are Accounting components that track money owed to and by the business respectively. They don’t hold actual cash but are balance accounts that track money that is owed.

*AR workflow:*

* Invoice a customer - increases AR account balance by the invoice amount.
* Receive Payment (partially or in full). -  decreases AR account balance by the payment amount
* Deposit the payment to a bank account.
* AR accounts are Asset accounts.

*AP workflow:*

* Enter a Bill from a vendor - increases AP account balance by the Bill amount.
* Pay Bill (fully or partially). - decreases AP account balance by the payment amount.
* Payment is recorded from the chosen account (bank, credit card, etc.).
* AP accounts are Liability accounts.

| **QuickBooks Online Feature** | **AR (Accounts Receivable)** | **AP (Accounts Payable)** |
| :- | :- | :- |
| **Chart of Accounts** | Uses the Accounts Receivable (asset) account | Uses the Accounts Payable (liability) account |
| **Transactions** | Invoice, Receive Payment, Sales Receipt | Bill, Pay Bills, Expense |

## Updating newly created Income or Expense Accounts in Product Custom Fields

When creating new income or expense accounts in QuickBooks Online for accurate tracking and categorizing financial transactions, it's essential to ensure seamless integration and data consistency between Zuper and QuickBooks Online. Follow these steps to add the newly created account name in the Product Custom Fields.

1. Go to Settings -> Custom Fields & Checklist Settings -> Product or Part Fields. The Product Custom Fields page opens.
2. In the QuickBooks Online Income Account field, add the names of the newly created income accounts as values.
3. In the QuickBooks Online Expense Account field, add the names of the newly created expense accounts as values.

Adding the account names in the Product Custom Fields enables easy selection of specified accounts while creating products and services. This ensures that products or services are correctly linked to QuickBooks' online appropriate income or expense accounts, facilitating accurate financial tracking and categorization.

## Updating newly created invoice custom fields

When creating a new Invoice in QuickBooks Online, it's essential to ensure seamless integration and data consistency between Zuper and QuickBooks Online to track and categorize financial transactions accurately.

Follow these steps to add the newly created invoice to the Product Custom Fields.

1. Go to Settings -> Custom Fields & Checklist Settings -> Invoice Fields. The Product Custom Fields page opens.
2. In the QuickBooks Online Invoice field, add the newly created invoice date names as values.
3. In the QuickBooks Online Invoice field, add the names of the newly created due dates as values.

Adding the invoice date and due date in the Invoice Custom Fields enables easy selection of specified accounts while creating Invoices. This ensures that Invoices are correctly linked to QuickBooks online.

## Credits and Refunds

Zuper’s revamped credits and refunds feature allows you to manage customer credits, process refunds (full or partial), and void payments efficiently. These actions sync seamlessly with QuickBooks Online, ensuring accurate financial records. Credits can be applied to invoices, stored as credit memos, or refunded via the original payment method, depending on the transaction type (Zuper Pay or non-Zuper Pay, online or offline).

**Creating a Credit Memo**

Credit memos in the Zuper store credit against a customer, which can later be applied to invoices. These can be done either directly in the customer module or while refunding a payment in a transaction.

1. **Log in to Zuper**: Navigate to the Invoice or Payments module.
2. **Select Customer**: Choose the customer you want to create a credit with.
3. **Create Credit Memo**:
   * Click **New Credit Memo** or equivalent.
   * Enter the credit amount and add a memo/note (e.g., reason for credit, such as overpayment or service issue).
   * A default line item of type "SubTotal" with the credit amount is automatically added (required for QuickBooks Online API).
   * Save the credit memo. It will sync to QuickBooks Online as a credit memo linked to the customer.
4. Verify in QuickBooks Online:
   * In QuickBooks Online, go to **Sales** > **Customers** to confirm the credit memo is listed under the customer’s account.
   * Note: If a credit memo is deleted in Zuper, it will also be deleted in QuickBooks Online.

**Applying Credits to an Invoice**

When a customer has an active credit memo, you can apply it to a new or existing invoice.

1. **Create or Select an Invoice**:
   * Navigate to the **Billing** module and create a new invoice or select an existing one for the customer.
2. **Apply Credit**:
   * Choose **Record Payment** or **Apply Credit**.
   * Select the credit memo and specify a custom amount (up to the total credit available).
   * Save the action. The invoice status updates to **Partially Paid** or **Paid** in Zuper.
3. **Sync with QuickBooks Online**:
   * The applied credit is recorded as a payment in Zuper and synced as a payment in QuickBooks Online against the invoice.
   * The applied amount reduces the customer’s credit balance in QuickBooks Online.
4. **Verify in QuickBooks Online**:
   * In QuickBooks Online, go to **Sales** > **Customers** or **Transactions** > **Payments** to confirm the payment and updated invoice status.

**Processing Refunds**

Refunds can be issued for full or partial payment amounts, depending on the transaction type (Zuper Pay or non-Zuper Pay, online or offline). Refunds are stored as credit memos or returned to the original payment method.

**Zuper Pay Transactions**

* **Offline Transactions**:
  1. Navigate to the **Billing** or **Payments** section in Zuper.
  2. Select the customer and the payment to refund.
  3. Choose **Refund** and specify the amount (full or partial).
  4. Select whether to store the refund as a credit memo or return it to the original payment method.
  5. Save the refund. The payment in Zuper has been updated, and the invoice status has changed to **Partially Paid** or **Sent**.
  6. **Sync with QuickBooks Online**:
     * The payment in QuickBooks Online is cleared (set to 0) for full refunds or modified for partial refunds.
     * If stored as a credit memo, the customer's corresponding credit is added in QuickBooks Online.
* **Online Transactions**:
  1. Follow the same steps as offline transactions, but the refund must be manually added as a credit memo in Zuper.
  2. The refund is processed and synced to QuickBooks Online as described above.

**Non-Zuper Pay Transactions**

* **Offline and Online Transactions**:
  1. Navigate to the **Billing** or **Payments** section.
  2. Select the payment to refund and choose **Refund**.
  3. Specify the amount (full or partial) and store it as a credit memo.
  4. Save the refund. The invoice status updates to **Partially Paid** or **Sent**.
  5. **Sync with QuickBooks Online**:
     * The payment in QuickBooks Online is cleared (full refund) or modified (partial refund).
     * A credit memo is added to the customer’s account in QuickBooks Online.

**Notes**

* Refund receipts are not created in QuickBooks Online as part of this process.
* Deposits collected against quotes in Zuper cannot be refunded.

**Voiding Payments**

Voiding a payment cancels the entire payment amount and does not automatically create a credit memo.

1. **Void a Payment in Zuper**:
   * Navigate to the **Billing** or **Payments** section.
   * Select the payment and choose **Void**.
   * Confirm the action. The payment is voided, and the invoice status changes to **Partially Paid** or **Sent**.
2. **Sync with QuickBooks Online**:
   * The corresponding payment in QuickBooks Online is voided.
   * Note: Voiding does not automatically add credits to the customer in Zuper or QuickBooks Online. Credits must be manually added if needed.
3. **Verify in** **QuickBooks Online:**
   * In QuickBooks Online, go to **Transactions** > **Payments** to confirm the payment is voided.
   * For non-Zuper Pay transactions, voiding a payment acts as a refund but does not offer a "**refund**" option.

**Notes**

* Zuper does not allow voiding or canceling invoices with active payments, unlike QuickBooks Online. Ensure payments are cleared in Zuper before voiding an invoice in QuickBooks Online to avoid discrepancies.
* In QuickBooks Online, voiding an invoice may push payments to customer credits. Since Zuper clears payments before voiding, this should not occur during sync.

**Troubleshooting Common Issues**

* **Sync Errors**: If credits, refunds, or voids do not reflect in QuickBooks Online, check the integration settings in Zuper. Ensure the QuickBooks Online connection is active and retry the sync.
* **Incorrect Invoice Status**: Verify that the invoice status in Zuber (**Partially Paid** or **Sent**) matches QuickBooks Online after refunds or voids. Correct any discrepancies in Zuper.
* **Credit Application Issues**: Ensure QuickBooks Online’s "**Automatically apply credits**" setting is turned off to prevent unintended credit application.
* **Credit Memo Line-Item Errors**: If a credit memo fails to sync to QuickBooks Online, confirm that a default "**SubTotal**" line item is included, as the QuickBooks Online API requires.

**Best Practices**

* **Disable QuickBooks Online Auto-Apply Credits**: Turn off QuickBooks Online’s "Automatically apply credits" setting to ensure manual control over credit application.
* **Regular Syncing**: Sync Zuper with QuickBooks Online daily to maintain accurate financial records.
* **Clear Memo Notes**: Add detailed notes to credit memos and refunds for audit purposes (e.g., "Refund for overpayment on Invoice #123").
* **Review Reports**: Use Zuper and QuickBooks Online reports (e.g., Customer Balance Summary, Payment Reports) to track credits and refunds.

This enhancement covers:

* Customer **Invoices**
* **Payments**
* **Credits**
* **Refunds**
* **Voids** (offline and online transactions)

## **Credits Sync**

### **Creating Credits**

1. Credits can be generated manually against a customer in Zuper.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_1.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=3f454d8089855153497894658a55bf17" alt="Cred 1 Pn" width="1920" height="827" data-path="images/cred_1.png" />

2. Credits are automatically refunded when a refund is processed on a paid invoice (partial or full).

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_4.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=3c35a48b204f522e04ad1781bfe3b080" alt="Cred 4 Pn" width="1920" height="827" data-path="images/cred_4.png" />

3. All such credits are synced to **Credit Memos** in **QuickBooks Online** against the same customer in **Unapplied** Status.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_5.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=7e089a8c6b234cf6cdab70fe9a2c65b3" alt="Cred 5 Pn" width="1920" height="827" data-path="images/cred_5.png" />

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_7.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=1d4646187f866b41bf9967f465c7827c" alt="Cred 7 Pn" width="1369" height="338" data-path="images/cred_7.png" />

### **Applying Credits**

When credits are applied to an **outstanding invoice** in Zuper, the corresponding **Credit Memo in QuickBooks Online** is now **applied**.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_8.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=8c32a15084511999b887b89b1115d6a1" alt="Cred 8 Pn" width="1920" height="827" data-path="images/cred_8.png" />

The invoice is also reflected as paid/partially paid in the regular flow.

Available credits can also be used to **collect deposits against Quotes**. These transactions are also adjusted against the customer's credit balance in QuickBooks Online. The behaviour differs based on the ‘**Sync Deposit to Customers**’ Configuration.

**Scenario 1** – Sync Deposits to customers is turned off

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_13.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=e4a1134444d10e9cc05b2de4fb1ec3ff" alt="Cred 13 Pn" width="1920" height="827" data-path="images/cred_13.png" />

The Estimate is created in QuickBooks Online. The credit is still unapplied in QuickBooks Online.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_3.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=d317df4647a93798a59e8c60d5ecca02" alt="Cred 3 Pn" width="1920" height="827" data-path="images/cred_3.png" />

Convert the Quote to Invoice

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_15.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=d65eeeae22c9218eee7b1e71eb41fa06" alt="Cred 15 Pn" width="1920" height="827" data-path="images/cred_15.png" />

The credit memo has been adjusted (reduced), and the payment is reflected against the invoice.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_16.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=fdb62a9a9238106d7035fb3aa3bd26ca" alt="Cred 16 Pn" width="1355" height="330" data-path="images/cred_16.png" />

**Scenario 2**: Sync Deposits to customers is turned on

The deposit is collected using credits against the quote.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_14.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=0521237e842b15528b20d52fb3b30407" alt="Cred 14 Pn" width="1335" height="255" data-path="images/cred_14.png" />

### **Payment Modes**

Refunds and credits may be handled via:

* **Zuper Pay (online/offline)** or
* **Standard payment methods** (cash, bank transfers, etc.).<br /> Zuper ensures proper reflection of the refund source and amount in QuickBooks Online, irrespective of the payment mode.

 **Voiding Payments**

When a payment is voided in Zuper:

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_11.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=752145dba69454a4e6f8176dab5d75fd" alt="Cred 11 Pn" width="1920" height="827" data-path="images/cred_11.png" />

The **corresponding payment in QuickBooks Online** is automatically voided.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_12.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=d3d41d448a9a844f7c35ae789e9c15a6" alt="Cred 12 Pn" width="1920" height="827" data-path="images/cred_12.png" />

Similarly, if a payment is voided in QuickBooks Online:

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_19.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=c70da8a49351968af3dbbf2e2c1dfe30" alt="Cred 19 Pn" width="1483" height="645" data-path="images/cred_19.png" />

The associated payment record in **Zuper** is also voided to maintain synchronization.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/cred_20.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=4636719cfa9fd29a2f5454ba7a6687af" alt="Cred 20 Pn" width="1467" height="634" data-path="images/cred_20.png" />

## Surcharge sync with QuickBooks Online

When you process a Zuper Pay payment that includes a [surcharge](https://docs.zuper.co/Zuper-pay/Surcharge), Zuper automatically pushes two separate records to QuickBooks Online. The invoice payment syncs as usual, carrying only the base payment amount. The surcharge portion syncs separately as a journal entry. This keeps your invoice totals and payment status in sync across both platforms without any manual reconciliation on your part.

<Note>
  Surcharge sync applies to Zuper Pay transactions only. Payments processed through other payment methods do not generate journal entries in QuickBooks Online.
</Note>

## How the journal entry is structured

For each invoice that includes a surcharged payment, Zuper creates one journal entry in QuickBooks Online. Each surcharged payment adds two lines to that entry.

| Line | Account | Side |
| - | - | - |
| Expense line | Expense Account for Surcharge (defaults to Uncategorized Expense if not set) | Debit |
| Cash line | Undeposited Funds | Credit |

Debit and credit values are equal and match the surcharge amount from the payment.

<Frame>
  <img src="https://mintcdn.com/zuperinc/jZzAftyJr9AgIyqo/images/surch1.png?fit=max&auto=format&n=jZzAftyJr9AgIyqo&q=85&s=dd5c2547755ae19f36268cfd895064d3" alt="Surch1" width="1919" height="713" data-path="images/surch1.png" />
</Frame>

## Setting up the expense account for surcharge

Before surcharge amounts sync, configure the expense account you want Zuper to use for the debit entry in QuickBooks Online.

1. Select your **Profile Picture** in the top-right corner of Zuper.
2. Select **App Store**.
3. Open the **QuickBooks Online** app.
4. Locate the **Expense Account for Surcharge** field.
5. Enter the exact name of the expense account as it appears in QuickBooks Online.
6. Select **Update**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/jZzAftyJr9AgIyqo/images/surch3.png?fit=max&auto=format&n=jZzAftyJr9AgIyqo&q=85&s=3c0dd6e82a441747efa62cd53e829a6e" alt="Surch3" width="585" height="136" data-path="images/surch3.png" />
</Frame>

<Note>
  If you leave this field blank, Zuper defaults to Uncategorized Expense as the debit account. To avoid misclassified entries, enter the correct account name before processing surcharged payments.
</Note>

## How surcharge refunds sync

When you issue a refund on a surcharged payment in Zuper, the surcharge reversal syncs to QuickBooks Online automatically. Zuper pushes a journal entry that reverses the original lines.

| Line | Account | Side |
| - | - | - |
| Cash line | Undeposited Funds | Debit |
| Expense line | Expense Account for Surcharge | Credit |

The refund amount follows the same proportional logic as the refund in Zuper. A full refund reverses the full surcharge amount. A partial refund reverses the surcharge amount proportional to the refund percentage. To learn more about how refunds are calculated in Zuper, see [Surcharge Fee — Processing Refunds](https://docs.zuper.co/Zuper-pay/Surcharge).

<Warning>
  Voiding a Zuper Pay payment is not supported. To reverse a surcharged transaction, issue a refund in Zuper. The surcharge reversal syncs to QuickBooks Online automatically.
</Warning>

<Frame>
  <img src="https://mintcdn.com/zuperinc/jZzAftyJr9AgIyqo/images/surch2.png?fit=max&auto=format&n=jZzAftyJr9AgIyqo&q=85&s=622d525537bf1ba70005baca1d514cd2" alt="Surch2" width="1919" height="763" data-path="images/surch2.png" />
</Frame>

## Uninstall QuickBooks Online

1. Log in to your Zuper account. Click your Profile Picture at the top right corner of the screen and select “**App Store**.”

<Frame>
  <img src="https://mintcdn.com/zuperinc/nNoa-R0ZKv3XbxIR/images/GAF9.png?fit=max&auto=format&n=nNoa-R0ZKv3XbxIR&q=85&s=11f5fef8bf812367825d02d2bb15df41" alt="GAF9" width="1920" height="878" data-path="images/GAF9.png" />
</Frame>

2. Under “**Browse by Category**,” select the “**Accounting**” option and choose “**QuickBooks Online**.”

<Frame>
  <img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/QBC5.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=b702e764618d6695a66017c1ae83d879" alt="QBC5" width="1907" height="868" data-path="images/QBC5.png" />
</Frame>

2. Click “**Configure Settings.**

<Frame>
  <img src="https://mintcdn.com/zuperinc/-8EJeqwaX8At2cgC/images/deact2.png?fit=max&auto=format&n=-8EJeqwaX8At2cgC&q=85&s=f27d19171be47376f740b0e35822913b" alt="Deact2" width="1920" height="827" data-path="images/deact2.png" />
</Frame>

3. Click the “**Deactivate**” button and confirm deactivation to temporarily pause the integration.

<Frame>
  <img src="https://mintcdn.com/zuperinc/-8EJeqwaX8At2cgC/images/deact3.png?fit=max&auto=format&n=-8EJeqwaX8At2cgC&q=85&s=914bc908a4ad32bc706660ad8cd1f72b" alt="Deact3" width="1920" height="827" data-path="images/deact3.png" />
</Frame>

* **Saving configuration with paused sync**: Your integration settings (e.g., field mappings, API connections, and preferences) will be preserved for future use. However, any new or updated data flowing *from Zuper to QuickBooks Online* (such as new invoices, customer updates, or inventory changes) will be temporarily halted. This lets you pause outgoing syncs without losing your setup, which is useful for troubleshooting, maintenance, or temporary holds.
* **Impact on existing synced invoices and payments**: For invoices that were already successfully synced from Zuper to QuickBooks Online *before* the pause, any payments collected directly in QuickBooks Online (e.g., via customer payments or bank feeds) will continue to sync *back to Zuper*. This reverse sync occurs only if your app configuration explicitly enables it (e.g., via payment reconciliation or bi-directional update settings). It prevents discrepancies in your records for completed transactions, ensuring payments are reflected in both systems. Recommendation for Payments - Zuper recommends setting the payment sync direction to “**No Sync**” to ensure payments collected in QuickBooks Online are not synced back to Zuper when the integration is inactive.
* Disables all payment synchronization between Zuper and QBO. No data is exchanged in either direction, which helps maintain data isolation—especially when the integration is temporarily inactive. Zuper recommends this setting in such cases to prevent unintended back-sync of QBO payments into Zuper.

<Frame>
  <img src="https://mintcdn.com/zuperinc/-8EJeqwaX8At2cgC/images/deact4-1.png?fit=max&auto=format&n=-8EJeqwaX8At2cgC&q=85&s=583474e5e6452c54b04a8c0212ddf77c" alt="Deact4 1" width="1920" height="827" data-path="images/deact4-1.png" />
</Frame>

**Impact on Inventory Sync**<br />Inventory items created in QuickBooks Online will continue to sync to Zuper when QuickBooks is configured as the product master. Product consumption and replenishment updates will also continue to sync from QuickBooks to Zuper.

**Recommendation**<br />To avoid inventory-related impacts, turn off product master synchronization.

* After pausing sync or deactivating the integration, navigate to **Zuper → QuickBooks Online configuration** and disable **Sync Product Masters**.<br />This prevents QuickBooks from creating or updating Products and Services in Zuper when QuickBooks is set as the product master. As a result:
* No new products will be synced from QuickBooks Online to Zuper during the paused or deactivated period.
* Product quantity consumption and replenishment will not sync from QuickBooks Online to Zuper.
* Existing product master’s that were synced before this setting was turned off will remain unchanged in both systems.

You can safely re-enable **Sync Product Masters** when the integration is reactivated. This ensures product quantities can stay in sync and, if needed, be manually adjusted in both systems.

4. Click the “**Disconnect from QuickBooks Online**” button (it will appear in red text below the "**Activate**" button if the app is inactive).

<Frame>
  <img src="https://mintcdn.com/zuperinc/-8EJeqwaX8At2cgC/images/deact5.png?fit=max&auto=format&n=-8EJeqwaX8At2cgC&q=85&s=8e3bff7d1c91a3a3dcef2f381c1f1622" alt="Deact5" width="1920" height="827" data-path="images/deact5.png" />
</Frame>

5. In the confirmation dialog box, review the warning ("Are you sure you want to disconnect from QuickBooks Online? App settings will be lost.") and click "**Disconnect from QuickBooks Online**" to confirm. Your app is now successfully uninstalled.

<Frame>
  <img src="https://mintcdn.com/zuperinc/-8EJeqwaX8At2cgC/images/deact7.png?fit=max&auto=format&n=-8EJeqwaX8At2cgC&q=85&s=ad42031442188654f3e6e3f48883510e" alt="Deact7" width="1920" height="827" data-path="images/deact7.png" />
</Frame>

## Limitations

* QuickBooks Online limits a customer's First Name or Last Name to 25 characters and a Company Name to 50 characters. If a customer is created in Zuper with a name that is over 25 characters long, there will be an error when creating the Customer in QuickBooks Online.
* If a customer is deleted in Zuper, the record will still be available in QuickBooks Online.
* Customers should subscribe to QuickBooks Online Plus or Advanced for inventory tracking.
* The Zuper account holder should have a dedicated account to generate the API Key, and the user should be in the administrator role. This account should be different from the one connecting to QuickBooks Online.
* For the B2B scenario cases, to push the Organization to QuickBooks Online, the value for the fields "**Identify Customers in Zuper – QuickBooks Online**" should be specified as:
* Billing Name – Customer Display Name.
* QuickBooks Online allows a maximum of three custom fields for Quotes and Invoices. Irrespective of the status of the custom field in QuickBooks Online, more than three custom fields will replace the current custom field values. Regardless of the custom field's status

<Note>
  Note: Adding the account names in the Product Custom Fields enables easy selection of specified accounts while creating products and services. This ensures that products or services are correctly linked to QuickBooks Online's appropriate income or expense accounts.
</Note>

* Because Zuper does not send line-item service dates, QuickBooks rejects invoices that include products or services with a QBO revenue recognition template assigned, so you cannot use the revenue recognition feature with invoices synced from Zuper.

## FAQs

<AccordionGroup>
  <Accordion title="What QBO plan do I need to sync purchase orders?">
    You need the Plus or Advanced plan in QBO. These plans include inventory tracking, which is required for PO sync to work. The Simple Start and Essentials plans do not support this feature.
  </Accordion>

  <Accordion title="What happens if the vendor on my Zuper PO does not exist in QBO?">
    Zuper creates the vendor in QBO automatically before syncing the PO. The vendor record is created using the details from the Zuper vendor profile, including their email address.
  </Accordion>

  <Accordion title="Can I sync POs that were created before I turned on the setting?">
    No. Only POs that reach the selected trigger status after you enable PO sync are sent to QBO. POs created before you enabled the setting do not sync retroactively.
  </Accordion>

  <Accordion title="I updated a PO in Zuper after it synced. Will the changes appear in QBO?">
    Yes. Field value updates, line item changes, and status updates made in Zuper after the initial sync continue to flow to QBO.
  </Accordion>

  <Accordion title="A PO was closed in QBO. Why did the status not update in Zuper?">
    Only terminal status updates from QBO — Closed, Rejected, Fulfilled, and Cancelled — sync back to Zuper. If the status change in QBO does not match one of these values, it will not reflect in Zuper.
  </Accordion>

  <Accordion title="Does the QuickBooks Online integration automatically map product descriptions to product names or SKUs in Zuper?">
    No. The QuickBooks Online integration does not map product descriptions to product names or SKUs automatically. Descriptions do not auto-populate based on SKU changes made in QuickBooks Online.
  </Accordion>

  <Accordion title="What does the integration sync, and in which direction?">
    The QuickBooks Online integration pushes Zuper records — such as invoices and customer data — to QuickBooks Online. For most record types, this is a one-way sync. Changes made in QuickBooks Online do not automatically reflect in Zuper's **Parts & Services** catalog or line item descriptions.
  </Accordion>

  <Accordion title="If I update a product SKU or name in QuickBooks Online, will it update in Zuper automatically?">
    No. SKU or product name changes made in QuickBooks Online are not pushed back into Zuper. Update the relevant items manually in Zuper's **Parts & Services** master list. For bulk updates, contact your onboarding or support team.
  </Accordion>

  <Accordion title="Is the Description field on a quote or invoice line item editable in Zuper?">
    Yes. The **Description** field on each line item in the quote or invoice screen remains fully editable within Zuper at the transaction level. The integration sync does not overwrite this field, so you can update the description for any line item directly on the quote or invoice.
  </Accordion>

  <Accordion title="What should I do if I need to update descriptions or SKUs across many products at once?">
    Bulk updates to descriptions or SKUs are not supported through the integration. To update multiple items at once, contact your onboarding team or [Support](mailto:support@zuper.co) for bulk update assistance.
  </Accordion>
</AccordionGroup>

<Accordion title="What happens if I do not set an expense account for surcharge?">
  Zuper uses Uncategorized Expense as the default debit account for all surcharge journal entries. To keep your books organized, enter the correct account name in the **Expense Account for Surcharge** field in the QuickBooks Online app settings before processing payments.
</Accordion>

<Accordion title="Does the surcharge affect my invoice total in QuickBooks Online?">
  No. Only the base payment amount syncs to the invoice payment in QuickBooks Online. The surcharge is recorded separately as a journal entry, so your invoice totals and payment status remain accurate.
</Accordion>

<Accordion title="Can I void a Zuper Pay payment in QuickBooks Online?">
  No. Voiding is not supported for Zuper Pay transactions. If you need to reverse a payment, issue a refund in Zuper. The surcharge reversal syncs to QuickBooks Online automatically.
</Accordion>

<Accordion title="What happens in QuickBooks Online when I refund a surcharged payment?">
  Zuper automatically pushes a reversal journal entry to QuickBooks Online. The entry debits Undeposited Funds and credits the expense account used in the original surcharge entry. No manual action is required in QuickBooks Online.
</Accordion>

## Related articles

•   [Sync history – QuickBooks Online](https://docs.zuper.co/Integrations/Accounting_and_payments/QBO_Sync_History)

•   [Debugging common errors – QuickBooks Online](https://docs.zuper.co/Integrations/Accounting_and_payments/QBO_Errors)

•   [Inventory sync – QuickBooks Online](https://docs.zuper.co/Integrations/Accounting_and_payments/QBO_bid_inventory)

•   [Purchase orders in Zuper](https://docs.zuper.co/Purchasing/Purchase-Orders/Creating-purchase-order)

•   [Vendors in Zuper](https://docs.zuper.co/Purchasing/Vendors/Vendors)


## Related topics

- [Setup the integration](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Desktop.md)
- [Setup Your Catalog](/Integrations/Purchasing/Link Catalog Products to SRS.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.