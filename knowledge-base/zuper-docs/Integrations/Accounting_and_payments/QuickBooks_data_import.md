---
title: "QuickBooks Online Data Import"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/QuickBooks_data_import.md
fetched_at: 2026-10-06T13:30:23.791Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# QuickBooks Online Data Import

## **Overview**

Zuper's integration with QuickBooks Online enables seamless import of customer and product data from QuickBooks into Zuper.

The import feature supports Products and Customers Modules, with configurable options to tailor the sync to your needs.

This guide covers the setup and execution of bulk data imports. Note that imports are one-way (from QuickBooks to Zuper) and can be based on criteria such as creation date or update date.

## **Prerequisites**

* An active Zuper account with administrative access.
* A connected QuickBooks Online account via the Zuper app (go to Settings > Apps > QuickBooks Online to connect if not already done).
* Ensure your QuickBooks data is up to date, as the import pulls live data.
* For large datasets, imports may take time; monitor progress in the interface.

## **Accessing the Import Feature**

1. Log in to your Zuper account and navigate to Apps -> QuickBooks Online.

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI0.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=51db9c9d10f228648ec26f8e1282a556" alt="DI0 Pn" width="1910" height="842" data-path="images/DI0.png" />

2. In the QuickBooks Online settings page, click **Bulk Import** to start the import wizard.

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI1.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=fe93cd7d09e550cd0f55a44df614278b" alt="DI1 Pn" width="1920" height="827" data-path="images/DI1.png" />

## **Step 1: Choose Modules to Import**

On the initial setup screen (Step 1 of 4: Choose Modules to Import), select the modules you want to sync:

* **Products**: Import your product master’s from QuickBooks to Zuper.
* **Customers**: Import customer records from QuickBooks to Zuper.

<img src="https://mintcdn.com/zuperinc/JrmueORkXcAaN9vK/images/image(154).png?fit=max&auto=format&n=JrmueORkXcAaN9vK&q=85&s=ecc13599cdc7a554dc6d507dcb5dd69c" alt="Image(154) Pn" width="1920" height="827" data-path="images/image(154).png" />

<Note>
  **Note**: You can select one module at a time, or you can select Products and Customers together; however, the import process occurs one module at a time.
</Note>

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI3.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=14903f89e3580398a19870ce9dea6413" alt="DI3 Pn" width="1138" height="529" data-path="images/DI3.png" />

## **Step 2.1: Configure and Import Products**

If you selected Products, you'll be directed to the Products Import - Setup screen.

Under **Sync Based on**, choose a filter based on which to import products:

* **All Products**: Imports every active product in the connected QuickBooks company.
* **Created Date**: Imports products created after a specified date.
* **Last Updated Date**: Imports products updated after a specified date.

If selecting Created Date or Last Updated Date, enter a **Sync from** date to define the starting point.

Click **Get Count** to preview the number of eligible products (e.g., "9 Products found in QuickBooks").

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI4.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=7f219d019b8e12e6daaeb4416d3735b2" alt="DI4 Pn" width="1919" height="698" data-path="images/DI4.png" />

Review the count and click **'Sync products**' to begin the import.

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI5.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=08403b302c5264fd9c3a0fd1b66ce119" alt="DI5 Pn" width="1918" height="711" data-path="images/DI5.png" />

* Monitor the progress bar on the next screen (Step 2: Import Products to Zuper), which shows real-time status (e.g., "Importing 0 of 9 Products (0%)").

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI6.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=8bf81b32f0b863ff00d5af46be80192a" alt="DI6 Pn" width="1920" height="827" data-path="images/DI6.png" />

## **Step 3: Check Results for Products**

After the import process completes, you'll see the Check Results screen (Step 3: Check Results).

* If successful, a green checkmark appears with a message like "**Successfully imported 1 out of 1 Products into Zuper**."
* If there are errors, a yellow exclamation or red X icon appears, indicating the number of failed imports (e.g., "Imported 0 out of 1 Products into Zuper" or "Imported 0 out of 2 Products into Zuper").

Errors are listed in a table with columns for **Product ID, Record name, and Reason**. Common errors include:

