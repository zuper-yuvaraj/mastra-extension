---
title: "Configuring Job Costing"
source: https://docs.zuper.co/Job_Costing/Configuring_Job_Costing.md
fetched_at: 2026-10-06T13:30:10.910Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Job Costing 

Before you can start tracking profitability, you need to configure your costing settings. This ensures that Zuper calculates your costs based on your specific business model. 

## Access Job Costing Settings page 

1. Navigate to the **Settings** module from the left navigation menu. 

   <img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JS-1.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=8986cd025fd890893c04c4fd9acb6a73" alt="JS 1 Pn" width="1912" height="954" data-path="Job_Costing/Images/JS-1.png" />
2. Click the **Jobs module** in the Settings menu on the left. 
3. Choose **Job Costing & Expenses**. 

   <img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JS-2.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=a7a1e6cc56c0c6c9e36116ff351f70d2" alt="JS 2 Pn" width="1912" height="954" data-path="Job_Costing/Images/JS-2.png" />

   The **Job Costing** & **Expenses** **setting** page opens. 

### General tab 

This tab helps you define how Zuper should calculate your profit: 

1. **Profit Calculation Method**: Choose the method that aligns with your financial goals and customer agreements. 

* **Margin**: Use this to calculate profit as a percentage of the total selling price ***((Selling Price – Cost) ÷ Selling Price × 100***). This method is ideal for cost-based pricing, ensuring a specific profit percentage relative to the final price.
* **Markup**: Use this to calculate profit as a percentage added to costs ***((Selling Price – Cost) ÷ Cost × 100***). This method is suitable for fixed-profit pricing, where a consistent profit amount is added on top of the cost. 

**Example**: For a job with \$1,500 in costs (labor, materials, expenses) and a 30% markup, the total price is \$1,950, yielding a \$450 profit and a 23.08% margin. 

2. The **Specialized Labor Service** field is disabled by default. When enabled, labor services quantity and their pricing are automatically calculated based on the technician's working hours on the respective job. This is particularly useful for **Time and Material** billing scenarios. For more detailed guidance, refer to the [Labor Service](/Job_Costing/Labor_Service) and the [Calculating Job Profitability: Time and Material Billing](Job_Costing/Time_and_Material) guides.

### Labor tab 

This tab helps you define labor cost markups and pricing rules based on work conditions, roles, and job levels.

### *Labour Codes*

You can define labor codes for different work scenarios (e.g., regular hours, overtime, double time) and their associated cost and pricing rules. Each labor code specifies how technician time is costed internally and billed to customers. Zuper provides three default labor codes: 

<img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JS-4.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=ed35949a30e44da9acf1c16fd97de015" alt="JS 4 Pn" width="1893" height="472" data-path="Job_Costing/Images/JS-4.png" />

| **Labor Code** | **Cost Markup** | **Price Markup** |
| :- | :- | :- |
| Regular | 1x | 1x |
| Overtime | 1.5x | 1.5x |
| Double Time | 2x | 2x |

You can also customize the above-listed codes or add new labor codes in Zuper to reflect your organization’s unique pay and billing policies. 

<Info>
  **Information:**\
  ***Cost Markup -*** This markup applies to a technician’s hourly rate based on the assigned labor/cost code. This decides the internal cost of labor for your business. 

  *<u>For example</u>*, a technician with a fully loaded rate of \$18/hour assigned to a ‘Regular’ (1x) cost code incurs a cost of **\$18** for one hour. The same technician assigned to an ‘Overtime’ (1.5x) cost code incurs a cost of **\$27** for one hour. 

  ***Price Markup*** - This markup applies to the unit selling price of labor services based on the labor/price code. This decides the price charged to customers. 

  *<u>For example</u>*, a labor service priced at \$20/hour with a ‘Regular’ (1x) price code is sold for **\$20** per hour. The same service with an ‘Overtime’ (1.5x) price code (e.g., for an emergency repair) is sold for **\$30** per hour. 
</Info>

<Note>
  **Note**: Zuper separates cost and price markups to maximize your flexibility. This allows your businesses to: 

  * Charge higher prices for specialized services, such as emergency repairs, while paying technicians at a standard rate. 
  * Tailor pricing strategies to market demands or service urgency without affecting technician compensation. 
</Note>

#### *Managing the Labor Codes*

1. Click **+ New Labor Code** or the **Edit** icon next to an existing labor code. 
2. Enter the labor code name and description. 
3. Set the **Cost Markup** and specify whether it is a flat amount, a percentage, or a multiplier. 
4. Set the **Price Markup** and specify whether it is a flat amount, a percentage, or a multiplier. 
5. Click **Update** to save. 

   <img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/Job_Costing/Images/JCD-5.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=5f9f5419df5d37b614752ecfc2e08b06" alt="JCD 5 Pn" width="1781" height="740" data-path="Job_Costing/Images/JCD-5.png" />

### Labor Types

