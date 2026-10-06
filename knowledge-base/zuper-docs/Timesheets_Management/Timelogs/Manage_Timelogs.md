---
title: "Manage timelog summary"
source: https://docs.zuper.co/Timesheets_Management/Timelogs/Manage_Timelogs.md
fetched_at: 2026-10-06T13:29:55.548Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Manage timelog summary  

With Zuper’s Timelog Summary on the web, you get a centralized view of all time entries across users, jobs, and dates, in one place.

Tired of jumping from one job to another just to check the assigned technician’s timelogs? We’ve got you covered! With the Timelog Summary feature in the Zuper web app, you get a single, centralized view of timelog entries across days, jobs, and all the users, in one place. These entries are typically logged by technicians on the go- learn [<u>how they do it using the mobile app</u>](https://docs.zuper.co/Timesheets_Management/Timelogs/Log_time).

Whether you're tracking daily, weekly, or monthly performance, this feature offers a clear breakdown of time logged by the user (field technician) for each job or project, categorized into travel, labour, and breaks.  

This guide provides step-by-step instructions on how to access and use the timelog summary feature in the Zuper web app. You’ll learn how to view detailed entries, understand the breakdown of logged time, and add or edit records to ensure accurate tracking of user work hours. 

<Frame>
  **Navigation:** *Time->* *Timelog Summary*
</Frame>

# Setting up permissions

Before accessing the timelog summary feature, it’s important to configure role-based permissions to ensure that only authorized users, such as Admins, Team Leads, or Field Technicians, can view and manage time entries using the **Timelog Summary** feature in the Zuper web app. You can control access through **custom roles and permissions**. 

Follow these steps to assign the required permissions to user roles such as **Admin**, **Team Lead**, or **Field Technician**: 

* Go to the **Settings** module from the left navigation menu. 

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time1.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=67302b689ae15a78c73099a8f360a3cb" alt="Time1 Pn" width="1918" height="840" data-path="images/time1.png" />

* Click **Users & Teams**. The Users & Teams settings page will open. 

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time2.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=d927d2cdc46db24f120135602b5b241c" alt="Time2 Pn" width="1909" height="828" data-path="images/time2.png" />

* Select the **Custom Roles** tab to view the list of existing roles (e.g., Admin, Team Lead, Field Technician). 

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time3.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=3fc208ac7ec4fbd9e837d6a828a40b2e" alt="Time3 Pn" width="1914" height="826" data-path="images/time3.png" />

* Click the **kebab menu** (<Icon icon="ellipsis-vertical" color="#010101" />) under the **Action** column next to the role you want to modify, and select **Edit Role**. 

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time4.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=4fd823ee5c0e3bc4e66c66913a80c222" alt="Time4 Pn" width="1914" height="823" data-path="images/time4.png" />

* On the **Edit Role** screen, click the **Jobs** module section under the **Permissions** tab and enable **“Update Job Timelog.”** 

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time5.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=b6d332eb6d7cbf2415dd51906c72a82e" alt="Time5 Pn" width="1919" height="830" data-path="images/time5.png" />

Enabling this permission allows the user to view, add, and edit time entries within the Timelog Summary and Detailed Timelog views. 

<Accordion title="Best Practices">
  1. Admins should have full access to job and timelog data for reporting and payroll. 
  2. Team Leads may require edit access to manage their team’s time entries. 
  3. Field Technicians typically require view only access, depending on workflow needs. 
</Accordion>

# **Accessing timelog summary** 

To view the consolidated summary of timelog entries across users, follow these steps: 

1. Click the “**Time**” module from the left navigation menu and select the “**Timelog Summary**” option. 

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time6.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=16bf0a132899d5b5a847e6f9b3368d65" alt="Time6 Pn" width="1910" height="828" data-path="images/time6.png" />

2. You will see a **table view** that presents a consolidated summary of users' timelog entries based on the selected date range. The table includes the following columns:

   <img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time7.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=7be2fd9dd3bf768cfe915c48c7b51237" alt="Time7 Pn" width="1915" height="880" data-path="images/time7.png" />

   * **Name**: Displays the name of the users across the teams.
   * **Total Duration**: Shows the total number of hours logged by the user for the selected date(s). Hovering over the total hours displays a breakdown that includes:   

     1. **Travel hours** (Orange): The time taken to travel between locations (e.g., from one job site to another or from the office to the customer site).
     2. **Labour hours** (Blue): The actual time spent performing job-related tasks.
     3. **Break hours** (Purple): Any non-working time, such as lunch or short rest breaks, during the day. 

     Each category is color-coded by default for easy identification.
   * **Date(s)**: Lists the date(s) within the selected range. You can choose from predefined ranges such as:
     1. This Week
     2. Last 7 Days
     3. Last 30 Days
     4. This Month
     5. Last Month
     6. Custom Range (**up to a maximum of one month**)

<Note>
  **Note**: Use the date picker at the top left of the page to select or adjust the date range. 

  <img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time8.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=9ef9b181323963e01f7b0e0a9b76d4db" alt="Time8 Pn" width="1920" height="878" data-path="images/time8.png" />
</Note>

### **Filtering options** 

To narrow down the data displayed in the timelog summary table, you can use the available filter options: 

1. **Teams**: Select a team from the drop-down menu to view timelog entries only for users who belong to that specific team. This is useful for team-based time tracking, performance analysis, and reporting. 
2. **Search Bar**: Use the search bar to quickly find a specific user by **name** or **email**. This is helpful when viewing entries for large teams or across multiple departments. 

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time9.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=82ae5de09bb508afb9711b8f3b5add63" alt="Time9 Pn" width="1913" height="820" data-path="images/time9.png" />

# **Manage user timelog entries** 

The timelog summary page gives you a high-level overview, but when you need a deeper look into how a user spends their time across specific jobs and projects on specific dates, the **detailed timelog page** is your go-to. 

This page helps admins and team leads review users’ day-to-day activities, track productivity, and ensure accurate records for payroll, reporting, or compliance. From here, you can explore each time entry, make edits, or add missed entries as needed. 

To view and manage an individual user’s timelog entries, follow these steps: 

1. On the timelog summary page, click the **username** whose timelog details you want to view. 
2. The user’s detailed timelog entry page will open, displaying the following information: 

   <img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time10.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=8aa256ba6a523eccfce2bf09b90e7ae5" alt="Time10 Pn" width="1920" height="878" data-path="images/time10.png" />

   * **Date range**: The selected period for which timelog entries are shown (e.g., "2 March - 8 March 2025"). You can modify this range using the date picker as needed.
   * **Total Logged time**: A consolidated overview of the total time logged by the user for the selected date range, categorized into travel, labour, and break hours (e.g., 60 hours 40 mins total, 6 hours 40 mins on Travel, 12 hours 40 mins on Labour, 12 hours 40 mins on Break).
   * **Detailed time log breakdown**: This displays individual time entries grouped by **Date**, **Job**, or **Project**. Each entry includes essential details such as the activity type (Travel, Labour, or Break), associated job/project, start time, end time, and total duration.  

<Note>
  **Note**: You can use the drop-down menu at the top left of the page to switch between users and view their detailed timelog entries.  

  <img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time11.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=1b695e371564de31021cec912f992adb" alt="Time11 Pn" width="1900" height="605" data-path="images/time11.png" />
</Note>

## **Understanding the detailed time log breakdown** 

The detailed time log entries are displayed in a clear, tabular format to help you easily review and analyze the technician’s work hours. Depending on your business needs, you can choose to group and view the entries by **Date**, **Job**, or **Project**.  

<Tabs>
  <Tab title="By Date">
    When you group using the "**By Date**" view, the table is structured to provide a day-wise breakdown of the user’s logged hours for each job, including the type of entry. The layout includes the following details: 

    <img src="https://mintcdn.com/zuperinc/A5eElFuTAkZCdwLe/images/Time12.png?fit=max&auto=format&n=A5eElFuTAkZCdwLe&q=85&s=1e0227c9e2b616a346f03af2cc81eb2e" alt="Time12 Pn" width="1920" height="878" data-path="images/Time12.png" />

    1. **Date** – Displays the specific day for which the timelog entries are recorded. 
    2. **Job and Project Name** – Shows the job worked on that day, along with the associated project (if applicable). 
    3. **Timelog Type and Duration** – Lists each entry under the job, categorized as **Travel**, **Labour**, or **Break**, along with: 
       * **Start Time** 
       * **End Time** 
       * **Duration** 

    This layout allows you to quickly assess how time was allocated for each job on a given day, ensuring full visibility into the user’s productivity.  

    <Note>
      **Note**: On the right-hand side, you can also view the total hours logged for that date.
    </Note>
  </Tab>

  <Tab title="By Jobs">
    When you group using the "**By Jobs**" view, the table is structured to help you track how time is allocated across different jobs. This view provides a clear breakdown of time spent on each job, making it easier to assess user effort and job-specific productivity. The layout includes the following details: 

    <img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time13.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=199fa23c63a75951cc6e843d30e465b3" alt="Time13 Pn" width="1920" height="878" data-path="images/time13.png" />

    1. **Job Name** – Displays the job name being worked on by the user, along with the associated project (if applicable). 
    2. **Date** – Shows the specific dates on which the user logged time for the selected job.
    3. **Timelog Type and Duration** – Breaks down each time entry under the job, categorized as **Travel**, **Labour**, or **Break**, including: 
       * **Start Time** 
       * **End Time** 
       * **Duration** 

    This view helps you analyze how users have utilized their time on a per-job basis, making it easier to evaluate individual effort, productivity, and performance for each job. 

    <Note>
      **Note**: On the right-hand side, you can also view the total hours logged for the job, along with a day-wise breakdown of the logged hours for each date the job was performed
    </Note>
  </Tab>

  <Tab title="By Projects">
    When you group using the "**By Projects**" view, the table is structured to help you monitor how the user’s time is distributed across various projects. This layout provides a project-centric overview of all related job activities and time entries. 

    <img src="https://mintcdn.com/zuperinc/A5eElFuTAkZCdwLe/images/Time14.png?fit=max&auto=format&n=A5eElFuTAkZCdwLe&q=85&s=4213465514dfe29cff8f313818dfae4c" alt="Time14 Pn" width="1920" height="878" data-path="images/Time14.png" />

    1. **Project Name** – Displays the name of the project being worked on by the user.  
    2. **Date** – Indicates the specific dates on which the user logged time for jobs under the selected project. 
    3. **Job, Timelog Type, and Duration** – Lists each job under the project with a breakdown of time entries categorized as **Travel**, **Labour**, or **Break**, including: 
       * **Start Time** 
       * **End Time** 
       * **Duration** 

    This view helps you understand how technicians are allocating their time across different projects, making it easier to track project progress and manage resource utilization efficiently.  

    <Note>
      Note: On the right-hand side, you can also view the **total hours logged for the project**, along with a **day-wise breakdown of logged hours** for each date the jobs within the project were performed. 
    </Note>
  </Tab>
</Tabs>

To narrow down the view, you can filter timelog entries by the technician’s associated **Jobs**, **Projects**, and **Timelog Type** (Travel, Labour, Break). This helps you quickly locate specific records and analyze how technicians spend their time. 

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time15.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=52519e2506afab189a9745f737527aed" alt="Time15 Pn" width="1911" height="704" data-path="images/time15.png" />

## **More actions on the detailed timelog page** 

The detailed timelog page is not just for viewing time entries, it also allows you to perform key actions to ensure accurate time tracking for the user. From this page, you can add new entries, insert missed entries, edit, and delete entries directly, helping you maintain complete and precise records. 

**Add new entry**: 

To add a new time entry manually: 

* Click the **"+ Add Entry"** button at the top-right corner of the page.

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time16.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=d7b6c53179b696723db2a80be7a09d1c" alt="Time16 Pn" width="1912" height="615" data-path="images/time16.png" />

* In the dialog box that appears: 
  1. Choose the relevant **job** or **project** with which to associate the entry.
  2. Choose the appropriate **clock-in** and **clock-out** date and time.
  3. Select the **timelog type**: *Travel*, *Labour*, or *Break*.
  4. Click **"Create"** to save the entry. 

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time17.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=c3434814dd06041a26336e711071a5ed" alt="Time17 Pn" width="1918" height="795" data-path="images/time17.png" />

**Add missed entries**:

If a user missed clocking in or out, you can add the missing entry directly below an existing one: 

* Click the **"+ Add Entry"** link found below the relevant timelog entry (e.g., under the job "#1025 - Cleaning" for the date 22/05/2025).

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time18.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=de4940c4bb22da35e0778427ad11b60d" alt="Time18 Pn" width="1914" height="604" data-path="images/time18.png" />

* An **Add Entry** dialog box will appear with some pre-filled data: 
  1. **Date**: Auto-filled with the date of the selected entry (e.g., *Tuesday, May 22*).
  2. **Associated Job/Project**: Pre-filled with the job or project associated with the original entry (e.g., *#1025 - Cleaning* under *ISP Installation for Polaris Co.*).
  3. Select the **Timelog Type** (*Travel*, *Labour*, or *Break*).
  4. Enter the **clock-in** and **clock-out time** for the new entry (e.g., *4:00 PM to 5:00 PM*).
  5. Click **"Create"** to add the new entry below the existing one. 

**Edit entry**: 

If you need to update details like date and time for an existing entry, follow these steps: 

* On the detailed timelog page, click the **kebab icon** (<Icon icon="ellipsis-vertical" color="#0b0a0a" />) next to the entry you want to modify.
* Select **"Edit Entries"** from the dropdown menu.

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time19.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=53dfaf14396e48c203c01de3477a75c1" alt="Time19 Pn" width="1914" height="782" data-path="images/time19.png" />

* In the Edit Entry dialog box, you can change the clock-in and clock-out date and time, but the timelog type cannot be modified.
* Click **"Update"** to apply the changes. 

<Note>
  **Note**: The ability to edit, delete, or add entries depends on the permissions assigned to your user role. 
</Note>

**Delete entry:** 

To permanently remove an incorrect or duplicate time entry: 

* On the detailed timelog page, click the **kebab icon** (<Icon icon="ellipsis-vertical" color="#030303" />) next to the entry you want to delete.
* Select **"Delete"** from the dropdown options. A confirmation pop-up will appear.

<img src="https://mintcdn.com/zuperinc/MZ52TIC7PBru9w8k/images/time20.png?fit=max&auto=format&n=MZ52TIC7PBru9w8k&q=85&s=5d01ef2c03e94566cb34e42feed04e1f" alt="Time20 Pn" width="1914" height="782" data-path="images/time20.png" />

* Click “**Delete**”. The entry will be permanently removed from the record. 

**Related Articles**:

1. Want to learn how technicians create these time entries using the mobile app? Check out our guide: **\[**[**Log Work and Travel Time on a Job**](https://docs.zuper.co/Timesheets_Management/Timelogs/Log_time)**]**.
2. Looking to view time logs for all users or technicians who worked on a job? Refer to our guide: **\[**[**Managing Job Timelogs**](https://docs.zuper.co/Work_Order_Management/Jobs/Manage_timelog_summary)**]**.

## FAQs

1. **What is the Timelog Summary feature in Zuper?** 

The Timelog Summary feature offers a centralized view of all technician time entries across jobs, projects, and dates. It helps you track time spent on Travel, Labour, and Break activities without switching between individual jobs. 

2. **Is the Timelog Summary feature priced separately?** 

No, the Timelog Summary feature is included in all Zuper subscription plans at no additional cost. 

3. **Where can I access the Timelog Summary in the Zuper web app?** 

You can access it by navigating to the “**Time**” module in the left navigation menu and selecting “**Timelog Summary**.” This will display a consolidated table view of all technician time entries based on the selected date range. 

4. **What if the same technician works on two different jobs—how will their time be recorded in the Timelog Summary?** 

If a technician works on multiple jobs in a day, each job’s travel, labour, and break time will be logged separately. 

In the Timelog Summary, the technician’s total time will reflect the **combined** **hours** logged across all jobs for the selected date range. You can hover over the total time to see a **breakdown by category** (Travel, Labour, Break). 

To view the time spent on each individual job: 

* Click the technician’s name from the Timelog Summary to open their **detailed timelog page**. 
* Use the "**Group by Jobs**" view to see how their hours are distributed across each job, with full details for start time, end time, duration, and activity type. 

This ensures complete visibility into the technician’s productivity and time allocation across multiple assignments. 

5. **Can I add timelog entries for technicians?** 

Yes, as an **Admin** or **Team Lead**, you can manually add timelog entries for technicians from the **Zuper web app**. 

This is especially helpful when: 

* A technician forgets to log time using the mobile app. 
* You need to record work done outside of standard logging hours. 
* You're correcting or updating previously missed entries. 

**To add a timelog entry:** 

1. Navigate to the **time** module and select **Timelog Summary**. 
2. Click on the technician’s name to open their **Detailed Timelog** page. 
3. Click the **“+ Add Entry**” button at the top right of the detailed view page. 
4. Choose the appropriate job or project to link the entry with.
5. Select the clock-in and clock-out date & time. 
6. Select the Timelog Type (Travel, Labour, or Break). 
7. Click “**Create**” to save the entry. 

The new entry will now appear in both the Timelog Summary and the detailed breakdown. 

6. **How do I add missed timelog entries?** 

You can easily add missed timelog entries for field technicians using the **Zuper web app**. 

This is useful when: 

* The technician forgot to clock in/out. 
* An entry wasn’t captured due to connectivity or device issues. 
* You need to maintain accurate records for reporting or payroll. 

**To add a missed timelog entry:**  

1. Navigate to the **time** module > **Timelog Summary**. 
2. Click the technician’s name to open their **Detailed Timelog** page. 
3. Under the relevant job/date, click **“+ Add Entry”** below the existing entry. 
4. The date and job/project will be auto-filled. 
5. Select the **Timelog Type** (Travel, Labour, or Break), and enter the **clock-in** and **clock-out time**. 
6. Click **“Create”** to save the missed entry. 

The missed entry will be inserted below the existing one and included in the technician’s total logged hours. 

7. **Can I edit or delete existing entries?** 

Yes, depending on the user permissions, you'll be able to edit or delete individual time log entries directly from the detailed time log page.  

On the user's timelog entry detailed view page, click the kebab menu (<Icon icon="ellipsis-vertical" color="#010101" />) next to any entry, then choose: 

* **Edit Entries** to update the date and time.
* **Delete** to remove the entry permanently. 

8. **What are the different timelog types, and what do they mean?**  

* **Travel (Orange)** – Time spent commuting between locations. 
* **Labour (Blue)** – Time actively working on jobs/projects. 
* **Break (Purple)** – Non-working time, like lunch or rest.  

These are color-coded for easy identification. 


## Related topics

- [Log work and travel time on the Job](/Timesheets_Management/Timelogs/Log_time.md)
- [Quickstart Guide](/Zuper_Mobile_Apps/Quickstart-guide-for-FE.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.