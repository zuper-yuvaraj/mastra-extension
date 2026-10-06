---
title: "Understanding job costing details"
source: https://docs.zuper.co/Job_Costing/Understanding_Job_Costing_details.md
fetched_at: 2026-10-06T13:29:39.965Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Understanding job costing details

In Zuper, the Job Costing feature breaks down costs on jobs so you can gain insights into payroll costs, parts & services costs, and opportunities to increase gross margins.

<img src="https://mintcdn.com/zuperinc/bSnf0MKWN-hKA-bT/Job_Costing/Images/costing-4.png?fit=max&auto=format&n=bSnf0MKWN-hKA-bT&q=85&s=a7c007da6d5cd4188075e38622313bd9" alt="Costing 4 Pn" width="921" height="461" data-path="Job_Costing/Images/costing-4.png" />

<br />On your **Job** details page, there is a “**Line Items**” section that includes details about your parts and services, labor, and expenses for that job. These make up the calculation for your job's profitability.

At the top of this section, you will find the "**Job Profitability Bar**," which displays:

* **Profit Margin/Markup (%)** – This is how much profit you're making as a percentage of your revenue or cost. It's calculated by dividing your profit by the total revenue or cost.
* **Total Price (Revenue)** – This is what you’re billing the customer (*pre-tax and before discounts*). It’s calculated from the unit selling price of all your line items, labor charge, and expenses for the Job.
* **COGS** – This represents the actual costs incurred to complete the job. The total job cost includes the following components:
  * **Parts & Services Cost** – Shows how much those line items are costing you internally.
  * **Labor Cost** – Displays the cost of your team's time on the job, calculated based on each user's hourly rate and recorded hours with corresponding cost code. Refer to the Labor Cost section for detailed information.
  * **Expenses** – Any extra costs you’ve added manually, like meals, materials, or fuel.
* **Profit** – This is the amount left after subtracting all your actual job costs from your revenue.

Each time you add or change a line item, log more time, or update an expense, the **Job Profitability Bar** updates automatically, so you’re always seeing the most accurate numbers.

<img src="https://mintcdn.com/zuperinc/bSnf0MKWN-hKA-bT/Job_Costing/Images/costing-7.png?fit=max&auto=format&n=bSnf0MKWN-hKA-bT&q=85&s=4c4fc257bbdf83a61c1a1feceacaee00" alt="Costing 7 Pn" width="1920" height="912" data-path="Job_Costing/Images/costing-7.png" />

