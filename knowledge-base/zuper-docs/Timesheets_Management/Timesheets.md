---
title: "Timesheets"
source: https://docs.zuper.co/Timesheets_Management/Timesheets.md
fetched_at: 2026-10-06T13:29:53.929Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Timesheets

The timesheets module in Zuper is designed to help track and manage field technicians' work hours accurately and efficiently. This allows you to confirm when a technician reached the location and whether they navigated to the correct place.

The admins can create manual time entries, export timesheet reports, and manage approvals, locations, enrolments, and more within the timesheet module.

## Creating manual time entry

<Frame>
  **Navigation:** *Timesheet* --> *+ New Entry*
</Frame>

To create a manual time entry, follow these steps:

1. Select the "**Timesheet**" module from the left navigation menu and choose "**Timesheets**."

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS1.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=30f385a77d095c32676676b01e9f27aa" alt="TS1 Jp" width="1902" height="825" data-path="images/TS1.jpg" />

2. By default, the list view displays attendance details for all field technicians, including the authentication picture and activity location, based on the selected date on the left.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS2.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=feb2a339b67eda91e51b43d6433d2756" alt="TS2 Jp" width="1917" height="826" data-path="images/TS2.jpg" />

3. Alternatively, you can switch to the summary view, which allows you to view attendance details for the selected team's users for up to seven days, as shown below:

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS3.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=bd25b6e311a0f99ccdc4615c30b3c836" alt="TS3 Jp" width="1917" height="1652" data-path="images/TS3.jpg" />

4. However, to create a manual timesheet entry, return to the list view and click the "**+ New Entry**" button on the top right. A dialog box appears to create a new timesheet.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS4.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=a46aa0833e693a8cda6957ed18ad3841" alt="TS4 Jp" width="1917" height="826" data-path="images/TS4.jpg" />

Fill in the following details in the pop-up and click "**Create**."

* **Type of Entry**(*Mandatory*): Select the appropriate type of entry (Punch In, Take Break, Resume Work, Punch Out).
* **Location**(*Mandatory*): Choose the predefined location from Zuper.
* **Date:** Pick the Date using the date picker.
* **Time:** Specify the time for the entry.
* **Assign Users**(*Mandatory*): Select the field technician to add the entry.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS5.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=70fd3eccec7fe6782e7439ab1a5546d7" alt="TS5 Jp" width="1917" height="826" data-path="images/TS5.jpg" />

5. The timesheet is successfully created for the user(s).

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS6.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=f4b77e443738f29f8a3abe9ab86cf748" alt="TS6 Jp" width="1917" height="834" data-path="images/TS6.jpg" />

5. After creating the timesheets, you can view details and edit or delete them. To do so, click the "**Ellipsis**" icon under Actions and choose "**View Details**," "**Edit Timesheet**," or "**Delete Timesheet**" as needed.

<Note>
  Note: When you edit the user's timesheet, you can only update the date and time of entry as shown below.
</Note>

## Quick comparison

| | **Punch In / Punch Out** | **Clock In / Clock Out** |
| :- | :- | :- |
| **What it tracks** | Shift attendance — start and end of the workday | Job-level travel time and on-site labor |
| **Module** | Timesheets module (web + mobile home screen) | Timelogs on Job (mobile job details page) |
| **Scope** | Full day / shift | Per job |
| **Includes breaks?** | Yes — Take Break / Resume Work | Yes — Meal Break, Material Needed, Others |
| **Travel time?** | No | Yes — On My Way → Stop Travel (standard app only, not Zuper Pro) |
| **Admin access?** | Only if Timesheet access is enabled in role settings | Available to all assigned technicians |

## Exporting timesheet reports

<Frame>
  **Navigation:** *Timesheets* --> *Export*
</Frame>

You can preview and download the timesheet master report as an Excel file.

