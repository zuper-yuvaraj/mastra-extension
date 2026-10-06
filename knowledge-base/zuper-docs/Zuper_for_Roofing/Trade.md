---
title: "Using Trade Types for Multi-Trade Roofing Businesses"
source: https://docs.zuper.co/Zuper_for_Roofing/Trade.md
fetched_at: 2026-10-06T13:30:44.244Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Using Trade Types for Multi-Trade Roofing Businesses

## **Feature enablement & creation of Trade Types**

Trade types help you segment and manage your production or installation jobs across multiple trades, such as roofing, siding, and gutters. It also helps manage your operations by grouping materials and labor across various trades.  The advantage extends into reporting jobs, inventory, and profitability across trade types. This will help you better control your business by individual trade and performance.

* Customer Action Required: Contact [support@zuper.co](mailto:support@zuper.co) to enable the Trade Type feature.
* Limits: Up to 25 active Trade Types per organization.
* Post-Enablement: Create Master Trade Types via
  <Frame>
    * **Navigation**:  *Settings --> Miscellaneous --> Trade Type > + New Trade Type.*
  </Frame>

<img src="https://mintcdn.com/zuperinc/6_y2bv2hMwD_lko5/images/TTRO1-1.png?fit=max&auto=format&n=6_y2bv2hMwD_lko5&q=85&s=5fc2069855916ce7bf0322cb16afed1d" alt="TTRO1 1" width="1920" height="878" data-path="images/TTRO1-1.png" />

* Click the “**Create**” button to create the new master trade type.

<img src="https://mintcdn.com/zuperinc/dTflZw0pnhTBzvOj/images/TTRO3.png?fit=max&auto=format&n=dTflZw0pnhTBzvOj&q=85&s=6b7492ca1930aa46e10d6489905f459e" alt="TTRO3" width="1920" height="878" data-path="images/TTRO3.png" />

## **Entity relationships and mapping use cases**

| **Entity** | **Mapping** | **App Path** | **Business Impact** |
| :- | :- | :- | :- |
| **Product Categories & Parts / Services** | **1:N** – Categories can be shared across multiple trades or be trade-specific | — | **Ease of organizing products and materials.** Mapping product categories to trade type(s) helps organize products not only by their categories but also by their trade. During product creation, selection of trade type will automatically shortlist product categories belonging to that trade. *For e.g. ‘Pipe Boots’, ‘Shingles’ shall be mapped under ‘Roofing’ trade; ‘Fasteners’ shall be under both 'Roofing' & ‘Gutters’*.  It also helps pre-filter materials in a job based on job trade type when line-items are added. *For e.g. a roofing job will have roof related materials & labor prefiltered when adding line-items*. |
| **Job Categories & Jobs** | **1:N** – Job categories can be mapped to one or multiple trade types | **Settings → Modules → Jobs → Job Category Hub → + New / Edit** | **Ease of organizing jobs.** Mapping job categories to trade type helps automatically shortlist job categories when a job is marked to a trade type. *For e.g. ‘Roof Replacement’, ‘Inspection’ can be possible categories for a job belonging to ‘Roofing’ trade*. |
| **Teams (Optional)** | **1:N** – Teams can belong to one or multiple trade types (cross-trade or functional crews) | **Settings → Users & Teams → Team Mgmt. → + New / Edit → Pick Trade Types** | **Ease of dispatching.** This can be configured only when teams are specialized in specific trades. Meaning - Jobs of a certain trade type need to be assigned to teams belonging to the same trade. *e.g. roofing jobs shall be assigned only to roofing teams and likewise*. |

## **Onboard to Zuper Trade Types (Roofing, Siding & Gutters)**

### **a. Product Categories & Products**

Mapping product categories to trade types helps systematically group materials of specific trade. For example, ‘**Metal Roofing**’ as a product category can be mapped to ‘**Roofing**’ trade type whereas, ‘**Fasteners**’, ‘**Lumber**’ can be mapped to both ‘**Roofing**’ & ‘**Gutters**’ since these categories of items have potential to be used under both the trades.

