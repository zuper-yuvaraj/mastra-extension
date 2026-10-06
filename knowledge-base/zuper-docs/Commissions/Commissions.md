---
title: "Setting up commissions"
source: https://docs.zuper.co/Commissions/Commissions.md
fetched_at: 2026-10-06T13:30:43.757Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Setting up commissions

Commissions in Zuper allow you to define and track performance-based commission values for employees based on Job performance. This helps you align incentives with business outcomes. You can reward teams for closing higher-value jobs, maintaining healthy margins, and delivering profitable work. It ensures commission values are structured, measurable, and tied to actual performance.

Commissions are configured in **Job Costing & Expenses** and applied directly within the Job workflow. Once added, they are reflected in financial tracking and reporting. For Jobs, commissions are included in job cost calculations.

By managing commissions inside the system, you reduce manual calculations and gain clear visibility into both commission values and their impact on profitability.

### **Prerequisites**

Before tracking Commissions:

* Commission must be enabled for your account. To enable it, contact your account administrator or email [support@zuper.co](mailto:support@zuper.co).
* By default, Admins can view and manage Commissions. However, if your business requires different visibility, you can configure access for specific roles. To do this, navigate to:\
  **Settings > Users & Teams > Custom Roles > Job/Project**, then enable the **Manage Commissions** toggle.
* You must have at least one user/team member assigned to the Job to add a commission. Only assigned users are eligible to receive commission.

## **Set up Commission Rates**

Before you can start assigning or tracking commissions on Jobs, you need to set commission rates for your team members. This is a one-time setup. Once completed, commissions can be automatically calculated based on performance.

**To assign a commission structure to a user:**

1. Navigate to **More** > **Settings** in the left navigation bar.
2. Click the **Jobs** module in Settings and choose **Job Costing & Expenses**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-ovwd.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=ee69399f6b33b9878f56bab3331eefde" alt="Commission 1" width="2794" height="1832" data-path="Commissions/Images/SCR-20260921-ovwd.png" />
   </Frame>
3. Go to the **Commissions** tab.
4. Click **+ Add Commission**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/_M5H7aKxpQP2Mjqk/Commissions/Images/SCR-20260924-mnwx.png?fit=max&auto=format&n=_M5H7aKxpQP2Mjqk&q=85&s=c18b52ff8aadf92acf948a2f822f5942" alt="Commission 3" width="3326" height="1078" data-path="Commissions/Images/SCR-20260924-mnwx.png" />
   </Frame>
5. The **Build Commission Structure** page will open. Here, you can:
6. Provide a clear and descriptive commission **name**.
7. Select the **users** eligible under this structure.
   <Note>
     **Note**: You can define only one commission structure per user. Multiple commission structures for the same user are not allowed.
   </Note>

**Define Commission Options**

8. Click **+ Add Commission** under Commission Options.
9. Choose the financial metric by **selecting** **Commission** **Type**:
   * Planned Revenue
   * Planned Profit
   * Planned Profit Margin
   * Actual Profit
   * Actual Profit Margin
     <Note>
       **Note**: **Actual Revenue** is not available as a selectable Commission Type.\
       By default, Actual Total Revenue is locked to the sum of accepted quote subtotals, based on the revenue configuration defined in Settings. This ensures that profitability and commission calculations are always measured against the customer’s committed contract value, even if job line items are modified during execution.
     </Note>
10. Define the **condition**.
11. Enter the threshold **value**.

**Define Commission value**

12. Enter the commission value in the **Add Rate** field.
13. Select value type:
    * Flat Value
    * % of Actual Revenue
    * % of Actual Profit
    * % of Planned Revenue
    * % of Planned Profit
14. Click **+** to add additional tiers if required. You can configure multiple conditions and multiple payout tiers within the same structure.
15. Click **Save** once completed.

<Frame>
  <img src="https://mintcdn.com/zuperinc/z6lEcH8zRXGDkSIo/Commissions/Images/Commission-4.png?fit=max&auto=format&n=z6lEcH8zRXGDkSIo&q=85&s=a09a61b0759a60045e605abb1a0c93e6" alt="Commission 3" width="1920" height="869" data-path="Commissions/Images/Commission-4.png" />
</Frame>

**Managing a Commission Structure**

Once a commission structure is created, you can modify it anytime.

From the **Commission** list page:

* Click the three-dot menu beside a commission structure.
* Choose **Edit** to update the configuration.
* Choose **Disable** to make it inactive.

Disabling a structure prevents it from being applied to new jobs. A disabled structure can then be deleted if required.

<Frame>
  <img src="https://mintcdn.com/zuperinc/_M5H7aKxpQP2Mjqk/Commissions/Images/SCR-20260924-mnsd.png?fit=max&auto=format&n=_M5H7aKxpQP2Mjqk&q=85&s=35a4cee0ae8b2fed924b6bda62ab08a7" alt="Commission 3" width="3340" height="1146" data-path="Commissions/Images/SCR-20260924-mnsd.png" />
