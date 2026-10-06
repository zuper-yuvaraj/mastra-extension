---
title: "Job Costing and Profitability"
source: https://docs.zuper.co/Zuper_for_Roofing/Job_Costing.md
fetched_at: 2026-10-06T13:30:43.542Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Job Costing and Profitability

Roofing jobs are dynamic. Labor hours change, materials get added, expenses evolve, and commissions may apply as work progresses. Without clear visibility into these costs, it becomes difficult to understand profitability or catch overruns early.

That’s where **Zuper’s Job Costing** feature comes in, giving you complete visibility into job-level costs as they happen. You can track labor, materials, expenses, and commissions in one place and instantly see how they impact total cost, gross profit, and profit margin. This helps you stay in control of your margins and make informed decisions before small issues turn into losses.

Zuper calculates job profitability based on the revenue source that best aligns with your business operations.

Depending on your business model, revenue can be baselined to the sum of:

* Selling price of job line items
* Customer accepted quotes

This ensures your profitability insights always reflect how you price, sell, and deliver your roofing jobs.

## Pre-requisites

1. Ensure **Job Profitability** is enabled for your account. If not, contact your account administrator or email [**support@zuper.co**](mailto:support@zuper.co) to have it enabled.
2. Configure required settings on the [Job Costing & Expenses](/Zuper_for_Roofing/Job_Costing_Settings) page (see related documentation for details).

## Understanding Job Profitability with Quotes (Projected vs Actual)

For roofing, Zuper provides an enhanced profitability view based on customer-accepted quotes. When the [Sum of Accepted Quote Values Associated to the Job](/Settings/Modules/Jobs/Configuring_General_Job_settings) option is set in Settings, Zuper displays **Projected** and **Actual** profitability values on the Web, while the mobile app displays the corresponding values as **Planned** and **Actual**.

<Tabs>
  <Tab title="Web">
    On your Job Details page, the **Line Items** section includes details about the parts and services, labor, and expenses associated with the job. These values contribute to the job's profitability calculation.

    * **Projected profitability** represents the expected margin based on the revenue and estimated costs defined in the quote.
    * **Actual profitability** shows the financial outcome of the job after execution based on the actual costs recorded, including labor, materials, expenses, and commissions. The revenue used for this calculation is based on the sum of accepted quotes, aligning profitability with the customer-committed price. Any difference from projected profitability reflects cost overruns or savings during execution.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/images/SCR-20260921-onto.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=3e89a8aeab00a631c140d4c006172cbf" alt="SCR 20260921 Onto" width="3406" height="1952" data-path="images/SCR-20260921-onto.png" />
    </Frame>
  </Tab>

  <Tab title="Mobile">
    On the Zuper mobile app, you can review a job's planned and actual financial performance from the **Job Profitability** page.

    To view Job Profitability:

    1. Open the **Zuper mobile app**.
    2. Navigate to **Jobs**.
    3. Select the required job.
    4. Under **Jobs Overview**, select **Job Profitability**.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/JP0.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=3f7d9ee3c8e257d1d86d2dc07e09b19c" alt="JP0" title="JP0" className="mx-auto" style={{ width:"28%" }} width="841" height="1870" data-path="images/JP0.png" />
    </Frame>

    The **Job Profitability** page opens, showing a consolidated view of the job's planned and actual financial performance. You can compare the planned and actual revenue, cost, profit, and margin, and drill down into the cost components that contribute to the actual result.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/JP.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=85e7bdb3bef7b03030006b0ed84dbe55" alt="JP" title="JP" className="mx-auto" style={{ width:"29%" }} width="841" height="1870" data-path="images/JP.png" />
    </Frame>
  </Tab>
</Tabs>

<Tip>
  **Important**: When multiple quotes are linked to a job, accepted quotes are given the highest priority. If no quotes are accepted, sent quotes are considered next, followed by draft quotes. You can manually select or deselect quotes directly from here when needed. <img src="https://mintcdn.com/zuperinc/zjST9zD_9ZvmsZeS/Job_Costing/Images/costingroofs-04.png?fit=max&auto=format&n=zjST9zD_9ZvmsZeS&q=85&s=7a460ef759f700cc5a9da34504e59da2" alt="Costingroofs 04" width="961" height="440" data-path="Job_Costing/Images/costingroofs-04.png" />
</Tip>

### Comparing Job Profitability Values

Comparing projected/planned and actual profitability values helps your business identify patterns and gaps. By reviewing the differences, teams can take corrective actions, such as improving estimating accuracy, negotiating supplier pricing, or adjusting margins for future quotes.

