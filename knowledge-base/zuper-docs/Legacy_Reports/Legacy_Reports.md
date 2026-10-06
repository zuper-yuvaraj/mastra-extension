---
title: "Reports"
source: https://docs.zuper.co/Legacy_Reports/Legacy_Reports.md
fetched_at: 2026-10-06T13:30:06.079Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Reports

> Generate and download pre-built reports across jobs, invoices, assets, contracts, employees, customers, purchasing, and more.

The Reports module in Zuper offers pre-built exports across every area of your field service operation. Choose a report type, set your date range, apply optional filters, and download your data as an Excel file.

<Tip>
  **Looking for the new Report Builder?** Zuper offers a modern, interactive reporting experience with saved views, flexible filtering, and shared reports. See [Reports Overview](/Reports/Overview) to know more.
</Tip>

## Before You Begin

* You must have Admin or Team Lead access to generate reports.
* The **Legacy Reports** module is accessible from the left navigation Menu under **Reports**.
* Reports are downloaded as Excel (.xlsx) files. For large data sets, Zuper will email you a download link instead of generating the file immediately.
* Ensure your date range is accurate before generating. Broad date ranges on high-volume accounts may trigger the email delivery method.

## Generating and Downloading a Report

All Legacy Reports follow the same generation process. Follow these steps for any report listed here.

1. Select the “**Reports**” module from the left navigation menu. Choose “**Legacy Reports**.”

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR1.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=0b0f74324327ce29937d42c3d0e14728" alt="LR1 Pn" width="1910" height="868" data-path="images/LR1.png" />
</Frame>

2. Click the report you want to generate.

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR2.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=65e17752b51d8d18d28cc160e77ae489" alt="LR2 Pn" width="1915" height="828" data-path="images/LR2.png" />
</Frame>

3. Set your filters:

* **Date Range**: Enter the **From** and **To** dates for the period you want to analyze.
* **Job Category**: Filter by one or more job categories. Multi-select is supported.
* **Team**: Filter by one or more teams. Multi-select is supported.
* **Generate Report By**: Choose how to apply your date range: **Created Date**, **Scheduled Date**, **Due Date**, or **Current Status Updated At**.
* **Advanced Filter** *(optional)*: Click **+ Add Filter** to apply additional criteria such as job status, priority, or assignee.

4. Click **Generate Report**. The report data previews on screen.

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR3.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=24152120edf4bcb4b55549f72036e1e1" alt="LR3 Pn" width="1911" height="859" data-path="images/LR3.png" />
</Frame>

5. Click **Download Report** to save the Excel file.

<Note>
  If your report contains a large volume of data, it will not download immediately. Zuper will send a notification email with a link to download the report.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR4.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=6386b61aa7fa3ecbb2991867895367f7" alt="LR4 Pn" width="1893" height="641" data-path="images/LR4.png" />
</Frame>

## Job Reports

It helps you analyze field team performance and track every stage of the job lifecycle.

