---
title: "Profit Margin Slider"
source: https://docs.zuper.co/Accounting/Profit_Margin.md
fetched_at: 2026-10-06T13:29:50.530Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Profit Margin Slider

Zuper offers a **Profit Margin Slider** that allows you to adjust the profit margin dynamically across *Quotes*, *Proposals*, and *Service* *Packages*. This feature removes the need for manual recalculations by enabling immediate adjustments to meet specific profit targets.

<img src="https://mintcdn.com/zuperinc/LticKvc904jE5UcS/images/margin-1.png?fit=max&auto=format&n=LticKvc904jE5UcS&q=85&s=86cdaa0b6335d3ec103478a1578705eb" alt="Margin 1" width="1920" height="912" data-path="images/margin-1.png" />

**Prerequisites:**

To access and use the **Profit Margin Slider**, the following conditions must be met:

* **Job Profitability** must be enabled for your account. To enable it, contact your account administrator or email [**support@zuper.co**](mailto:support@zuper.co).
* By default, *Admins* and *Team Leads* can view and manage the Profit Margin slider. However, if your business requires different visibility, you can configure access for specific roles.<br />To do this, navigate to: **Settings** module > **Users & Teams** > **Quotes** > enable the **Manage Profit Slider** toggle. <img src="https://mintcdn.com/zuperinc/LticKvc904jE5UcS/images/margin-2.png?fit=max&auto=format&n=LticKvc904jE5UcS&q=85&s=35f8b6085fd123cd78c252b960cc7be3" alt="Margin 1" width="1920" height="912" data-path="images/margin-2.png" />
* Add at least one **billable line item** (part, product, service, or bundle) to a Quote, Proposal, or Service Package to make the slider visible.
* Define the allowable range for profit margin adjustments under:<br />**Settings** module > **Quotes & Invoices** > **Quote and Invoice General Settings** > **Quote** tab > **Define Minimum and Maximum Profit Margin**. <img src="https://mintcdn.com/zuperinc/LticKvc904jE5UcS/images/margin-3.png?fit=max&auto=format&n=LticKvc904jE5UcS&q=85&s=7792f710c2cb7c4cd1a6a9130bf62ca8" alt="Margin 1" width="1920" height="912" data-path="images/margin-3.png" />

### To use the Profit Margin Slider

1. Open a **Quote**, **Proposal**, or **Service Package** via one of the following paths:
   * Accounting module > Quotes
   * Accounting module > Proposals
   * Settings module > Quotes & Invoices > Service Packages
2. Click **“+ Add”** to include *parts*, *products*, *services*, or *bundles* from the **Parts** & **Services** section. Once at least one **billable item** is added, the **Profit Margin Slider** automatically appears.
   <Note>
     **Note**: Items with a **Cost Price of \$0** and **negative line items** are also included in the profit margin calculation.
   </Note>
   <img src="https://mintcdn.com/zuperinc/e3lGmJ6isV61N8aQ/images/margin-4.png?fit=max&auto=format&n=e3lGmJ6isV61N8aQ&q=85&s=897fad3a5b4981a4bf26f5bcec2338f5" alt="Margin 1" width="1920" height="912" data-path="images/margin-4.png" />
3. The slider displays the current overall profit margin percentage, calculated using the formula:
   ```markdown wrap theme={null}
   Profit Margin% = (Total Sell Price-Total Cost Price/Total Sell Price)\* 100 
   ```
   <Check>
     **Important**: **Fees** are excluded from the actual profit calculation and do not influence the slider’s behavior.
   </Check>
4. Drag the slider to your desired profit margin within the preconfigured minimum and maximum range.
   <Note>
     **Note:** If you adjust the slider below the minimum or above the maximum predefined values, it turns red to indicate that the selected profit margin is outside the allowed range.
   </Note>
5. As you adjust the slider, Zuper instantly recalculates and updates:
   * **Markup %** for each line item
   * **Total Sell Price** across the document <img src="https://mintcdn.com/zuperinc/e3lGmJ6isV61N8aQ/images/margin-5.png?fit=max&auto=format&n=e3lGmJ6isV61N8aQ&q=85&s=6975fdf6930cf26a56391025d42b3efc" alt="Margin 1" width="1920" height="912" data-path="images/margin-5.png" />

