---
title: "Progressive invoicing"
source: https://docs.zuper.co/Projects/Progressive_invoicing.md
fetched_at: 2026-10-06T13:29:41.704Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Progressive invoicing

Progressive invoicing, also known as progressive billing, is a method of billing/invoicing customers incrementally for work and materials used throughout the course of a project or a long-term service. This means that instead of billing the full amount at the end of the project, businesses divide the total cost into multiple invoices based on project milestones, time periods, or specific phases to collect payment from customers during the course of a project.

With Zuper, setting up progressive invoicing is seamless and flexible, offering options to suit your business needs:

* **Calculate from Time and Material**

Automatically generate invoice amounts based on the **actual material costs incurred by completed jobs** (i.e., sell prices of the parts and materials used by the job/s) within a timeline. This ensures customers are billed accurately for the parts and services used.

* **Fixed Amount**

Set a **predefined project price and bill in stages** , regardless of the number of completed jobs, their status, or the parts and services used. This option provides consistency and control over project invoicing.

You can further customize your progressive invoicing by selecting the frequency when invoices should be generated:

* **Milestone-Based Invoicing**

Create invoices upon reaching key project milestones, ensuring that billing aligns with the project's progress.

* **Frequency-Based Invoicing**

Set up recurring invoices on a schedule, such as bi-weekly, monthly, quarterly, or on custom dates for ongoing work.

This approach benefits both businesses and customers in many ways: businesses can maintain a steady cash flow by collecting payment for completed work in stages, while customers can manage their budgets more effectively by spreading out large expenses over time.

For example, let's take a construction project. A contractor might issue an invoice after completing foundational work, another after erecting the structure, and a final invoice upon project completion. This phased billing system ensures that the business receives payment for the work done so far while the customer gains flexibility in managing their budget.

Let’s get started on how to set up progressive invoicing in Zuper!

<Note>
  **Note**: Progressive invoicing is optional and should be used only when billing your customers throughout the project based on milestone completion or a predefined schedule.
</Note>

# Steps to set up progressive invoicing

You can set up progressive invoicing in either of the following ways:

1. During project creation.
2. After creating a project.

## During project creation

<Frame>
  **Navigation**: *Projects -> + New Project -> Invoicing (Setup)*
</Frame>

To set up progressive invoicing during project creation, follow these steps:

1. Select the “**Projects**” module from the left navigation menu. You can view the list of
   projects that have been created already on the projects listing page.

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI1.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=708d182ae80aec707fa55afcb6349f16" alt="" width="1920" height="828" data-path="Projects/PI1.png" />

2. Click the “ **+ New Project** ” button at the top right corner of the page to create a new project.

3. On the new project creation page, click the “**Setup**” button in the invoicing section. A new progressive invoicing setup page appears.

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI3.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=2ed085ed3609e8cce07704bc4d8f3fdd" alt="" width="1920" height="878" data-path="Projects/PI3.png" />

### **Choose how to generate the invoice amount**

Select one of the following options for progressive invoicing:

**Calculate from Time and Material**

Choosing this option automatically calculates the invoice amounts based on the actual material costs included as line items in the completed jobs (i.e., sell prices of the parts and materials used by the job/s) within a project at each stage.

**Fixed Amount**

Choosing this option allows you to **set an actual estimate or quotation of the project** in USD and bill it in stages, regardless of the number of completed jobs, their status, or the parts and services used.

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI4.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=fd009aee7a6803e1a853e0c0c7f9d431" alt="" width="1920" height="878" data-path="Projects/PI4.png" />

### **Choose when to generate the invoice**

Select when you would like invoices to be generated:

**Milestone**

This option allows you to generate invoices upon reaching a specific milestone in a project, ensuring that billing aligns with the project's progress. To use this option, follow these steps:

<Note>
  **Note**: To save time and streamline the process, you can create a milestone directly during project creation rather than first creating a project and selecting milestones later.
</Note>

