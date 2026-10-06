---
title: "Configuring Expenses"
source: https://docs.zuper.co/Settings/Modules/Jobs/Configuring_expense.md
fetched_at: 2026-10-06T13:30:10.759Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Expenses

In Zuper, users can easily upload and record expense receipts against a job. This feature enables seamless expense reporting, allowing you to specify whether the expenses are billable to your customer and reimbursable for your team.

## Prerequisites:

1. Expense is only available on the V3 Web app. If you use V2, you can get started with V3 using the link below. Your login credentials will be the same as those for V2:  V3 Live (Production) - [https://web.zuperpro.com/login](https://web.zuperpro.com/login).   
2. To enable the Expense for your account, please contact the account admin or email [support@zuper.co](mailto:support@zuper.co).

## User roles and permissions

The actions a user can perform in the Expense feature are determined by their assigned custom roles and permissions. Permissions are set by the admin under **Settings** > **Users & Teams** > **Custom Roles** > **Role's**> **Jobs** and include:

1. Create Expense
2. Edit Expense
3. View Expense

<img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-12.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=ed11aad7f511b1d4fbb648ad1876c67a" alt="Expcategory 12 Pn" width="1876" height="902" data-path="Settings/Modules/Jobs/images/Expcategory-12.png" />

Admins can customize these permissions to meet organizational needs, ensuring appropriate access for each user role.

## Configuring expense categories

Creating expense categories in Zuper streamlines expense management by enabling precise classification, efficient tracking, and accurate reporting. These categories help to enforce your company policies, facilitate seamless reimbursements, and simplify customer billing.

<Frame>
  **Navigation**: *Settings -> Modules -> Jobs -> Expense*
</Frame>

Follow these steps to create a new expense category:

1. Log in to Zuper with an admin account.
2. Select the **Settings** module from the left navigation menu.

   <img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-1.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=f3ad6e8f8561df9f5e42791f0226c6ec" alt="Expcategory 1 Pn" width="1574" height="905" data-path="Settings/Modules/Jobs/images/Expcategory-1.png" />
3. Choose the **Jobs** setting from the **Modules**.

   <img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-2.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=d5a02429122807809c389ece31be5e7e" alt="Expcategory 2 Pn" width="1890" height="885" data-path="Settings/Modules/Jobs/images/Expcategory-2.png" />
4. Select the **Expense** section.

   <img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-3.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=7f73f551351699fba83a92aea2e3d40f" alt="Expcategory 3 Pn" width="1888" height="901" data-path="Settings/Modules/Jobs/images/Expcategory-3.png" />
5. On the **Expense Category** *listing* page, click **+ New Category**.

   <img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-4.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=e0810bf03baab1a48f44121edb08d610" alt="Expcategory 4 Pn" width="1886" height="912" data-path="Settings/Modules/Jobs/images/Expcategory-4.png" />
6. The **Add Category** page opens.

   * Enter the **Name** of the expense category.
   * Provide a short **Description** for the category.
   * Enter the **Default Amount** for the category. This amount will automatically populate when users add an expense item belonging to this category to a job.
   * Specify the **Max Capping** for the category, which defines the maximum claimable amount for an expense under this category.
   * Configure Expense Policies:

     1. Set **Billable** to *Yes* if the expense can be charged to the customer.
     2. Set **Reimbursable** to *Yes* if the expense can be reimbursed to the employee/user.
     3. Set **Receipt Mandatory** to *Yes* if a receipt is required for the expense.

     <img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-5.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=343a252978dcc3d89af84fd910927779" alt="Expcategory 5 Pn" width="963" height="909" data-path="Settings/Modules/Jobs/images/Expcategory-5.png" />
   * Click **Create** to save the new expense category.

   The expense category is now successfully created.

### Editing an expense category

1. On the **Expense Category** listing page, click the **kebab** <Icon icon="ellipsis-vertical" color="#000" />icon next to the specific expense category.
2. Select the **Edit** option.

   <img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-6.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=a64dabc7f52a38dde65ea0297a77b0f2" alt="Expcategory 6 Pn" width="1890" height="726" data-path="Settings/Modules/Jobs/images/Expcategory-6.png" />
3. The **Edit Category** dialog box opens.
4. Make the necessary changes.

   <img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-7.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=78cea53bd33917e5c69d82d10c4fdfb0" alt="Expcategory 7 Pn" width="873" height="902" data-path="Settings/Modules/Jobs/images/Expcategory-7.png" />
5. Click **Update** to save the changes.

### Deactivating an expense category

1. On the **Expense Category** listing page, click the **kebab** <Icon icon="ellipsis-vertical" color="#000" />icon next to the specific expense category.

2. Select the **Disable** option.

   <img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-8.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=2ae16ef766a83d55aa5bbfc9d5b41855" alt="Expcategory 8 Pn" width="1890" height="731" data-path="Settings/Modules/Jobs/images/Expcategory-8.png" />

3. A confirmation dialog box appears.

4. Click **Disable** to deactivate the expense category.

   <img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-9.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=da791a219a9ce8c6adb275e6b2b1ca24" alt="Expcategory 9 Pn" width="1571" height="590" data-path="Settings/Modules/Jobs/images/Expcategory-9.png" />

### Deleting an expense category

1. On the **Expense Category** listing page, click the **kebab** <Icon icon="ellipsis-vertical" color="#000" />icon next to the specific expense category.
2. Select the **Delete** option.

   <img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-10.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=2fa57cf57a71db63ae95444aafcef5b2" alt="Expcategory 10 Pn" width="1896" height="723" data-path="Settings/Modules/Jobs/images/Expcategory-10.png" />

   <Note>
     **Note:** You must deactivate an expense category before deleting it. Active categories cannot be deleted.
   </Note>
3. A confirmation dialog box appears.
4. Click **Delete** to permanently remove the expense category.

   <img src="https://mintcdn.com/zuperinc/0hbDl4NBbErqwot_/Settings/Modules/Jobs/images/Expcategory-11.png?fit=max&auto=format&n=0hbDl4NBbErqwot_&q=85&s=672607ed8097c64add668143e64a2561" alt="Expcategory 11 Pn" width="1574" height="589" data-path="Settings/Modules/Jobs/images/Expcategory-11.png" />

## **Report on expenses**

Zuper provides two expense reports to help you view costs from different perspectives:

### Job Expense Report

Go to **Reports > Job > Job Expense Report**

Use this report when you want to view expenses in the context of a job’s schedule. Expenses are grouped based on the **job schedule date**, making it useful for:

* Reviewing costs for jobs planned on a specific day or week
* Matching expenses with technician schedules
* Operational reporting tied to job timelines

  <img src="https://mintcdn.com/zuperinc/9KeCpiVmVZQWtJsj/Settings/Modules/Jobs/images/Expcategory-13.png?fit=max&auto=format&n=9KeCpiVmVZQWtJsj&q=85&s=d36eb9d029cee6caa98e18b7485d105d" alt="Expcategory 13" width="1432" height="133" data-path="Settings/Modules/Jobs/images/Expcategory-13.png" />

### Expense Master Report

Go to **Reports > Expense Master**

Use this report when you want to track expenses based on when they were actually incurred. This report uses the **expense date**, making it useful for:

* Finance and accounting reconciliation
* Tracking monthly or period-based spending
* Auditing expenses independent of job schedules

  <img src="https://mintcdn.com/zuperinc/9KeCpiVmVZQWtJsj/Settings/Modules/Jobs/images/Expcategory-14.png?fit=max&auto=format&n=9KeCpiVmVZQWtJsj&q=85&s=c2916848dc36bc132dcb394d879a33f6" alt="Expcategory 14" width="1325" height="589" data-path="Settings/Modules/Jobs/images/Expcategory-14.png" />


## Related topics

- [Job Costing Settings](/Zuper_for_Roofing/Job_Costing_Settings.md)
- [Configuring Job Costing ](/Job_Costing/Configuring_Job_Costing.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.