1. Click the "**Export**" button at the top right. You will be redirected to the reports page.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS9.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=5b3944220d2f440b0b38538d92b35472" alt="TS9 Jp" width="1917" height="826" data-path="images/TS9.jpg" />

2. Use the date picker to select the preferred start and end dates and, if necessary, use the "**Advanced Filter**" option to filter specific entries based on type, team, and location.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS10.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=bbc2aa9c5ba4cc406221278b85dfd152" alt="TS10 Jp" width="1917" height="826" data-path="images/TS10.jpg" />

3. Once you have set the preferred date range and applied filters, click "**Generate Report**." A preview of the report will be generated on the right.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS11.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=38ca421b9877af88b5be9f5533bb1544" alt="TS11 Jp" width="1917" height="826" data-path="images/TS11.jpg" />

4. Click "**Download Report**" at the top right of the preview. The report will be exported successfully to your computer as an Excel file.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS12.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=3cf8608b51aef53927c380eecd0e973a" alt="TS12 Jp" width="1917" height="826" data-path="images/TS12.jpg" />

## Manage timesheet approvals

<Frame>
  **Navigation:** *Timesheets*--> *More Actions*--> Timesheet Approval
</Frame>

Timesheet approval in the timesheets module allows you to review and either approve or reject timesheet approval requests submitted by the user(s). Additionally, you can create a new timesheet directly from here.

### View timesheet approval request

To view and approve/reject timesheet approval requests submitted by the user(s), follow these steps:

1. Select "**Timesheets Approval**" under More Actions in the Timesheets module.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS13.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=a23af703bac7d43457e5061ae9843603" alt="TS13 Jp" width="1917" height="826" data-path="images/TS13.jpg" />

2. You can view the timesheet approval request submitted by a user(s), which includes details such as *approval period, total work hours, total break hours, current status*, and more.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS14.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=d66c95d579eefef5e3d73a99af8b73e6" alt="TS14 Jp" width="1917" height="826" data-path="images/TS14.jpg" />

3. To approve or reject the pending timesheet request submitted by the user, click the "**Ellipsis**" icon under Actions and select "**View Details**."

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS15.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=1c65ab606d03b24fbae9b1b23215372c" alt="TS15 Jp" width="1917" height="826" data-path="images/TS15.jpg" />

You can view the detailed information, including:

* **Total Work Hours:** The total time worked by a user.
* **Shift Hours:** The duration of the assigned shift.
* **Work Hours:** The actual working time of an employee.
* **Total Break Hours:** The cumulative duration of breaks taken.
* **Overtime Hours:** The additional working time beyond regular hours.
* **Time Off Hours:** The duration of time taken off from work.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS16.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=90a5964e4f5f83caab16ee15fad4afc6" alt="TS16 Jp" width="1917" height="826" data-path="images/TS16.jpg" />

Based on this information, you can either approve or reject the timesheet approval request submitted by the user.

<Note>
  **Note:** The total work hours are calculated using the **Work Hours + Overtime Hours summation**.
</Note>

## Pinned filters

Zuper's Timesheets module lets you use pinned filters to streamline your filter experience. Pinned filters keep your most-used criteria readily accessible for quick application.

Pin up to 3 filters in any module.

<Frame>
  Navigation: *Timesheets --> Filters -->Pinned Filter*
</Frame>

1. Select the “**Timesheets**” module from the left navigation menu.

<Frame>
  <img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-ts.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=16c59902072459387224544d86512277" alt="Pin Ts" width="1920" height="878" data-path="images/pin-ts.png" />
</Frame>

2. **Pin Filters for Quick Access**
   * Once your filters are set, click the **Pin Filters** button in the dialog box to save them as pinned.
   * Pinned filters appear in the dialog box's "**Pinned Filters**" section, allowing you to apply them with one click in future sessions.

<Frame>
  <img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-ts2.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=d839a95db6679976bb2d24abf8b3a792" alt="Pin Ts2" width="1920" height="878" data-path="images/pin-ts2.png" />