Zuper applies a change factor to proportionally adjust item prices, ensuring consistent and balanced profit distribution across all line items.

**View Cost and Profit Breakdown**

Let’s expand the **Cost & Profit Breakdown** panel beneath the slider to view a comprehensive summary, which includes:

* **Parts & Services cost**
* **Labor cost**
* **COGS** (combined cost of parts and labor)
* **Quote Total**
* **Profit Amount** = Sell Price – Cost Price

<img src="https://mintcdn.com/zuperinc/e3lGmJ6isV61N8aQ/images/margin-6.png?fit=max&auto=format&n=e3lGmJ6isV61N8aQ&q=85&s=6025f8e2b7690df94668e3a0884d04d7" alt="Margin 1" width="1920" height="912" data-path="images/margin-6.png" />

## **Frequently Asked Questions**

<AccordionGroup>
  <Accordion title="How do I give a field technician access to the Profit Margin Slider?">
    By default, only Admins and Team Leads can view and manage the Profit Margin Slider. To let a field user use it, assign them a custom role with the following permissions enabled:

    **Quotes module**

    * **Create Quote / Update Quote**
    * **Update Line Item Price**
    * **Manage Profit Slider**

    **Product module**

    * **Show Selling Price in Transactions**
    * **Edit Selling Price**

          <img src="https://mintcdn.com/zuperinc/LticKvc904jE5UcS/images/margin-2.png?fit=max&auto=format&n=LticKvc904jE5UcS&q=85&s=35f8b6085fd123cd78c252b960cc7be3" alt="Margin 1" width="1920" height="912" data-path="images/margin-2.png" />
  </Accordion>

  <Accordion title="Can I use the Profit Margin Slider if some items have zero cost? ">
    Yes. Items with a Cost Price of \$0 and even negative line items are included in the profit margin calculation. The slider will still function and adjust pricing accordingly. 
  </Accordion>

  <Accordion title="Are fees included in the profit margin calculation? ">
    No. Fees are excluded from the profit calculation and do not influence the slider's behavior. Only billable parts, products, services, and bundles are included in the calculation. 
  </Accordion>

  <Accordion title="What happens if I adjust the profit margin beyond the allowed range? ">
    If you drag the slider below the minimum or above the maximum predefined values, the slider turns red to indicate that the selected profit margin is outside the allowed range. You'll need to adjust it back within the configured limits to proceed. <img src="https://mintcdn.com/zuperinc/e3lGmJ6isV61N8aQ/images/margin-8.png?fit=max&auto=format&n=e3lGmJ6isV61N8aQ&q=85&s=ca2924c6aa81c680ab8cb63a1f4abc69" alt="Margin 1" width="1341" height="594" data-path="images/margin-8.png" />
  </Accordion>

  <Accordion title="Can I view Cost & Profit breakdowns on the Quote Details page? ">
    Yes, you can view cost & profit metrics directly on the Quote details page without opening the quote for editing. The **Cost & Profit breakdowns** display: 

    * **Profit Margin %** – The overall profit margin percentage for the quote 
    * **COGS** – The combined cost of goods sold. You can hover over this field to see a detailed breakdown of **Product/Parts** and **Service/Labor** costs.
    * **Quote Total** – The total quoted amount based on all item costs and configured profit margin. 
    * **Profit** – The calculated profit amount (Sell Price – Cost Price)

          <img src="https://mintcdn.com/zuperinc/e3lGmJ6isV61N8aQ/images/margin-7.png?fit=max&auto=format&n=e3lGmJ6isV61N8aQ&q=85&s=955c5eb3fc8328b6b7e2d741770a1004" alt="Margin 1" width="1349" height="755" data-path="images/margin-7.png" />
  </Accordion>
</AccordionGroup>


## Related topics

- [Job Costing and Profitability](/Zuper_for_Roofing/Job_Costing.md)
- [Configuring Job Costing ](/Job_Costing/Configuring_Job_Costing.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.