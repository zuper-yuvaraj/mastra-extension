---
title: "Creating a contract"
source: https://docs.zuper.co/Contracts_and_Assets_Management/Contract/Creating_Contract.md
fetched_at: 2026-10-06T13:29:52.793Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Creating a contract

A service contract is an agreement between a business and its customer that outlines the services to be performed, the timeline for completion, and other essential details. It serves as a formal record of the mutual commitments, ensuring clear expectations and accountability for both parties.

Let’s get started by creating a new contract for Zuper!

<Frame />

<Frame>
  **Navigation**: *Contracts and Assets Management module -> Contracts -> + New Contract*
</Frame>

## To create a new contract

* Select the "**Contracts and Assets Management**” module from the left navigation menu and choose “**Contracts**."

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract36.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=aa1512f975faf84463a13b7b4f0792e3" alt="Contract36 Pn" width="1920" height="809" data-path="images/contract36.png" />

* On the contracts listing page, you will see an overview of existing contracts, including Contract Names, Start & End Dates, Status, and more.
* Click the “**+ New Contract**” button at the top right corner of the page to begin creating a new contract.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract37.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=24abbc3d09b6b881654275a1a84c63e5" alt="Contract37 Pn" width="1920" height="878" data-path="images/contract37.png" />

* The new contract creation page appears in a user-friendly three-pane layout, making data entry easier:

1. **Left Panel**: Enter the contract details, term, and address.
2. **Center Panel**: Add important contract information such as contract type (new/renewed), description, and associated parts & services.
3. **Right Panel**: Associate contracts with relevant modules like customers, invoice history, properties, assets, and more.

### A. Contract Details

<img src="https://mintcdn.com/zuperinc/-S_TpUncdyLgPIzH/Contracts_and_Assets_Management/Contract/contracts28.png?fit=max&auto=format&n=-S_TpUncdyLgPIzH&q=85&s=c3ac7af53a2b71103d5d9e35e721f785" alt="" width="1920" height="878" data-path="Contracts_and_Assets_Management/Contract/contracts28.png" />

* **Contract Package**: Select a package from the dropdown menu. These packages can be configured under **Settings** > **Configuration Settings** > **Contracts** > **Contract Packages**.

<Note>
  **Note**: When selecting a package, the contract period, type, and parts & services will be auto-filled based on the package details.
</Note>

* **Contract Prefix**:  Enter a prefix to help identify the contract.
* **Contract Name**(*Mandatory*): Provide a unique name to identify the contract

### B. Contract Period

* **Contract Term**(*Mandatory*): Define the contract period in months.
* **Contract Start Date**(*Mandatory*): Set the start date of the contract.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract38.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=7a37217f43383996b78cdbbb1134f84e" alt="Contract38 Pn" width="1920" height="878" data-path="images/contract38.png" />

<Note>
  **Note**: Once the start date is selected, the invoice details are automatically populated based on the chosen package.   
</Note>

* **Contract Expiry Date**(*Mandatory):*  Enter the contract's end date.
* **Activation Date**: Specify the date on which the contract becomes active and its services are available to the customer. Please note that the activation date can be the same as or later than the Contract Start Date, depending on when the customer begins using the contracted services.

### C. Primary Details

* **Contract Ref No**: Assign a unique reference number to the contract.
* **Contract Type**(*Mandatory*): Choose the contract type (e.g., New or Renewed).

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract39.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=5d26e0a94a1e568706864c3881c047f1" alt="Contract39 Pn" width="1920" height="878" data-path="images/contract39.png" />

* **Contract Template**: Select the standard template to be used for the contract.
* **Contract Description**(*Mandatory*): Enter a brief description of the contract.

### D. Part/Service Details

Parts & services will be automatically populated based on the selected contract package in the details section. Additionally, you can add items by clicking the "**+ Add**" button.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract40.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=4bf526585eed171b12284696567638ed" alt="Contract40 Pn" width="1920" height="878" data-path="images/contract40.png" />

After adding the parts and services to the contract, based on the organization settings, either a transaction-level or line-item *discount* will be applied to that contract.

### Options