<Accordion title="Job Reports">
  * **Job Master Report** Exports the overall status of all jobs across one or more job categories. Includes job title, category, priority, type, scheduled start and end times, assigned employee, current status, customer name, phone, and service address.
  * **Job Status Report** Displays all jobs organized by their current status. Each status appears on a separate sheet in the downloaded Excel file. Use this to track which jobs are new, in progress, on hold, or completed.
  * **Jobs Status Summary Report** Provides a count of jobs in each status, grouped by job category, for the selected date range. Useful for a quick snapshot of workload distribution across your operation.
  * **Job Status History Report** Tracks all previous status changes for every job, including the date, time, and the user who made each update. Each job category is placed on a separate sheet.
  * **Job Deviation Report** Compares actual job start times, end times, and durations against the originally scheduled values. Use this report to identify recurring delays and improve scheduling accuracy.
  * **Job Notes Report** Exports all notes added to jobs, including the note type (text or image), the job it belongs to, who added it, and when it was created.
  * **Job Average Duration / Category Report** Shows the number of jobs and the average time taken to complete them, broken down by job category, for a selected period. Useful for benchmarking and estimating future job durations.
  * **Job Products Report** Lists every product used to complete jobs, including Product ID, product name, price, and quantity consumed.
  * **Jobs Product Details Report** Provides a detailed breakdown of products purchased by each customer across all job categories, including Product ID, name, price, and quantity.
  * **Jobs Customer Cohort Report** Groups jobs that share similar work patterns or customer behavior. Use this to identify segments of recurring or related job activity.
  * **Jobs Feedback Report** Exports customer feedback submitted after job completion. Includes job details, customer details, star ratings, and written feedback comments.
  * **Jobs Checklist Report** Exports checklist data for all jobs across categories, organized by the status of each job at the time the checklist was completed.
  * **Jobs By User Report** Shows the total number of jobs assigned to each employee, with a daily count breakdown for the selected time period.
  * **Job User Utilisation Report** Details employee utilization across recurring jobs, including job title, category, customer details, repeat start and end times, duration, and frequency.
  * **Job Product Consumption Report** Provides a detailed view of all products and parts used within each job, including Product ID, name, quantity, and price.
  * **Jobs Activity Report** Exports a timestamped log of all activities performed by field technicians on each job — including status changes, rescheduling, note additions, and employee assignments.
  * **Jobs By Team Report** Displays complete job details for each team individually. Each team's data appears on a separate sheet within the same Excel file.
  * **Job Status Details Report** Provides an in-depth look at each job's status history, including Job ID, status change dates, and the current status.
  * **Recurring Jobs Report** Exports data on all jobs set to repeat, including job title, category, customer details, repeat start and end times, duration, and recurrence frequency.
  * **Job Timelog Report** Logs time-related data for each job, including clock-in and clock-out times, break times, total time spent, hourly charges, and the total amount billed.
  * **Jobs Route Summary Report** Summarizes the jobs available on each route, including route name, total number of jobs, total distance, and total travel time.
  * **Job Route Details Report** Provides job-level detail organized by route, including sequence, work order number, job title, customer, service address, assigned employee, and travel distance and time.
  * **Route Insights Report** Shows key performance insights for each job route, including total jobs, jobs yet to start, jobs on the way, jobs started, and jobs completed.
  * **Job Task Report** Exports all tasks associated with jobs, including task ID, description, estimated and actual duration, inspection form status, assigned employee, and current task status.
  * **Job Expense Report** Exports expense data logged against jobs, including expense type, amount, job details, and the employee who submitted the expense.
  * **Expense Master Report** Provides a master-level export of all expenses recorded in Zuper across jobs and categories.
  * **Job Profitability Report** Exports profitability data per job, including revenue, costs, and margin. Use this report to assess the financial performance of your jobs by category, team, or date range.
</Accordion>

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR2.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=65e17752b51d8d18d28cc160e77ae489" alt="LR2 Pn" width="1915" height="828" data-path="images/LR2.png" />
</Frame>

## Quotations and Invoices Reports

These reports help you track quoting and invoicing activity, monitor payment status, and analyze revenue.

<Accordion title="Quotations and Invoices Reports">
  * **Quote Master Report** Exports all quotes created within the selected date range. Includes quote date, expiry date, customer name, billing address, work order status, total line items, quote status, discount, converted status, and who created it.
  * **Quote Status Report** Displays quotes organized by their current status (Draft, Approved, Archived, etc.). Each status appears on a separate sheet in the Excel file.
  * **Quote Product Consumption Report** Shows the products and parts associated with each quotation, including product ID, name, quantity, and price.
  * **Quote Status History Report** Tracks all status changes made to quotes, including the date and time of each update and the user who made the change.
  * **Quote Status Summary Report** Displays a daily count of quotations in each status (Open, Approved, Rejected, Archived, Closed, etc.), grouped by quote date within the selected range.
  * **Invoice Master Report** Exports all invoices created within the selected date range. Includes invoice date, due date, customer name, billing address, work order status, total line items, invoice status, subtotal, total, and payment terms.
  * **Invoice Summary Report** Displays a daily count of invoices in each status (Draft, Paid, Open, Bad Debt, Archived), grouped by invoice date within the selected range.
  * **Invoice Status Report** Displays all invoices organized by their current status. Available invoices are distributed across sheets based on their status (Draft, Accepted, Rejected, Expired, etc.).
  * **Invoice Product Consumption Report** Shows the products and parts consumption history linked to each invoice, including product ID, product name, quantity, and price per unit.
  * **Invoice Status History Report** Tracks the full status update history for all invoices, including who changed the status, when it changed, and the status values before and after each update.
  * **Invoice Status Summary Report** Provides a high-level daily count of invoices in each status, grouped by invoice date, for the selected range.
  * **Invoice Product Summary Report** Summarizes product and parts usage across all invoices for a given period.
  * **Invoice Payment History Report** Exports payment history for each invoice, including invoice number, customer name, payment date, payment mode, amount paid, payment reference, and creation details.
  * **Proposal Master Report** Exports all proposals generated through Zuper, including proposal details, associated job, customer information, package options selected, and approval status.
