---
title: "Detailed Report"
source: https://docs.zuper.co/Reports/Detailed_report.md
fetched_at: 2026-10-06T13:30:06.342Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Detailed Report

The **Detailed Report** in Zuper provides a granular, tabular view of individual records across modules like **Jobs**, **Customers**, **Invoices** and more. This makes it ideal for auditing or performance tracking requiring detailed data, as each job status, transaction, or activity is presented as a separate entry.  

In this article, you will learn how to create a **Detailed Report** in Zuper, starting from selecting the primary module to customizing your report’s data fields and generating the final report.  

<iframe width="650" height="350" src="https://drive.google.com/file/d/1-Li-TB7e-Ol4mtChd_m0_z1C0ODsR29g/preview" />

1. Click the “**Reports**” module from the left navigation menu and select "**Reports**" (beta). This will direct you to the **Reports**  builder home page, where you can view all previously created reports. 
2. Click the **+ Create New Report** button in the top-right corner of the **Reports** home page. <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/report3.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=026f0926a0e40bb07ac6638f6bc36f9c" alt="Report3 Pn" width="1906" height="898" data-path="Reports/images/report3.png" />
3. A pop-up will appear.
4. Choose **Detailed Report** from the available options. <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/report2.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=26cb1a653ed3baff159d42f1ce33a269" alt="Report2 Pn" width="1231" height="742" data-path="Reports/images/report2.png" />
5. Click **Next** to proceed.
6. After selecting the **Detailed Report**, you will be prompted to choose the **Primary Module** on which you want to focus your report (e.g., Jobs) and click **Next**. <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/report4.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=0accc8d9fd2e52f6f140938e40c2cb87" alt="Report4 Pn" width="1240" height="774" data-path="Reports/images/report4.png" />
   <Note>
     **Note:** The primary module determines the main data source that will be included in the report. 
   </Note>
7. Select the additional modules you need. You can select up to 3 additional modules. Zuper allows you to pull in the fields' data from **Additional Modules** associated with your primary module. This optional step helps you to create comprehensive reports by combining related data from various modules of your account/company.

   <img src="https://mintcdn.com/zuperinc/UzQXhsiJl1KJlGVR/Reports/images/report5.png?fit=max&auto=format&n=UzQXhsiJl1KJlGVR&q=85&s=d3ff3683d3ddca2d377d32deec7a1dc3" alt="Report5 Pn" width="1231" height="743" data-path="Reports/images/report5.png" />

   <Accordion title="Understanding Primary and Associated Modules in Zuper Report Builder">
     You’re about to build a report in Zuper, and you're thinking, *“Where do I start?”*
     The answer lies in choosing the **right modules**, and understanding the difference between a **Primary Module** and **Associated Modules** is the first step toward creating reports that truly work for you. Let’s walk through it together. 
     **Meet the Primary Module: Your Report's Backbone** 
     Here, the **Primary Module** is the foundation of your report. It sets the stage and decides the "main character" for each row of data. If you want to build a report that shows a list of customers, then “**Customer**” should be your Primary Module. If you're more interested in seeing job progress, then “**Jobs**” might be a better fit. 
     Whatever you choose here becomes the center of attention.  
     **Introducing Associated Modules: Supporting Cast with Valuable Details** 
     Now that you've set your stage with a Primary Module, it's time to bring in some supporting roles. **Associated Modules** are additional sources that provide related details without changing the number of rows in your report. They're optional, but incredibly helpful. You can add **up to three** associated modules to pull in extra information, like the number of jobs linked to each customer or the total invoice value associated with a job. 
     **Scene 1: You’re Reporting on Customers** 
     You want to see a list of all your customers and how many jobs each one has. 
     So, you choose: 
     **Primary Module:** Customer 
     **Associated Module:** Jobs 
     Your report might look like this: 

     | **Customer Name** | **Number of Jobs** | |
     | :- | :- | - |
     | Alpha Corp | 2 | |
     | Beta LLC | 1 | |
     | Gamma Inc | - | |
     | Notice something? Even **Gamma Inc., which** hasn't had any jobs yet, is included. Why? Because your report revolves around customers, that’s your Primary Module.  | | |
     | **Scene 2: Now You're Focused on Jobs**  | | |
     | This time, you're interested in tracking job statuses and who they belong to.  | | |
     | So, you switch it up:  | | |
     | **Primary Module:** Jobs  | | |
     | **Associated Module:** Customer  | | |
     | Now your report looks like this:  | | |
     | **Job ID** | **Status** | **Customer Name** |
     | :-- | :-- | :-- |
     | JOB101 | Completed | Alpha Corp |
     | JOB102 | In Progress | Alpha Corp |
     | JOB103 | Completed | Beta LLC |
     | Here, **only jobs** are shown. Gamma Inc isn’t listed anymore because they don’t have any jobs, and the report is all about jobs this time.  | | |
   </Accordion>