* Click the " **+ Add Milestone** " button.

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI5.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=34dba315b6d14fbc51d6c2e331ee693f" alt="" width="1920" height="878" data-path="Projects/PI5.png" />

* Enter the milestones "**Name**" and "**Due Date.**" The due date you specify here is the date the invoice will be generated (saved as a draft), with the amount calculated based on your selected invoice amount generation option.

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI7.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=aaa0a02934d7842910e56a02c7e70ca6" alt="" width="1920" height="878" data-path="Projects/PI7.png" />

<Accordion title="How Invoice Amount Generation Methods Impact Milestone-Based Invoicing" defaultOpen="false">
  1. When you select the “**Calculate from Time and Material** ” option, the amount will be calculated automatically based on the actual material costs (i.e., sell prices of the parts and materials) included as line items in the completed jobs within the project up to the specified milestone due date.
  2. If you select the “ **Fixed Amount** ” option, you must **specify a full estimate** or the **portion of the amount** (in USD) to be collected upon reaching the first milestone. The remaining amount will automatically carry over to the next milestone(s). So, when a milestone's due date is reached, the specified amount is included in the invoice, which is generated regardless of job completion status, progress, or parts and services used up to that milestone.

  <img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI8.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=dbe2b8839b52370d74bfa923490a2369" alt="" width="1920" height="878" data-path="Projects/PI8.png" />

  <Note>
    **Note**: These milestones will then be added to the **"Not added to any phase**" section in both the Gantt and List Views of the project’s job section. You can then drag and drop the milestones into the appropriate phases.
  </Note>
</Accordion>

**Frequency**

This option allows you to generate invoices based on the selected billing frequency for ongoing work. To use this option, follow these steps:

* Choose the “**Frequency**” option. You will be prompted to select a billing frequency: **Bi-weekly**, **Monthly**, **Quarterly,** or **Custom.**

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI9.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=c995e65d2a6ebe7ab3f799ef7a1b5ced" alt="" width="1920" height="878" data-path="Projects/PI9.png" />

<AccordionGroup>
  <Accordion title="If the frequency selected is Bi-weekly, Monthly, or Quarterly" defaultOpen="false">
    Specify the invoice start and end dates in the “ **Starts on** ” and “ **Ends on** ” fields. The system will automatically calculate the billing dates within the specified range based on the chosen frequency and generate invoices (saved as draft).
  </Accordion>

  <Accordion title="If the selected frequency is Custom" defaultOpen="false">
    Specify the invoice start and end dates in the “**Starts on** ” and “**Ends on**” fields. These will be the invoice start and end dates (i.e., the overall range during which invoices will be generated). Within this period, you can select additional specific dates from the calendar to generate invoices by clicking the “**+ Add Invoice Date**” option. This allows for more flexibility in scheduling invoice generation. You also have the ability to delete any invoice dates you've added or add new ones as needed.
  </Accordion>
</AccordionGroup>

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI10.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=9ffb309bb0920f7747f5c349423fdac6" alt="" width="1920" height="878" data-path="Projects/PI10.png" />

* After selecting the frequency, the system will automatically generate draft invoices on the specified dates, with the amount calculated based on your selected invoice amount generation option.

<Accordion title="How Invoice Amount Generation Method Impact Frequency-Based Invoicing" defaultOpen="false">
  1. When you select the “**Calculate from Time and Material** ” option, the amount will be calculated automatically based on the actual material costs (i.e., sell prices of the parts and materials) included as line items in the completed jobs within the project up to the specified due date.
  2. If you select the “**Fixed Amount**” option to generate the invoice amount, you’ll be prompted to **specify the full estimate** or the **portion of the amount** in USD to be collected for the first billing date. The remaining amount will automatically carry over to the next billing date(s). So, when the billing frequency date is reached, the specified amount will be included, and the invoice will be generated regardless of the number of jobs completed, their status, or the parts and services used up to that date.
</Accordion>

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI11.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=4bd6877a6aa9520ee2a1e840fc847ac8" alt="" width="1920" height="878" data-path="Projects/PI11.png" />