</Frame>

## **Managing Commissions in Job Costing**

In roofing businesses, incentives often play a key role in driving sales performance and job completion efficiency. To ensure complete financial visibility, Zuper allows commissions to be included as part of [job costing](/Zuper_for_Roofing/Job_Costing).

When commissions are added to a Job, they are automatically included in **Actual COGS**. This means profitability calculations reflect not only materials, labor, and expenses, but also commission values.

For example, if a sales representative earns commission on a roofing job, that payout is treated as part of the job’s cost. If costs increase due to commissions or additional labor, the **Actual Profit and Margin** update automatically.

This real-time visibility helps you understand the full financial impact of each job and make informed pricing or margin decisions moving forward.

### Adding a commission to a Job

1. Open the **Job** details page.
2. Navigate to the **Line Item** section.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-opiv.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=1f6788b419b911a1d7f99bd168c22d0c" alt="Commission 3" width="3396" height="1934" data-path="Commissions/Images/SCR-20260921-opiv.png" />
   </Frame>
3. On the Commission tab, click + **Add Commission**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-opoy.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=aa79b632472ba5b31c6c5631f96eeef9" alt="Commission 3" width="3392" height="1692" data-path="Commissions/Images/SCR-20260921-opoy.png" />
   </Frame>
4. Select the **user** to whom you are assigning commission. Now, you can assign a commission to users already assigned to the job, users referenced in custom lookup fields on the job, or any other user in your organisation, including members of non-dispatchable teams.
5. If a commission structure is defined for the user, the system automatically calculates the commission value, and you can choose an appropriate one from the list.
6. If no structure is defined, Zuper allows you to manually define the commission rate for the user within the Job.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-opuo.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=06318f4275b2708c25c06fe032ea4734" alt="Commission 3" width="1786" height="1506" data-path="Commissions/Images/SCR-20260921-opuo.png" />
   </Frame>
7. Click **Save** to apply the changes.

<Frame>
  <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-opxm.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=cf452480972b06fd0bf39c12722ee81f" alt="Commission 3" width="1788" height="1470" data-path="Commissions/Images/SCR-20260921-opxm.png" />
</Frame>

<Note>
  **Note:** When multiple commissions are added to a job, each commission is evaluated independently based on the defined metric. The second commission is not recalculated based on the profitability updated after the first commission is applied. Additionally, commission values are dynamically recalculated when profitability changes.\
  For example, if a commission is defined as 10% of Actual Profit and the Job initially has \$1,000 Actual Profit, the commission value will be \$100. If material or labor changes increase Actual Profit to \$2,000, the commission value automatically updates to \$200. You do not need to update it manually.
</Note>

The commission will now be recorded in **Job Costing**. To view its impact:

Click on **Actual** **COGS/Overhead** to see the breakdown, including commission as part of Actual Cost.

<Frame>
  <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-oqfj.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=85ee39fe7e6b71e7b21614aa91c37bf4" alt="Commissionlisting 12" width="3252" height="1830" data-path="Commissions/Images/SCR-20260921-oqfj.png" />
</Frame>

#### How overhead affects Actual Profit commissions 