* "**Product already exists in Zuper**" (e.g., for PRODUCT ID 503, RECORD NAME "Black Shingles").
* "**Product Sku is required for Product Creation/Update**" (e.g., for PRODUCT ID 504, RECORD NAME "3' Eaves").

For errors, make necessary changes in QuickBooks (e.g., add missing SKUs or skip duplicates), then retry the import or create records manually.

Click **Skip** to proceed without resolving or **Continue** to move to the next module.

Once complete, proceed to the Customers module if selected, or to the finish step.

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI11.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=81f31da4d62ad0473f62beb82c5ed230" alt="DI11 Pn" width="1920" height="827" data-path="images/DI11.png" />

## **Step 2.2: Configure and Import Customers**

If you selected Customers, you'll be directed to the Customers Import - Setup screen (this follows a similar structure to Products).

Under **Name Format**, select how customer names should be formatted in Zuper:

* **First Name, Last Name** (default).
* **Last Name, First Name**.

This defines how the customers are created in Zuper. For example, If a customer is called John Nash in QuickBooks and the name format is set to Last Name, First Name. They will be imported in Zuper as Nash John.

 Under **Sync Based on**, choose a filter for which customers to import:

* **All Customers**: Imports every active customer in the connected QuickBooks company.
* **Created Date**: Imports customers created after a specified date.
* **Last Updated Date**: Imports customers updated after a specified date.

If selecting Created Date or Last Updated Date, enter a **Sync from** date (e.g., September 18, 2025) to define the starting point.

 Under **Customer Hierarchy**, decide how to handle parent-child relationships:

