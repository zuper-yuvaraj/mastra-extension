---
title: "Managing commission payouts"
source: https://docs.zuper.co/Managing-commission-payouts.md
fetched_at: 2026-10-06T13:30:43.947Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Managing commission payouts

> Track and manage all commission payouts across jobs and projects from a single page.

The Commissions Listing page is your central hub for tracking and managing all commission payouts across jobs and projects. Instead of handling payments job by job, you can view every commission in one place, record individual payouts, or do bulk-payout updates for multiple commissions at once. This saves time and gives you a real-time picture of what has been paid and what is still outstanding.

## Before You Begin

* This feature requires account configuration. Please contact Zuper Support for details.
* Zuper provides default access control for this feature based on your user roles. However, if your business requires a different level of visibility, you can customize access using Custom Roles.

## Accessing the Commission Listing Page

1. Select the **Accounting** module from the left navigation menu and choose **Commissions**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-oqxo.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=c5d2fa22d4c12f5f47583de7d5b00b4c" alt="Commissionlisting 06" width="1766" height="1346" data-path="Commissions/Images/SCR-20260921-oqxo.png" />
   </Frame>
2. The Commission Listing page opens. You see a full list of commissions across all jobs and projects.

## Recording a Payout for a Single Commission

Use this to record a full or partial payment for one commission at a time.

1. On the Commissions Listing page, find the commission you want to pay. 
2. Click **Payout** in the **Actions** column for that row. 
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-orgk.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=65e545fd013b8721541b5e8e58ed1960" alt="Commissionlisting 05" width="3390" height="1552" data-path="Commissions/Images/SCR-20260921-orgk.png" />
   </Frame>
3. The **Add Payout** dialog opens. 
4. Review or update the **Payment Date**. It defaults to today's date. Change it if the payment was made on a past date. 
5. Enter the **Amount** you are paying. You can enter the full commission amount or a partial amount. 
6. Check the **Balance Due** field - it updates in real time to show the remaining amount after this payout. 
7. Add an optional note in the **Payout Notes** field. 
8. Click **Record Payout**. 
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-orkc.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=5208f71c7dea6ac99cf76521ef98c9f6" alt="Commissionlisting 04" width="3242" height="1602" data-path="Commissions/Images/SCR-20260921-orkc.png" />
   </Frame>
   \
   The payout status updates automatically: 
   * Full payment recorded → status changes to **Paid** 
   * Partial payment recorded → status changes to **Partially Paid**, with the remaining balance tracked 

<Note>
  You can record multiple partial payouts against the same commission. Each payout reduces the balance due until the commission is fully settled.
</Note>

## Updating Multiple Commissions at Once

Use bulk actions to mark several commissions as Paid or Unpaid in a single step, ideal for processing multiple commissions at once or correcting payout statuses.

1. On the Commissions Listing page, select the checkboxes next to the commissions you want to update. 
2. A bulk action bar appears at the bottom of the page showing the number of selected commissions. 
3. To select every commission on the current page, click **Select All** in the bulk action bar. 
4. Choose your action:  
   1. **Mark as Paid** - Records the full commission amount as paid 
   2. **Mark as Unpaid** - Reverses the payout status back to Unpaid 
5. If you click **Mark as Paid or Mark as Unpaid**, a confirmation dialog opens. Review or update the **Payment Date** and add optional **Payout Notes**. 
6. Click the **button** to confirm. All selected commissions update immediately. 
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-oroa.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=2f6b74a1f36d44ffe956d7600bb4b69a" alt="Commissionlisting 03" width="3486" height="2049" data-path="Commissions/Images/SCR-20260921-oroa.png" />
   </Frame>

## Payout Status Labels

Every commission row displays one of four payout statuses:

Every commission row displays one of four payout statuses: 

* **Unpaid** - No payment has been recorded yet 
* **Partially Paid** - A partial payout has been recorded; a balance remains 
* **Paid** - The full commission amount has been paid out 
* **Overpaid -** The amount paid exceeds the current commission value 

<Note>
  Overpaid status cannot be triggered manually through the Payout action. It occurs only when a commission is fully paid, but subsequent changes to the associated job, such as deleted or modified line items. This might reduce the commission amount below what was already paid.

  <Accordion title="Why does this happen, and how to avoid it">
    [Commissions](/Commissions/Commissions) in Zuper are directly derived from a job's key financial parameters: Projected Revenue, Projected Profit, Actual Revenue, and Actual Profit. These values are dynamic and recalibrate automatically as materials, labor, and expenses are updated throughout a job's lifecycle. 

    **For example:** A 10% commission on an actual profit of \$1,000 creates a \$100 commission entry. If you pay out \$100 and a subsequent expense of \$100 reduces the profit to \$900, the commission automatically adjusts to \$90, but the \$100 payout remains, resulting in an Overpaid status.

    **Zuper recommends:** 

    * Create commissions only after a job's financial parameters are finalized. 
    * If commissions are created earlier in the job lifecycle, defer payouts until the financials are stable. 
    * Premature commission creation and early payouts can lead to multiple overpaid entries and directly impact your business's cash flow. 
  </Accordion>
</Note>

## The KPI Banners

At the top of the page, three KPI cards give you an instant financial summary:

* **Total Commissions:** Display the total count and value of all commissions.
* **Total Paid:** Display the count and value of fully paid commissions.
* **Total Unpaid:** Display the count and value of commissions with outstanding balances.

