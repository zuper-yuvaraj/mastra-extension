---
title: "Proposal Template with CPQ"
source: https://docs.zuper.co/Zuper_for_Roofing/Proposal_Template_with_CPQ.md
fetched_at: 2026-10-06T13:30:40.573Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Proposal Template with CPQ

Creating a **CPQ (Configure, Price, Quote) proposal template** helps you turn complex estimating and quoting processes into fast, reliable, and fully automated proposals.

Instead of starting from scratch or manually calculating every job detail, you can predefine how each proposal should behave, which products to include, how pricing is calculated, and what options to display.

Once your template is set up, Zuper automatically builds accurate, professional proposals for every new job, using real job data like measurement values, checklists, and custom field answers.<br />

<iframe className="w-full aspect-video rounded-xl" src="https://drive.google.com/file/d/1AN61vzLqeZm7_D9hdNlSb04LLuGjtAjc/preview" allowFullScreen />

#### Let’s start creating a new proposal template:

1. Navigate to **Quote Settings → Zuper IQ – Intelligent Quoting → Proposal Templates.**
2. Click **+ New Template.**

<img src="https://mintlify.s3.us-west-1.amazonaws.com/zuperinc/images/nxtcpq2.png" alt="Nxtcpq2" />

3. You’ll see two template types:

* [**Standard Template**](/Settings/Modules/Quotes-Invoices/Standard_proposal_template) – Great for simple, fixed-price proposals.
* **CPQ-based Template** – Ideal for configurable, multi-option proposals that use formulas and rules.

4. Choose a **CPQ-based Template**, give it a descriptive name (for example, *Residential Roofing Configuration*), and click **Proceed.**

<img src="https://mintcdn.com/zuperinc/z6hEc4PEMTUv_S_7/images/nxtcpq1.png?fit=max&auto=format&n=z6hEc4PEMTUv_S_7&q=85&s=adc206ad8d100acb0cf1e188ead34a78" alt="Nxtcpq1" width="1917" height="862" data-path="images/nxtcpq1.png" />

#### Select Template triggers and options:

Every CPQ template begins with automation rules that tell Zuper when to apply it automatically.

You’ll set:

* **Job Category:** Select for which category this template should apply (e.g., Roofing, HVAC, Electrical).
* **Job Status:** Choose when the proposal should trigger (e.g., *Completed*, *Ready for Estimate*).

<img src="https://mintcdn.com/zuperinc/z6hEc4PEMTUv_S_7/images/nxtcpq3.png?fit=max&auto=format&n=z6hEc4PEMTUv_S_7&q=85&s=17cfdb98804b79a1e75b9d9f4178a86b" alt="Nxtcpq3" width="1892" height="574" data-path="images/nxtcpq3.png" />

Below that, you’ll see two sections:

* **Industry Templates** – Preconfigured templates for brands like *Owens Corning*, *GAF*, or *CertainTeed.*
* **Generic Presets** – Options like *Good / Better / Best*, *Option 1 / 2 / 3*, or *Single Option.*

Click one of these presets to start building your layout or choose **Start from Scratch** to customize according to business needs.

Once selected, click **Next: Package Configuration.**

#### Configure Packages and Items

The **Package Configuration** page is the heart of your CPQ setup. Here, you define what products, services, bundles, or service packages appear in each option (such as *Good*, *Better*, *Best*).

You can add:

* [Bundles](/Inventory_Management/Parts_Services/Bundles)– Predefined groups of materials or services.
* [Materials](/Inventory_Management/Parts_Services/Create_New_Part_Service) – Individual catalog items like shingles, tiles, or sealants.
* [Services](Inventory_Management/Parts_Services/Create_New_Part_Service)  – Labor, inspections, or custom charges.
* [Service Packages](/Accounting/Proposal#a-service-packages) – Combined service offerings.
* [**Sections**](https://docs.zuper.co/Accounting/Sections) – Used to group related items for easier readability.
* **Discount** – Apply pricing adjustments directly within each package.
* **Checklist Look-Up** – Add items from the checklist lookup fields directly to an option. You can apply the quantity as **Fixed**, which uses the value entered during lookup, or as **Formula**, which calculates the quantity using the product’s default quantity formula set in master.
* **Deposit** – Define an upfront amount for an option using either a percentage of the proposal total or a fixed amount.

<Frame>
  <img src="https://mintcdn.com/zuperinc/z6hEc4PEMTUv_S_7/images/nxtcpq4.png?fit=max&auto=format&n=z6hEc4PEMTUv_S_7&q=85&s=e1991a89697d70a7e3fedae329868c04" alt="Nxtcpq4" width="1920" height="878" data-path="images/nxtcpq4.png" />
</Frame>

### **Add-ons**

**Add-ons** in CPQ are optional items tied to each option, allowing customers to select additional services or items before approval.

Add-ons configured at the **Service Package** level automatically flow into the CPQ options Add-ons section.

<Note>
  Note: CPQ Item Rules and Formulas are supported for the Add-on items too.
</Note>

<img src="https://mintcdn.com/zuperinc/henqMRx9O_0xph3h/images/addon12.png?fit=max&auto=format&n=henqMRx9O_0xph3h&q=85&s=b1054d3896c0813276513964207364f2" alt="Addon12" width="1920" height="878" data-path="images/addon12.png" />

You can reorder line items within a proposal option by dragging and dropping them into the order you prefer.

<Frame />

Each package acts like a mini-proposal with its own logic and items.<br />To add more options, click **Add Option** and specify the option details.

For each line item, you can set:

* [Rules](/Zuper_for_Roofing/Conditional_Rule): Click **Add Rule** beside a line item to define when that item should appear, be hidden, replaced, removed, or have its markup adjusted automatically based on Job details. If you need to remove a rule later, simply click the **X** next to the rule. 

  <Tip>
    **Tip:** To apply the same rule to multiple items at once, select the checkboxes next to the required items, and then click **Add Rule** from the toolbar. The **Conditional Rule** panel opens, allowing you to configure the rule once and apply it to all selected items when you save it.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/8IPo8gCNznaw0EIk/images/bulkrule.png?fit=max&auto=format&n=8IPo8gCNznaw0EIk&q=85&s=558697539091599e64dc592bcf8bedc6" alt="Bulkrule" width="1920" height="912" data-path="images/bulkrule.png" />
    </Frame>
  </Tip>
* **Quantity Source:** *Fixed* (manual entry) or [*Formula*](/Zuper_for_Roofing/Formula_Library) (automatically calculated using your Formula).
  <Note>
    If a **Quantity Formula** is defined in the part or product master, it automatically populates in the line item when you select that item in a CPQ template option. You can keep the auto-populated formula or modify it in the template to meet specific job requirements.
  </Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/Sect26.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=ca344adea36449c2c7758cacc96e805d" alt="Sect26" width="1920" height="878" data-path="images/Sect26.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/Sect28.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=07bccd6dd26c919bf8baa9e26840b598" alt="Sect28" width="1920" height="878" data-path="images/Sect28.png" />
</Frame>

#### Enable Financing Options

At the bottom of the configuration page, you can toggle [**Enable Financing**](/Zuper_for_Roofing/Financing) to *On* for the package (e.g., “Financing for Better Option”) and select the provider and their plans.

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/Sect29.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=b584c53c7b78bf4e9618ffad96ce0cb9" alt="Sect29" width="1920" height="878" data-path="images/Sect29.png" />
</Frame>

This displays financing plans directly within the proposal, allowing customers to compare payments.

#### Preview and Refine Package Options

Once your items, formulas, and rules are set, you’ll see a **Package Options Preview.**<br />Each option (*Good*, *Better*, *Best*) appears as a visual card with:

* Item list and descriptions
* Unit Selling prices
* Package images
* “Recommended” labels for highlighting preferred options

Once you’re satisfied with your setup, click **Next: Review & Publish.**

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/Sect31.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=2f31c2451cc2cbe86a5d475b3e842b2f" alt="Sect31" width="1920" height="878" data-path="images/Sect31.png" />
</Frame>

### Review & Publish

1. Under **Select Proposal Layout**, choose the layout you want this CPQ template to use. Each layout controls the sections of your proposal, cover page, package summary, estimate options, and signature page. <img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/CPQ-08.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=a71ff22ffefdbc9f7d428e4b88c1d343" alt="CPQ 08 Pn" width="1875" height="517" data-path="Settings/Modules/Quotes-Invoices/images/CPQ-08.png" />
2. Use **Save as Draft** if you want to test or adjust later.
3. Click **Publish Template** when ready. <img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/CPQ-09.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=4ce241cf355e29a974536fc06ad13bcc" alt="CPQ 09 Pn" width="1920" height="869" data-path="Settings/Modules/Quotes-Invoices/images/CPQ-09.png" />

Once published, the template becomes available to your team. When a job is created or updated with the matching category and status, Zuper automatically generates a proposal using this template, and it’s ready for your field or sales reps to send to the customer.

## Frequently asked questions

<AccordionGroup>
  <Accordion title="In CPQ proposals, what happens if a measurement token or a checklist value is not filled in or is null, and how is it used in a formula calculation or a conditional rule? ">
    Zuper automatically treats any missing/null/blank value as **0** during calculations, so your proposals always generate successfully. **For example:** **Formula**: @Roof\_Area \* 1.1 (adds 10% waste) → If @Roof\_Area is missing → treated as 0 → quantity = 0 (item will not be added). **Conditional rule**: "Add ice & water shield IF @Eaves\_Length > 20" → If @Eaves\_Length is missing → treated as 0 → condition Rule(defined).
  </Accordion>

  <Accordion title="What happens if the calculated quantity of a line item is 0? ">
    If the calculated quantity is **0**, the item is automatically removed from the proposal option.
  </Accordion>

  <Accordion title="Why do custom field types appear differently in CPQ? ">
    When you create custom fields in **Checklist** or **Inspection** in Zuper, you may configure components like **Single Line Text** or **Multi Selection**.<br />When these fields are used in Zuper CPQ (Intelligent Quote Builder), such as while creating **conditional rules**, the system displays simplified field type names like *Text* or *Checkbox*.<br />This is expected behavior. CPQ simplifies the field type labels so they are easier to read and use.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/Sect35.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=a59b81b94bbd051e6736663ff4d56b4b" alt="Sect35" width="1920" height="878" data-path="images/Sect35.png" />
    </Frame>
  </Accordion>
</AccordionGroup>


## Related topics

- [Multi Trade Groups in CPQ Proposals](/Zuper_for_Roofing/Multi-trade groups in CPQ proposals.md)
- [Using ABC Pricing on Your Proposals](/Integrations/Purchasing/abc-supply/using-abc-pricing-on-your-proposals.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.