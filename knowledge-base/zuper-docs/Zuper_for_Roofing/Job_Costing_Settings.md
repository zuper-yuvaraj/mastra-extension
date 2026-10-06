---
title: "Job Costing Settings"
source: https://docs.zuper.co/Zuper_for_Roofing/Job_Costing_Settings.md
fetched_at: 2026-10-06T13:30:43.528Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Job Costing Settings

Job Costing settings allow you to customize how costs, revenue, and profitability are calculated to match your roofing workflow.

<Frame>
  Navigation: **More** > **Settings > Jobs > Job Costing & Expenses**
</Frame>

## General Settings

<span id="Quote" />

1. **Profit Calculation Method**: Choose how profit is displayed across the job:
   * **Margin:** Profit is shown as a percentage of the selling price.
   * **Markup**: Profit is shown as a percentage added on top of costs.
2. **Overhead**: Enter a percentage to represent indirect operating costs, such as administrative expenses, office costs, insurance, fleet operating costs, and similar business expenses. Once set, Zuper automatically calculates the overhead amount as a percentage of job revenue and deducts it from Gross Profit when calculating Net Profit. 
   <Note>
     **Note**: This setting applies to all jobs across your organisation. Admins can override the overhead value on individual jobs when required.
   </Note>
3. (Optional) The **Specialized Labor Service** field is disabled by default. When enabled, labor services quantity and their pricing are automatically calculated based on the technician's working hours on the respective job. This is particularly useful for **Time and Material** billing scenarios. For more detailed guidance, refer to the [Labor Service](/Job_Costing/Labor_Service) and the [Calculating Job Profitability: Time and Material Billing](Job_Costing/Time_and_Material) guides.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/_M5H7aKxpQP2Mjqk/Commissions/Images/SCR-20260924-mmqh.png?fit=max&auto=format&n=_M5H7aKxpQP2Mjqk&q=85&s=0501c17ac4fbc0b1d93d6d72f6635980" alt="Commissionlisting 11" width="3404" height="1920" data-path="Commissions/Images/SCR-20260924-mmqh.png" />
   </Frame>

## Labor Settings

Labor settings allow you to define how labor is costed and priced. Zuper provides default **Labor Codes** (Regular, Overtime, and Doubletime) that are pre-configured for common scenarios, but you can customize or add new codes to match your specific business needs. To learn how to configure the Labor Code, refer to [Labor Code](/Job_Costing/Configuring_Job_Costing#labour-codes).

The **Labor Types** section is reserved for future enhancements and can be ignored for now; no configuration is required.

<img src="https://mintcdn.com/zuperinc/_M5H7aKxpQP2Mjqk/Commissions/Images/SCR-20260924-mmyx.png?fit=max&auto=format&n=_M5H7aKxpQP2Mjqk&q=85&s=fb275708fd6d83a6135bb76c2b929f59" alt="Costingroof 2" width="3372" height="1818" data-path="Commissions/Images/SCR-20260924-mmyx.png" />

## Expense Settings

Expense settings help you track additional job costs such as permits, rentals, or travel. You can create expense categories, mark them as billable or non-billable, and apply caps as needed. These expenses are included in the total cost of goods sold and directly impact job profitability. For more detailed guidance, refer to [Configuring Expense Category](/Settings/Modules/Jobs/Configuring_expense#configuring-expense-categories).

<img src="https://mintcdn.com/zuperinc/_M5H7aKxpQP2Mjqk/Commissions/Images/SCR-20260924-mndi.png?fit=max&auto=format&n=_M5H7aKxpQP2Mjqk&q=85&s=dc91c1f8fa0ee737699743552185b01c" alt="Costingroof 1" width="3386" height="1920" data-path="Commissions/Images/SCR-20260924-mndi.png" />

## Commission Settings

<Badge color="green">New</Badge> Commissions settings allow you to define performance pay structures for your team based on Job profitability and other key metrics. Implementing a commission structure provides users with the opportunity to earn supplemental income beyond their base salary. This can significantly enhance motivation and drive in achieving assigned targets.

To learn how to set up your commission rates, see [Tracking commission on Jobs](/Commissions/Commissions).

<img src="https://mintcdn.com/zuperinc/_M5H7aKxpQP2Mjqk/Commissions/Images/SCR-20260924-mngg.png?fit=max&auto=format&n=_M5H7aKxpQP2Mjqk&q=85&s=ceaaf25d8483269079821f2d4a0c98ad" alt="Commission 1" width="3384" height="1924" data-path="Commissions/Images/SCR-20260924-mngg.png" />


## Related topics

- [Configuring Job Costing ](/Job_Costing/Configuring_Job_Costing.md)
- [Job Costing and Profitability](/Zuper_for_Roofing/Job_Costing.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.