Toggle <Icon icon="toggle-large-on" /> **Hide KPIs** in the top-right corner to collapse the banner and get more room on the listing.

<Tip>
  **Tip**: The KPI cards update dynamically based on any filters applied to the listing. For example, applying a **Commission Date** filter for the past week reflects only that period's totals across all three cards.
</Tip>

<Frame>
  <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-orsp.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=47e237416def0c98d5c74772a82cdec8" alt="Commissionlisting 02" width="3256" height="1490" data-path="Commissions/Images/SCR-20260921-orsp.png" />
</Frame>

## Customizing Your Columns

You can choose which columns appear in the listing so you see only the data relevant to your workflow.

1. Click **Columns** in the top-right corner of the listing page. The Customize Columns panel opens on the right.
2. The **Displayed Columns** list shows what is currently visible. Columns shown by default include Commission Date, User, Job, Project, Commission Amount, Payout \$, and Payout Status.
3. Drag a column from **Available Columns** into **Displayed Columns** to add it.
4. Click the <Icon icon="hyphen" /> button on a column to remove it from Displayed Columns.
5. Reorder columns by dragging them into your preferred position.
6. Close the panel. Your changes apply immediately.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-oryp.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=b9fbf9ab877b42506e3b800093aeb54c" alt="Commissionlisting 01" width="3252" height="1630" data-path="Commissions/Images/SCR-20260921-oryp.png" />
   </Frame>

## Filtering the Commission List

Use filters to narrow down the list to the commissions you need to act on.

1. Click **Filter** at the top-left of the listing page.
2. Select a filter attribute.
3. Set the condition and value for each filter.
4. Click **Add** to apply the filter. The listing updates immediately.

<Tip>
  Combine filters to find exactly what you need. For example, filter by a specific user and a date range to review all outstanding commissions for that person over the past month.
</Tip>

<Frame>
  <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-osed.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=901dfe2284fd9efb4f313e3d85696373" alt="Filtercommission" width="3404" height="1574" data-path="Commissions/Images/SCR-20260921-osed.png" />
</Frame>

## Commission Payout Report

Use this report to reconcile commissions paid during a specific period. Filter by commission date to get an accurate picture of payments processed within your chosen timeframe.

**To access the Commission Payout Report**

1. Click the **Reports** module from the left navigation menu.
2. Navigate to **Miscellaneous Reports >** **Commissions Payout Report**.

<Note>
  This report is accessible to Admin roles only, as it contains financially sensitive information.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/LNErWh0AG_JtxzVb/Commissions/Images/SCR-20260921-oszr.png?fit=max&auto=format&n=LNErWh0AG_JtxzVb&q=85&s=1672ed22b553e861af35707a90cb7f0b" alt="Commission19" width="3382" height="1964" data-path="Commissions/Images/SCR-20260921-oszr.png" />
</Frame>

## Frequently Asked Questions

<AccordionGroup>
  <Accordion title="Can I pay out a commission in installments?">
    Yes. Click **Payout** in the Actions column and enter any amount less than the full commission. The status changes to **Partially Paid** and the remaining balance is tracked. You can record additional payouts until the commission is fully settled.
  </Accordion>

  <Accordion title="What is the difference between the individual Payout action and the bulk Mark as Paid?">
    The individual Payout action lets you enter a specific amount and supports partial payments. Bulk **Mark as Paid** records the full commission amount as paid for all selected commissions at once.
  </Accordion>

  <Accordion title="Can I undo a payout after it has been recorded?">
    Yes. Select the commission and click **Mark as Unpaid** from the bulk action bar to reverse the payout status. For reversing individual partial payout records, contact your administrator.
  </Accordion>

  <Accordion title="Where can I view the history of payouts made against a commission?">
    Hover over the **Payout Status** of any commission row to see its full payout history. The tooltip shows each payout made, along with the date and amount, in the order they were recorded.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/-vsn9PSi58LW13o_/images/tooltippayout.png?fit=max&auto=format&n=-vsn9PSi58LW13o_&q=85&s=aaf4717a2cba559e38793c56c0297725" alt="Tooltippayout" width="1920" height="869" data-path="images/tooltippayout.png" />
    </Frame>
  </Accordion>

  <Accordion title="Why is the Payout option not visible against a commission on the job details page?">
    The Payout option is not available when the commission value is zero. This typically occurs when the financial parameters the commission is based on have not yet been populated for that job.
  </Accordion>

  <Accordion title="Can commissions be based on attributes beyond a job's financials?">
    Yes. Zuper supports flat dollar amount commissions as an alternative to percentage-based ones. If your business has more complex rules driving commissions, you can also leverage Zuper Workflows to automatically create flat dollar commissions based on custom conditions.
  </Accordion>

  <Accordion title="How do I handle an overpaid commission?">
    As a temporary measure, mark the commission as **Unpaid** and hold off on the payout until the job's financial parameters are finalized. For a permanent fix, follow Zuper's recommendation to create commissions only after the associated job finances are frozen, so payout amounts are stable before any payment is recorded.
  </Accordion>

  <Accordion title="Can commissions be created automatically based on business rules?">
    Automatic commission creation is not available as a built-in feature in Zuper. However, you can achieve this by setting up Zuper Workflows to trigger commission creation based on your specific business rules and conditions.
  </Accordion>
</AccordionGroup>


## Related topics

- [Setting up commissions](/Commissions/Commissions.md)
- [Zuper Pay Dashboard](/Zuper-pay/Dasboard.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.