Subsequently, while creating a material under parts/service master of Zuper, on selection of trade type ‘***Roofing***’, it’ll automatically shortlist product categories - ‘***Metal Roofing***’ or ‘***Fasteners***’ or ‘***Lumber***’ for user selection. Users can create various items, such as metal shingle valley caps, roof boots, roof vents, etc., under the Metal Roofing category.

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO5.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=580cc48980129c799cf4afb651fb1ef4" alt="TTRO5" width="1920" height="878" data-path="images/TTRO5.png" />

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO51.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=058d24c2ed449a8adf75612d3adeebc9" alt="TTRO51" width="1920" height="878" data-path="images/TTRO51.png" />

On the other hand, ‘***Gutters***’ as a trade type will enable users to create parts/services of categories ‘***Fasteners***’ or ‘***Lumber***’ only. Items such as 2”, 3”, and 4” fasteners can be grouped under the fastener category.

Alternatively, you can also map both ‘**Roofing**’ & ‘**Gutters**’ as trade types to any of the items created under ‘**Lumber**’ or ‘Fastener’ categories. This helps map the same product to more than one trade.

Finally, mapping products to specific trade(s) will help accelerate the addition of line items to a job. Because line-items will be auto-filtered based on job trade type, in addition. Will cover this in detail in the upcoming section.

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO6.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=9d61aa501ae9b07fed98ba0520ffc9fd" alt="TTRO6" width="1920" height="878" data-path="images/TTRO6.png" />

### **b. Job Categories & Jobs**

The next critical step is to map your job categories to right trade type(s). A job category can be mapped to one or more trade types based on your business needs. For e.g. roof replacement, roof repairs can be mapped to ‘***Roofing***’ trade type, gutter replacement shall be under ‘***Gutters***’ trade, and estimation category can be mapped to all – Roofing, Gutters and Siding trades.

<Frame>
  **Navigation**: *Settings → Modules → Jobs → Job Category Hub → + New / Edit → Pick Trade Types.*
</Frame>

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO8.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=e493078d899dfe250deb23b101d7ba9f" alt="TTRO8" width="1920" height="878" data-path="images/TTRO8.png" />

Now, when creating a job, the selected trade type determines the job categories that can be executed under it.

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO9.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=e562501cf9cdca052e5dcf45ec06a9c2" alt="TTRO9" width="1920" height="878" data-path="images/TTRO9.png" />

Additionally, the classification of job(s) by trade helps:

* Streamline reporting e.g., number of roofing jobs executed against gutters & sidings
* Automatically filter items based on the job trade type. Meaning - A roofing job will pre-filter roofing-specific items while line-item addition.

<img src="https://mintcdn.com/zuperinc/Vr6Q9RVoctfu2CjF/images/TTRO10.png?fit=max&auto=format&n=Vr6Q9RVoctfu2CjF&q=85&s=d75d435824bccbb265d87c75fd81f4fc" alt="TTRO10" width="1920" height="878" data-path="images/TTRO10.png" />

### **c. Team & Dispatch Board**

If your organization has teams specialized in specific trades such as roofing, gutters, siding etc. it’ll be prudent to associate trade types with teams. Because it’ll help filter jobs and teams in parallel on the dispatch board by trade type. You can ignore this section if your production teams are cross-functional in nature (*unified teams handling both roofing and gutter installations*).

<Frame>
  **Navigation**: *Settings → Users & Teams → Team Mgmt. → + New / Edit → Pick Trade Types.*
</Frame>

The intent of this mapping is to make the job dispatch quicker and more accurate.

<img src="https://mintcdn.com/zuperinc/Vr6Q9RVoctfu2CjF/images/TTRO11.png?fit=max&auto=format&n=Vr6Q9RVoctfu2CjF&q=85&s=370b7007f98a877057f5f6c218d46078" alt="TTRO11" width="1920" height="878" data-path="images/TTRO11.png" />

### **d. Disable Data Restriction**

This is the company-level flag that is switched off by default. The suggested approach for roofing companies is **not to enable this**. Because it’ll impose data exclusivity on users. Meaning - Restrict access to jobs, products/materials, invoices, quotes based on user trade type.

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO12.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=d0d868fd2f7a529a1cecb1b4917069b1" alt="TTRO12" width="1920" height="878" data-path="images/TTRO12.png" />

### **e. Automatic Flow of Trade Types Between Jobs, Quotes & Invoices**