Choose the preferred [Option](https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service#3-options) for each line item in the contract parts list.

<Frame>
  <img src="https://mintcdn.com/zuperinc/jdBZbTsAYGchLwIJ/images/optipro14-1.png?fit=max&auto=format&n=jdBZbTsAYGchLwIJ&q=85&s=b0220590ce21f6d4df7f3a8c53e578de" alt="Optipro14 1" width="1904" height="865" data-path="images/optipro14-1.png" />
</Frame>

<Accordion defaultOpen="false" title="Updating Discount Type">
  To update the discount amount, click the <Icon icon="pencil" color="black" /> icon next to "Discount" or use the <Icon icon="gear" color="black" /> icon in the Parts & Services details section to update Discount Type Settings.

  <img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract41.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=f580fcd7a0c47627e6f5413f6e717901" alt="Contract41 Pn" width="1920" height="878" data-path="images/contract41.png" />

  Depending on your Organization settings, you can choose how discounts to be applied:

  * **Line-item level**: Apply discounts to each individual item in the quote.
  * **Transactional level**: Apply discounts based on the subtotal of all items in the quote.
</Accordion>

<Note>
  **Note**: If a line item has a custom tax and the contract includes both taxable and non-taxable parts and services:

  * Only line-item level discounts can be applied.
  * Transaction-level discounts cannot be applied in such cases.

  Transaction-level discounts are only applicable when all parts and services in the contract are either fully taxable or fully non-taxable. This restriction ensures accurate discount and tax calculations, preventing any miscalculations.
</Note>

### E. Associations

When creating a contract, you can associate various modules with the contract as needed to streamline field service operations and maintain a centralized record of all relevant information related to the contract. These associations help ensure seamless contract execution and tracking.

Click the “**+**” icon next to each section to associate the modules, further enhancing the contract management process and keeping all pertinent information in one easily accessible location.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract42.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=ed03321082a2e12474418453acabdbbe" alt="Contract42 Pn" width="1920" height="878" data-path="images/contract42.png" />

<AccordionGroup>
  <Accordion defaultOpen="false" title="Organization/contact">
    Associating a contact or organization with a contract, you can maintain details of businesses and key contacts linked to the contract. Based on the contact/organization chosen, the service address will be auto-filled. You can then change as needed.  
  </Accordion>

  <Accordion defaultOpen="false" title="Properties">
    Associating properties with the contract helps streamline scheduling and dispatching, ensuring technicians are assigned to the correct locations.
  </Accordion>

  <Accordion defaultOpen="false" title="Projects">
    By associating a project with a contract, you can manage complex service agreements more effectively, ensuring that all jobs related to the project are aligned with the contract terms.
  </Accordion>

  <Accordion defaultOpen="false" title="Invoice History">
    The **Invoice History** section provides a chronological log of all actions and updates related to an invoice. This helps maintain a clear record of changes, ensuring transparency and easy tracking of invoice modifications, status updates, and payments. During contract creation, you can set up recurring invoices for contracts.

    <Accordion defaultOpen="false" title="Setting Up Recurring Invoicing for Contracts">
      Recurring invoicing ensures timely billing for ongoing service contracts, helping businesses maintain a consistent cash flow while reducing manual effort. To enable automated invoice generation, follow these steps:

      1. **Billing Period**: Choose the frequency of invoicing—**Quarterly, Yearly, or Monthly**.
      2. **Generate Invoice Before (In Days)**: Specify how many days in advance the invoice should be created (e.g., 5 days before the due date).
      3. **Payment Term**: Set the payment term (e.g., Monthly).
      4. **Invoice Template**: Select an invoice template from the available options.
      5. **Automatically Generate Invoice**: Choose **Yes** to enable automatic invoice creation or **No** for manual generation.

               <img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract43.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=330af12813a8329bf45aac2bd41b609c" alt="Contract43 Pn" width="1920" height="878" data-path="images/contract43.png" />

      Based on the configured settings, invoice dates will be generated automatically.
    </Accordion>

    <Accordion defaultOpen="false" title="To view invoice history">
      1. Navigate to the **Contract Details** page.
      2. In the right panel, locate the **Invoice History** section.
      3. Here, you can see a detailed log of all actions taken on the invoice.
    </Accordion>
  </Accordion>

  <Accordion defaultOpen="false" title="Assets">
    Associating assets with the contract enables you to track specific assets covered under the contract, ensuring that they receive the necessary maintenance and servicing. This helps manage the assets' lifecycle and maintain optimal operational performance.
  </Accordion>

  <Accordion defaultOpen="false" title="Planned Preventive Maintenance (PPM)">
    By associating PPM tasks with the contract, you can schedule recurring maintenance to prevent service disruptions. This ensures that all required preventive measures are in place, reducing downtime and extending the longevity of the equipment.

    <Accordion defaultOpen="false" title="Steps to create a new PPM">
      To create a new PPM,

      <Steps>
        <Step title="Step 1">
          Click the "**+ Create PPM**" button. A sidebar will appear to create a new PPM.

          <img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract44.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=306802621adcadb36f9edb55cc7c3250" alt="Contract44 Pn" width="1920" height="878" data-path="images/contract44.png" />
        </Step>

        <Step title="Step 2: Primary Details">
          Fill in the following primary details:

          * **PPM Name:** Enter a name for the PPM.

          * **PPM Description:** Provide a brief description of the PPM.

          * **Choose Property:** Select a property of an org/customer to associate with the PPM.

          * **Choose Asset (Mandatory):** Select one or more assets for which you want to create a new PPM. You can choose assets currently associated with the contract or any other existing assets, as needed.

                      <img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract45.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=aae155fb5ff07bb9c0d0e7b5d1d5484d" alt="Contract45 Pn" width="1920" height="878" data-path="images/contract45.png" />

          * **Choose Part/Service:** Select a part or service associated with the contract to include in the PPM.

          * **Priority (Mandatory):** Select the priority from the drop-down list. Options include Low, Medium, and High.

          * **Auto Generate Job:** By default, it will be set to "**No**." If you want to auto-generate a job based on the PPM, select "**Yes**." 
        </Step>

        <Step title="Step 3 (Optional): If selected &#x22;Yes&#x22; for Autogenerate job. Follow these steps:">
          Job Settings

          * **Generate Job in Advance (Mandatory)**: Set how many days before the scheduled date the job should be created automatically.

          * **Job Category**: Choose the job category from the drop-down list.

                      <img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract46.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=f940234f5202c876ef57441efa9ce389" alt="Contract46 Pn" width="1920" height="878" data-path="images/contract46.png" />

          * **Street Address**: Click "**Pick from Map**" to fill in the street address information.

          After completing the primary details, click the "**Next**" button to proceed to the scheduling step for the PPM.
        </Step>

        <Step title="Step 4: PPM Schedule">
          Provide the following details to schedule:

          * **PPM Start Date**: Select the start date of the PPM.

          * **PPM End Date**: Select the end date of the PPM.

                      <img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract47.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=d934a32d2ec606b3b78750de6c77d743" alt="Contract47 Pn" width="1920" height="878" data-path="images/contract47.png" />

          * **Recurrence**: Select how often this PPM should occur- Daily, Weekly, Monthly, Yearly, or Custom.

          * **Schedule Dates**: These dates are **automatically populated** for upcoming schedules (service dates) based on the chosen recurrence.
        </Step>

        <Step title="Step 5">
          After filling in all of these details, click the “**Create PPM**” button. A new PPM will be created and added to the contract successfully. After creating a PPM, you can edit/delete it as needed by clicking the <Icon icon="ellipsis-vertical" color="black" />icon next to it.

          <img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract48.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=9d35e019e9ed8e8156a53bac68e41d02" alt="Contract48 Pn" width="1920" height="878" data-path="images/contract48.png" />
        </Step>
      </Steps>

      <Note>
        **Note**: You can also create a new PPM directly under the "**Asset** " column after adding an asset.  Once the PPM has been created and associated with this contract, you can view it under the "PPM" section.
      </Note>
    </Accordion>
  </Accordion>

  <Accordion defaultOpen="false" title="Attachments">
    Adding attachments to the contract allows you to store and manage important documents such as agreements, service reports, or manuals. This ensures easy access to vital information whenever needed, keeping all contract-related documentation organized and readily available.
  </Accordion>
</AccordionGroup>

* After filling in all the required details, click the "Save Contract" button at the top right corner of the page.
* A "Save Contract" dialog box appears. Click the "**Create**" button."

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/contract49.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=4b9d49375c7b64008a220c045a19a6b0" alt="Contract49 Pn" width="1920" height="878" data-path="images/contract49.png" />

* A new contract will be created successfully.


## Related topics

- [Creating an asset](/Contracts_and_Assets_Management/Assets/Creating_asset.md)
- [Managing your contracts](/Contracts_and_Assets_Management/Contract/managing_your_contract.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.