</Accordion>

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR5.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=ddd7c7f12ab3bab5e77cf139223d9743" alt="LR5 Pn" width="1911" height="862" data-path="images/LR5.png" />
</Frame>

## Product Reports

These reports give you visibility into your parts and services inventory, pricing, and stock movement.

<Note>
  **Inventory reporting scope and limitations**

  Zuper's product reports reflect the **current state** of your inventory. The following limitations apply:

  * **Product Availability Report** and **Product Location Report** show real-time stock quantities only. They do not support point-in-time or as-of-date queries.
  * **Product Transaction Report** exports all inward and outward inventory movements with timestamps. However, it does not calculate or reconstruct inventory balances as of a specific historical date.
  * Zuper does not maintain historical inventory snapshots. There is no native report that can return inventory quantity or valuation as of a past date (e.g., year-end, go-live date).

  **Workaround for historical inventory tracking:** Export the Product Transaction Report for the full period and use an external spreadsheet or BI tool to reconstruct point-in-time balances by applying running totals to the transaction history.

  If point-in-time inventory valuation is a reporting requirement for your business, contact your Customer Success Manager to discuss your needs.
</Note>

<Accordion title="Product Reports">
  * **Product Master Report** Exports all products created in Zuper, including product creation date, product name, type, category, brand, specifications, purchase price, selling price, availability, and unit of measure.
  * **Product Transaction Report** Exports all inward and outward inventory transactions, including transaction type (inward, outward, transfer), module, location, quantity, serial number, and the user who recorded the transaction.
  * **Product Location Report** Shows the current quantity of each product at each storage location. Includes Product ID, product number, product name, and quantity per location.
  * **Product Availability Report** Exports real-time product availability data, including Product ID, product number, product name, and total available quantity across all locations.
  * **Product Group Report** Exports product group information, including group name, group description, total items in the group, who created it, and when it was created.
  * **Transfer Order Report** Exports all transfer order records, detailing stock movements between locations including transfer dates, quantities, origin location, and destination location.
</Accordion>

<Frame>
  <img src="https://mintcdn.com/zuperinc/noPgwpKDoZrQKHPY/images/prd_report.png?fit=max&auto=format&n=noPgwpKDoZrQKHPY&q=85&s=ce3c97db69d2d4e2f0bb5eef6d9e3c53" alt="Prd Report Pn" width="1908" height="871" data-path="images/prd_report.png" />
</Frame>

## Contract Reports

These reports help you manage and track service agreements, billing, and contract-linked jobs.

<Accordion title="Contract Reports">
  * **Contract Master Report** Exports all contract master data, including contract ID, contract name, contract months, start and end dates, parent contract, activation date, billing address, customer name, and approval status.
  * **Contract Status Report** Exports status-related information for all contracts, including product ID, product type, contract transactions, subtotal, total, and billing details.
  * **Contract Jobs Report** Exports all jobs linked to contracts, including job category, job type, customer name, customer address, scheduled dates, and current job status.
  * **Contract Product Consumption Report** Shows the products and parts consumed against each contract, including product name, quantity, and associated contract details.