When a quote is accepted and job(s) are created from the quote, the job automatically inherits the trade type of the quote. Subsequently, invoice(s) generated from the job inherit the job's trade type. This traceability is maintained regardless of the order of creation (*job → quote → invoice, or quote → job → invoice, etc.*).

Like a job, both invoices and quotes can be mapped only to one trade type. Trade type fields are available in their respective ‘***Details***’ sections.

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO13.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=2337e14f963f80b9339938a40ff509c1" alt="TTRO13" width="1920" height="878" data-path="images/TTRO13.png" />

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO14.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=61e91e5199f38a71615b09cff913fb55" alt="TTRO14" width="1920" height="878" data-path="images/TTRO14.png" />

<Note>
  **Note**: Manually changing the trade type across linked entities can impact reporting. It’s recommended to keep trade type consistent across related jobs, quotes, and invoices.
</Note>

### **f. Filters, Views & Reports**

**Filters**: With trade types enabled, you can create filters and views across listing pages based on trade types (*Jobs, Quotes, Invoices, etc.*).

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO15.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=4e83123fef199ed9f7bc447027ecbcef" alt="TTRO15" width="1920" height="878" data-path="images/TTRO15.png" />

**Views**: The sample screen below shows how to include the trade type in your views.

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO16.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=97850e8e74141339df674b733f1675d5" alt="TTRO16" width="1920" height="878" data-path="images/TTRO16.png" />

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO17.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=4ef3c9f342abc0842adf8321ff2ce081" alt="TTRO17" width="1920" height="878" data-path="images/TTRO17.png" />

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO18.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=f3ec5828f0cfbfd58af75de60663d6ab" alt="TTRO18" width="1920" height="878" data-path="images/TTRO18.png" />

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO19.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=c832eacebe2859293cb447f07c2f9296" alt="TTRO19" width="1920" height="878" data-path="images/TTRO19.png" />

<img src="https://mintcdn.com/zuperinc/pZ0MVD_Bo2nJQnls/images/TTRO20.png?fit=max&auto=format&n=pZ0MVD_Bo2nJQnls&q=85&s=609b19a0da96a7bb250043fed8f81266" alt="TTRO20" width="1920" height="878" data-path="images/TTRO20.png" />

## **g. Reports**

For a business handling **Roofing, Gutters, and Siding**, trade types allow you to **classify jobs, quotes, invoices, products, users, and payments by trade**. This makes it easy to **pull consolidated or trade-specific data** and clearly track **revenue, collections, and performance for each trade**—for example, identifying how much revenue comes from Roofing, Gutters, or Siding.

In summary, trade types in Zuper enable roofing businesses to efficiently manage and group multiple service lines, such as Roofing, Siding, and Gutters,**Roofing, Siding, and Gutters** within a single system.

## **Frequently Asked Questions**

**1.    What happens to existing jobs, quotes, or invoices without trade types?**

No business impact. Trade type of job(s) can manually be updated, or they’ll continue to stay the way they are.

 

**2.   Can one job, quote, or invoice belong to multiple trade types?**

No. Jobs, quotes, and invoices can belong to **only one trade type** to maintain clean reporting and traceability. In case you want to create a quote, job, or invoice agnostic of trade, we suggest creating them **without any trade type**.

 

**3.   Can parts or services be shared across trade types?**

Yes - Parts & Services can belong to **more than one trade type**. We recommend that you configure/map them appropriately. For example:

* Nails can belong to Roofing, Siding & Gutters
* Architectural shingles shall be mapped to Roofing only

 

**4.   Does Zuper synchronize with QuickBooks Online (QBO) based on trade types?**

No. We do not support that yet. However, it is part of our future roadmap.

 

**5.   Is it possible to add a part/service belonging to a trade type to a job, invoice, quote from a different trade?**

This is possible. Just that they must choose a different trade type (or) ‘Any’ option while adding line-items to a job. Intent here is to accommodate cross-functional jobs that are cut across multiple trades.


## Related topics

- [Multi Trade Groups in CPQ Proposals](/Zuper_for_Roofing/Multi-trade groups in CPQ proposals.md)
- [Trade Types](/Trade_Types/Trades.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.