</Frame>

3. To **Unpin** the filter:

* To unpin, select a pinned filter and click **Remove**.
* To apply pinned or default filters, open the dialog box and select them.
* Use **Clear All** to remove active filters.

<Frame>
  <img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-ts3.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=c3865867fb2e61e9b29fa1cb392d65fc" alt="Pin Ts3" width="1920" height="878" data-path="images/pin-ts3.png" />
</Frame>

## Create new timesheets for approval

To create a new timesheet approval, follow these steps:

1. Select "**Timesheet Approval**" under More Actions on the Timesheet listing page.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS17.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=6e4d9eed30748aa1d74ae30fb6dcccfb" alt="TS17 Jp" width="1917" height="826" data-path="images/TS17.jpg" />

2. You can view the timesheet approval request submitted by the user(s), which includes details such as *approval period, total work hours, total break hours, current status*, and more.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS18.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=0fe3c55e6d7dede171d0e0f091589957" alt="TS18 Jp" width="1917" height="826" data-path="images/TS18.jpg" />

3. Click "**+ New Timesheet Approval**" at the top right corner to create a new timesheet approval. A small dialog box appears.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS19.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=0351d87a5231e076cccb516da6dd49a1" alt="TS19 Jp" width="1917" height="826" data-path="images/TS19.jpg" />

In the pop-up, enter the following details and click "**Create**" to submit a new timesheet approval.

* **From Date**\*: Select the start date for the timesheet.
* **To Date\***: Choose the end date for the timesheet.
* **Choose a team\***: Select the team to which the user belongs.
* **Choose user\***: Based on the selected team, choose the user whose timesheet requires approval.
* **Remarks\***: Add remarks related to the timesheet approval.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS20.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=bc12b4d4554dbf4d67a82faf67413234" alt="TS20 Jp" width="1917" height="826" data-path="images/TS20.jpg" />

### Manage locations

<Frame>
  **Navigation:** *Timesheets* --> *More Actions*--> *Manage Locations*
</Frame>

Manage Locations in the Timesheets module allows you to view existing and create new locations where employees can record their work hours or activities.

1. Select "**Manage Locations**" under More Actions on the Timesheets listing page.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS21.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=bc603470e566e4f789b4205278e2ded9" alt="TS21 Jp" width="1917" height="826" data-path="images/TS21.jpg" />

2. The Locations listing page shows the *location names, radius in miles, location*, and more.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS22.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=7e21e12775381cabcd8282dab15ffad4" alt="TS22 Jp" width="1917" height="826" data-path="images/TS22.jpg" />

3. To create a new location, click "**+ New Location**" at the top right corner of the page. A dialog box appears.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS23.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=75d5ffb6af97ca78970757b2183f6baa" alt="TS23 Jp" width="1917" height="826" data-path="images/TS23.jpg" />

4. Enter the following details in the pop-up and click the "**Save Location**" button to add a new location.

* **Location Name**\*: Enter the location name.
* **Location Geo-Fence Radius (in miles)**\*: The exact geo-fence radius of the location.
* **Address\***: Enter the address details.
* **Location\***: Use this option to pick the area from the map.

<Info>
  \* represents the mandatory fields.
</Info>

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS24.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=3c41b3607b372c039f1e39527782b695" alt="TS24 Jp" width="1917" height="826" data-path="images/TS24.jpg" />

Once the location has been created, you can edit or delete it. To do so, click the "**ellipsis**" icon under Actions and choose "**Edit Location**" or "**Delete Location**" as needed.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS25.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=df265213dc550fd558ebcf70fa6fa857" alt="TS25 Jp" width="1917" height="826" data-path="images/TS25.jpg" />

### Manage enrollments - Facial Authentication