* Click the “**Save**” button to confirm your progressive invoicing setup.

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI12.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=377832839d8f3abd9b37d7b48da5a84e" alt="" width="1913" height="875" data-path="Projects/PI12.png" />

<Note>
  **Note**: The sum of the portions allocated to each invoice should equal the total project amount. If these specified portions do not add up to the total project amount, the system will not allow you to save the setup.
</Note>

## After creating a project

<Frame>
  **Navigation**: *Projects -> Project details page -> Financials -> Invoices -> Configure -> Progressive invoicing*
</Frame>

If you want to set up progressive invoicing for any of the existing projects, follow these steps:

* Select the “**Projects**” module from the left navigation menu. You can view the list of projects that have been created already on the projects listing page.

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI13.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=dce714da89bae2d86e75967b20e61fb8" alt="" width="1920" height="828" data-path="Projects/PI13.png" />

* From the listing page, select any project for which you want to set up progressive invoicing. You will be redirected to the selected project details page. Select “***Financials***” on the left panel under “**Navigation**."

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI14.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=baf374c315575ac8b91b9be1ed5558de" alt="" width="1920" height="878" data-path="Projects/PI14.png" />

* On the financials listing page, switch to "**Invoices,"** click the “**Configure**” button at the top right and choose "***Progressive Invoicing***."

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI15.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=3f0aff910fcce4872c63547499528a53" alt="" width="1918" height="869" data-path="Projects/PI15.png" />

* Choose how you want to generate the invoice amount for progressive invoicing (either **Calculate from Time and Material** or **Fixed Amount** ). For more details, see the section above.
* Choose when you would like to generate invoices (either **Milestone** or **Frequency** ). For more details, see the section above.

<Note>
  **Note**: If you select the milestone option when setting up progressive invoicing for an existing project, you can view the list of previously created milestones.
</Note>

* Select the milestones at which you want invoices to be generated.
* Once selected, invoices will be generated (saved as drafts) on each milestone’s due date, with the amount calculated based on your chosen invoice amount generation method.

## Accessing Invoices generated through progressive invoicing

1. After setting up progressive invoicing, you can view the progressive invoices by navigating to ***Financials*** *>>* ***Invoices*** *>>* ***Upcoming Invoices*** section on the web. To indicate ongoing progressive invoicing within a project, a progressive invoicing icon will also appear next to “**Financials**” on the project details page, as shown below:

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI16.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=6235c7c9125c42cb9c1f48bef8971f12" alt="" width="3360" height="1818" data-path="Projects/PI16.png" />

<Note>
  **Note**: You cannot click to view the details of the upcoming invoices. These are displayed only to indicate the dates of the upcoming invoices for the project, as they have not yet been generated. Once an invoice is generated on the estimated date, it will be **saved as a draft**.

  You can then review and make any necessary changes before sending it to the customer. The **due date** will be determined based on the **payment term selected at the organization level**.
</Note>

2. To view the progress of the invoices generated through progressive invoicing, click “***Progressive Invoicing***” under “**Configure**” in the financial section.

3. If the Fixed Amount option is selected, you’ll see details like the budget, billed amounts, and amounts to be billed.

4. If the Calculate from Time and Material option is selected, invoice amounts are automatically calculated based on material costs from completed jobs, and actuals won’t be displayed.

<Info>
  **Important**: Once the first invoice from the progressive invoicing setup is sent and paid by the customer, the setup can no longer be modified.
</Info>

<img src="https://mintcdn.com/zuperinc/NbbApPhcsIqdplnc/Projects/PI17.png?fit=max&auto=format&n=NbbApPhcsIqdplnc&q=85&s=5c97e00c395ce3e0768964fd571d445e" alt="" width="1124" height="1822" data-path="Projects/PI17.png" />


## Related topics

- [Creating a contract](/Contracts_and_Assets_Management/Contract/Creating_Contract.md)
- [Concepts](/Getting_Started/Concepts.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.