* **All as Customers** (default: Treats both parent and sub-customers as flat customers).
* **All Sub-Customers as Customers**. (Creates only the sub-customers as customers in Zuper. Parent customers are skipped.
* **Parents as Orgs, Sub-Customers as Customers**. (Creates parents as orgs in Zuper and Sub-customers as associated Customers)

Click **Get Count** to preview the number of eligible customers based on the filters (e.g., "1 Customer found in QuickBooks").

 Review the count and click '**Sync customers**' to begin the import.

<img src="https://mintcdn.com/zuperinc/qP19_1yE4WdfOHsf/images/DI7.png?fit=max&auto=format&n=qP19_1yE4WdfOHsf&q=85&s=6aafb0b5485666da7e91c18fafe9c8be" alt="DI7 Pn" width="1130" height="561" data-path="images/DI7.png" />

<img src="https://mintcdn.com/zuperinc/qP19_1yE4WdfOHsf/images/DI9.png?fit=max&auto=format&n=qP19_1yE4WdfOHsf&q=85&s=c14f37306e7f3a7c07cccc6be1a484da" alt="DI9 Pn" width="1090" height="529" data-path="images/DI9.png" />

Monitor the progress bar, like the Products import.

## **Step 3.2: Check Results for Customers**

* Successful imports display a green checkmark with a message such as "**Successfully imported 1 out of 1 Customers into Zuper**."
* Errors, if any, are detailed in a table (although less common in customer examples).

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI10.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=51fd2b13e8763d48ca61b5f45c381fcd" alt="DI10 Pn" width="1920" height="827" data-path="images/DI10.png" />

* Click **Skip** or **Continue** as needed.

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI12.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=21f062a287c758928cee0a76491aaacf" alt="DI12 Pn" width="1920" height="827" data-path="images/DI12.png" />

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI15.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=4f97275765c4fec94b2ab31f91b4c4d2" alt="DI15 Pn" width="1920" height="827" data-path="images/DI15.png" />

## **Step 4: Finish the Import**

After importing selected modules, review the **Import Summary** tab (Step 4 of 4: Import Summary) for an overview:

* **Products**: Shows the count imported (e.g., 1).
* **Customers**: Shows the count imported (e.g., 1).

Click **'Download Report' to obtain** to get a detailed Excel file of the import results. The report includes columns like:

* **Import Status** (e.g., Success).
* **QuickBooks Record Id** (e.g., 503).
* **QuickBooks Record Name** (e.g., Black Shingles).
* **Zuper Url**.
* **Import Information** (e.g., "Successfully created Black Shingles in Zuper").

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI13.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=96e0c5b1e6380a2cab2fd304bdd30fd5" alt="DI13 Pn" width="1920" height="827" data-path="images/DI13.png" />

<img src="https://mintcdn.com/zuperinc/WzOE2Vv9v31yxRXI/images/QBO-DM1.png?fit=max&auto=format&n=WzOE2Vv9v31yxRXI&q=85&s=9643a0b7ab3597a3ae669dcea5364b0d" alt="QBO DM1 Pn" width="1918" height="457" data-path="images/QBO-DM1.png" />

If needed, you can return to previous steps to adjust configurations or re-import.

Click **Finish** or navigate back to the dashboard. Imported data will now be available in Zuper for use in quotes, invoices, and other features.

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI16.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=f9e1c036456a40226f3e5ec4dbfda253" alt="DI16 Pn" width="1920" height="827" data-path="images/DI16.png" />

## **Important Notes**

* The records imported via this import functionality will be automatically connected with the respective records in QuickBooks Online.
* This feature is intended to be used for the initial setup of your Zuper account with your exisitng QuickBooks data. Therefore, record updates are not supported. If a record that already exists in Zuper is imported via this feature, it will be skipped in the import process.
* Only active records are imported into Zuper from QuickBooks for both Products and Customers.
* Only the first 2 levels in the hierarchy, i.e Parent\_customers -> Sub-customers\_level\_1, are supported in the import. QuickBooks supports further levels of Sub-customers (up to level 3), but these are not considered for the import.
* Fallbacks are used for particular fields, such as Category and Product Location (for Products Import), that are mandatory for creation in Zuper.

## **Limitations**

QuickBooks Online has character limitations on specific fields. Please ensure that each field you are about to upload follows this limit to prevent any data import errors. Learn more about this character's limitations [here](https://quickbooks.intuit.com/learn-support/en-us/help-article/printing-preferences/character-limitations-fields-quickbooks/L7eIy5gE3_US_en_US).

## Best Practices

* Ensure that the API key is entered properly and the configurations are saved before attempting the Import.
* Review the report for the Import to understand the reasons for failure. Ensure all the mandatory fields for record creation in Zuper are present in the QuickBooks Online records being imported.
* Ensure that the Name format setting in the Import matches the Display Name Format setting in the Zuper QuickBooks Online app Configuration.

<img src="https://mintcdn.com/zuperinc/DCkbX7acMHcGAtYm/images/DI17.png?fit=max&auto=format&n=DCkbX7acMHcGAtYm&q=85&s=552e336d42816b5044325be0c427920d" alt="DI17 Pn" width="1093" height="163" data-path="images/DI17.png" />

* Enable **Sync Product Masters** to automatically keep products in sync post-import.

## **Troubleshooting**

* **No Data Found**: Ensure the Sync from date is set correctly and that data exists in QuickBooks matching your filters. Double-check your QuickBooks connection.
* **Import Stuck at 0%**: Refresh the page or check your internet connection. For large imports, it may take several minutes to start.
* **Hierarchy Issues**: If customer relationships aren't importing as expected, try different Customer Hierarchy options and re-import.
* **Product Already Exists in Zuper**: This error occurs when a product (e.g., "Black Shingles") is detected as a duplicate. Skip the import for that item or remove/update the existing record in Zuper before retrying.
* **Product Sku is Required**: Ensure all products in QuickBooks have a valid SKU. Update the product in QuickBooks and retry the import.
* **Multiple Errors in Batch**: If importing multiple items (e.g., 2 products), errors are listed individually. Address each reason (e.g., SKU missing or duplicate) and re-import selectively.
* **Errors During Sync**: Note any error messages and contact Zuper support with details (e.g., date filters used). Use the Download Report for a full log of successes and failures.
* **Inconsistent Results**: If an import shows success in the report but errors in the UI (or vice versa), verify data in both platforms and consider re-running with narrower filters.

For more advanced configurations or API-based imports, refer to Zuper's developer documentation.


## Related topics

- [Debugging common errors](/Integrations/Accounting_and_payments/QBO_Errors.md)
- [Setup the integration](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.