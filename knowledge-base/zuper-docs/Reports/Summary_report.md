---
title: "Summary Report"
source: https://docs.zuper.co/Reports/Summary_report.md
fetched_at: 2026-10-06T13:30:06.572Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Summary Report 

A **Summary Report** in Zuper, similar to a pivot table, provides a high-level overview of data by grouping information based on specific fields such as status, type, or category. This report type is useful for analyzing trends, identifying anomalies, and gaining insights into data patterns across various dimensions. 

Summary Reports include row groups, column groups, and aggregation to structure and simplify data presentation. The field selection process for row and column groups works similarly to that of a Detailed Report. If you select fields from a primary module, you can further enhance your report by including relevant fields from additional modules. 

A key feature of Summary Reports is aggregation, which allows data to be grouped and summarized into meaningful values. For example, a Summary Report can group jobs by status (e.g., *Open*, *In Progress*, *Completed*) and display the total number of jobs per status using the Count function. 

<iframe width="650" height="350" src="https://drive.google.com/file/d/1s0FwbQAV3E4boTQrYtucXzcbGi-3vlCl/preview" />

In this article, you will learn how to create a Summary Report in Zuper, including selecting modules, organizing data fields, and applying aggregation functions to generate meaningful insights. 

1. Click the “**Reports**” module from the left navigation menu and select "**Reports**" (beta). This will direct you to the **Reports**  builder home page, where you can view all previously created reports. 
   <img src="https://mintcdn.com/zuperinc/UzQXhsiJl1KJlGVR/Reports/images/schRep-1.png?fit=max&auto=format&n=UzQXhsiJl1KJlGVR&q=85&s=1ccce43c9d36e405a4632a2c686fa444" alt="Sch Rep 1 Pn" width="1908" height="872" data-path="Reports/images/schRep-1.png" />
2. Click the **+ Create New Report** button in the top-right corner of the Reports home page.  
   <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/report3.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=026f0926a0e40bb07ac6638f6bc36f9c" alt="Report3 Pn" width="1906" height="898" data-path="Reports/images/report3.png" />
3. A pop-up will appear. Choose **Summary Report** from the available options.  

   <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Summary-1.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=45523aadbb4d90446656491e9f2d5aa1" alt="Summary 1 Pn" width="1887" height="898" data-path="Reports/images/Summary-1.png" />
4. Click **Next** to proceed.  
5. After selecting the **Summary Report**, you will be prompted to choose the **Primary Module** on which you want to focus your report (e.g., Jobs) and click **Next**.  
   <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Summary-2.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=a9fb7fdbb4105309e5eda4c113722cad" alt="Summary 2 Pn" width="1275" height="762" data-path="Reports/images/Summary-2.png" />

<Note>
  **Note:** The primary module determines the main data source that will be included in the report.  
</Note>

7. Select the additional modules you need. You can select up to 3 additional modules.  Zuper allows you to pull in data from **Additional Modules** associated with your primary module. This step helps you to create comprehensive reports by combining related field information from key modules.  

   <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Summary-3.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=0d2ea314534b41a88337acb2075594cd" alt="Summary 3 Pn" width="1233" height="690" data-path="Reports/images/Summary-3.png" />
8. Click **Go to Builder**.  
9. Once the report creation page opens, you can start defining the fields to be included in the report.
10. Select fields for the row and column to group. Summary reports have three components:

    <Tabs>
      <Tab title="Rows">
        **Row**: Define how data is categorized or grouped (e.g., **Job Status, Customer Name, Service Type**). For example, if grouped by **Job Status**, the report will list categories like **Open, In Progress, and Completed** as separate rows. You can group up to 4 rows.

        <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Summary-4.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=d545ac6cfec5a06c2bac5ee1cd778315" alt="Summary 4 Pn" width="1912" height="884" data-path="Reports/images/Summary-4.png" />
      </Tab>

      <Tab title="Columns">
        **Columns**: Segment the grouped data into additional columns (e.g., Assigned Technician, Region, Service Type).

        For example, if a job is grouped by **Status**, column groups could show **each technician’s name** under that status. A maximum of 2 columns can be added.

        <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Summary-5.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=0c954693da10bc67f589815a13f8902f" alt="Summary 5 Pn" width="1908" height="886" data-path="Reports/images/Summary-5.png" />
      </Tab>

      <Tab title="Values">
        **Value**: Refers to the field that you try to aggregate. A maximum of **2 value fields** can be added.

        <img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Summary-6.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=7615ce64131f29ab85b2640166b85433" alt="Summary 6 Pn" width="1907" height="898" data-path="Reports/images/Summary-6.png" />
      </Tab>
    </Tabs>

<Note>
  **Note:** You can reselect the modules by clicking the **Edit** button. However, updating the modules will reset the report.  
</Note>

11. You can rename column names and customize how each column behaves within the report. To know more, see [Configure Report Settings](/Reports/Detailed_report#configure-report-settings).
12. After selecting your fields, click the **Filter** tab > **Add** **Filter** to filter the report based on various attributes. For example, if you only want to see jobs completed within the last month or invoices over a specific amount, you can add those filters here. Note that you can apply up to **10 filters** to a summary report. 

<img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Summary-7.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=10073220d613ff5d2467ea4bdc6012e4" alt="Summary 7 Pn" width="1912" height="886" data-path="Reports/images/Summary-7.png" />

13.  Set a Title to save the newly created summary report. \*\*Note: \*\* The maximum allowed length for a report name is **50 characters.** 

<img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Summary-8.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=b97237846890957d35b8e07c787ec337" alt="Summary 8 Pn" width="1904" height="878" data-path="Reports/images/Summary-8.png" />

14. Click **Save Changes**.  

<img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Summary-9.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=8085a673d11b2855764063485b1bdef3" alt="Summary 9 Pn" width="1902" height="549" data-path="Reports/images/Summary-9.png" />

15. Once the report is created, you can view it by clicking “**View Report**,” and you can also share it directly with your teams, customers, and so on through email. **To share**, add people by their name or email address and specify the permissions.   

<img src="https://mintcdn.com/zuperinc/O8u9QXRVkOLZf6Z6/Reports/images/Summary-10.png?fit=max&auto=format&n=O8u9QXRVkOLZf6Z6&q=85&s=888d631deee455d38b7d4ce4ae6c78e1" alt="Summary 10 Pn" width="1869" height="828" data-path="Reports/images/Summary-10.png" />

16. You can also decide if you want to **schedule** the report. For example, you can set the report to generate automatically every week, month, or any custom interval you need. Scheduled reports will be delivered to your inbox or shared with team members according to your preferences. To learn more, see [Schedule Report](/Reports/Scheduling_report).  

 


## Related topics

- [Reports](/Legacy_Reports/Legacy_Reports.md)
- [Zuper Pay Reports](/Zuper-pay/Zuper-pay-reports.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.