</Accordion>

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR6.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=4d956b22089e7e59e1ef9a86b5bf37fd" alt="LR6 Pn" width="1904" height="831" data-path="images/LR6.png" />
</Frame>

## Asset Reports

These reports help you track equipment and assets managed in Zuper, including service history and planned maintenance schedules.

<Note>
  Asset and PPM reports include contract-related information such as contract name, contract ID, and billing address, where applicable.
</Note>

<Accordion title="Asset Reports">
  * **Asset Master Report** Exports master-level data for all assets, including asset name, asset code, customer name, asset category, quantity, serial number, purchase date, purchase price, placement date, warranty details, asset owner, active status, next service date, last service date, and creation details.
  * **Asset Submission Report** Exports asset submission records associated with inspections or service events, including submission date, asset details, and the employee who submitted the record.
  * **PPM Master Report** Exports Planned Preventive Maintenance (PPM) data for all assets, including asset name, asset code, contract details, last service date, next service date, PPM period, frequency, estimated duration, and the product and user associated with each PPM entry.
</Accordion>

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR7.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=ad7e07d2d239b28661ceafac41f64776" alt="LR7 Pn" width="1889" height="859" data-path="images/LR7.png" />
</Frame>

## User and Team Reports

These reports give you visibility into employee activity, attendance, time tracking, and performance.

