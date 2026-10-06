---
title: "Apply a pricelist to a transaction"
source: https://docs.zuper.co/Inventory_Management/Pricelists/Apply_Pricelist.md
fetched_at: 2026-10-06T13:29:48.799Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Apply a pricelist to a transaction

Using a price list ensures consistent pricing across different modules, including customers, organizations, properties, quotes, invoices, jobs, contracts, and proposals.  

1. Go to the module where you want to apply the pricelist, such as **Customers**, **Organizations**, **Properties**, **Quotes**, **Invoices**, **Jobs**, **Proposals**, or **Contracts**. 
2. Choose the specific customer, organization, or transaction to which you want to apply the pricelist or create a new one. 

**For Customers/Organizations/Property:** 

When you associate a pricelist with an organization, customer, or property, you set a default pricing framework for future transactions involving these entities. This ensures that whenever you initiate a transaction, such as creating a quote, invoice, job, or contract, the associated pricelist will be applied. 

<Note>
  **Note:** The pricelist associated with properties takes priority, followed by customers, and then organizations. If a property's pricelist isn't specified, the system defaults to the customer's pricelist. 
</Note>

On the “**Customer,**” “**Organization**,” or “**Property**” details page, in the “**Pricelist**” field, select the desired pricelist from the “**Pricelist**” field. 

* **Customer**

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-21.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=5a31215a8025b404858a2fa4b382b645" alt="" width="1600" height="776" data-path="Inventory_Management/Pricelists/Price-21.png" />

* **Organization**

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-22.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=aa1c41f85263e41db05dde6cc4173b84" alt="" width="1600" height="779" data-path="Inventory_Management/Pricelists/Price-22.png" />

* **Property**

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-23.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=2bdf7c9121ff10f4d969297bafd75599" alt="" width="1600" height="793" data-path="Inventory_Management/Pricelists/Price-23.png" />

**For Transactions (Quotes, Invoices, Jobs, Contracts, Proposal):** 

 By default, the pricelist associated with Customer/Organization/Property is applied when creating or editing a quote, invoice, job, proposal, or contract. If needed, you can manually select a different pricelist in the “**Pricelist**” field within the “**Parts & Services**” sub-section to suit specific transactions.  

Applying a pricelist does not limit which line items are available. All items from the master list can still be added to a job, quote, or invoice. The pricelist only adjusts the selling price for items associated with it — items outside the pricelist keep their default pricing.

<Note>
  **Note:** When you first select a customer and adjust pricing, selecting a different customer afterward will override the pricing based on the newly selected customer's Pricelist. 
</Note>

* **Quote**

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-24.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=239fba2874ca0246c474817a2728da99" alt="" width="1600" height="821" data-path="Inventory_Management/Pricelists/Price-24.png" />

* **Proposal**

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-25.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=bafa13c1e501a77d2437af63688ab55f" alt="" width="1600" height="812" data-path="Inventory_Management/Pricelists/Price-25.png" />

* **Contract**

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-26.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=41376717c10819b7443b2b740519e9e2" alt="" width="1600" height="818" data-path="Inventory_Management/Pricelists/Price-26.png" />

* **Job**

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-27.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=00b975243e3779a936acf97b80230049" alt="" width="1600" height="818" data-path="Inventory_Management/Pricelists/Price-27.png" />

When applying a pricelist to your transactions, any discounts you set at the transaction level will persist. However, these discounts will be applied to the selling price determined by the pricelist. This ensures that your pricing calculations remain accurate and that you can apply customized discounts as needed. 

 And there you have it! By following the straightforward instructions outlined above, you can effortlessly apply pricelists to your customers, organizations, properties, and transactions within Zuper.


## Related topics

- [Create, edit, and delete a pricelist](/Inventory_Management/Pricelists/Create_Pricelist.md)
- [Concepts](/Getting_Started/Concepts.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.