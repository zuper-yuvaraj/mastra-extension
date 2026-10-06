---
title: "Calculating Job Profitability for Fixed Price Service Jobs"
source: https://docs.zuper.co/Job_Costing/Fixed_Price.md
fetched_at: 2026-10-06T13:29:40.028Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Calculating Job Profitability for Fixed Price Service Jobs

Fixed Price billing offers customers a predetermined, flat rate for a specific service. The customer pays a fixed amount, regardless of how long the job takes or the effort required to complete it. This model offers predictable costs for customers and helps businesses maintain clear and upfront pricing.

Zuper tracks your actual job costs, including labor hours, parts, and expenses, to give you complete visibility into your true profitability. This allows you to see exactly how much you're earning on each job by comparing the fixed price charged to the customer against your actual costs.

This guide walks you through the process of adding a fixed price service to a job, understanding the cost breakdown, and reviewing profit.

**Prerequisite:**

Ensure you have created a service in the Master Parts and Service module and set the **Unit Selling Price** for the service. Refer to the [Create Parts, Products, & Services](/Inventory_Management/Parts_Services/Create_New_Part_Service) guide.

**Let’s add a fixed price service to a job and calculate profitability!**

1. Go to the respective **Job Details** page.
2. **Add a fixed price service in the Line Items**: These include the price of all products, parts & services added to a Job.
3. On the **Job Detail Page**, locate the **Line Items** section.
   * On the **Parts & Services** tab, click **+ Add** and select the **Line Item**. <img src="https://mintcdn.com/zuperinc/bSnf0MKWN-hKA-bT/Job_Costing/Images/costing-2.png?fit=max&auto=format&n=bSnf0MKWN-hKA-bT&q=85&s=1b54b86198a3aea5213bd02aea6eee61" alt="Costing 2 Pn" width="1920" height="912" data-path="Job_Costing/Images/costing-2.png" />
   * In the **Product Type** field, choose **Service**. <img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/Job_Costing/Images/FD-09.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=4e2a4288747a6880baa8c0a80a7940b2" alt="FD 09 Pn" width="1920" height="912" data-path="Job_Costing/Images/FD-09.png" />
   * Select the relevant service (e.g., Water Heater Installation) from the list. If you want to add more parts, products, and services, add to it. <img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/Job_Costing/Images/FD-08.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=b449bf0de86035b448d788ae9538c48a" alt="FD 08 Pn" width="1920" height="912" data-path="Job_Costing/Images/FD-08.png" />
   * Click **Add Product** to include the service in the job.
     <Note>
       **Note:** You can add multiple parts, products, and services to a Fixed Price job as needed. When you add products or parts as line items, their selling price contributes to the job's Total Revenue, and their purchase cost is added to COGS.
     </Note>
     <img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/Job_Costing/Images/FD-07.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=fb9921781603eb833bb196ef5a80b465" alt="FD 07 Pn" width="938" height="523" data-path="Job_Costing/Images/FD-07.png" />
4. **Labor** tab: Displays the internal labor cost based on the actual time technicians spend on the job. This cost is calculated using each technician’s **fully loaded hourly rate**, the **number of hours worked**, and the **assigned Cost Code** (such as Regular, Overtime, Double Time, or Holiday).
   <Info>
     **Important:** The labor costs shown here are for your internal cost tracking and profitability analysis, not what the customer pays. The customer pays the fixed service price set in Step 2.
   </Info>
   <img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/Job_Costing/Images/FD-06.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=dd28c115c2689ee3dc606cfaf3b0c242" alt="FD 06 Pn" width="943" height="391" data-path="Job_Costing/Images/FD-06.png" />
   * If the [Timelogs](/Timesheets_Management/Timelogs/Overview) feature is enabled, Zuper automatically captures the time spent on the job. If Timelogs is disabled, you must **manually add time entries** by clicking **+ Add** in the Labor tab.
   * You can also update the **Cost Code** for a technician by editing their time entry. When a Cost Code is changed, Zuper creates a new line item instead of modifying the existing one, which helps maintain a clear audit trail of labor cost changes.

<Note>
  **Note:** If your organization is using the **Timelog** feature, you **cannot delete a labor line item directly** if it was created through a time log. To remove such a labor line item, first delete all related time logs for that technician within the job, and then delete the labor line item. This ensures corrections can be made when a technician logs time against the wrong job.

  If **Timelog** is **not enabled**, you can delete labor line items directly from the job.
</Note>

5. **Expenses** tab: Add job-related expenses (e.g., travel costs) if the **Expenses** setting is configured. <img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/Job_Costing/Images/FD-05.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=887541c61d9426fb70c2ebb570ad385b" alt="FD 05 Pn" width="944" height="441" data-path="Job_Costing/Images/FD-05.png" />

## **Review Job Profitability**

Once line items, labor hours, and expenses are added, Zuper calculates job costs and profitability automatically. Check the **Job Profitability Bar** at the top of the **Line Items** section on the **Job Detail** page.

<img src="https://mintcdn.com/zuperinc/bSnf0MKWN-hKA-bT/Job_Costing/Images/costing-1.png?fit=max&auto=format&n=bSnf0MKWN-hKA-bT&q=85&s=92d6b24e3cda1731378101ddb90c715d" alt="Costing 1 Pn" width="949" height="380" data-path="Job_Costing/Images/costing-1.png" />

<Note>
  ***Note***: Visibility of cost breakdowns depends on your **Job Costing Permissions** settings. Refer to the Job Costing Permission article for more info.
</Note>

Here’s a detailed breakdown of profitability for a **Water Heater Installation** job billed using the **Fixed Price** method in Zuper:

<img src="https://mintcdn.com/zuperinc/bSnf0MKWN-hKA-bT/Job_Costing/Images/costing-3.png?fit=max&auto=format&n=bSnf0MKWN-hKA-bT&q=85&s=7a8b5fb43bfc2cbe139929f27e8681b6" alt="Costing 3 Pn" width="923" height="463" data-path="Job_Costing/Images/costing-3.png" />

**Total Price (Revenue): +\$1,200**<br />This is the fixed price agreed upon with the customer before the job began.

**COGS: -\$444**

| **Component** | **Details** | **Cost** |
| :- | :- | :- |
| Parts & Services | Water Heater Installation | - |
| Labor | Technician Shawan Edward worked 6 hours at \$69/hour | -\$414 |
| Misc. Expenses | Travel fuel expense | -\$30 |
| **COGS:** | \$0 (Parts) + \$414 (Labor) + \$30(Misc.) | **\$444** |

**Profit:**

`$1,200`(revenue) − `$444`(total job cost in system) = `$756` **profit**

**Profit markup:** `170.3%`

### **FAQs**

1. **Can I specify a Price Code for a Fixed Price service?**<br />Price Codes are not applicable to Fixed-Price services in Zuper, as the entire job is billed at a flat, predefined amount.
2. **Should I create a separate category for labor services?** Yes, we recommend creating a “**Labor**” category to help distinguish labor-related services from other parts or materials. This improves clarity in reporting, job costing, and service management.<br />To create or manage service categories: Go to: **Settings** > **Modules** > **Parts and Services** > **Category Settings**.
3. **Should I specify the Unit Purchase/Cost Price when creating a fixed-price service?** When creating a **fixed-price service** (e.g., *AC Installation*), do not specify the Unit Purchase/Cost Price. In Zuper, labor costs are calculated separately based on technician hours and are not tied to the service item itself.


## Related topics

- [Calculating Job Profitability for Time and Material Jobs](/Job_Costing/Time_and_Material.md)
- [Job Costing and Profitability](/Zuper_for_Roofing/Job_Costing.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.