<Note>
  **Note**: Admins can access Job Costing by default. Other office employees must have the “**Manage Labor Line Items** and **View Job Profitability**” permissions to view and manage it. For more information, refer to [Job Costing Permissions](/Job_Costing/Understanding_Job_Costing_details#job-costing-permissions).
</Note>

## View or Hide the Costing Breakdown

To explore detailed job costing information, click **View Costing Breakdown**. This section provides a comprehensive breakdown of how profit is calculated across each component, including **line items**, **labor**, and **expenses**. The breakdown includes:

* **Total Revenue Breakdown** - Displays the total job revenue, split between the **total job cost** and **profit**.
* **COGS Breakdowns** - Details the total cost incurred, segmented into **expenses**, **labor costs**, and the **cost of parts/services**.

To minimize the job profitability bar, click **Hide Costing Breakdown** to collapse the section.

### Line Items: Parts, Products, Services, and Labor

Everything starts with **line items**. These are the parts, services, and labor you add to a job. Each line item has:

* A **unit price** – what you charge the customer
* A **unit cost** – what it costs your business
* A **quantity** – how many units you're billing for
* Price Code (only for labor services) - if the end customer has different pricing based on various considerations such as urgency, time of day, or day of the week.

Zuper calculates the total cost and total price based on these fields, so it’s important to keep them accurate.

<img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/Job_Costing/Images/JCD-2.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=a75210dd3643e87bf38b188191f57772" alt="JCD 2 Pn" width="920" height="717" data-path="Job_Costing/Images/JCD-2.png" />

<Note>
  **Note**: If you want to exclude a line item from profitability calculations, disable the *Consider for Profitability* toggle when editing the line item.
</Note>

### Labor

Labor Cost represents the actual internal expense your business incurs for the time employees spend on a job. It is calculated based on each user's **hourly rate**, the **recorded hours worked**, and the **assigned cost code**.

<img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/Job_Costing/Images/JCD-3.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=3b601011a09969524746fd01ee14d29e" alt="JCD 3 Pn" width="913" height="335" data-path="Job_Costing/Images/JCD-3.png" />

<Note>
  **Note**: Zuper supports job profitability using the Timelogs feature. When enabled, time spent by users on jobs is automatically captured. [Learn more about using Timelogs](/Timesheets_Management/Timelogs/Overview).
</Note>

#### How Labor Cost is Calculated

Labor costs in Zuper are calculated based on three key factors: the **time worked** by the technician, their **Fully Loaded Hourly Rate**, and the assigned **cost code**, such as **Regular**, **Overtime**, or **Double Time**.

Zuper uses the following formula to calculate labor cost:

**Labor Cost** = *Time Worked × Fully Loaded Hourly Rate × Cost Code*

The fully loaded rate is configured per user and includes:

* The employee’s base hourly wage
* Employer-paid contributions such as taxes, insurance, benefits, or overheads (entered as a burden rate)

<Note>
  **Note:** To update the **Cost Code**, go to the **Labor Line Item** page, select the relevant user, and modify the assigned cost code. The updated cost will automatically be reflected in the job cost breakdown.

  <img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/TandM-5.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=e4fe8a1cd3dc038f954c97aadfac994e" alt="Tand M 5 Pn" width="1920" height="912" data-path="Job_Costing/Images/TandM-5.png" />
</Note>

### Expenses

Sometimes jobs come with additional costs, like buying materials on-site, paying tolls, or reimbursable expenses. You can log these directly in Zuper.

<img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/Job_Costing/Images/JCD-4.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=52fa34da05552ee0f2f1ab5e8d57678b" alt="JCD 4 Pn" width="921" height="332" data-path="Job_Costing/Images/JCD-4.png" />

#### To add an expense:

1. Go to the **Expenses** tab inside the job.
2. Click **+ Add** to add a new expense.
3. Choose how you want to add the expense details:
   * **Upload a receipt image** to let **Zuper AI** automatically extract the expense information, or
   * **Manually enter** the expense details.
4. Review the details, including the **expense name**, **amount**, **date**, and other relevant fields.
5. Choose whether the expense is reimbursable or not.
6. Click **Save** to add the expense.

<img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JCD-6.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=72a50d18e7adad5e42e47f4afc75e0dd" alt="JCD 6 Pn" width="1490" height="836" data-path="Job_Costing/Images/JCD-6.png" />

These values are added to your total job cost and reflected in the Job Profitability Bar, helping you track every penny you spend. For more detailed information, refer to **Expenses**.

### Reporting

Zuper provides a **Job Profitability Report** for users who have the “**View Profitability**” permission enabled.

<img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JCD-7.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=60f93c273a4721949edacbd96259b82e" alt="JCD 7 Pn" width="1888" height="845" data-path="Job_Costing/Images/JCD-7.png" />

To view the report:

* Navigate to the **Reports** module from the left navigation menu.
* Select **Job Profitability Report**.
* Generate the report to view key financial metrics for each job, including:
  * **COGS**
  * **Revenue**
  * **Profit**
  * **Profit Margin (%)**

**Things to Know**

* Jobs created before the Job Costing feature was enabled may not have accurate labor line-item or profit details. These jobs will be updated with correct profitability data only when an action is performed on them, such as editing the job, assigning a technician, adding a time log, etc.
* Labor service pricing is not impacted by customer-specific **Pricelists**. Labor charges will remain as configured in the service catalog.
* In the **mobile app**, the **Labor Code** applies only to labor hours, not travel hours.

### **Job Costing Permissions**

Zuper provides default access control for Job Costing features based on user roles. However, if your business requires a different level of visibility, you can customize access using **Custom Roles**.

**Default Role-Based Access**

| **Role** | **Labor Line-Items tab** | **Job Profitability Bar** |
| :- | :- | :- |
| **Admins** | Accessible | Visible |
| **Team Leaders (TLs)** | Accessible | Not visible |
| **Users (FEs)** | Not accessible | Not visible |

 **Customizing Job Costing Permissions**

You can override the default access controls and define visibility for specific roles using custom role settings.

**To update Job Costing permission:**

1. Go to **Settings > Users & Teams > Custom Roles**. <img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JCD-8.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=41a2c77d1c3dd71df448cb0660aca3bf" alt="JCD 8 Pn" width="1920" height="912" data-path="Job_Costing/Images/JCD-8.png" />
2. Select an existing custom role or create a new one.
3. Click the **Jobs** module.
4. Enable or disable the following permissions:
   * **Manage Labor Line Items** – Controls access to the **Labor** tab within a job.
   * **View Job Profitability** – Controls access to the **Job Profitability Bar** and the related profitability dashboard.
5. Click **Save** to apply the changes. <img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JCD-9.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=9b76f2946cb565fd3dd2ed2f7c798d5c" alt="JCD 9 Pn" width="1889" height="831" data-path="Job_Costing/Images/JCD-9.png" /> By setting these permissions, you can ensure that job costing information is only visible to the appropriate team members, maintaining control over sensitive financial data.


## Related topics

- [Job Costing and Profitability](/Zuper_for_Roofing/Job_Costing.md)
- [Configuring Job Costing ](/Job_Costing/Configuring_Job_Costing.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.