Labor types in Zuper classify technicians based on their role or job level, such as Technician, Installer, or Supervisor, and define which labor services they can perform under the Time & Materials (T\&M) billing method. You can use the ***Filter by Labor Services*** option during job assignment to ensure that only users associated with the relevant labor services are listed for scheduling.

<img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JS-6.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=3c2aab330754db6df6314820cc3b23dc" alt="JS 6 Pn" width="1912" height="954" data-path="Job_Costing/Images/JS-6.png" />

**To configure labor types:** 

Follow these steps to set up labor types in Zuper: 

1. Click "**+** **New Labor Type"**. 
2. Provide a **Name** (e.g., Technician, Supervisor) and a **Description** for the labor type. 
3. Choose the relevant **Job Categories** that align with the labor type’s responsibilities (e.g., Plumbing, HVAC). 
4. Choose one of the following options to associate labor services with the selected job categories: 
   * **Option 1: Associate ALL Labor Services** \
     It links all labor services from the Parts & Service master to the chosen job categories.
   * **Option 2: Pick Specific Labor Services** \
     It allows you to manually select relevant labor services to associate with the chosen job categories. This provides granular control, enabling you to link specific services (e.g., Plumbing services to Plumbing job categories, HVAC services to HVAC job categories). 
5. Click **Create** to save the new labor type configuration. 

   <img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JS-7.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=763a5bb20349810022fbcd912459db22" alt="JS 7 Pn" width="1912" height="954" data-path="Job_Costing/Images/JS-7.png" />

<Note>
  **Note:** To assign this Labor Type to a user so they appear in the job assignment list, go to **Settings > Users & Teams > User Management**. Edit the user’s details and select the desired Labor Type in the **Labor Type** field.
</Note>

## Expenses 

This tab helps you to manage job-related expenses (e.g., transportation, lodging, field-purchased materials) by defining: 

<img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JS-8.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=077c2ede128c5c9d8c98e13574e00c39" alt="JS 8 Pn" width="1912" height="954" data-path="Job_Costing/Images/JS-8.png" />

* **Billable vs. Non-Billable**: Whether the expense is charged to the customer. 
* **Reimbursable Status**: Whether the expense is reimbursed to employees. 
* **Capping Values**: Maximum allowable amounts. 

For more details, refer to [Creating an Expense Category](/Settings/Modules/Jobs/Configuring_expense). 

## **Set Hourly Labor Costs for Users** 

To calculate labor cost accurately, Zuper uses each employee’s **fully loaded hourly rate**. This includes: 

* The **base hourly wage** 
* Any additional employer-paid costs (e.g., travel<u>,</u> taxes, insurance, benefits) 

Using the fully loaded rate offers a realistic view of labor costs, aiding long-term budgeting and profitability analysis. 

For businesses where all technicians are *paid a uniform hourly rate*, you can configure it in the default settings as follows: 

1. Navigate to **Settings > Users & Teams > General Settings > Wage Information**. 
2. Set the following: 
   * **Default Hourly Labor Charges**: The standard hourly rate for technicians. 
   * **Default Burden Rate**: Additional costs (e.g., taxes, benefits) as a flat value or percentage. 
   * Zuper’s **Minimum Roundoff Multiple Number** automatically rounds technician job time log entries to the nearest specified interval. The default is **30 minutes**, but you can adjust it to 10, 15, or 45 minutes.  

     <img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JS-11.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=47962b3829dc5fa48d132d4cc84fc74a" alt="JS 11 Pn" width="1912" height="954" data-path="Job_Costing/Images/JS-11.png" />

**Note**: These functions apply only when the Timelog feature is enabled, not for manually entered technician times. 

## Setting a Fully Loaded Rate for Individual Employees 

To assign a fully loaded rate to a specific employee: 

1. Go to **Settings > Users & Teams > User Management**. 
2. Select the desired user from the list. 
3. Click the **kebab icon (⋮)** and choose **Edit Details**. 

   <img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JS-9.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=c5c8a1c84842757ee486847fa541ab88" alt="JS 9 Pn" width="1912" height="954" data-path="Job_Costing/Images/JS-9.png" />
4. In the **Wage Information** section: 
   * Enter the **Hourly Labor Charge** (base wage).
   * Enter the **Burden Rate** (as a flat value or percentage for additional costs). 

     <img src="https://mintcdn.com/zuperinc/HCcHDA-16lhLfOpx/Job_Costing/Images/JS-10.png?fit=max&auto=format&n=HCcHDA-16lhLfOpx&q=85&s=a2123407d0ab0b1192f419fff0ecfa54" alt="JS 10 Pn" width="1912" height="954" data-path="Job_Costing/Images/JS-10.png" />
5. Save the changes. 

Zuper will use the configured fully loaded rate to calculate labor costs for any job the employee is assigned to. 

 


## Related topics

- [Job Costing Settings](/Zuper_for_Roofing/Job_Costing_Settings.md)
- [Job Costing and Profitability](/Zuper_for_Roofing/Job_Costing.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.