<Accordion title="User and Team Reports">
  * **User Master Report** Exports a full list of all employees in Zuper, including first and last name, email, phone number, employee code, active status, role, team, home work location, and account details.
  * **User Skillset Report** Exports each employee's skills, including skill name, skill level, and validity dates. Use this to match the right technician to the right job.
  * **Location History Report** Exports a timestamped record of each employee's location activity, tracking their movement throughout the workday.
  * **Time And Distance Report** Exports time spent and distance traveled by each employee during their shift. Useful for mileage reimbursement and productivity analysis.
  * **Timesheet Master Report** Exports all timesheet activity for the selected period, including punch-in, break, resume work, and punch-out events. Includes employee name, email, designation, activity type, time of activity, and location.
  * **Timesheet Location Report** Exports location data captured at each timesheet event (clock-in, clock-out, break), including GPS coordinates and address.
  * **Timesheet User Shift Report** Exports shift-related information tied to each employee's timesheet, including shift name, scheduled hours, and actual hours worked.
  * **Timecard Report** Provides a daily breakdown of each employee's work activity, including check-in time, check-out time, work time, and break time for each day in the selected range.
  * **Timeoff Report** Exports all leave requests placed by employees, including the requester, request dates, reason, approval status, who approved it, and the approval date.
  * **Timesheet Approval Report** Exports a full log of timesheet approvals and rejections, including who reviewed each timesheet and when.
  * **User Feedback Report** Exports day-to-day feedback submitted by employees about their workday, including feedback content, date, and the employee who submitted it.
  * **Timesheet By Team Report** Exports timesheet activity organized by team, showing day-by-day totals per employee within each team for the selected period.

  <Note>
    **Location History Report date range limit**

    The **Location History Report** can be generated for a maximum of 7 consecutive days per report. To cover a longer period, generate multiple 7-day reports and combine them, or set up a [Scheduled Report](#scheduled-reports) to receive recurring exports automatically.

    If a user's location data is missing or incomplete within that range, see [User & Team Settings](/Settings/Users_Teams/General#users-teams-general-settings) for the organization- and user-level settings, and device permissions required to capture it.
  </Note>
</Accordion>

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR8.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=f9b510049940796f2263616c568df217" alt="LR8 Pn" width="1898" height="877" data-path="images/LR8.png" />
</Frame>

## Contact Reports

These reports help you understand customer activity, payment history, and account credits.

<Accordion title="Contact Reports">
  * **Contact Master Report** Exports a full list of all contacts in Zuper, including first and last name, category, company, number of jobs, email, mobile, home and work phone, description, tags, city, state, zip code, account manager, lifetime value (LTV), and creation date.
  * **Contact Activity Report** Exports a log of all activity associated with each contact, such as job creation, status updates, and notes. Useful for tracking the full history of a customer relationship.
  * **Payment Transaction Report** Exports all payment transactions linked to contacts, including organization, customer name, created user, payment mode, payment provider, module, description, currency, amount, type, source, status, transaction ID, and creation date.
  * **Contact Credit History Report** Exports the credit balance history for each contact, including credit amounts applied, when they were applied, and the associated invoices or jobs.
  * **Email Communication Report** Exports a log of all email communications sent to or from contacts through Zuper, including email subject, recipient, sent date, and the associated job or record.
</Accordion>

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR9.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=6ad2dcba97ee9a5522020f9b95820cf8" alt="LR9 Pn" width="1913" height="857" data-path="images/LR9.png" />
</Frame>

## Request Reports

These report exports all service requests submitted through Zuper, including request ID, title, category, customer details, assigned employee, priority, status, and creation date.

<Frame>
  <img src="https://mintcdn.com/zuperinc/xykriCG8yCRPW26t/images/Req_report.png?fit=max&auto=format&n=xykriCG8yCRPW26t&q=85&s=7b0ca0fd8f1358ef9c2a446decbe997d" alt="Req Report Pn" width="1917" height="868" data-path="images/Req_report.png" />
</Frame>

## Project Reports

<Accordion title="Project Reports">
  * **Project Master Report** Exports all project records, including project name, category, customer, assigned team, start and end dates, project status, and total associated jobs.
  * **Project Timelog Report** Exports time-tracking data for each project, including the employee, clock-in and clock-out times, total time spent, and the project the time was logged against.
  * **Project Task Report** Exports all tasks associated with projects, including task name, description, assignee, due date, status, and the project each task belongs to.
</Accordion>

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR11.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=8c14e66b56a17456840be613cb17a65a" alt="LR11 Pn" width="1916" height="839" data-path="images/LR11.png" />
</Frame>

## Organization Reports

**Organization Master Report** Exports all organization records in Zuper, including organization name, description, address, number of customers, associated teams, created by, and creation and update timestamps.

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR15.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=ae5b1ff53a44088b3e9c506f52656539" alt="LR15 Pn" width="1907" height="847" data-path="images/LR15.png" />
</Frame>

## Property Reports

**Property Master Report** Exports all property records linked to your customers, including property name, address, number of jobs, associated organization, customers linked, created by, and creation and update timestamps.

<Frame>
  <img src="https://mintcdn.com/zuperinc/-emWp4p2JslOnfEr/images/LR13.png?fit=max&auto=format&n=-emWp4p2JslOnfEr&q=85&s=ae1cd79510a4ed361de0dfad1af919c7" alt="LR13 Pn" width="1901" height="830" data-path="images/LR13.png" />
</Frame>

## Purchasing Reports

**Purchasing Reports** give you visibility into vendor management, material requests, and purchase order activity.

<Accordion title="Purchasing Reports">
  * **Vendor Master Report** Exports all vendor records in Zuper, including vendor name, contact details, address, associated products or services, and creation details.
  * **Vendor Catalog Report** Exports the products and services catalog linked to each vendor, including item names, prices, and vendor details.
  * **Material Request Master Report** Exports all material requests raised within Zuper, including request ID, requested items, quantities, requested by, status, and associated job or project.
  * **Material Request Items Report** Provides a line-item-level breakdown of all material requests, including individual item names, quantities requested, quantities fulfilled, and current status.
  * **Purchase Orders Master Report** Exports all purchase orders created in Zuper, including purchase order number, vendor name, items ordered, total value, order status, and creation and expected delivery dates.
  * **Purchase Orders Status Report** Exports purchase orders organized by their current status, helping you track which orders are pending, received, or cancelled.
</Accordion>

<Frame>
  <img src="https://mintcdn.com/zuperinc/_cU0eWYPklGm4E6L/Reports/images/Legreport-04.png?fit=max&auto=format&n=_cU0eWYPklGm4E6L&q=85&s=8abcb5b7c8a59512fdf3dc6997f09ebb" alt="Legreport 04" width="1920" height="869" data-path="Reports/images/Legreport-04.png" />
</Frame>

## Miscellaneous

<Accordion title="Miscellaneous">
  * **Non Job Event Report** Exports data for time or activities logged outside of a specific job. For example, administrative time, travel without an associated job, or downtime entries.
  * **Global Task Report** Exports all tasks created across Zuper, regardless of whether they are linked to a job or project, including task name, assignee, priority, due date, status, and creation date.
  * **Commissions Master Report** Exports commission-related data for your team, including employee name, associated jobs or invoices, commission amounts, and relevant dates.
</Accordion>

<Frame>
  <img src="https://mintcdn.com/zuperinc/_cU0eWYPklGm4E6L/Reports/images/Legreport-03.png?fit=max&auto=format&n=_cU0eWYPklGm4E6L&q=85&s=7fb8db7ae10ac5a5a7e950ec86f56b3f" alt="Legreport 03" width="1920" height="869" data-path="Reports/images/Legreport-03.png" />
</Frame>

## Custom Reports and Scheduled Reports

In addition to the standard reports listed above, Zuper provides two additional reporting tools accessible from the left panel under **Others**.

### Custom Reports

**Custom Reports** let you build your own report by selecting the module, filters, and fields you need. You can filter by multiple job categories and teams simultaneously using the multi-select pickers. You can also choose how the date range is applied - by Created Date, Scheduled Date, Due Date, or Current Status Updated At.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Cn7Gj1kyrBFOvJPh/images/Cust_report.png?fit=max&auto=format&n=Cn7Gj1kyrBFOvJPh&q=85&s=6824e5b3aab1575903384358f0691add" alt="Cust Report Pn" width="1912" height="868" data-path="images/Cust_report.png" />
</Frame>

### Scheduled Reports

Scheduled Reports let you automate report delivery on a recurring basis. Zuper generates and emails the report to the recipients you specify, on the schedule you define.

To set up a Scheduled Report:

1. Click **Scheduled Reports** at the top right of the Reports module.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/_cU0eWYPklGm4E6L/Reports/images/Legreport-05.png?fit=max&auto=format&n=_cU0eWYPklGm4E6L&q=85&s=89bac342af806989a4b096664263eb6e" alt="Legreport 02" width="1916" height="716" data-path="Reports/images/Legreport-05.png" />
   </Frame>
2. Click **+ New Scheduled Report**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/_cU0eWYPklGm4E6L/Reports/images/Legreport-02.png?fit=max&auto=format&n=_cU0eWYPklGm4E6L&q=85&s=16105cb074c28e4a1ac3af9569d3db20" alt="Legreport 05" width="1920" height="869" data-path="Reports/images/Legreport-02.png" />
   </Frame>
3. Fill in the following details:
   * **Schedule Report Name:** Give the report a descriptive name.
   * **Report Type**: Choose **Default Report** or **Custom Report**.
   * **Report Module:** Select the module (e.g., Jobs, Invoices, User, and Team).
   * **Choose Report:** Select the specific report type within that module.
   * **Generate Report By**: Choose whether to apply the date range by Created Date, Scheduled Date, Due Date, or Current Status Updated At.
   * **Job Category**: Select the relevant job category.
   * **Schedule Frequency**: Set how often to generate: Daily, Every Week, Every Month, or Every Year.
   * **Send At**: Set the time of day to send the report.
   * **Report Data Duration**: Define how far back the report data should reach (e.g., 30 Days, 3 Months).
   * **Send To**: Enter one or more recipient email addresses.
   * **Email Subject and Email Body**: Customize the email that delivers the report.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/_cU0eWYPklGm4E6L/Reports/images/Legreport-01.png?fit=max&auto=format&n=_cU0eWYPklGm4E6L&q=85&s=5af39014f4a3f10ffa36f3cdc6ef66e4" alt="Legreport 01" width="1920" height="869" data-path="Reports/images/Legreport-01.png" />
   </Frame>
4. Click **Create Report**. Zuper will generate and deliver this report automatically on your defined schedule.

<Tip>
  Use Scheduled Reports to automatically send weekly or monthly summaries to managers without any manual effort. Set the Report Data Duration to match your review cycle, for example, 7 days for a weekly report.
</Tip>

### Rebuilding a Legacy Report in Report Builder

If you need to update or modify a legacy report, the recommended path is to rebuild it using the new Report Builder — which gives you full control over fields, filters, and scheduling going forward.

<AccordionGroup>
  <Accordion title="Rebuilding a Legacy Report in Report Builder">
    <Warning>
      The Report Builder is a **paid add-on**. If you do not currently have access to it, contact your Zuper account manager or email [support@zuper.co](mailto:support@zuper.co) before proceeding.
    </Warning>

    <Steps>
      <Step title="Review your existing legacy report">
        Open the legacy report from the **Legacy Reports** section in the sidebar and note the following before rebuilding: the data it covers, the fields displayed as columns, any filters or conditions applied, and whether it was delivered on a schedule. If you are unable to view the configuration details, contact Zuper Support at [support@zuper.co](mailto:support@zuper.co) for assistance.
      </Step>

      <Step title="Open the Report Builder">
        Navigate to **Reports** in the left navigation menu and select **Reports (beta)**. You will land on the Report Builder home page.
      </Step>

      <Step title="Create a new report">
        Click **+ New Report** and select either **Summary** or **Detailed** depending on your original report type. Select the module(s) that match the data your legacy report covered — for example, Jobs, Invoices, or Customers.
      </Step>

      <Step title="Recreate fields and filters">
        Add the same fields as columns that appeared in your legacy report. Apply equivalent filters and conditions using the filter panel. Use **Group By** if your legacy report aggregated data by category, team, or date range.
      </Step>

      <Step title="Set up scheduled delivery">
        Click **Schedule** to set up automated delivery. Choose the frequency (daily, weekly, or monthly) and enter the recipient email addresses.
      </Step>

      <Step title="Validate and save">
        Preview the report output and compare it against a recent export from your legacy report to confirm the data matches. Click **Save** when complete.
      </Step>
    </Steps>

    <Note>
      Legacy reports remain accessible in read-only form under the **Legacy Reports** section in the sidebar. They will not be removed, but cannot be edited or scheduled from the webapp. Rebuilding in the Report Builder is the recommended path for any report you need to modify or automate.
    </Note>
  </Accordion>
</AccordionGroup>

## FAQs

1. **Why did I receive an email instead of a file download?** When your report contains a large volume of data, Zuper cannot generate and download the file immediately. Zuper sends a notification email to your registered address with a link to download the report. This is expected behavior and not an error.
2. **Can I filter a report by more than one team or job category at the same time?** Yes. The Job Category and Team fields support multi-select. You can choose multiple categories and teams simultaneously before clicking Generate Report.
3. **Can I automate reports so I don't have to generate them manually each time?** Yes. Use **Scheduled Reports** to configure automatic delivery. You set the frequency, timing, recipient email addresses, and the data window for each report. See the [Custom Reports and Scheduled Reports](#custom-reports-and-scheduled-reports) section above for full setup steps.
4. **What file format do Legacy Reports download as?** All Legacy Reports download as Excel (.xlsx) files. Some reports contain multiple sheets; for example, the Job Status Report places each status on a separate sheet.
5. **How do I narrow down results when a report returns too much data?** Use the **Advanced Filter** option when generating the report. Click **+ Add Filter** to apply additional criteria such as job status, priority, assigned employee, or customer. You can also refine your date range or change the Generate Report By setting.
6. **What is the difference between Legacy Reports and the new Reports module?** Legacy Reports are pre-built, module-specific exports that download as Excel files. The new Reports module offers a modern, interactive experience with flexible filtering, saved report views, folder organization, and shared reports. See [Reports Overview](https://docs.zuper.co/Reports/Overview) to learn more.


## Related topics

- [Scheduling a report](/Reports/Scheduling_report.md)
- [Template Reports](/Reports/Template.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.