8. Click **Go to Builder**. 
9. Once the report creation page opens, you can start defining the fields to be included in the report.  
   * **Fields selection for row and column grouping**: A list of all available fields (including *Defaults*, *Custom*, and \_System \_fields) from the selected modules will be displayed in the **Available Fields** panel. You can choose the relevant fields that should appear in your report, such as **Job Title**, **Invoice Date**, **Technician Name**, etc., according to your preferences. Use the “+” icon or drag and drop to add the fields you want to include in your report. You can include up to **30 columns** in a detailed report.
     <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/detailed-1.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=bd505671c93cc810b2c533e899e0b36a" alt="Detailed 1 Pn" width="1897" height="899" data-path="Reports/images/detailed-1.png" />
     As you add fields, a preview of your report displaying up to 50 records will appear on the left side of the report builder to help you visualize the data.
     <Note>
       **Note:** You can reselect the modules by clicking the **Edit** button. However, updating the modules will reset the report. 

       <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/EditModule.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=91185e55ca5507f3ca2031c2e27f48b8" alt="Edit Module Pn" width="475" height="304" data-path="Reports/images/EditModule.png" />
     </Note>
   * **Customize column:** You can rename column names and customize how each column behaves within the report. To know more, see [Configure Report Settings](/Reports/Detailed_report#configure-report-settings). 
     <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/detailed-2.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=904352f2dad92053b9fbb5b4aa00d6f8" alt="Detailed 2 Pn" width="1900" height="893" data-path="Reports/images/detailed-2.png" />
10. After selecting your fields, click **Filter** tab > **Add** **Filter** to filter the report based on various attributes. For example, if you only want to see jobs completed within the last month or invoices over a specific amount, you can add those filters. Note that you can use up to **10 filters** to refine your data.
    <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/detailed-3.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=2c2211d1d95455a863afe1981fa20993" alt="Detailed 3 Pn" width="1905" height="884" data-path="Reports/images/detailed-3.png" />
11. Set a **Title** to save the newly created detailed report.
    <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/detailed-4.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=4b18aaa3c5fd67aadc790a7c680a7b68" alt="Detailed 4 Pn" width="1902" height="607" data-path="Reports/images/detailed-4.png" />
    <Note>
      **Note:** The maximum allowed length for a report name is **50 characters.** 
    </Note>
12.  Click **Save Changes**. 
    <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Savereport.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=0500c12a878755d34ae422aaa5faaea9" alt="Savereport Pn" width="1916" height="600" data-path="Reports/images/Savereport.png" />
13. Once the report is created, you can view it by clicking “**View Report**,” and you can also share it directly with your teams, customers, and so on through email. **To share**, add people by their name or email address and specify the permissions.  
    <img src="https://mintcdn.com/zuperinc/UzQXhsiJl1KJlGVR/Reports/images/viewreport.png?fit=max&auto=format&n=UzQXhsiJl1KJlGVR&q=85&s=515f6781427dd610521fc96263d59171" alt="Viewreport Pn" width="809" height="517" data-path="Reports/images/viewreport.png" />
    <Note>
      **Note:** When generating a Detailed Report, up to 2,000 records can be processed and displayed in the report builder. If you need to access more data, you can download the report, which supports up to 20,000 records in the exported file. 
    </Note>
14. You can also decide if you want to **schedule** this report. For example, you can set this report to generate automatically every week, month, or any custom interval you need. Scheduled reports will be delivered to your inbox or shared with team members according to your preferences. To learn more, see [Schedule Report](/Reports/Scheduling_report). 

### Configure Report Settings

* **Field Name**: You can change the name for the field (column) that will be displayed in the report (e.g., “Amount”). 
* **Pin**: You can pin a column that allows you to fix it to the left side of the report when scrolling horizontally. 
* **Group Row**: You can group up to **4** rows to organize data based on shared values within that column. When this is enabled, rows with the same value in this column will be grouped together. For example, if you’re generating a report on invoices and want to group them by customer, enabling this for the “Customer Name” column will group all invoices by customer, making the report easier to read. 
* **Aggregate**: This section offers options for summarizing or calculating column values. Based on the column field values, the following fields will be available. \
  **Sum**: Adds up all values in the column. \
  **Minimum**: Displays the smallest value in the column. \
  **Maximum**: Displays the largest value in the column. \
  **Average**: Calculates the average value for the column. \
  **Count**: Displays the number of entries (rows) in the column.
  <iframe width="650" height="350" src="https://drive.google.com/file/d/12aGhfusv9pn3UjkqqhB0-Qw2rCSXbQyH/preview" />

### FAQs 

**1. Can I change the default name of the report and its location to save?**  Yes, you can update the report name and its storage location. To do this, click on the default name and edit it as needed. You can also choose the saving location from the drop-down menu.  

<img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Nameedit.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=d3116eb3eaca777063316791c07e56f8" alt="Nameedit Pn" width="1828" height="318" data-path="Reports/images/Nameedit.png" />

**2. How do I remove fields from the report?**  To remove fields, click the “-” icon next to the field you want to delete. This will remove the selected field from your report.  

<img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/deletefield.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=e1c2a2e0b7339d7b4993e58b2fdfb760" alt="Deletefield Pn" width="1830" height="764" data-path="Reports/images/deletefield.png" />

**3. How can I add fields from my associated modules to my report?** 

To include fields from an associated module, select the respective module from the drop-down menu. This allows you to add fields from your pre-selected associated modules to your report.

<img src="https://mintcdn.com/zuperinc/UzQXhsiJl1KJlGVR/Reports/images/selectmodule.png?fit=max&auto=format&n=UzQXhsiJl1KJlGVR&q=85&s=0d97fff0ceb53061b26409d7ab41aca9" alt="Selectmodule Pn" width="1914" height="534" data-path="Reports/images/selectmodule.png" />

**4. Can I add custom fields to my report?**  Yes, you can add custom fields to your report if they are available in the selected modules. Simply select the custom fields from the **Available Fields** panel. 

<img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Custom.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=901f76639c6c0e17506fcc41faa83b8d" alt="Custom Pn" width="1838" height="847" data-path="Reports/images/Custom.png" />

**5. What is the purpose of each report type, and when should I use them?** 

* **Detailed Report**: Provides in-depth data with multiple columns and filters in tabular form. Use this when you need granular insights, such as transactional records or job logs. 
* **Summary Report**: Offers a high-level view with aggregated data. This report resembles a **pivot table**, with expandable sections that allow users to drill down into specific details. Choose this when you need quick insights, such as total revenue or average job duration. 
* **Report Template**: A pre-built, standard reports provided for quick use. Use this when you want to start with a ready-made report and optionally you can customize it by editing or adding fields. 

**6. What should I do if my report exceeds the 20,000 row limit?**

If your report exceeds 20,000 rows, it cannot be downloaded in a single attempt due to system constraints. To retrieve the complete dataset, apply filters to segment the report into smaller chunks below the row limit.

For example, if you are generating an **Invoice Master Report**, and the total number of rows is **30,000**.

Apply a filter such as *Job Status = Completed* or *Completion Date = Last Month* to reduce the row count below 20,000. Download this filtered report. Then, remove or reverse the filter (e.g., *Job Status ≠ Completed*) and download the remaining records. This ensures that all data is retrieved without exceeding the row limit per download.

7. **Which modules can I report on?**

Report Builder supports the following modules as primary or additional data sources: Organization, Customer, Property, Users, Teams, Products, Assets, Jobs (including Timelogs and Service Tasks), Estimates, Invoices, Service Contracts, and Timesheets.

**Payments, Requests, and Purchase Orders are not available as modules in Report Builder.** If you need payment data — for example, totals grouped by payment mode — use [Zuper Pay Reports](https://docs.zuper.co/Zuper-pay/Zuper-pay-reports) instead. For a full list of supported and unsupported modules, see the [Report Builder Overview](https://docs.zuper.co/Reports/Overview).


## Related topics

- [Summary Report ](/Reports/Summary_report.md)
- [Overview](/Reports/Overview.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.