Managing enrollments in the timesheet module lets you view existing enrollments and create new ones for the user. Based on this enrollments, the facial authentication (Bio Metric) will work for punch-in or punch-out, break, or resume. Even a user status update using facial authentication works based on this (if [facial authentication](https://docs.zuper.co/Settings/Modules/Timesheets/Timesheets_Settings#timesheet-settings) option is enabled in settings).

<Frame>
  **Navigation**: *Timesheet* --> *More Actions* --> *Manage Enrollments*
</Frame>

1. Select "**Manage Enrollments**" under More Actions on the Timesheets listing page.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS26.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=e8f2661cd63e0388efdc0b5dccf35404" alt="TS26 Jp" width="1917" height="826" data-path="images/TS26.jpg" />

2. You can view the *user's name, work phone number, number of enrollments attached*, and more.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS27.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=64acdc8a893a07c9c89686b54e41056a" alt="TS27 Jp" width="1917" height="826" data-path="images/TS27.jpg" />

3. To view the enrollments attached to the user, click the "**Ellipsis**" icon under Actions and choose "**View Enrollments**."

<Frame>
  <img src="https://mintcdn.com/zuperinc/qTw5GGtJaaEi6PU_/images/ts_en.png?fit=max&auto=format&n=qTw5GGtJaaEi6PU_&q=85&s=a03b4a66debddd6b7e9dfd4bbc9317d7" alt="Ts En" width="1903" height="862" data-path="images/ts_en.png" />
</Frame>

3. To upload a new enrollment to the user, click the "**Ellipsis**" icon under Actions and choose "**+ New Enrollment**."

<Note>
  **Note:** You can only attach one image with a maximum file size of 20 MB
</Note>

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS29.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=89271e81248ce18bb1f2083a93007be2" alt="TS29 Jp" width="1917" height="1652" data-path="images/TS29.jpg" />

## Quick Actions

From the Timesheets listing page, you can also perform quick actions such as *viewing defaulters, applying filters, searching for users*, and more.

## View defaulters

The defaulters are the users who have failed to submit their timesheets or have discrepancies in their recorded working hours compared to the expected or required hours. To view the defaulters, follow these steps:

1. Click the "**Timesheets**" module from the left navigation menu and select "**Timesheets**."

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS30.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=7759b7c1bff1c1b228a0ff19d6f09d1f" alt="TS30 Jp" width="1902" height="825" data-path="images/TS30.jpg" />

2. By default, the list view displays attendance details of all users, including the authentication picture and the location where the activity was conducted, based on the selected date on the left.

<img src="https://mintcdn.com/zuperinc/Zk6TRRZZ87fvVXIt/images/TS31.jpg?fit=max&auto=format&n=Zk6TRRZZ87fvVXIt&q=85&s=f351da7041a8655f8009b0f552de2c4e" alt="TS31 Jp" width="1917" height="826" data-path="images/TS31.jpg" />

To view defaulters, click the **'Defaulters**' button at the top right for the selected date.

<Frame>
  <img src="https://mintcdn.com/zuperinc/QIdOlpninyKIFRK5/images/Defts1.png?fit=max&auto=format&n=QIdOlpninyKIFRK5&q=85&s=770f6aea1292a25a3126b5d0d219a400" alt="Defts1" width="1920" height="878" data-path="images/Defts1.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/QIdOlpninyKIFRK5/images/Defts2.png?fit=max&auto=format&n=QIdOlpninyKIFRK5&q=85&s=aa5d4e14a173204f3748f97704263955" alt="Defts2" width="1920" height="878" data-path="images/Defts2.png" />
</Frame>

The timesheet feature reduces administrative overhead and minimizes errors. This tool also allows for better resource planning and helps ensure compliance with labor regulations. Overall, Timesheets in Zuper enhance operational efficiency and provide valuable insights into workforce management.


## Related topics

- [Configuring Timesheets](/Settings/Modules/Timesheets/Timesheets_Settings.md)
- [Overview](/Reports/Overview.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.