If your organisation has overhead configured in **J[ob Costing & Expenses > General Settings](/Zuper_for_Roofing/Job_Costing_Settings#general-settings)**, it changes how commissions based on the **Actual Profit** commission type are calculated. 

When Overhead is applied, Zuper deducts the Overhead amount from Gross Profit before calculating the commission. This ensures commissions are calculated using the profit remaining after indirect business costs are accounted for. 

**Example:** If a job has a Gross Profit of **\$1,000** and Overhead of **\$200**, the Actual Profit type used for commission calculations is **\$800**. If the commission rate is **10%**, the commission amount is **\$80** instead of **\$100**. 

Other commission types, including **Flat Rate**, **Planned Revenue**, **Planned Profit**, and **Actual Revenue**, are not affected by Overhead. 

### Recording a Payout from the Job

You can record a commission payout directly from the job without going to the Commissions Listing page.

Add a Payout

1. Click the **three-dot menu (⋯)** next to the commission you want to pay out.
2. Select **Add Payout**. The Add Payout dialog opens.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-oqkc.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=ff626de3274bb9831b31eab84fa229f2" alt="Commissionlisting 14" width="2498" height="1508" data-path="Commissions/Images/SCR-20260921-oqkc.png" />
   </Frame>
3. Review or update the **Payment Date**. It defaults to today.
4. Enter the **Amount**.
5. Add an optional note in **Payout Notes**.
6. Click **Record Payout**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-oqol.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=2132b0ad9112be1a03511eb46a0ffcdc" alt="Commissionlisting 13" width="1808" height="1542" data-path="Commissions/Images/SCR-20260921-oqol.png" />
   </Frame>
   The Payment Status updates automatically, **Paid** for a full payment, or **Partially Paid** if a balance remains.

<Note>
  **Note:** You can record multiple partial payouts against the same commission until it is fully settled.
</Note>

<Tip>
  **Need to Pay Multiple Commissions at Once?**

  Use the Commissions Listing page in the Accounting module for bulk payouts. See [Managing Commission Payouts](/Managing-commission-payouts).
</Tip>

## **Managing Commissions in a Project**

When a Job is associated with a Project, the commission value defined for that Job is automatically reflected within the Project under:

<Frame>
  **Navigation**: *Project > Financials > Commissions*
</Frame>

This allows you to view consolidated commission values across all Jobs linked to the Project.

<Frame>
  <img src="https://mintcdn.com/zuperinc/_M5H7aKxpQP2Mjqk/Commissions/Images/SCR-20260924-mpkr.png?fit=max&auto=format&n=_M5H7aKxpQP2Mjqk&q=85&s=2a3b8a704e98268b7647cf2ce4629bd9" alt="Commission 3" width="3388" height="1522" data-path="Commissions/Images/SCR-20260924-mpkr.png" />
</Frame>

In addition to Job-level commissions, you can also add a **Flat Value commission** directly within the Project.

### **Adding a Commission in a Project**

1. Click **+ Add Commission**.
2. In the **Add Commission** dialog box:
   1. Select **User** – Choose the team member receiving the commission.
   2. Enter the *flat value*.
3. Click **Add**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/_M5H7aKxpQP2Mjqk/Commissions/Images/SCR-20260924-mptf.png?fit=max&auto=format&n=_M5H7aKxpQP2Mjqk&q=85&s=946062b191aa375be23d733767e7cf22" alt="Commission 3" width="2478" height="1636" data-path="Commissions/Images/SCR-20260924-mptf.png" />
</Frame>

The commission will appear in the Project’s commission list.

 **Managing Existing Project Commissions**

For commissions added directly at the Project level, you can perform the following actions from the menu (⋯):

* Edit the commission rate
* Delete the commission entry if needed

All updates are reflected immediately in the total commission amount shown for the Project.

If a Job is part of the Project, its commission values will automatically roll up and be displayed here. These Job-level commissions are read-only within the Project and must be edited from the respective Job.

<Frame>
  <img src="https://mintcdn.com/zuperinc/_M5H7aKxpQP2Mjqk/images/SCR-20260924-mvea.png?fit=max&auto=format&n=_M5H7aKxpQP2Mjqk&q=85&s=95ba445ce54d67bad1e0dfff81c94cb6" alt="SCR 20260924 Mvea" width="3400" height="1470" data-path="images/SCR-20260924-mvea.png" />
</Frame>

 **Things to Know**

1. When the commission type is based on **Planned Revenue** or **Planned Profit**, only the value from accepted quotes is considered for commission calculation. Quotes in Draft or Sent status are not included.
2. Each commission added to a Job is calculated independently based on the selected metric. If multiple users receive commission on the same Job, their payouts are evaluated separately.
3. Commission structures apply only to **Jobs**.
4. Project-level commissions support **Flat Value only**. Profitability-based or metric-based commission structures are not available in Projects.
5. Only users assigned to the Job or Project are eligible to receive commission.
6. If a Job runs at a loss, commission based on profit will not result in a negative value.\
   For example, if Actual Profit is -\$500 and the commission is defined as 10% of Actual Profit, the commission value will be calculated as \$0. Negative commission values are not applied.

## **Commissions Report**

After assigning users to line items and tracking commissions on jobs, use the Commissions Master Report to view how commissions are recorded across jobs and projects within a selected date range.

This report helps you:

* View commissions by employee or salesperson
* Track commission details at the job and line item level
* Identify commission types (actual, proportional, or flat)
* Review commission amounts and creation details

**To access the Commission Report**

1. Navigate to **More** > **Reporting** > **Reports** in the left navigation bar.
2. Navigate to **Miscellaneous Reports >** **Commissions Master Report**.
3. Set the **From Date** and **To Date**.
4. Choose the **Commission Date** type.
5. Click **Generate Report**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-oszr.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=1672ed22b553e861af35707a90cb7f0b" alt="Commission19" width="3382" height="1964" data-path="Commissions/Images/SCR-20260921-oszr.png" />
   </Frame>


## Related topics

- [Job Costing Settings](/Zuper_for_Roofing/Job_Costing_Settings.md)
- [Setting up a Lead Capture widget](/Zuper_for_Roofing/Setting-up-Lead-Capture-widget.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.