<Tabs>
  <Tab title="Web">
    On the Web, you can review **Projected Profitability** and **Actual Profitability** separately. Each view displays the **Profit Margin, Total Revenue, COGS, and Profit** values, allowing you to compare the expected profitability with the actual financial outcome of the job.

    **Projected Values**

    Projected values represent what you expected to earn when the customer accepted the quote. These values come directly from the quotes associated with the job, and they act as the financial benchmark.

    <img src="https://mintcdn.com/zuperinc/rTr8hop1yHUKj-Dl/images/Commissionlisting-09.png?fit=max&auto=format&n=rTr8hop1yHUKj-Dl&q=85&s=07a70ca6ccb212ac213e31ffc8968fd7" alt="Commissionlisting 09" width="1024" height="467" data-path="images/Commissionlisting-09.png" />

    You can review:

    * **Projected Total Revenue**<br />This is the sum of accepted quote subtotals. Taxes are excluded because Zuper treats taxes as collected on behalf of the government.
    * **Projected COGS**<br />This includes the estimated cost of materials and service captured in the quote.
    * **Projected Profit**<br />This is calculated as projected revenue minus projected COGS. **For example**<br />If the accepted quote value is \$333 and the estimated COGS is \$221, the projected profit is \$112 with a margin of 33.6 percent.

    **Actual Values**

    Actual values represent the real financial outcome of the job based on costs recorded during execution.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/rTr8hop1yHUKj-Dl/images/Commissionlisting-10.png?fit=max&auto=format&n=rTr8hop1yHUKj-Dl&q=85&s=c0c8d74f25baf975a377266dbca35b37" alt="Commissionlisting 10" width="1018" height="519" data-path="images/Commissionlisting-10.png" />
    </Frame>

    * **Actual Total Revenue**<br />Actual Total Revenue represents the revenue baseline used to calculate real-time profit and margin in the Actual view. It is derived from the sum of customer-accepted quote subtotals (excluding taxes), so profitability stays in line with the customer-committed price.

    <Note>
      **Note**: When revenue is sourced from accepted quotes, changes made during job execution affect only Actual COGS. As a result, profit and margin are determined solely by cost increases or savings, and no revenue variance is reflected.
    </Note>

    <Accordion title="Unlocking Actual Total Revenue" icon="unlock" iconType="solid">
      By default, **Actual Total Revenue** is locked to the sum of accepted quote subtotals. This ensures profitability is always measured against the customer’s committed price, even if job line items change during execution. In this locked mode, no revenue variance is shown; any cost overrun reduces profit, and any cost savings increase it, giving a clear view of execution efficiency and cost control.

      <img src="https://mintcdn.com/zuperinc/zjST9zD_9ZvmsZeS/Job_Costing/Images/costingroofs-07.png?fit=max&auto=format&n=zjST9zD_9ZvmsZeS&q=85&s=6f94cc11597b820acf05dde0db8ac656" alt="Costingroofs 07" width="1100" height="366" data-path="Job_Costing/Images/costingroofs-07.png" />

      You can **unlock Actual Total Revenue** from the **Job Details** page. When unlocked, revenue updates in real time based on the current selling prices of all job line items, and variance indicators show differences from the projected (quoted) amount. This is useful for **what-if analysis**, such as simulating how profitability would have changed if extra or removed items were accounted for in the original estimate, or when final billing needs to reflect actual on-site consumption.
    </Accordion>

    * **Actual COGS/Overhead**<br /> This includes the actual costs and overhead associated with the job.

    <Accordion title="What is overhead?">
      Overhead represents the indirect costs of running your business.  Zuper applies the Overhead percentage configured in [**Job Costing Settings**](/Zuper_for_Roofing/Job_Costing_Settings#general-settings) to the job's total revenue and deducts the resulting amount from Gross Profit when calculating Net Profit. 

      <Note>
        **Note:** Admins can override the Overhead value for a specific job by clicking the **Edit** icon next to the Overhead percentage in the **Financial Details** panel. 
      </Note>
    </Accordion>

    * **Actual Profit**<br />Actual Profit is calculated by subtracting Actual COGS from the revenue baseline. **For Example**<br />If actual costs increase, for example, if expenses rise by \$30.00, Total COGS reaches \$15,233.40, which is 32.2% of total revenue. After accounting for overhead (\$4,730.73) and commissions (\$546.86), the net profit is \$26,796.31, and the actual margin settles at 56.6%, down from the projected 71.3%. Zuper highlights this variance with visual indicators so cost overruns are immediately visible.
  </Tab>

  <Tab title="Mobile">
    On mobile, you can review the **Actual Profit** and **Planned** Profitability values together. The **Actual Profit** section displays **Actual Profit, Profit Margin, Planned Profit, and Difference**, allowing you to compare the job's actual financial performance with its planned profitability.

    The **Profit breakdown** section then provides a detailed comparison of the planned and actual **Total Revenue, Total Cost, Net Profit, and Profit Margin**, along with the difference for each value. This helps you understand how the job's actual financial performance differs from the planned profitability.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/JP-1.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=e963570810f3add4ffa508744eae347c" alt="JP 1" title="JP 1" className="mx-auto" style={{ width:"28%" }} width="841" height="1870" data-path="images/JP-1.png" />
    </Frame>
  </Tab>
</Tabs>

### Viewing Financial Details

Financial Details provides a detailed view of the costs and profit that contribute to the job's overall financial performance. It helps you understand how individual cost components affect the job's profitability by showing both their amounts and contribution to the financial outcome.

<Tabs>
  <Tab title="Web">
    In the web app, hover over the **COGS / Overhead** value in the **Actual Profitability** section to open the **Financial Details** panel.

    The panel provides a complete profitability breakdown, including **Material, Labor, and Expenses**, which together make up **Total COGS**. It also displays **Gross Profit, Overhead, Commission, and Net Profit**, helping you understand how each cost and deduction contributes to the job's final profitability.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/JPweb3.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=090212347427c6eec1fc772a0bf088e1" alt="J Pweb3" width="1002" height="438" data-path="images/JPweb3.png" />
    </Frame>
  </Tab>

  <Tab title="Mobile">
    In the **mobile app**, tap **View Breakdown** under the **Revenue breakdown** section to open the **Financial Details** view.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/JP3.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=11382e3871300780f9b6739590d20df1" alt="JP3" title="JP3" className="mx-auto" style={{ width:"30%" }} width="841" height="1870" data-path="images/JP3.png" />
    </Frame>

    The view provides the amount and share of each component and includes:

    * **Materials** – Displays the cost of materials used for the job and their share of the Total Revenue.
    * **Hourly Labor** – Displays the cost of labor calculated based on hourly work and its share of the Total Revenue.
    * **Fixed Labor** – Displays the fixed labor cost associated with the job and its share of the Total Revenue.
    * **Expenses** – Displays the applicable expenses recorded for the job and their share of the Total Revenue.
    * **Total COGS** – Displays the total cost of goods sold, including the applicable material, labor, and expense costs.
    * **Gross Profit** – Displays the profit remaining after deducting Total COGS from Total Revenue.
    * **Overhead** – Displays the overhead cost associated with the job and its share of the Total Revenue.
    * **Commissions** – Displays the commission amount associated with the job and its share of the Total Revenue.
    * **Net Profit** – Displays the final profit remaining after accounting for the applicable COGS, overhead, and commissions.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/JP4.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=f71b220441e6a2807c5949f0b82fa16e" alt="JP4" title="JP4" className="mx-auto" style={{ width:"28%" }} width="841" height="1870" data-path="images/JP4.png" />
    </Frame>
  </Tab>
</Tabs>

### Review Revenue Breakdown

The **Revenue breakdown** shows how the job's total revenue is distributed between **Total Profit** and **COGS**. This helps you understand how much of the revenue remains as profit and how much is used to cover the job's costs.

The breakdown is represented as a **donut chart**, with **Profit Margin** displayed at the center. The chart also shows:

* **Total Profit** – Displays the percentage of Total Revenue represented by profit.
* **COGS** – Displays the percentage of Total Revenue represented by the cost of goods sold.
* **Profit Margin** – Displays the profit margin calculated from the job's revenue and profit.

<Tabs>
  <Tab title="Web">
    In the **Web app**, open the required job and navigate to the **Actual Profitability** section. Select **View Costing Breakdown** to open the breakdown view, where you can review the **Total Revenue Breakdown** and **COGS Breakdown**.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/JPweb2.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=46afee9034748d13799f17b3c59dd31e" alt="J Pweb2" width="1910" height="856" data-path="images/JPweb2.png" />
    </Frame>
  </Tab>

  <Tab title="Mobile">
    Scroll to the **Revenue breakdown** section to view the breakdown. The **Revenue breakdown** displays the same **Total Profit**, **COGS**, and **Profit Margin** values as the Web app.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/Jp2.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=107c1ef15902fedae829d6d88ca9af47" alt="Jp2" title="Jp2" className="mx-auto" style={{ width:"30%" }} width="841" height="1870" data-path="images/Jp2.png" />
    </Frame>
  </Tab>
</Tabs>

### Review Actual Cost

**Actual Cost** represents the costs recorded for the job during execution. It helps you understand **what the job actually cost to deliver** and identify the cost components that contribute to the job's final profitability.

<Tabs>
  <Tab title="Web">
    In the **Web app**, actual cost is represented through the **Financial Details** view. The view breaks down the costs contributing to the job's financial performance, including **Material, Labor, Expenses, Commission, and Overhead**.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/JPweb3-1.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=d725b5aef8bbe57ba749aa24284c5b1c" alt="J Pweb3 1" width="1002" height="438" data-path="images/JPweb3-1.png" />
    </Frame>
  </Tab>

  <Tab title="Mobile">
    In the **mobile app**, actual cost is represented within the **What's inside actual cost** section, which breaks the overall cost into key components that you can select to view in more detail.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/JP5.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=f99a2edfe8c8cba99b511f93cc41631a" alt="JP5" title="JP5" className="mx-auto" style={{ width:"30%" }} width="841" height="1870" data-path="images/JP5.png" />
    </Frame>

    These include:

    * **COGS** – Shows the total cost of goods sold associated with the job.
    * **Total Commissions** – Shows the total commission amount associated with the job.
    * **Total Expenses** – Shows the total expenses recorded for the job.

    Select any category to drill down into its detailed cost information.
  </Tab>
</Tabs>

### Review COGS Breakdown

**Cost of Goods Sold (COGS)** represents the direct costs associated with delivering the job. It helps you understand **how much of the job's revenue is consumed by the costs required to complete the work**, providing visibility into the costs that affect the job's profitability.

The **COGS Breakdown** provides a visual representation of how each cost component contributes to the job's **Total Job Cost,** including **Materials, Labor, Expenses, Commission, and Overhead**. Each category is represented by a different color, and the length of the corresponding bar indicates its share of the total cost.

<Tabs>
  <Tab title="Web">
    In the **Web app**, select **View Costing Breakdown** at the bottom of the **Actual Profitability** section to view the **COGS Breakdown**.

    You can review the contribution of:

    * **Materials** – Shows the share of material costs in the total job cost.
    * **Labor** – Shows the share of labor costs in the total job cost.
    * **Expenses** – Shows the share of applicable expenses.
    * **Commission** – Shows the share of commission costs.
    * **Overhead** – Shows the share of overhead costs.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/JPweb4.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=72b57a5eaaed5c58a6821ea3a6980d51" alt="J Pweb4" width="1910" height="856" data-path="images/JPweb4.png" />
    </Frame>

    A **longer bar** indicates a larger contribution to the **Total Job Cost**, while a shorter bar indicates a smaller contribution.
  </Tab>

  <Tab title="Mobile">
    Scroll to the **COGS breakdown,** which provides the same visual representation of the cost components and their share of the **Total Job Cost**.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/lIiQYFKgygOtivV8/images/JP8.png?fit=max&auto=format&n=lIiQYFKgygOtivV8&q=85&s=29f25315c93ad44546c9d0255bcb404d" alt="JP8" title="JP8" className="mx-auto" style={{ width:"28%" }} width="841" height="1870" data-path="images/JP8.png" />
    </Frame>

    You can review the contribution of:

    * **Materials**
    * **Hourly Labor**
    * **Fixed Labor**
    * **Expenses**
    * **Commissions**
    * **Overhead**

    To view the corresponding amounts for each category, select **COGS** under **What's inside actual cost**.
  </Tab>
</Tabs>

## **Understanding Job Profitability with Job Line Items**

When job profitability is calculated using job line items, revenue comes from the selling prices of parts, products, and services added to the job. These revenue and costs (COGS) are subtracted to show your gross profit and margin.

As reps add materials such as shingles or underlayment, insert expenses, log labor hours, or add commission, Zuper continuously updates the total cost.

<Frame>
  <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-ooqt.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=58589bae0c5521122d05011de1971f0f" alt="SCR 20260921 Ooqt" width="3376" height="1918" data-path="Commissions/Images/SCR-20260921-ooqt.png" />
</Frame>

The profitability card on the job details page displays the current margin (%) and profit (\$), updating in real-time to help you monitor overruns, such as extra materials resulting from hidden damage.

To use this method, ensure that the **Sum of Selling Price of Job Line Items** is selected in **More** > **Settings > Jobs > General Job Settings > General**.

<Tip>
  In this method, revenue is always dynamic (equivalent to the “unlocked” scenario), and profitability continuously follows the current sum of job line item selling prices.
</Tip>

For a detailed breakdown of how profitability is calculated for jobs, refer to [Calculating Job Profitability for Fixed Price Jobs](/Job_Costing/Fixed_Price).


## Related topics

- [Overview of Job](/Work_Order_Management/Jobs/Overview_of_jobs.md)
- [Job Costing Settings](/Zuper_for_Roofing/Job_Costing_Settings.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.